import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quiz } from '../models/quiz.model';
import { environment } from 'src/environments/environment.prod';

const baseUrl = 'https://calm-dawn-68453.herokuapp.com/api/Quizs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(baseUrl);
  }

  get(id: any): Observable<Quiz> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(`${baseUrl}?title=${title}`);
  }
  submitAnswer(data:any): Observable<any> {
    return this.http.post<any>(`${baseUrl}/submit-answer` , data);
  }
}
