import { Component, OnInit } from '@angular/core';
import { ItemEventData } from "tns-core-modules/ui/list-view"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'slp-aide';

  constructor() { }

  ngOnInit() {
  }
}
