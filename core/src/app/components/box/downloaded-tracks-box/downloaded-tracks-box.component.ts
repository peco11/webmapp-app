import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {NavController} from '@ionic/angular';
import {from, Observable} from 'rxjs';
import {DownloadService} from 'src/app/services/download.service';
import {map} from 'rxjs/operators';
import {NavigationExtras} from '@angular/router';
import {StorageService} from 'src/app/services/base/storage.service';
@Component({
  selector: 'downloaded-tracks-box',
  templateUrl: './downloaded-tracks-box.component.html',
  styleUrls: ['./downloaded-tracks-box.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DownloadedTracksBoxComponent {
  getStorageImage = (url: string) => {
    return this._storageSvc.getImage(url) as Promise<any>;
  };
  tracks$: Observable<IHIT[]>;

  constructor(
    private _navCtrl: NavController,
    private _downloadSvc: DownloadService,
    private _storageSvc: StorageService,
  ) {
    this.tracks$ = from(this._downloadSvc.getDownloadedTracks()).pipe(
      map(t => t.map(track => track.properties as unknown as IHIT)),
    );
  }

  open(id: number): void {
    if (id != null) {
      let navigationExtras: NavigationExtras = {
        queryParams: {
          track: id,
        },
        queryParamsHandling: 'merge',
      };
      this._navCtrl.navigateForward('map', navigationExtras);
    }
  }
}
