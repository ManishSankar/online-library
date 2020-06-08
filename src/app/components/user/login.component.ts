import {Component} from '@angular/core'
import {FormControl,FormGroup} from '@angular/forms'
import {Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
@Component({
    selector:'login-component',
    templateUrl:'./login.html'

})
export class LoginComponent
{
    loginForm=new FormGroup({
        userName:new FormControl('',Validators.required),
        password:new FormControl('',Validators.required)
    });

    constructor(private router: Router,private loginService:AuthenticationService) {}
    ngOnInit()
    {
      
    }
    get f() { return this.loginForm.controls; }
    onSubmit() {
        // TODO: Use EventEmitter with form value
        let users=this.loginForm.value;
        let response=this.loginService.authenticate(users);
        response.subscribe(data=>this.loginService.loginSuccess())
      }
      gotoRegister()
      {
        this.router.navigate(['/reg']); 
      }

}