import { Component, HostBinding, inject } from '@angular/core';
import {
  DynamicControlBase,
  dynamicParentControlProvider,
  sharedDynamicControlImports,
} from '../dynamic-control-base/dynamic-control-base';
import { DynamicControlResolver } from '../../services/dynamic-control-resolver.service';
import { AbstractControl, FormGroup } from '@angular/forms';
import { DynamicFormConfig } from '../../interfaces/control';

@Component({
  selector: 'app-dynamic-group',
  templateUrl: './dynamic-group.component.html',
  styleUrls: ['./dynamic-group.component.scss'],
  standalone: true,
  imports: [...sharedDynamicControlImports],
  viewProviders: [dynamicParentControlProvider],
})
export class DynamicGroupComponent extends DynamicControlBase {
  @HostBinding('class') override class = 'form-field-group';
  dynamicControlResolver = inject(DynamicControlResolver);
  override formContol: AbstractControl = new FormGroup({});
  protected get controls() {
    return this.control.controlConfig.controls as DynamicFormConfig['controls'];
  }
}
