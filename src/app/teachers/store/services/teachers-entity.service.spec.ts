import { TestBed } from '@angular/core/testing';

import { TeachersEntityService, EntityCollectionServiceBaseMock } from './teachers-entity.service';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';

fdescribe('TeachersEntityService', () => {
  let service: TeachersEntityService;

  const entityCollectionServiceBaseMock = new EntityCollectionServiceBaseMock(undefined);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: EntityCollectionServiceElementsFactory,
          useValue: {}
        }
      ]
    });
    service = TestBed.inject(TeachersEntityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
