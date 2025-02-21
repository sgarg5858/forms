import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { VALIDATION_ERROR_MESSAGES } from './input-error-messages.token';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-input-error',
  templateUrl: './input-error.component.html',
  styleUrls: ['./input-error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputErrorComponent {
  @Input() errors: ValidationErrors | undefined | null = null;

  protected errorsMap = inject(VALIDATION_ERROR_MESSAGES);

  trackByFn(_: number, item: KeyValue<string,any>): string {
    return item.key;
  }
}
