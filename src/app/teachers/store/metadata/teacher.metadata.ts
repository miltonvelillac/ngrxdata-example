import { EntityMetadataMap } from '@ngrx/data';
import { Teacher } from 'src/app/shared/models/teacher.model';

export const teacherMetadataMap: EntityMetadataMap = {
  Teacher: {
    selectId: (teacher: Teacher) => teacher.idTeacher // si el id es diferente a id hay que especificarlo
  }
};
