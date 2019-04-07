import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Assignment } from '~/app/models/assignment/assignment';
import { ItemEventData } from 'tns-core-modules/ui/list-view/list-view';
import { AssignmentService } from '~/app/services/assignment/assignment.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  assignments: Assignment[] = [];

  constructor(private router: Router, private assignmentService: AssignmentService) { 
    this.assignments = [
      {
        name: 'Dana the Dairy Cow',
        image: '',
        questions: {}
      }
    ];
  }

  ngOnInit() {
  }

  onSelectAssignment(args: ItemEventData) {
    this.router.navigate(["/assignment-control"]);
  }

}
