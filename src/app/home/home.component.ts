import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'slp-aide';

  constructor(private router: RouterExtensions, private active: ActivatedRoute) { }

  ngOnInit() {
    this.router.navigate([{outlets: {assignmentList: ['assignment-list'], studentList: ['student-list']}}], {
      relativeTo: this.active
    });
  }
}
