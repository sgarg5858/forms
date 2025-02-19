import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponentsModule } from '../material-components/material-components.module';
import { DynamicFormContainerComponent } from './containers/dynamic-form-container/dynamic-form-container.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ControlInjectorPipe } from './pipes/control-injector.pipe';

@NgModule({
  declarations: [
    DynamicFormContainerComponent,
  ],
  imports: [
    CommonModule,
    MaterialComponentsModule,
    ReactiveFormsModule,
    ControlInjectorPipe,
    RouterModule.forChild([
      {
        path: '',
        component: DynamicFormContainerComponent,
      },
    ]),
  ],
})
export class DynamicFormsModule {}
