import { CartComponent } from './cart/cart.component';
import { ExamComponent } from './components/exam/exam.component';
import { AddQuizComponent } from './components/add-quiz/add-quiz.component';
import { QuizDetailsComponent } from './components/quiz-details/quiz-details.component';
import { QuizListComponent } from './components/quiz-list/quiz-list.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  { path: 'profile', component: ProfileComponent , canActivate:[AuthGuard] },
  { path: 'quizs', component:QuizListComponent , canActivate:[AuthGuard]},
  {path: 'quizs/:id', component:QuizDetailsComponent , canActivate:[AuthGuard]},
  {path: 'add', component:AddQuizComponent , canActivate:[AuthGuard]},
  {path: 'exam', component:ExamComponent , canActivate:[AuthGuard]},
  {path: 'about', component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
