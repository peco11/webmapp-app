import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {MapModule} from '../map/map.module';
import {ModalSuccessComponent} from './modal-success.component';
import {NgModule} from '@angular/core';
import {WmPipeModule} from 'src/app/shared/wm-core/pipes/pipe.module';
import {SharedModule} from '../shared/shared.module';
@NgModule({
  declarations: [ModalSuccessComponent],
  imports: [CommonModule, IonicModule, WmPipeModule, SharedModule, MapModule],
  exports: [ModalSuccessComponent],
})
export class ModalSuccessModule {}
