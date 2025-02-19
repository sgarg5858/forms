import {
  Directive,
  HostBinding,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CONTROL_DATA } from '../../control-data.token';
import {
  AbstractControl,
  ControlContainer,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DynamicControl } from '../../interfaces/control';

export const dynamicParentControlProvider = {
  //since we are using useExisting, we are telling angular to use the existing instance of FormGroupDirective
  //that is already in the parent component
  provide: ControlContainer,
  useFactory: () => inject(ControlContainer, { skipSelf: true }),
};

@Directive()
export class DynamicControlBase implements OnInit, OnDestroy {
  @HostBinding('class') class = 'form-field';
  control = inject(CONTROL_DATA);
  formContol: AbstractControl = new FormControl(
    this.control.controlConfig.value,
    { validators: this.resolveValidators(this.control.controlConfig) }
  );

  parentGroupDirective = inject(ControlContainer);

  ngOnInit(): void {
    (this.parentGroupDirective.control as FormGroup).addControl(
      this.control.controlKey,
      this.formContol
    );
  }
  ngOnDestroy(): void {
    (this.parentGroupDirective.control as FormGroup).removeControl(
      this.control.controlKey
    );
  }

  protected resolveValidators({ validators = {} }: DynamicControl) {
    return (Object.keys(validators) as Array<keyof typeof validators> | []).map(
      (validatorKey) => {
        const validatorValue = validators[validatorKey];
        if (validatorKey === 'required') {
          return Validators.required;
        }
        if (validatorKey === 'email') {
          return Validators.email;
        }
        if (validatorKey === 'requiredTrue') {
          return Validators.requiredTrue;
        }
        if (validatorKey === 'minLength') {
          if (typeof validatorValue === 'number')
            return Validators.minLength(validatorValue);
        }
        return Validators.nullValidator;
      }
    );
  }
}
