import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router'
import {tokenNotExpired} from 'angular2-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient,private router:Router) { }
  public getToken(): string {
    return localStorage.getItem('token');
  }
  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    // return a boolean reflecting 
    // whether or not the token is expire
    return tokenNotExpired(null, token);
  }
  authenticate(users) {
    console.log(users);
  return this.http.post("http://localhost:8080/authenticate",users,{responseType:'text' as 'json'})
    
  }
  loginSuccess()
  {
    this.router.navigate(['/success']);
  }
}
