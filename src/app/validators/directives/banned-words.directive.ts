import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[bannedWords]',
  providers: [
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: BannedWordsDirective,
    },
  ],
})
export class BannedWordsDirective implements Validator {
  _bannedWords: string[] = [];

  validate(control: AbstractControl): ValidationErrors | null {
    const isCurrentValueBanned = this._bannedWords.find(
      (bannedWord) => bannedWord.toLowerCase() === control.value
    );
    control.updateValueAndValidity
    return isCurrentValueBanned
      ? {
          bannedWords: `${isCurrentValueBanned} is not allowed`,
        }
      : null;
  }

  @Input() set bannedWords(words: string[]) {
    this._bannedWords = words;
    console.log(this.callbackFunctionToCallWhenInputChanges,"calling this function")
    this.callbackFunctionToCallWhenInputChanges();
  }

  callbackFunctionToCallWhenInputChanges = () => {};
  registerOnValidatorChange(fn: () => void): void {
    this.callbackFunctionToCallWhenInputChanges = fn;
  }
}
