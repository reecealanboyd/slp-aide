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

export const routes: Routes = [
  {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full',
  },
  {
      path: 'home',
      component: HomeComponent,
  },
  {
    path: 'student-list',
    component: StudentListComponent
  },
  {
    path: 'assignment-list',
    component: AssignmentListComponent
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
  }
];
