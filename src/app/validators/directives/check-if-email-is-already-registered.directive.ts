import { ChangeDetectorRef, Directive } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  NG_ASYNC_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { catchError, finalize, map, Observable, of } from 'rxjs';
import { UserService } from '../services/user.service';

@Directive({
  selector: '[checkIfEmailIsAlreadyRegistered]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      multi: true,
      useExisting: CheckIfEmailIsAlreadyRegisteredDirective,
    },
  ],
})
export class CheckIfEmailIsAlreadyRegisteredDirective
  implements AsyncValidator
{
  constructor(
    private userService: UserService,
    private cd: ChangeDetectorRef
  ) {}
  validate(
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const value = control.value;
    if (value) {
      console.log(value);
      return this.userService.checkIfItsAlreadyRegistered(value).pipe(
        map((isRegistered) => {
          return isRegistered ? { emailAlreadyRegistered: true } :  null;
        }),
        catchError(()=>of(null)),
        finalize(() => this.cd.markForCheck())
      );
    }
    return of(null);
  }
}
