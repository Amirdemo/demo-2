import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/models/quiz.model';
import { QuizService } from 'src/app/services/quiz.service';


@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent implements OnInit {
  quizs?: Quiz[];
  currentQuiz?: Quiz;
  currentIndex = -1;
  title = '';



  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.retrieveQuizs();
  }
  retrieveQuizs(): void {
    this.quizService.getAll()
      .subscribe(
        data => {
          this.quizs = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  refreshList(): void {
    this.retrieveQuizs();
    this.currentQuiz = undefined;
    this.currentIndex = -1;
  }
  setActiveQuiz(quiz: Quiz, index: number): void {
    this.currentQuiz = quiz;
    this.currentIndex = index;
  }

  removeAllQuizs(): void {
    this.quizService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.quizService.findByTitle(this.title)
      .subscribe(
        data => {
          this.quizs = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
