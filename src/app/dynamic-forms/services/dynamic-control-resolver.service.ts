import { Injectable, Type } from '@angular/core';
import { DynamicInputComponent } from '../components/dynamic-input/dynamic-input.component';
import { DynamicSelectComponent } from '../components/dynamic-select/dynamic-select.component';
import { DynamicControl } from '../interfaces/control';
import { DynamicCheckboxComponent } from '../components/dynamic-checkbox/dynamic-checkbox.component';
import { DynamicGroupComponent } from '../components/dynamic-group/dynamic-group.component';

type DynamicControlMap = {
  [T in DynamicControl['controlType']]: Type<any>;
};

@Injectable({
  providedIn: 'root',
})
export class DynamicControlResolver {
  private lazyControlComponents: DynamicControlMap = {
    input: DynamicInputComponent,
    select: DynamicSelectComponent,
    checkbox: DynamicCheckboxComponent,
    group: DynamicGroupComponent,
  };
  constructor() {}
  resolve(controlType: keyof DynamicControlMap): Type<any> {
    return this.lazyControlComponents[controlType];
  }
}
