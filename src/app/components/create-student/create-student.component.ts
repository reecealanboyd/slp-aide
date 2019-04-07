import { Component, OnInit, OnDestroy } from '@angular/core';
import { Student } from '~/app/models/student/student';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { StudentService } from '~/app/services/student/student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit, OnDestroy {

  username: string;
  password: string;
  currentStudent: Student;
  // private currentStudentSubscription: Subscription;

  constructor(private router: Router) { }

  ngOnInit() {
    // this.currentStudentSubscription = this.studentService.currentStudent.subscribe(student => {
    //   this.currentStudent = student;
    // });
  }

  onSelectCreateStudent() {
    // this.studentService.createNewStudent('yolo', 'yolo@email');
    alert(`You're using ${this.username} and ${this.password}`);
  }

  ngOnDestroy() {
    // if (this.currentStudentSubscription) {
    //   this.currentStudentSubscription.unsubscribe();
    // }
  }

}
