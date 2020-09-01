import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { getSchool } from '../actions/school.action';
import { getSchoolByIdSelector } from '../selectors/school.selector';


@Injectable({
  providedIn: 'root'
})
export class SchoolHandler {

  getSchoolByIdSelector$ = this.store.pipe(
    select(getSchoolByIdSelector)
  );

  constructor(private store: Store, private actions$: Actions) { }

  getSchool(id: string): void {
    this.store.dispatch(getSchool({ id }));
  }
}
