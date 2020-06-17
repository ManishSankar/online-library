import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router'
import {tokenNotExpired} from 'angular2-jwt';
import { map } from 'rxjs/operators';
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
  return this.http.post("http://localhost:8080/api/authenticate",users,{responseType:'text' as 'json'}).pipe(
    map(
      token => {
       // sessionStorage.setItem('username',userName);
      //  let tokenStr= 'Bearer '+userData;
      //  console.log(tokenStr);
       localStorage.setItem('token', token+'');
       return token;
      }
    )
   );
    
  }
  loginSuccess()
  {
    this.router.navigate(['/success']);
  }
}
