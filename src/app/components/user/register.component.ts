import {Component} from '@angular/core'
import{FormControl,FormGroup} from '@angular/forms'
import {Validators} from '@angular/forms'
import { RegisterService } from '../../services/register.service';
@Component({
    selector:'register-component',
    templateUrl:'./register.html'
})
export class RegisterComponent
{
    registerForm=new FormGroup({
        firstName:new FormControl('',Validators.required),
        lastName:new FormControl('',Validators.required),
        age:new FormControl('',Validators.required),
        userName:new FormControl('',Validators.required),
        password:new FormControl('',Validators.required),
        gender:new FormControl('',Validators.required),
        address:new FormControl('',Validators.required)
    });
    constructor(private registerService:RegisterService) {}
    ngOnInit()
    {
      
    }
    get f() { return this.registerForm.controls; }
    onSubmit() {
        // TODO: Use EventEmitter with form value
        let user=this.registerForm.value;
        let response=this.registerService.registerUser(user);
        response.subscribe(data=>this.registerService.registerSuccess())
      }
}