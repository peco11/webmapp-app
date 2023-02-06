import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';

import {ButtonsModule} from 'src/app/components/shared/buttons/buttons.module';
import {SharedModule} from 'src/app/components/shared/shared.module';
import {WmPipeModule} from 'src/app/shared/wm-core/pipes/pipe.module';
import {WmMapModule} from 'src/app/shared/map-core/map-core.module';
import {RegisterPageModule} from '../register/register.module';
import {MapPageRoutingModule} from './map-routing.module';
import {MapTrackCardComponent} from './map-track-card/map-track-card.component';
import {MapPage} from './map.page';
import {MapTrackDetailsComponent} from './map-track-details/map-track-details.component';
import {PoiPropetiesModule} from 'src/app/components/poi-properties/poi-properties.module';
import {TrackPropetiesModule} from 'src/app/components/track-properties/track-properties.module';
import {WmDownloadPanelComponent} from './download-panel/download-panel.component';
import {WmDownloadComponent} from './download/download.component';
import {WmCoreModule} from 'src/app/shared/wm-core/wm-core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapPageRoutingModule,
    WmPipeModule,
    SharedModule,
    WmMapModule,
    ButtonsModule,
    RegisterPageModule,
    PoiPropetiesModule,
    TrackPropetiesModule,
    WmCoreModule,
  ],
  declarations: [
    MapPage,
    MapTrackCardComponent,
    MapTrackDetailsComponent,
    WmDownloadComponent,
    WmDownloadPanelComponent,
  ],
})
export class MapPageModule {}
