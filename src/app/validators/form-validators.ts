import { AbstractControl, FormGroup } from '@angular/forms';

export class FormValidators {
  static passwordShouldMatch(control: AbstractControl) {
    return passwordShouldMatch(control);
  }
}

export function passwordShouldMatch(control: AbstractControl) {
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
