import { InjectionToken } from "@angular/core";
import { DynamicControl } from "./interfaces/control";

export interface ControlData{
    controlKey:string;
    controlConfig:DynamicControl;
}
export const CONTROL_DATA = new InjectionToken<ControlData>('CONTROL_DATA');