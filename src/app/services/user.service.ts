import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = environment.url;
  data: any;
  constructor(private http: HttpClient) { }

  loginUser(params) {    
    this.data = this.http.post(`${this.url}/login`, params);
    return this.data;
  }

  authUser(){
    if(this.data){
      return true;
    }else{
      return false;
    }
  }
}
