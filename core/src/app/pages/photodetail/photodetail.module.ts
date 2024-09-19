import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {PhotodetailPage} from './photodetail.page';
import {PhotodetailPageRoutingModule} from './photodetail-routing.module';
import {WmPipeModule} from 'wm-core/pipes/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhotodetailPageRoutingModule,
    WmPipeModule,
  ],
  declarations: [PhotodetailPage],
})
export class PhotodetailPageModule {}
