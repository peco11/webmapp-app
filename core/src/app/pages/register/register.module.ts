import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {ModalSaveComponent} from './modal-save/modal-save.component';
import {ModalSelectphotosComponent} from './modal-selectphotos/modal-selectphotos.component';
import {ModalSuccessModule} from 'src/app/components/modal-success/modal-success.module';
import {NgModule} from '@angular/core';
import {RegisterPage} from './register.page';
import {RegisterPageRoutingModule} from './register-routing.module';
import {SharedModule} from 'src/app/components/shared/shared.module';
import {WmMapModule} from 'src/app/shared/map-core/src/map-core.module';
import {ControlsMdule} from 'src/app/components/controls/controls.module';
import {WmPipeModule} from 'wm-core/pipes/pipe.module';
import { WmCoreModule } from 'wm-core/wm-core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WmPipeModule,
    RegisterPageRoutingModule,
    ControlsMdule,
    WmMapModule,
    ModalSuccessModule,
    SharedModule,
    WmCoreModule
  ],
  declarations: [RegisterPage, ModalSaveComponent, ModalSelectphotosComponent],
})
export class RegisterPageModule {}
