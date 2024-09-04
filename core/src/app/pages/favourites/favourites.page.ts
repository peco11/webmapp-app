import {Component, OnInit, ViewChild} from '@angular/core';
import {IonInfiniteScroll} from '@ionic/angular';

import {GeohubService} from 'src/app/services/geohub.service';
import {IGeojsonFeature} from 'src/app/types/model';
import {NavigationExtras, Router} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';
import { select, Store } from '@ngrx/store';
import { isLogged } from 'wm-core/store/auth/auth.selectors';

@Component({
  selector: 'webmapp-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage implements OnInit {
  private page: number = 0;

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  isLogged$: Observable<boolean> = this._store.pipe(select(isLogged));
  tracks$: BehaviorSubject<IGeojsonFeature[]> = new BehaviorSubject<IGeojsonFeature[]>(null);

  constructor(
    private _geoHubService: GeohubService,
    private _router: Router,
    private _store: Store
  ) {}

  async doRefresh(event) {
    this.page = 0;
    this.tracks$.next(await this._geoHubService.getFavouriteTracks());
    if (event) {
      event.target.complete();
    }
  }

  async ionViewDidEnter() {
    this.doRefresh(null);
  }

  async loadData(event) {
    this.tracks$.next([
      ...this.tracks$.value,
      ...(await this._geoHubService.getFavouriteTracks(++this.page)),
    ]);

    event.target.complete();
  }

  async ngOnInit() {
    this.doRefresh(null);
  }

  open(track: IGeojsonFeature) {
    const clickedFeatureId = track.properties.id;
    if (clickedFeatureId != null) {
      let navigationExtras: NavigationExtras = {
        queryParams: {
          track: clickedFeatureId,
        },
      };
      this._router.navigate(['map'], navigationExtras);
    }
  }

  async remove(track: IGeojsonFeature) {
    await this._geoHubService.setFavouriteTrack(track.properties.id, false);
    const idx = this.tracks$.value.findIndex(x => x.properties.id == track.properties.id);
    const currentTracks = this.tracks$.value;
    currentTracks.splice(idx, 1);
    this.tracks$.next([...currentTracks]);
  }
}
