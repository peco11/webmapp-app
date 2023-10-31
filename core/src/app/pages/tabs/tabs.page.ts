import {AuthService} from 'src/app/services/auth.service';
import {ChangeDetectionStrategy, Component, ViewChild, ViewEncapsulation} from '@angular/core';
import {INetworkRootState} from 'src/app/store/network/netwotk.reducer';
import {Observable} from 'rxjs';
import {StatusService} from 'src/app/services/status.service';
import {Store} from '@ngrx/store';
import {online} from 'src/app/store/network/network.selector';
import {IMapRootState} from 'src/app/store/map/map';
import {goToHome} from 'src/app/store/map/map.actions';
import {IonTabs} from '@ionic/angular';
import {confAUTHEnable} from 'wm-core/store/conf/conf.selector';

@Component({
  selector: 'webmapp-page-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsPage {
  @ViewChild('tabs', {static: false}) tabs: IonTabs;

  authEnable$: Observable<boolean> = this._store.select(confAUTHEnable);
  currentTab = 'home';
  isLoggedIn$: Observable<boolean>;
  online$: Observable<boolean> = this._storeNetwork.select(online);

  constructor(
    private _statusService: StatusService,
    private _store: Store<any>,
    private _storeMap: Store<IMapRootState>,
    private _storeNetwork: Store<INetworkRootState>,
    private _authSvc: AuthService,
  ) {
    this.isLoggedIn$ = this._authSvc.isLoggedIn$;
  }

  isBarHidden(): boolean {
    return this._statusService.isSelectedMapTrack;
  }

  setCurrentTab(): void {
    const tab = this.tabs.getSelected();
    if (this.currentTab === 'home' && tab === 'home') {
      this._storeMap.dispatch(goToHome());
    }
    this.currentTab = tab;
  }
}
