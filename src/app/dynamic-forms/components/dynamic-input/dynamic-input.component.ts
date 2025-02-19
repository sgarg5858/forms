import { Component } from '@angular/core';
import { DynamicControlBase, dynamicParentControlProvider } from '../dynamic-control-base/dynamic-control-base';
import { CommonModule } from '@angular/common';
import { MaterialComponentsModule } from 'src/app/material-components/material-components.module';
import {
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-dynamic-input',
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.scss'],
  standalone: true,
  imports: [CommonModule, MaterialComponentsModule, ReactiveFormsModule],
  viewProviders: [
    dynamicParentControlProvider
  ],
})
export class DynamicInputComponent extends DynamicControlBase {}
