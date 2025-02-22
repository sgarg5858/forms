import { Component, HostBinding, inject } from '@angular/core';
import { AbstractControl, FormArray, FormControl } from '@angular/forms';
import {
  DynamicControlBase,
  dynamicParentControlProvider,
  sharedDynamicControlImports,
} from '../dynamic-control-base/dynamic-control-base';
import { DynamicControlResolver } from '../../services/dynamic-control-resolver.service';
import { DynamicControl } from '../../interfaces/control';

@Component({
  selector: 'app-dynamic-array',
  templateUrl: './dynamic-array.component.html',
  styleUrls: ['./dynamic-array.component.scss'],
  standalone: true,
  imports: [...sharedDynamicControlImports],
  viewProviders: [dynamicParentControlProvider],
})
export class DynamicArrayComponent extends DynamicControlBase {
  @HostBinding('class') override class = 'form-field-array';
  dynamicControlResolver = inject(DynamicControlResolver);
  override formContol: AbstractControl = new FormArray([]);
  protected get controls() {
    return this.control.controlConfig.controls as DynamicControl[];
  }
  protected get interactive() {
    return this.control.controlConfig.interactive;
  }
  addControl() {
    const controlTemplate = this.interactive?.controlTemplate;
    if (controlTemplate) {
      this.controls.push(controlTemplate);
    }
    (<FormArray>this.formContol).push(new FormControl(''));
  }
  removeControl(index: number) {
    if (this.controls.length === 1) {
      return;
    }
    this.controls.splice(index, 1);
    (<FormArray>this.formContol).removeAt(index);
  }
}
