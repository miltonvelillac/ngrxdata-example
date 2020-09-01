import { createAction, props } from '@ngrx/store';
import { School } from 'src/app/shared/models/school.model';

export const getSchool = createAction('[School] Get school by id', props<{ id: string }>());
export const getSchoolSuccess = createAction('[School] Get school by id Success', props<{ school: School }>());
export const getSchoolFail = createAction('[School] Get school by id Fail', props<{ error: any }>());

