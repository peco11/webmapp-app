import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {DownloadlistPageRoutingModule} from './downloadlist-routing.module';

import {DownloadlistPage} from './downloadlist.page';
import {WmPipeModule} from 'wm-core/pipes/pipe.module';
import {CardsModule} from 'src/app/components/cards/cards.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DownloadlistPageRoutingModule,
    WmPipeModule,
    CardsModule,
  ],
  declarations: [DownloadlistPage],
})
export class DownloadlistPageModule {}
