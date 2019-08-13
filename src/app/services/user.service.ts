import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = environment.url;
  constructor(private http: HttpClient) { }

  loginUser(params) {
    console.log(params);
    return this.http.post(`${this.url}/login`, params);
  }
}
