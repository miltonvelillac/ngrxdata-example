import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CourseEntityService } from './store/services/course-entity.service';
import { Course } from '../shared/models/course.model';
import { filter } from 'rxjs/operators';
import { EntityAction } from '@ngrx/data';
import { storeNames } from '../app-store/metadata/entity-metadata';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class CoursesComponent implements OnInit {

  constructor(
    private courseEntityService: CourseEntityService
  ) { }

  ngOnInit(): void {
    this.courseEntityService.getAll();

    this.courseEntityService.setFilter('sociales');
    this.courseEntityService.filteredEntities$.subscribe((resp) => console.log('filter entitites....', resp));
    this.courseEntityService.filter$.subscribe((resp) => console.log('filter....', resp));
    this.courseEntityService.errors$.pipe(
      filter((data: EntityAction) => data.type.includes('query-all') && data.type.includes(`[${storeNames.course}]`))
    ).subscribe((resp) => console.log('error....', resp));
    this.courseEntityService.entityActions$.subscribe((resp) => console.log('Actions....', resp));

    this.courseEntityService.entities$.subscribe((response) => {
      console.log('entities', response);
    });
  }

}
