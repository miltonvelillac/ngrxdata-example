import { Component, OnInit } from '@angular/core';
import { SchoolHandler } from './store/handler/school.handler';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.scss']
})
export class SchoolsComponent implements OnInit {

  constructor(
    private schoolHandler: SchoolHandler
  ) { }

  ngOnInit(): void {
    this.schoolHandler.getSchool('1');
    this.schoolHandler.getSchoolByIdSelector$.subscribe((data) => console.log(data));
  }

}
