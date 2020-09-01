import { TestBed } from '@angular/core/testing';

import { TeachersDataService } from './teachers-data.service';

describe('TeachersDataService', () => {
  let service: TeachersDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeachersDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
