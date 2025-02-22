import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormGroupDirective,
  NgForm,
} from '@angular/forms';


export interface ErrorStateMatcher {
  isErrorVisible(
    control: AbstractControl | null,
    form: NgForm | FormGroupDirective | null
  ): boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ErrorStateMatcher implements ErrorStateMatcher {
  constructor() {}
  isErrorVisible(
    control: AbstractControl | null,
    form: NgForm | FormGroupDirective | null
  ) {
    console.log(control,form,form?.submitted)
    return Boolean(
      control && control.invalid && (control.dirty || (form && form.submitted))
    );
  }
}

export class OnTouchedErrorStateMatcher implements ErrorStateMatcher{

  isErrorVisible(control:AbstractControl | null | undefined, form:FormGroupDirective | NgForm | null)
  {
    // Control is invalid, Touched or form is submitted
    return Boolean(control && control.invalid && (control.touched || form && form.submitted));

  }
}