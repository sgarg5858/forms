import { Component } from '@angular/core';
import { DynamicControlBase } from '../dynamic-control-base/dynamic-control-base';
import { CommonModule } from '@angular/common';
import { MaterialComponentsModule } from 'src/app/material-components/material-components.module';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-checkbox',
  templateUrl: './dynamic-checkbox.component.html',
  styleUrls: ['./dynamic-checkbox.component.scss'],
  standalone: true,
  imports: [CommonModule, MaterialComponentsModule, ReactiveFormsModule],
})
export class DynamicCheckboxComponent extends DynamicControlBase {}
