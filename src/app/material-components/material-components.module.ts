import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';

const materialComponents = [
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatFormFieldModule,
  MatCardModule,
  MatDatepickerModule,
  MatSelectModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule,...materialComponents],
  exports:[...materialComponents]
})
export class MaterialComponentsModule {}
