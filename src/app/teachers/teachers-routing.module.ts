import { Routes, RouterModule } from '@angular/router';
import { TeachersComponent } from './teachers.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: TeachersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachersRoutingModule { }
