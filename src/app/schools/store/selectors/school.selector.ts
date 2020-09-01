import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SchoolState, schoolStateName } from '../reducer/school.reducer';

const schoolState = createFeatureSelector<SchoolState>(schoolStateName);

export const getSchoolByIdSelector = createSelector(
  schoolState,
  (schState: SchoolState) => schState.school
);
