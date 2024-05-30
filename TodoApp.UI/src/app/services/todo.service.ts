import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  apiUrl: string = `${environment.baseUrl}todo/`;

  constructor(private httpClient: HttpClient) {}

  getAllTodos(): Observable<Todo[]> {
    return this.httpClient
      .get<Todo[]>(`${this.apiUrl}`)
      .pipe(map((x) => x as Todo[]));
  }

  getTodoById(id: number): Observable<Todo> {
    return this.httpClient
      .get<Todo>(`${this.apiUrl}/${id}`)
      .pipe(map((x) => x as Todo));
  }

  createTodo(todo: Todo): Observable<Todo> {
    return this.httpClient
      .post<Todo>(`${this.apiUrl}`, todo)
      .pipe(map((x) => x as Todo));
  }

  updateTodo(todo: Todo): Observable<Todo> {
    return this.httpClient
      .put<Todo>(`${this.apiUrl}/${todo.Id}`, todo)
      .pipe(map((x) => x as Todo));
  }

  deleteTodo(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }

 
}
