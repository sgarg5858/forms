import { ValidatorFn, Validators } from '@angular/forms';

export interface DynamicOption {
  label: string;
  value: string;
}
type CustomValidators = {
  banWords: ValidatorFn;
};
export type ValidatorKeys = keyof Omit<
  typeof Validators & CustomValidators,
  'compose' | 'composeAsync' | 'prototype'
>;

export interface DynamicControl<T = string> {
  controlType: 'input' | 'select' | 'checkbox' | 'group' | 'array';
  label: string;
  value: T | null;
  type?: string;
  options?: DynamicOption[];
  validators?: Partial<Record<ValidatorKeys, unknown>>;
  controls?: DynamicFormConfig['controls'] | DynamicControl[];
  order?:number;
  interactive?: {
    buttonText: string;
    controlTemplate: DynamicControl
  };
}
export interface DynamicFormConfig {
  description: string;
  controls: {
    [key: string]: DynamicControl;
  };
}
