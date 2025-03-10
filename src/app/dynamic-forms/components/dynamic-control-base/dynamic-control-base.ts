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
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DynamicControl } from '../../interfaces/control';
import { CommonModule } from '@angular/common';
import { ControlInjectorPipe } from '../../pipes/control-injector.pipe';
import { ErrorModule } from 'src/app/error/error.module';


export const sharedDynamicControlImports = [CommonModule, ReactiveFormsModule, ControlInjectorPipe,ErrorModule];

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
    if(this.parentGroupDirective.control instanceof FormArray)
    {
      (this.parentGroupDirective.control as FormArray).push(
        this.formContol
      );
    }
    else
    {
      (this.parentGroupDirective.control as FormGroup).addControl(
        this.control.controlKey,
        this.formContol
      );
    }
  }
  ngOnDestroy(): void {
    if(this.parentGroupDirective.control instanceof FormArray){
      const index = (this.parentGroupDirective.control as FormArray).controls.indexOf(
        this.formContol
      );
      (this.parentGroupDirective.control as FormArray).removeAt(index);
    }
    if(this.parentGroupDirective.control instanceof FormGroup){
      (this.parentGroupDirective.control as FormGroup).removeControl(
        this.control.controlKey
      );
    }
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
