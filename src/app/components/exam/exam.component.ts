import { Component, OnInit } from '@angular/core';
import { Quiz } from '../../models/quiz.model';
import { QuizService } from 'src/app/services/quiz.service';
enum CheckBoxType { text1, text2, text3, text4 , NONE };


@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {

  check_box_type = CheckBoxType;
  currentlyChecked: string = '';

  quizs?: Quiz[];
currentQuiz?: Quiz;
currentIndex = -1;
description = '';


  constructor(private quizService: QuizService) { }

  selectCheckBox(targetType: string) {
    this.currentlyChecked = targetType;
  }
  checkanswer(){
    console.log(this.currentQuiz)
    let data = {
      id: this.currentQuiz?.id,
      answer: this.currentlyChecked
    }
    console.log(data);
    this.quizService.submitAnswer(data).subscribe(res => {
      console.log('response of submit:'  , res)
      alert(res["accepted"]? 'sahih ast ':"eshtebah ast!")
    })
  }
  setActiveQuestion(quiz: Quiz, index: number): void {
    this.currentQuiz= quiz;
    this.currentIndex = index;
  }
  ngOnInit(): void {
    this.retrieveQuestion();
  }
  retrieveQuestion(): void {
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
}
