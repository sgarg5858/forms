import { Component } from '@angular/core';
import {
  DynamicControlBase,
  dynamicParentControlProvider,
  sharedDynamicControlImports,
} from '../dynamic-control-base/dynamic-control-base';

@Component({
  selector: 'app-dynamic-input',
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.scss'],
  standalone: true,
  imports: [...sharedDynamicControlImports],
  viewProviders: [dynamicParentControlProvider],
})
export class DynamicInputComponent extends DynamicControlBase {}
