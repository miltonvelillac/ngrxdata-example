import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SchoolsComponent } from './schools.component';

const routes: Routes = [
  {
    path: '',
    component: SchoolsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolsRoutingModule { }
