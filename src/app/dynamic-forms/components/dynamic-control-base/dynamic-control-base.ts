import { Directive, HostBinding, inject } from '@angular/core';
import { CONTROL_DATA } from '../../control-data.token';
import { ControlContainer, FormGroup } from '@angular/forms';

export const dynamicParentControlProvider = {
  //since we are using useExisting, we are telling angular to use the existing instance of FormGroupDirective
  //that is already in the parent component
  provide: ControlContainer,
  useFactory: () => inject(ControlContainer, { skipSelf: true }),
};

@Directive()
export class DynamicControlBase {
  @HostBinding('class') class = 'form-field';
  control = inject(CONTROL_DATA);
}
