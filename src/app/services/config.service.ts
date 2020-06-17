import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }

  saveBooks(data){
    this.http
    .post(
      'http://localhost:8080/api/saveBook',data
    )
    .subscribe(res => {
        console.log(res);
    });
  }
}