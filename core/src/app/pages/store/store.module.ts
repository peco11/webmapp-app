import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {PipeModule} from 'src/app/shared/wm-core/pipes/pipe.module';
import {StorePage} from './store.page';
import {StorePageRoutingModule} from './store-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, StorePageRoutingModule, PipeModule],
  declarations: [StorePage],
})
export class StorePageModule {}
