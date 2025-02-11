import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { passwordShouldMatch } from '../form-validators';

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
    return passwordShouldMatch(control);
  }
}
