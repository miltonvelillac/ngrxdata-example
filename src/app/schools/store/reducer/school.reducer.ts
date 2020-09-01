import { createReducer, on, Action } from '@ngrx/store';
import { School } from 'src/app/shared/models/school.model';
import { getSchool, getSchoolSuccess, getSchoolFail } from '../actions/school.action';

export const schoolStateName = 'schoolState' ;

export interface SchoolState {
  school: School;
}

const schoolInitState: SchoolState = {
  school: undefined
};

const reducerActions = createReducer(
  schoolInitState,
  on(getSchool, (state, { id }) => {
    return { ...state, school: undefined };
  }),
  on(getSchoolSuccess, (state, { school }) => {
    return { ...state, school };
  }),
  on(getSchoolFail, (state, { error }) => {
    return { ...state, school: undefined };
  })
);

export function schoolReducer(state: SchoolState | undefined, action: Action) {
  return reducerActions(state, action);
}
