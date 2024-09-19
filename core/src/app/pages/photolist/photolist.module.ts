import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {PhotolistPage} from './photolist.page';
import {PhotolistPageRoutingModule} from './photolist-routing.module';
import {WmPipeModule} from 'wm-core/pipes/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhotolistPageRoutingModule,
    WmPipeModule,
  ],
  declarations: [PhotolistPage],
})
export class PhotolistPageModule {}
