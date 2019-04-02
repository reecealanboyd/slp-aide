import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AssignmentComponent } from './components/assignment/assignment.component';
import { AssignmentListComponent } from './components/assignment-list/assignment-list.component';
import { AssignmentDetailComponent } from './components/assignment-detail/assignment-detail.component';
import { StudentComponent } from './components/student/student.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { AttemptListComponent } from './components/attempt-list/attempt-list.component';
import { AttemptComponent } from './components/attempt/attempt.component';
import { LoginComponent } from './components/login/login.component';
import { LanguageComponent } from './components/language/language.component';
import { AssignmentControlComponent } from './components/assignment-control/assignment-control.component';
import { CreateStudentComponent } from './components/create-student/create-student.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AssignmentComponent,
    AssignmentListComponent,
    AssignmentDetailComponent,
    StudentComponent,
    StudentListComponent,
    AttemptListComponent,
    AttemptComponent,
    LoginComponent,
    LanguageComponent,
    AssignmentControlComponent,
    CreateStudentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NativeScriptFormsModule,
    NativeScriptHttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
