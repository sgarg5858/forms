import { Component } from '@angular/core';
import { DynamicControlBase } from '../dynamic-control-base/dynamic-control-base';
import { CommonModule } from '@angular/common';
import { MaterialComponentsModule } from 'src/app/material-components/material-components.module';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-select',
  templateUrl: './dynamic-select.component.html',
  styleUrls: ['./dynamic-select.component.scss'],
   standalone: true,
  imports: [CommonModule, MaterialComponentsModule, ReactiveFormsModule]
})
export class DynamicSelectComponent extends DynamicControlBase {
  
 
}
