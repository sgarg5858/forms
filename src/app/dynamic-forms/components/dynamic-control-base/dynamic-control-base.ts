import { inject } from "@angular/core";
import { CONTROL_DATA } from "../../control-data.token";
import { ControlContainer, FormGroup } from "@angular/forms";

export class DynamicControlBase {
  control = inject(CONTROL_DATA);
  protected parentFormGroup = inject(ControlContainer);
  get formGroup() {
    return this.parentFormGroup.control as FormGroup;
  }
}
