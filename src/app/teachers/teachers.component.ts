import { Component, OnInit } from '@angular/core';
import { TeachersEntityService } from './store/services/teachers.entity';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {

  constructor(
    private teachersEntityService: TeachersEntityService
  ) { }

  ngOnInit(): void {
    this.teachersEntityService.getAll().subscribe(
      (data) => console.log(data)
    );
  }

}
