import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }

  saveBooks(data){
   return this.http
    .post(
      'http://localhost:8080/api/saveBook',data
    )
  }
}