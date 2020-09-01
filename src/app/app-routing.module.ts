import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';


const routes: Routes = [
  {
    path: 'courses',
    component: CoursesComponent
  },
  {
    path: 'teachers',
    loadChildren: () => import('./teachers/teachers.module').then(childModule => childModule.TeachersModule)
  },
  {
    path: 'schools',
    loadChildren: () => import('./schools/schools.module').then(childModule => childModule.SchoolsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
