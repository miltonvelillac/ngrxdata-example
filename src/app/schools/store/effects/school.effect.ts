import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { of } from 'rxjs';
import { getSchool, getSchoolSuccess, getSchoolFail } from '../actions/school.action';
import { SchoolService } from '../../services/school.service';
import { map, switchMap, catchError } from 'rxjs/operators';
import { School } from 'src/app/shared/models/school.model';

@Injectable()
export class SchoolEffects {

  getCampaignById$ = createEffect(() => this.actions$.pipe(
    ofType(getSchool),
    switchMap((action: any) => {
      const id: string = action.id;
      return this.schoolService.getSchoolById(id).pipe(
        map((school: School) => getSchoolSuccess({ school })),
        catchError((error: any) => of(getSchoolFail({ error })))
      );
    })
  ));

  constructor(
    private actions$: Actions,
    private schoolService: SchoolService
  ) { }
}
