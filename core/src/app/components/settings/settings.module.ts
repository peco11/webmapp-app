import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {WmPipeModule} from '@wm-core/pipes/pipe.module';
import {RouterModule} from '@angular/router';
import {SettingsComponent} from './settings.component';
import {SharedModule} from '../shared/shared.module';
import {WmLocalizationModule} from '@wm-core/localization/localization.module';
import {WmCoreModule} from '@wm-core/wm-core.module';

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    RouterModule,
    CommonModule,
    IonicModule,
    WmPipeModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    WmLocalizationModule,
    WmCoreModule,
  ],
  exports: [SettingsComponent],
})
export class SettingsModule {}
