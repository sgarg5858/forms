import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponentsModule } from '../material-components/material-components.module';
import { DynamicFormContainerComponent } from './containers/dynamic-form-container/dynamic-form-container.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicInputComponent } from './components/dynamic-input/dynamic-input.component';
import { DynamicSelectComponent } from './components/dynamic-select/dynamic-select.component';
import { ControlInjectorPipe } from './pipes/control-injector.pipe';
import { DynamicCheckboxComponent } from './components/dynamic-checkbox/dynamic-checkbox.component';

@NgModule({
  declarations: [
    DynamicFormContainerComponent,
    DynamicInputComponent,
    DynamicSelectComponent,
    ControlInjectorPipe,
    DynamicCheckboxComponent,
  ],
  imports: [
    CommonModule,
    MaterialComponentsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: DynamicFormContainerComponent,
      },
    ]),
  ],
})
export class DynamicFormsModule {}
