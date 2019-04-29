import { Component, OnInit } from '@angular/core';
import { Assignment } from '~/app/models/assignment/assignment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-take-assignment',
  templateUrl: './take-assignment.component.html',
  styleUrls: ['./take-assignment.component.css']
})
export class TakeAssignmentComponent implements OnInit {

  assignment: Assignment = {};

  constructor(private router: Router) { }

  ngOnInit() {
    this.assignment = {
      name: 'Dana the Dairy Cow',
      image: '~/assets/images/DanaTheDairyCow.jpg',
      questions: {
        q: 'What did Dana love to smell?',
        a: ['Barn', 'Dandelion', 'Field', 'Daisies'],
        q2: 'What did Dana dream of?',
        a2: ['Barn', 'Dandelion', 'Field', 'Daisies'],
        q3: 'What did Dana walk around?',
        a3: ['Barn', 'Dandelion', 'Field', 'Daisies'],
        q4: 'What swayed in the wind?',
        a4: ['Barn', 'Dandelion', 'Field', 'Daisies']
      }
    };
  }

}
