import {NavController, Platform} from '@ionic/angular';

import {CGeojsonLineStringFeature} from './classes/features/cgeojson-line-string-feature';
import {Component} from '@angular/core';
import {DEF_MAP_LOCATION_ZOOM} from './constants/map';
import {DownloadService} from './services/download.service';
import {GEOHUB_SAVING_TRY_INTERVAL} from './constants/geohub';
import {GoogleAnalytics} from '@ionic-native/google-analytics/ngx';
import {IConfRootState} from './store/conf/conf.reducer';
import {IElasticAllRootState} from './store/elastic/elastic.reducer';
import {ILocation} from './types/location';
import {IMapRootState} from './store/map/map';
import {INetworkRootState} from './store/network/netwotk.reducer';
import {LanguagesService} from './services/languages.service';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {SaveService} from './services/save.service';
import {SplashScreen} from '@capacitor/splash-screen';
import {StatusService} from './services/status.service';
import {Store} from '@ngrx/store';
import {allElastic} from './store/elastic/elastic.actions';
import {environment} from 'src/environments/environment';
import {filter} from 'rxjs/operators';
import {loadConf} from './store/conf/conf.actions';
import {mapCurrentTrack} from './store/map/map.selector';
import {startNetworkMonitoring} from './store/network/network.actions';

@Component({
  selector: 'webmapp-app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public showingPhotos = false;
  public image_gallery: any[];
  public photoIndex: number = 0;
  private _currentTrack$: Observable<CGeojsonLineStringFeature> =
    this._storeMap.select(mapCurrentTrack);

  constructor(
    private _languagesService: LanguagesService,
    private _platform: Platform,
    private _googleAnalytics: GoogleAnalytics,
    private _downloadService: DownloadService,
    private _navController: NavController,
    private router: Router,
    private status: StatusService,
    private saveService: SaveService,
    private _storeConf: Store<IConfRootState>,
    private _storeElasticAll: Store<IElasticAllRootState>,
    private _storeMap: Store<IMapRootState>,
    private _storeNetwork: Store<INetworkRootState>,
  ) {
    this._languagesService.initialize();
    this._storeConf.dispatch(loadConf());
    this._storeElasticAll.dispatch(allElastic());
    this._storeNetwork.dispatch(startNetworkMonitoring());

    this._platform.ready().then(
      () => {
        this.saveGeneratedContentsNowAndInterval();
        this.router.navigate(['home']);
        SplashScreen.hide();
      },
      err => {
        SplashScreen.hide();
      },
    );
    this._currentTrack$.pipe(filter(t => t != null)).subscribe(_ => {
      this._navController.navigateForward('itinerary');
    });
    this._downloadService.init();

    this._googleAnalytics
      .startTrackerWithId(environment.analyticsId)
      .then(() => {
        console.log('Google analytics is ready now');
        this._googleAnalytics.trackView('test');
        // Tracker is ready
        // You can now track pages or set additional information such as AppVersion or UserId
      })
      .catch(e => console.log('Error starting GoogleAnalytics', e));

    this.status.showPhotos.subscribe(x => {
      this.showingPhotos = x.showingPhotos;
      this.image_gallery = x.image_gallery;
      this.photoIndex = x.photoIndex;
    });
  }

  closePhoto() {
    this.showingPhotos = false;
  }

  recordingClick(ev) {}
  isRecording() {}
  recBtnPosition() {
    const tree = this.router.parseUrl(this.router.url);
    if (tree?.root?.children && tree.root.children['primary']) {
      const url = tree.root.children['primary'].segments[0].path;
      switch (url) {
        case 'register':
          return 'none';
        case 'route':
          if (this.status.showingRouteDetails) {
            return 'high';
          }
          return 'middle';
        case 'map':
          if (this.status.showingMapResults) {
            return 'middlehigh';
          }
          return 'low';
      }
    }
    return 'low';
  }

  saveGeneratedContentsNowAndInterval() {
    setInterval(() => {
      this.saveService.uploadUnsavedContents();
    }, GEOHUB_SAVING_TRY_INTERVAL);
    setTimeout(() => {
      this.saveService.uploadUnsavedContents();
    }, 2000);
  }
}
