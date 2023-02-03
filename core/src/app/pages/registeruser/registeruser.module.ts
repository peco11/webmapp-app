import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {RegisteruserPageRoutingModule} from './registeruser-routing.module';

import {RegisteruserPage} from './registeruser.page';
import {WmPipeModule} from 'src/app/shared/wm-core/pipes/pipe.module';
import {SharedModule} from 'src/app/components/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisteruserPageRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    WmPipeModule,
  ],
  declarations: [RegisteruserPage],
})
export class RegisteruserPageModule {}
