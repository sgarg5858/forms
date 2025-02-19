import { Injectable, Type } from '@angular/core';
import { DynamicInputComponent } from '../components/dynamic-input/dynamic-input.component';
import { DynamicSelectComponent } from '../components/dynamic-select/dynamic-select.component';
import { DynamicControl } from '../interfaces/control';
import { DynamicCheckboxComponent } from '../components/dynamic-checkbox/dynamic-checkbox.component';

type DynamicControlMap = {
  [T in DynamicControl['controlType']]: Type<any>;
};

@Injectable({
  providedIn: 'root',
})
export class DynamicControlResolver {
  private controlComponents: DynamicControlMap = {
    input: DynamicInputComponent,
    select: DynamicSelectComponent,
    checkbox: DynamicCheckboxComponent
  };
  constructor() {}
  resolve(controlType: keyof DynamicControlMap): Type<any> {
    return this.controlComponents[controlType];
  }
}
