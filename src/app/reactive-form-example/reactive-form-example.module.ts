import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { RouterModule } from '@angular/router';
import { MaterialComponentsModule } from '../material-components/material-components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '../directives/directives.module';
import { CustomFormComponentsModule } from '../custom-form-components/custom-form-components.module';
import { ErrorModule } from '../error/error.module';
@NgModule({
  declarations: [UserInfoComponent],
  imports: [
    CommonModule,
    ErrorModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: UserInfoComponent }]),
    MaterialComponentsModule,
    DirectivesModule,
    CustomFormComponentsModule,
  ],
})
export class ReactiveFormExampleModule {}
