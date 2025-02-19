import { Directive, Host, HostBinding, inject } from '@angular/core';
import { CONTROL_DATA } from '../../control-data.token';
import { ControlContainer, FormGroup } from '@angular/forms';

@Directive()
export class DynamicControlBase {
  @HostBinding('class') class = 'form-field';
  control = inject(CONTROL_DATA);
  protected parentFormGroup = inject(ControlContainer);
  get formGroup() {
    return this.parentFormGroup.control as FormGroup;
  }
}
