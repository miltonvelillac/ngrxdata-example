import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityDefinitionService, EntityDataService } from '@ngrx/data';
import { entityMetadata, storeNames } from '../app-store/metadata/entity-metadata';
import { HttpClientModule } from '@angular/common/http';
import { CourseDataService } from './services/course-data.service';
import { CoursesComponent } from './courses.component';


@NgModule({
  declarations: [CoursesComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class CoursesModule {}
