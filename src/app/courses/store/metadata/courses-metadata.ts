import { EntityMetadataMap } from '@ngrx/data';
import { Course } from 'src/app/shared/models/course.model';

function compareTwoCourses(courseOne: Course, courseTwo: Course) {
  const compare = Number(courseOne.id) - Number(courseTwo.id);
  if (compare < 0) { return 1; }
  if (compare > 0) { return -1; }
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
    filterFn: (courses: Course[], pattern?: any) => courses.filter(data => data.name === pattern)
    // entityName: storeNames.course, //optional
    // selectId: (course: Course) => course.courseId // si el id es diferente a id hay que especificarlo
  }
};
