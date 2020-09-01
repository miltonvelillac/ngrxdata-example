import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EntityDataService, EntityDefinitionService } from '@ngrx/data';
import { storeNames } from '../app-store/metadata/entity-metadata';
import { TeachersDataService } from './services/teachers-data.service';
import { TeachersRoutingModule } from './teachers-routing.module';
import { TeachersComponent } from './teachers.component';
import { teacherMetadataMap } from './store/metadata/teacher.metadata';



@NgModule({
  declarations: [TeachersComponent],
  imports: [
    CommonModule,
    TeachersRoutingModule
  ]
})
export class TeachersModule {
  constructor(
    eds: EntityDefinitionService,
    entityDataService: EntityDataService,
    teachersDataService: TeachersDataService
  ) {
    eds.registerMetadataMap(teacherMetadataMap);
    entityDataService.registerService(storeNames.teacher, teachersDataService);
  }
}
