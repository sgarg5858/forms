import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingPickerComponent } from './rating-picker/rating-picker.component';



@NgModule({
  declarations: [
    RatingPickerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[RatingPickerComponent]
})
export class CustomFormComponentsModule { }
