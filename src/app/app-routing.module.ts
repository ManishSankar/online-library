import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {register} from './User/register.component';
import {login} from './User/login.component';
import { AdminComponent } from './components/admin/admin.component';
import {AppComponent} from './app.component';


const routes: Routes = [
  {path:'login',component:login},
  {path:'reg',component:register},
  {path:'admin',component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
