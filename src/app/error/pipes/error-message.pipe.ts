import { Pipe, PipeTransform, inject } from '@angular/core';
import { VALIDATION_ERROR_MESSAGES } from '../components/input-error/input-error-messages.token';

@Pipe({
  name: 'errorMessage',
  pure: true
})
export class ErrorMessagePipe implements PipeTransform {

  private errorMessages = inject(VALIDATION_ERROR_MESSAGES);

  transform(key: string, errValue: any): unknown {
    if(!this.errorMessages[key])
    {
      console.warn(`Missing message for ${key} validator`)
      return '';
    }
    return this.errorMessages[key](errValue);
  }

}