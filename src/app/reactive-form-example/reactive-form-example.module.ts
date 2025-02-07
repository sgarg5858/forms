import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { RouterModule } from '@angular/router';
import { MaterialComponentsModule } from '../material-components/material-components.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserInfoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: UserInfoComponent }]),
    MaterialComponentsModule
  ],
})
export class ReactiveFormExampleModule {}
