import { Component, OnInit } from "@angular/core";
import { ItemEventData } from "tns-core-modules/ui/list-view/list-view";
import { Student } from "~/app/models/student/student";
import { Router } from "@angular/router";

@Component({
  selector: "app-student-list",
  templateUrl: "./student-list.component.html",
  styleUrls: ["./student-list.component.css"]
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];

  constructor(private router: Router) {
    this.students = [
      {
        assignments: [],
        attempts: [],
        initials: "JD"
      },
      {
        assignments: [],
        attempts: [],
        initials: "LP"
      },
      {
        assignments: [],
        attempts: [],
        initials: "SG"
      }
    ];
  }

  ngOnInit() {}

  onSelectStudent(args: ItemEventData): void {
    console.log("Item with index: " + args.index + " tapped");
    this.router.navigate(["/student"]);
  }

  onSelectCreateStudent(args: ItemEventData): void {
    console.log("Item with index: " + args.index + " tapped");
    this.router.navigate(["/create-student"]);
  }
}
