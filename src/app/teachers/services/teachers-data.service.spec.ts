import { TestBed } from '@angular/core/testing';

import { TeachersDataService } from './teachers-data.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpUrlGenerator } from '@ngrx/data';

fdescribe('TeachersDataService', () => {
  let service: TeachersDataService;
  let httpGenMock;

  beforeEach(() => {
    httpGenMock = jasmine.createSpyObj('HttpUrlGenerator', [
      'entityResource',
      'collectionResource'
    ]);
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        { provide: HttpUrlGenerator, useValue: httpGenMock }
      ]
    });
    service = TestBed.inject(TeachersDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created', () => {
    // Arrange:
    
    // Act:
    const response = service.getAll();
    // Assert:
    response.subscribe((data) => expect(data).toEqual([{name: 'hello'}]));
  });
});
