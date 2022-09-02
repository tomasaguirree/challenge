import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Status } from '../interfaces/interfaces';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(
    private http: HttpClient
  ) { }

  getStatus(texto: string = null) {
    return this.http.get<Status>(`${URL}/status`);
  }
}
