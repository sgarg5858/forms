import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'template-driven-form',
    loadChildren: () =>
      import(
        './template-driven-form-example/template-driven-form-example.module'
      ).then((m) => m.TemplateDrivenFormExampleModule),
  },
  {
    path: 'reactive-form',
    loadChildren: () =>
      import(
        './reactive-form-example/reactive-form-example.module'
      ).then((m) => m.ReactiveFormExampleModule),
  },
  {
    path: 'dynamic-form',
    loadChildren: () =>
      import(
        './dynamic-forms/dynamic-forms.module'
      ).then((m) => m.DynamicFormsModule),
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'reactive-form'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
