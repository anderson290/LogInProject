import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  url: string = environment.url;
  
  constructor(private http: HttpClient) { }

  validateCpf(params) {
    return this.http.get(`${this.url}/validaCPF/${params}`);
  }

  validateDate(params) {
    return this.http.get(`${this.url}/validaDataNascimento/${params}`);
  }

  save(params){
    return this.http.post(`${this.url}/salvar`, params);
  }

}
