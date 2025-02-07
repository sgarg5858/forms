import { Directive } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[passwordShouldMatch]',
  providers: [
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: PasswordShouldMatchDirective,
    },
  ],
})
export class PasswordShouldMatchDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    if (control instanceof FormGroup) {
      const passwordCtrl = control.get('password');
      const confirmPasswordCtrl = control.get('confirmPassword');
      console.log(passwordCtrl, confirmPasswordCtrl);
      if (
        passwordCtrl &&
        passwordCtrl.value &&
        confirmPasswordCtrl &&
        confirmPasswordCtrl.value
      ) {
        if (passwordCtrl.value === confirmPasswordCtrl.value) {
          return null;
        }
        confirmPasswordCtrl.setErrors({ passwordsDontMatch: true });
        return { passwordsDontMatch: true };
      }
      return null;
    } else {
      throw Error(
        'Please use passwordShouldMatch this directive on Control Container'
      );
    }
  }
}
