import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CourseEntityService } from './store/services/course-entity.service';
import { Course } from '../shared/models/course.model';

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

    this.courseEntityService.entities$.subscribe((response) => {
      console.log('entities', response);
    });
  }

}
