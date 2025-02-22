import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputErrorComponent } from './components/input-error/input-error.component';
import { ErrorMessagePipe } from './pipes/error-message.pipe';
import { DynamicValidatorMessageDirective } from './dynamic-validator-message.directive';



@NgModule({
  declarations: [
    InputErrorComponent,
    ErrorMessagePipe,
    DynamicValidatorMessageDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[InputErrorComponent,DynamicValidatorMessageDirective]
})
export class ErrorModule { }
