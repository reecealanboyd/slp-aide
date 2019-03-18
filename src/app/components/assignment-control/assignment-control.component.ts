import { Component, OnInit } from '@angular/core';
import { Student } from '~/app/models/student/student';
import { Assignment } from '~/app/models/assignment/assignment';
import { Router } from '@angular/router';
import { ItemEventData } from 'tns-core-modules/ui/list-view/list-view';

@Component({
  selector: 'app-assignment-control',
  templateUrl: './assignment-control.component.html',
  styleUrls: ['./assignment-control.component.css']
})
export class AssignmentControlComponent implements OnInit {

  students: Student[] = [];
  assignments: Assignment[] = [];

  constructor(private router: Router) { 

  }

  ngOnInit() {
    this.assignments = [{
      name: 'Dana the Dairy Cow',
      image: '',
      questions: {}
    }];

    this.students = [
      {
        assignments: [],
        attempts: [],
        initials: 'JD'
      },
      {
        assignments: [],
        attempts: [],
        initials: 'LP'
      },
      {
        assignments: [],
        attempts: [],
        initials: 'SG'
      }
    ]
  }

  onSelectAssignment(args: ItemEventData) {
    this.router.navigate(["/assignment-detail"]);
  }

  onSelectStudent(args: ItemEventData) {
  }

}
