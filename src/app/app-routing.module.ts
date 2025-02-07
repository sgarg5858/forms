import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'TDF',
    loadChildren: () =>
      import(
        './template-driven-form-example/template-driven-form-example.module'
      ).then((m) => m.TemplateDrivenFormExampleModule),
  },
  {
    path: 'RDF',
    loadChildren: () =>
      import(
        './reactive-form-example/reactive-form-example.module'
      ).then((m) => m.ReactiveFormExampleModule),
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'RDF'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
