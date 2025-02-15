import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditableContentValueAccessorDirective } from './editable-content-value-accessor.directive';



@NgModule({
  declarations: [EditableContentValueAccessorDirective],
  imports: [
    CommonModule
  ],
  exports:[EditableContentValueAccessorDirective]
})
export class DirectivesModule { }
