import { CommonModule } from '@angular/common';
import { Component, HostBinding, inject } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  DynamicControlBase,
  dynamicParentControlProvider,
} from '../dynamic-control-base/dynamic-control-base';
import { DynamicControlResolver } from '../../services/dynamic-control-resolver.service';
import { DynamicControl } from '../../interfaces/control';
import { ControlInjectorPipe } from '../../pipes/control-injector.pipe';

@Component({
  selector: 'app-dynamic-array',
  templateUrl: './dynamic-array.component.html',
  styleUrls: ['./dynamic-array.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ControlInjectorPipe],
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
}
