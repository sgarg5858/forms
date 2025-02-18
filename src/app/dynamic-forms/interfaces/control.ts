export interface DynamicOption {
  label: string;
  value: string;
}
export interface DynamicControl<T = string> {
  controlType: 'input' | 'select';
  label: string;
  value: T | null;
  type?: string;
  options?: DynamicOption[];
}
export interface DynamicFormConfig{
    description:string;
    controls:{
        [key:string]: DynamicControl
    }
}