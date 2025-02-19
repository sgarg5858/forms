import { ValidatorFn, Validators } from "@angular/forms";

export interface DynamicOption {
  label: string;
  value: string;
}
type CustomValidators = {
    banWords:ValidatorFn
}
export type ValidatorKeys = keyof Omit< typeof Validators & CustomValidators, "compose" | "composeAsync" | "prototype">;

export interface DynamicControl<T = string> {
  controlType: 'input' | 'select' | 'checkbox';
  label: string;
  value: T | null;
  type?: string;
  options?: DynamicOption[];
  validators?: Partial<Record<ValidatorKeys, unknown>>;
}
export interface DynamicFormConfig {
  description: string;
  controls: {
    [key: string]: DynamicControl;
  };
}
