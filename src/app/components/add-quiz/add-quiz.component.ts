import { QuizService } from 'src/app/services/quiz.service';
import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/models/quiz.model';



@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.scss']
})
export class AddQuizComponent implements OnInit {

  quiz: Quiz = {
    title: '',
    description: '',
    text1: '',
    text2: '',
    text3: '',
    text4: '',
    answer: '',
    iscorrect: false,
    published: false
  };
  submitted = false;

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
  }

  saveQuiz(): void {
    const data = {
      title: this.quiz.title,
      description: this.quiz.description,
      text1: this.quiz.text1,
      text2: this.quiz.text2,
      text3: this.quiz.text3,
      text4: this.quiz.text4,
      answer: this.quiz.answer,
      iscorrect: this.quiz.iscorrect
    };
    this.quizService.create(data)
    .subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
}
newQuiz(): void {
  this.submitted = false;
  this.quiz = {
    title: '',
    description: '',
    text1: '',
    text2: '',
    text3: '',
    text4: '',
    answer: '',
    iscorrect: false,
    published: false
  };
}

}
