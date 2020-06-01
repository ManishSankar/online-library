import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {register} from './User/register.component'
import {login} from './User/login.component'


const routes: Routes = [
  {path:'',component:login},
  {path:'reg',component:register}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
