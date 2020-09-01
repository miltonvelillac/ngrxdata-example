import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { storeNames } from 'src/app/app-store/metadata/entity-metadata';
import { Teacher } from 'src/app/shared/models/teacher.model';

@Injectable({
  providedIn: 'root'
})
export class TeachersDataService extends DefaultDataService<Teacher> {

  constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator
  ) {
    super(storeNames.course, http, httpUrlGenerator);
    }

    getAll(): Observable<Teacher[]> {
      return this.http.get('https://run.mocky.io/v3/762ea2b5-50d4-4562-8813-7c5e8f156929').pipe(
        tap(() => console.log('teacher service')),
        map((resp: any) => resp)
        // map(resp => resp[`payload`])
      );
    }
  }
