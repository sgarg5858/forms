import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './user-info/user-info.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialComponentsModule } from '../material-components/material-components.module';
import { ValidatorsModule } from '../validators/validators.module';
import { ErrorModule } from '../error/error.module';



@NgModule({
  declarations: [
    UserInfoComponent,
  ],
  imports: [
    CommonModule,FormsModule,
    MaterialComponentsModule,
    ErrorModule,
    RouterModule.forChild([{
      path:'',component:UserInfoComponent
    }]),
    ValidatorsModule
  ]
})
export class TemplateDrivenFormExampleModule { }
