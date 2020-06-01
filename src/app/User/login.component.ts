import {Component} from '@angular/core'
import {FormControl,FormGroup} from '@angular/forms'
import {Validators} from '@angular/forms'
import { Router } from '@angular/router';
@Component({
    selector:'login-component',
    templateUrl:'./login.html'

})
export class login
{
    loginForm=new FormGroup({
        username:new FormControl('',Validators.required),
        password:new FormControl('',Validators.required)
    });

    constructor(private router: Router) {}
    get f() { return this.loginForm.controls; }

    onSubmit() {
        // TODO: Use EventEmitter with form value
        console.log(this.loginForm.value);
      }
      gotoRegister()
      {
        this.router.navigate(['/reg']); 
      }

}