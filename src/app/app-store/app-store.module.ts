import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { EntityDataModule, EntityDataService } from '@ngrx/data';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { entityConfig, storeNames } from './metadata/entity-metadata';
import { CourseDataService } from '../courses/services/course-data.service';
import { TeachersDataService } from '../teachers/services/teachers-data.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({}, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true
      }
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EntityDataModule.forRoot(entityConfig)
  ]
})
export class AppStoreModule {
  constructor(
    entityDataService: EntityDataService,
    courseDataService: CourseDataService
  ) {
    entityDataService.registerService(storeNames.course, courseDataService);
  }
}
