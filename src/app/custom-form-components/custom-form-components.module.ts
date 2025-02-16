import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingPickerComponent } from './rating-picker/rating-picker.component';
import { AddressComponent } from './address/address.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialComponentsModule } from '../material-components/material-components.module';



@NgModule({
  declarations: [
    RatingPickerComponent,
    AddressComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialComponentsModule
  ],
  exports:[RatingPickerComponent,AddressComponent]
})
export class CustomFormComponentsModule { }
