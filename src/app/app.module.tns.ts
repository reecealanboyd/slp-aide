import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

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


// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

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
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
