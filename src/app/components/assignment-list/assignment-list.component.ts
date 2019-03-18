import { Component, OnInit } from '@angular/core';
import { Assignment } from '~/app/models/assignment/assignment';
import { ItemEventData } from 'tns-core-modules/ui/list-view/list-view';

@Component({
  selector: 'app-assignment-list',
  templateUrl: './assignment-list.component.html',
  styleUrls: ['./assignment-list.component.css']
})
export class AssignmentListComponent implements OnInit {

  assignments: Assignment[] = [];

  constructor() { 
    this.assignments = [
      {
        name: 'Articulation',
        image: '',
        questions: {}
      },
      {
        name: 'Language',
        image: '',
        questions: {}
      },
    ]
  }

  ngOnInit() {
  }

  onSelectAssignment(args: ItemEventData) {
    console.log('Item with index: ' + args.index + ' tapped');
  }

}
