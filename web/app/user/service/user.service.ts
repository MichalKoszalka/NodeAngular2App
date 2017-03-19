import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  constructor(private http: Http) { }

  getUsers() {
    return this.makeRequest(`users`);
  }

  private makeRequest(path: string) {
    let url = `http://localhost:3000/api/v1/${path}`;
    return this.http.get(url).map((res) => res.json());
  }
}