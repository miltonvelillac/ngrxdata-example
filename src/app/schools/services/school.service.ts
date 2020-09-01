import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { School } from 'src/app/shared/models/school.model';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor() { }

  getSchoolById(id: string): Observable<School> {
    return of({name: 'my school', id: '123'});
  }
}
