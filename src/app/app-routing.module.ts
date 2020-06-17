import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './components/user/register.component';
import {LoginComponent} from './components/user/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginSuccessComponent } from './components/user/login-success/login-success.component';
import {AppModalContentComponent} from './components/model/app.model.content.component';
import { RegisterSuccessComponent } from './components/user/register-success/register-success.component';



const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'reg',component:RegisterComponent},
  {path:'admin',component:AdminComponent},
  {path:'success',component:LoginSuccessComponent},
  {path:'registerSucc',component:RegisterSuccessComponent},
  {path:'model-content',component:AppModalContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
