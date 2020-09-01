import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Course } from 'src/app/shared/models/course.model';
import { storeNames } from '../../../app-store/metadata/entity-metadata';

@Injectable({
  providedIn: 'root'
})
export class CourseEntityService extends EntityCollectionServiceBase<Course> {

  constructor(
    serviceElementsFactory: EntityCollectionServiceElementsFactory
  ) {
    super(storeNames.course, serviceElementsFactory);
  }
}
