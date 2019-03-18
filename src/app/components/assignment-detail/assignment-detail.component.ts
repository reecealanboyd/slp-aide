import { Component, OnInit } from '@angular/core';
import { Assignment } from '~/app/models/assignment/assignment';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {

  assignment: Assignment = {};

  constructor() { }

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
        a3: ['Barn', 'Dandelion', 'Field', 'Daisies']
      }
    };
  }

}
