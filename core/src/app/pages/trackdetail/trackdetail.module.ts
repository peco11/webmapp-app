import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {TrackdetailPage} from './trackdetail.page';
import {TrackdetailPageRoutingModule} from './trackdetail-routing.module';
import {WmMapModule} from 'src/app/shared/map-core/src/map-core.module';
import { WmCoreModule } from 'wm-core/wm-core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrackdetailPageRoutingModule,
    WmMapModule,
    WmCoreModule
  ],
  declarations: [TrackdetailPage],
})
export class TrackdetailPageModule {}
