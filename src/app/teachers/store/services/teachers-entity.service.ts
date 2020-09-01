import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Teacher } from 'src/app/shared/models/teacher.model';
import { storeNames } from 'src/app/app-store/metadata/entity-metadata';

@Injectable({
  providedIn: 'root'
})
export class TeachersEntityService extends EntityCollectionServiceBase<Teacher> {

  constructor(
    serviceElementsFactory: EntityCollectionServiceElementsFactory
  ) {
    super(storeNames.teacher, serviceElementsFactory);
  }
}

