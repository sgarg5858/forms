import { Component } from '@angular/core';
import {
  DynamicControlBase,
  dynamicParentControlProvider,
  sharedDynamicControlImports,
} from '../dynamic-control-base/dynamic-control-base';

@Component({
  selector: 'app-dynamic-checkbox',
  templateUrl: './dynamic-checkbox.component.html',
  styleUrls: ['./dynamic-checkbox.component.scss'],
  standalone: true,
  imports: [...sharedDynamicControlImports],
  viewProviders: [dynamicParentControlProvider],
})
export class DynamicCheckboxComponent extends DynamicControlBase {}
