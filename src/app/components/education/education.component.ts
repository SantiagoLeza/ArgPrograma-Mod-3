import { Component } from '@angular/core';
import educationList from 'src/app/data/education.json';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educationList = educationList;
}
