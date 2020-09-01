import { EntityMetadataMap } from '@ngrx/data';
import { courseMetadataMap } from 'src/app/courses/store/metadata/courses-metadata';

export enum storeNames {
  course = 'Course',
  teacher = 'Teacher'
}

export const entityMetadata: EntityMetadataMap = {
  ...courseMetadataMap
};

const pluralNames = { Course: 'Courses', Teacher: 'Teachers' };

export const entityConfig = {
  entityMetadata,
  pluralNames
};
