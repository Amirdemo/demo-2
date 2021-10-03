import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Quiz } from 'src/app/models/quiz.model';


@Component({
  selector: 'app-quiz-details',
  templateUrl: './quiz-details.component.html',
  styleUrls: ['./quiz-details.component.scss']
})
export class QuizDetailsComponent implements OnInit {

  currentQuiz: Quiz = {
    title: '',
    description: '',
    text1: '',
    text2: '',
    text3: '',
    text4: '',
    answer: '',
    published: false
  };
  message = '';

  constructor(
    private quizService: QuizService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.getQuiz(this.route.snapshot.params.id);
  }
  getQuiz(id: string): void {
    this.quizService.get(id)
      .subscribe(
        data => {
          this.currentQuiz = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  updatePublished(status: boolean): void {
    const data = {
      title: this.currentQuiz.title,
      description: this.currentQuiz.description,
      published: status
    };
    this.quizService.update(this.currentQuiz.id, data)
    .subscribe(
      response => {
        this.currentQuiz.published = status;
        console.log(response);
        this.message = response.message;
      },
      error => {
        console.log(error);
      });
}
updateQuiz(): void {
  this.quizService.update(this.currentQuiz.id, this.currentQuiz)
    .subscribe(
      response => {
        console.log(response);
        this.message = response.message;
      },
      error => {
        console.log(error);
      });
}
deleteQuiz(): void {
  this.quizService.delete(this.currentQuiz.id)
    .subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/quizs']);
      },
      error => {
        console.log(error);
      });
}

}
