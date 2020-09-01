import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Course } from 'src/app/shared/models/course.model';
import { HttpClient } from '@angular/common/http';
import { storeNames } from '../../app-store/metadata/entity-metadata';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

const coursesMock: Course[] = [
  {
    id: '123',
    name: 'mat'
  },
  {
    id: '9874',
    name: 'fisica'
  },
  {
    id: '78787',
    name: 'sociales'
  }
];

@Injectable({
  providedIn: 'root'
})
export class CourseDataService extends DefaultDataService<Course> {

  constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator
  ) {
    super(storeNames.course, http, httpUrlGenerator);
    console.log('Created custom Hero EntityDataService');
  }

  getAll(): Observable<Course[]> {
    return this.http.get('https://run.mocky.io/v3/762ea2b5-50d4-4562-8813-7c5e8f156929').pipe(
      map((resp: any) => resp)
      // map(resp => resp[`payload`])
    );
  }
}
