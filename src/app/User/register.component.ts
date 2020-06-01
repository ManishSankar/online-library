import {Component} from '@angular/core'
import{FormControl,FormGroup} from '@angular/forms'
import {Validators} from '@angular/forms'
@Component({
    selector:'register-component',
    templateUrl:'./register.html'
})
export class register
{
    registerForm=new FormGroup({
        firstname:new FormControl('',Validators.required),
        lastname:new FormControl('',Validators.required),
        age:new FormControl('',Validators.required),
        username:new FormControl('',Validators.required),
        password:new FormControl('',Validators.required),
        gender:new FormControl('',Validators.required),
        address:new FormControl('',Validators.required)
    });

    get f() { return this.registerForm.controls; }
    onSubmit() {
        // TODO: Use EventEmitter with form value
        console.log(this.registerForm.value);
      }
}