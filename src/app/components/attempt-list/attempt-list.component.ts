import { Component, OnInit } from '@angular/core';
import { Attempt } from '~/app/models/attempt/attempt';
import { Router } from '@angular/router';
import { ItemEventData } from 'tns-core-modules/ui/list-view/list-view';

@Component({
  selector: 'app-attempt-list',
  templateUrl: './attempt-list.component.html',
  styleUrls: ['./attempt-list.component.css']
})
export class AttemptListComponent implements OnInit {

  attempts: Attempt[] = [];

  constructor(private router: Router) {
    
   }

  ngOnInit() {    
    this.attempts = [
      {
        number: 2,
        time: "00:00:15", 
        score: "3/4", 
        assignment: {
          name: 'Dana the Dairy Cow',
          image: '',
          questions: {}
        },
        responses: {
        }
      },
      {
        number: 1,
        time: "00:00:13", 
        score: "2/4", 
        assignment: {
          name: 'Dana the Dairy Cow',
          image: '',
          questions: {}
        }, 
        responses: {
          
        }
      }
    ];
  }

  onSelectAttempt(args: ItemEventData) {
    this.router.navigate(['attempt']);
  }

}
