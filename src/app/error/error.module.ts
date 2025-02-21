import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputErrorComponent } from './components/input-error/input-error.component';
import { ErrorMessagePipe } from './pipes/error-message.pipe';



@NgModule({
  declarations: [
    InputErrorComponent,
    ErrorMessagePipe
  ],
  imports: [
    CommonModule
  ],
  exports:[InputErrorComponent]
})
export class ErrorModule { }
