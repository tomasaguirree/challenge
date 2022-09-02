import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http: HttpClient
  ) { }

  getTasks(texto: string = null) {
    return this.http.get<Task>(`${URL}/task`);
  }

  create(task: Task) {
    return new Promise(async (resolve) => {
      this.http.post<any>(`${URL}/task`, task).subscribe((res) => {
        resolve(res.response);
      }, err => {
        resolve(false);
      });
    });
  }

  update(task: Task) {
    return new Promise(async (resolve) => {
      this.http.put<any>(`${URL}/task`, task).subscribe((res) => {
        resolve(res.response);
      }, err => {
        resolve(false);
      });
    });
  }

  delete(task: Task) {
    const options = {
      headers: new HttpHeaders(),
      body: task
    };

    return new Promise(async (resolve, reject) => {
      this.http.delete<any>(`${URL}/task`, options).subscribe((res) => {
        resolve(res.response);
      }, err => {
        resolve(false);
      });
    });
  }
}
