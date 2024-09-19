import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {BtnFilterComponent} from './btn-filter/btn-filter.component';
import {CommonModule} from '@angular/common';
import {FormFieldComponent} from './form-field/form-field.component';
import {GalleryComponent} from './gallery/gallery.component';
import {ImageGalleryComponent} from './image-gallery/image-gallery.component';
import {IonicModule} from '@ionic/angular';
import {ModalImageComponent} from './image-gallery/modal-image/modal-image.component';
import {NgModule} from '@angular/core';
import {WmPipeModule} from 'wm-core/pipes/pipe.module';
import {RecordingBtnComponent} from './recording-btn/recording-btn.component';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {ButtonsModule} from './buttons/buttons.module';
import {WmSharedModule} from 'wm-core/shared/shared.module';
import {getFormFieldIcnPipe} from './pipes/get-form-field-icn.pipe';
import {getFormFieldValuePipe} from './pipes/get-form-field-value.pipe';
import {TabImageGalleryComponent} from './tab-image-gallery/tab-image-gallery.component';
import {SearchListComponent} from './search-list/search-list.component';
const components = [
  RecordingBtnComponent,
  GalleryComponent,
  FormFieldComponent,
  SearchBarComponent,
  BtnFilterComponent,
  ImageGalleryComponent,
  ModalImageComponent,
  getFormFieldIcnPipe,
  getFormFieldValuePipe,
  TabImageGalleryComponent,
  SearchListComponent,
];
@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    WmPipeModule,
    ButtonsModule,
    WmSharedModule,
  ],
  exports: [...components, ButtonsModule],
})
export class SharedModule {}
