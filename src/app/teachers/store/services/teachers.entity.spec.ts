import { TestBed } from '@angular/core/testing';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { TeachersEntityService } from './teachers.entity';

describe('TeachersEntityService', () => {
  let service: TeachersEntityService;

  let ecsefMock;

  const ecsebMock = {
    getByKey: () => {},
    dispatcher: {},
    selectors$: {}
  };

  beforeEach(() => {
    ecsefMock = jasmine.createSpyObj('EntityCollectionServiceElementsFactory', ['create']);
    ecsefMock.create.and.returnValue(ecsebMock);
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: EntityCollectionServiceElementsFactory, useValue:  ecsefMock }
      ]
    });
    service = TestBed.inject(TeachersEntityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
