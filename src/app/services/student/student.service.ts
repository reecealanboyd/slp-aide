import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '~/app/models/student/student';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private _currentStudent = new BehaviorSubject<Student>(null);

  get currentStudent() {
    return this._currentStudent.asObservable();
  }

  constructor(private http: HttpClient) { }

  createNewStudent(initials: string, email: string) {
    const newStudent = new Student(initials, email);
    // Save it to server
    this._currentStudent.next(newStudent);
    this.http.put('https://slp-aide.firebaseio.com/student.json',
    newStudent)
    .subscribe(response => console.log(response));
  }

  // getStudents() {
  //   this.http.get<Student[]>('https://slp-aide.firebaseio.com/student.json');
  // }
}
