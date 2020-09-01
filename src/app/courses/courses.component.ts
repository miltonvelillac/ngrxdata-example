import { Component, OnInit } from '@angular/core';
import { CourseEntityService } from './store/services/course-entity.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor(
    private courseEntityService: CourseEntityService
  ) { }

  ngOnInit(): void {
    this.courseEntityService.getAll().subscribe((response) => {
      console.log(response);
    });
  }

}
