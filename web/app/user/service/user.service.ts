import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  constructor(private http: Http) {}
  
  getUsers() {
    return this.makeRequest(`users`);
  }

  private makeRequest(path: string) {
    let params = new URLSearchParams();
    params.set('per_page', '100');

    let url = `https://localhost:3000/${ path }`;
    return this.http.get(url, {search: params})
      .map((res) => res.json());
  }
}