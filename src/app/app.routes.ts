import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { AssignmentListComponent } from './components/assignment-list/assignment-list.component';
import { AssignmentComponent } from './components/assignment/assignment.component';
import { StudentComponent } from './components/student/student.component';
import { AttemptListComponent } from './components/attempt-list/attempt-list.component';
import { AssignmentControlComponent } from './components/assignment-control/assignment-control.component';
import { AssignmentDetailComponent } from './components/assignment-detail/assignment-detail.component';
import { AttemptComponent } from './components/attempt/attempt.component';
import { CreateStudentComponent } from './components/create-student/create-student.component';
import { LoginComponent } from './components/login/login.component';
import { TakeAssignmentComponent } from './components/take-assignment/take-assignment.component';

export const routes: Routes = [
  {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
      path: 'home',
      component: HomeComponent,
      children: [
        {
          path: 'student-list',
          component: StudentListComponent,
          outlet: 'studentList'
        },
        {
          path: 'assignment-list',
          component: AssignmentListComponent,
          outlet: 'assignmentList'
        },

      ]
  },
  {
    path: 'assignment',
    component: AssignmentComponent
  },
  {
    path: 'student',
    component: StudentComponent
  },
  {
    path: 'attempt-list',
    component: AttemptListComponent
  },
  {
    path: 'assignment-control',
    component: AssignmentControlComponent
  },
  {
    path: 'assignment-detail',
    component: AssignmentDetailComponent
  },
  {
    path: 'attempt',
    component: AttemptComponent
  },
  {
    path: 'create-student',
    component: CreateStudentComponent
  },
  {
    path: 'take-assignment',
    component: TakeAssignmentComponent
  }
];
