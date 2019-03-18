import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Assignment } from '~/app/models/assignment/assignment';
import { ItemEventData } from 'tns-core-modules/ui/list-view/list-view';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  name = 'JD';

  assignments: Assignment[] = [];

  constructor(private router: Router) { 
    this.assignments = [
      {
        name: 'Dana the Dairy Cow',
        image: '',
        questions: {}
      }
    ]
  }

  ngOnInit() {
    this.router.navigate(["/student"]);
  }

  onSelectAssignment(args: ItemEventData) {
    this.router.navigate(["/attempt-list"])
  }

}
