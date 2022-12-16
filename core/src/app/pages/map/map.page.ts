import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  ViewEncapsulation,
  OnDestroy,
  EventEmitter,
} from '@angular/core';
import {IonSlides} from '@ionic/angular';
import {BehaviorSubject, Observable} from 'rxjs';
import {filter, map, tap, withLatestFrom, switchMap, startWith} from 'rxjs/operators';

import {confGeohubId, confMAP, confPOIS, confPOISFilter} from 'src/app/store/conf/conf.selector';
import {openDetails, setCurrentFilters, setCurrentTrackId} from 'src/app/store/map/map.actions';
import {
  currentFilters,
  currentPoiID,
  mapCurrentLayer,
  mapCurrentTrack,
  padding,
} from 'src/app/store/map/map.selector';
import {loadPois} from 'src/app/store/pois/pois.actions';
import {beforeInit, setTransition, setTranslate} from '../poi/utils';

import {Browser} from '@capacitor/browser';
import {Store} from '@ngrx/store';
import {AuthService} from 'src/app/services/auth.service';
import {DeviceService} from 'src/app/services/base/device.service';
import {fromHEXToColor, Log} from 'src/app/shared/map-core/utils';
import {pois} from 'src/app/store/pois/pois.selector';
import {BackgroundGeolocation} from '@awesome-cordova-plugins/background-geolocation/ngx';
import {GeolocationPage} from '../abstract/geolocation';
import {CGeojsonLineStringFeature} from 'src/app/classes/features/cgeojson-line-string-feature';
import {GeohubService} from 'src/app/services/geohub.service';
import {MapTrackDetailsComponent} from './map-track-details/map-track-details.component';
export interface IDATALAYER {
  high: string;
  low: string;
}
@Component({
  selector: 'webmapp-map-page',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class MapPage extends GeolocationPage implements OnDestroy {
  readonly trackid$: BehaviorSubject<number> = new BehaviorSubject<number>(null);

  @ViewChild(MapTrackDetailsComponent) mapTrackDetailsCmp: MapTrackDetailsComponent;
  @ViewChild('gallery') slider: IonSlides;

  confMap$: Observable<any> = this._store.select(confMAP).pipe(
    tap(c => {
      if (c != null && c.pois != null && c.pois.apppoisApiLayer == true) {
        this._store.dispatch(loadPois());
      }
      if (c != null && c.record_track_show) {
        this.isTrackRecordingEnable$.next(true);
      }
    }),
  );
  confPOIS$: Observable<any> = this._store.select(confPOIS);
  confPOISFilter$: Observable<any> = this._store.select(confPOISFilter).pipe(
    map(p => {
      if (p.poi_type != null) {
        let poi_type = p.poi_type.map(p => {
          if (p.icon != null && p.color != null) {
            const namedPoiColor = fromHEXToColor[p.color] || 'darkorange';
            return {...p, ...{icon: p.icon.replaceAll('darkorange', namedPoiColor)}};
          }
          return p;
        });
        return {where: p.where, poi_type};
      }
      return p;
    }),
  );
  currentFilters$: Observable<string[]> = this._store.select(currentFilters);
  currentLayer$ = this._store.select(mapCurrentLayer);
  currentPoi$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  currentPoiID$: BehaviorSubject<number> = new BehaviorSubject<number>(-1);
  currentTrack$: Observable<CGeojsonLineStringFeature | null> = this.trackid$.pipe(
    switchMap(id => this._geohubSVC.getEcTrack(id)),
    startWith(null),
  );
  dataLayerUrls$: Observable<IDATALAYER>;
  enableOverLay$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  geohubId$ = this._store.select(confGeohubId);
  imagePoiToggle$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoggedIn$: Observable<boolean>;
  isTrackRecordingEnable$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  layerOpacity$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  padding$: Observable<number[]> = this._store.select(padding);
  poiIDs$: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);
  pois: any[];
  pois$: Observable<any> = this._store
    .select(pois)
    .pipe(tap(p => (this.pois = (p && p.features) ?? null)));
  resetEvt$: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  resetSelectedPoi$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  slideOptions = {
    on: {
      beforeInit,
      setTranslate,
      setTransition,
    },
  };
  public sliderOptions: any;

  constructor(
    private _store: Store,
    private _deviceService: DeviceService,
    private _authSvc: AuthService,
    private _geohubSVC: GeohubService,
    _backgroundGeolocation: BackgroundGeolocation,
  ) {
    super(_backgroundGeolocation);
    this.dataLayerUrls$ = this.geohubId$.pipe(
      filter(g => g != null),
      map(geohubId => {
        if (geohubId == 13) {
          this.enableOverLay$.next(true);
        }
        return {
          low: `https://jidotile.webmapp.it/?x={x}&y={y}&z={z}&index=geohub_app_low_${geohubId}`,
          high: `https://jidotile.webmapp.it/?x={x}&y={y}&z={z}&index=geohub_app_high_${geohubId}`,
        } as IDATALAYER;
      }),
    );
    this.sliderOptions = {
      initialSlide: 0,
      speed: 400,
      spaceBetween: 10,
      slidesOffsetAfter: 15,
      slidesOffsetBefore: 15,
      slidesPerView: this._deviceService.width / 235,
    };
    this.isLoggedIn$ = this._authSvc.isLoggedIn$;
    this._store
      .select(currentPoiID)
      .pipe(withLatestFrom(this.pois$))
      .subscribe(([id, pois]) => {
        if (id != null && pois != null) this.openPoi(id);
      });
  }

  email(_): void {}

  goToTrack(id: number) {
    this.resetPoi();
    this.trackid$.next(id);
    if (id != null && id !== -1) {
      this.layerOpacity$.next(true);
      this.mapTrackDetailsCmp.open();
    } else {
      this.layerOpacity$.next(false);
      this.mapTrackDetailsCmp.close();
    }
  }

  ionViewDidEnter() {
    this.resetEvt$.next(this.resetEvt$.value + 1);
  }

  ionViewWillLeave() {
    this.resetPoi();
    this.resetEvt$.next(this.resetEvt$.value + 1);
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  openPoi(poiID: Event | number) {
    this._store.dispatch(openDetails({openDetails: true}));
    this.currentPoiID$.next(+poiID);
    const currentPoi = this.pois.filter(p => +p.properties.id === poiID)[0] ?? null;
    this.currentPoi$.next(currentPoi);
  }

  phone(_): void {}

  resetPoi(): void {
    this.currentPoi$.next(null);
    this.resetSelectedPoi$.next(!this.resetSelectedPoi$.value);
  }

  setCurrentFilters(filters: string[]): void {
    this._store.dispatch(setCurrentFilters({currentFilters: filters}));
  }

  setPoi(poi: any): void {
    const oldID = this.currentPoi$.value?.properties?.id || -1;
    if (oldID != poi.properties.id) {
      this.currentPoi$.next(poi);
    }
  }

  showPhoto(idx) {
    this.imagePoiToggle$.next(true);
    setTimeout(() => {
      this.slider.slideTo(idx);
    }, 300);
  }

  async url(url) {
    await Browser.open({url});
  }
}
