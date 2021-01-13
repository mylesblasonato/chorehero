import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  title: string = "";

  constructor(ap?: AppComponent) {this.title = ap.title;}

  ngOnInit(): void {
  }

}
