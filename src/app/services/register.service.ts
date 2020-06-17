import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient,private router:Router) { }
  registerUser(user) {
  return this.http.post("http://localhost:8080/api/registerUser",user,{responseType:'text' as 'json'})
    
  }

  registerSuccess()
  {
    this.router.navigate(['/registerSucc']);
  }
}
