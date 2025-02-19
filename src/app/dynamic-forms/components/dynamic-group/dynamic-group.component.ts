import { Component, HostBinding, inject } from '@angular/core';
import { DynamicControlBase } from '../dynamic-control-base/dynamic-control-base';
import { DynamicControlResolver } from '../../services/dynamic-control-resolver.service';
import { CommonModule } from '@angular/common';
import { MaterialComponentsModule } from 'src/app/material-components/material-components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ControlInjectorPipe } from '../../pipes/control-injector.pipe';

@Component({
  selector: 'app-dynamic-group',
  templateUrl: './dynamic-group.component.html',
  styleUrls: ['./dynamic-group.component.scss'],
  standalone: true,
  imports: [CommonModule, MaterialComponentsModule, ReactiveFormsModule,ControlInjectorPipe],
})
export class DynamicGroupComponent extends DynamicControlBase {
  @HostBinding('class') override class = 'form-field';
  dynamicControlResolver = inject(DynamicControlResolver);
}
