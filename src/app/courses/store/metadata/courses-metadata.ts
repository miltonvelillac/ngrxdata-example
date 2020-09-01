import { EntityMetadataMap } from '@ngrx/data';
import { Course } from 'src/app/shared/models/course.model';

function compareTwoCourses(courseOne: Course, courseTwo: Course) {
  if (courseOne.name < courseTwo.name) { return -1; }
  if (courseOne.name > courseTwo.name) { return 1; }
  return 0;
}

export const courseMetadataMap: EntityMetadataMap = {
  Course: {
    sortComparer: compareTwoCourses,
    entityDispatcherOptions: {
      // Aqui podemos decirle a ngrx data si queremos que el crud sea optimista o dejarlo
      // por defecto (pesimista)
      optimisticUpdate: true
    },
    // entityName: storeNames.course, //optional
    // selectId: (course: Course) => course.courseId // si el id es diferente a id hay que especificarlo
  }
};
