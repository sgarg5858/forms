import { Component, HostBinding, inject } from '@angular/core';
import { DynamicControlBase } from '../dynamic-control-base/dynamic-control-base';
import { DynamicControlResolver } from '../../services/dynamic-control-resolver.service';

@Component({
  selector: 'app-dynamic-group',
  templateUrl: './dynamic-group.component.html',
  styleUrls: ['./dynamic-group.component.scss'],
})
export class DynamicGroupComponent extends DynamicControlBase {
   @HostBinding('class') override class = 'form-field';
  dynamicControlResolver = inject(DynamicControlResolver)
}
