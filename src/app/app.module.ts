import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoursesComponent } from './courses/courses.component';
import { TeachingplanComponent } from './teachingplan/teachingplan.component';
import { ExamComponent } from './exam/exam.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { EvaluateComponent } from './evaluate/evaluate.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'academics-course',
        component: CoursesComponent
      },
      {
        path: 'academics-teachingplan',
        component: TeachingplanComponent
      },
      {
        path: 'academics-exam',
        component: ExamComponent
      },
      {
        path: 'academics-assignment',
        component: AssignmentComponent
      },
      {
        path: 'academics-evaluate',
        component: EvaluateComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    CoursesComponent,
    TeachingplanComponent,
    ExamComponent,
    AssignmentComponent,
    EvaluateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
