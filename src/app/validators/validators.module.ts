import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannedWordsDirective } from './directives/banned-words.directive';
import { PasswordShouldMatchDirective } from './directives/password-should-match.directive';
import { CheckIfEmailIsAlreadyRegisteredDirective } from './directives/check-if-email-is-already-registered.directive';



@NgModule({
  declarations: [
    BannedWordsDirective,
    PasswordShouldMatchDirective,
    CheckIfEmailIsAlreadyRegisteredDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[BannedWordsDirective,PasswordShouldMatchDirective,CheckIfEmailIsAlreadyRegisteredDirective]
})
export class ValidatorsModule { }
