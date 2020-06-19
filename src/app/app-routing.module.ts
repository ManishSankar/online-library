import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/user/register.component';
import { LoginComponent } from './components/user/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginSuccessComponent } from './components/user/login-success/login-success.component';
import { AppModalContentComponent } from './components/model/app.model.content.component';
import { RegisterSuccessComponent } from './components/user/register-success/register-success.component';
import {
  AuthGuardService as AuthGuard
} from './services/auth.guard.service';



const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  { path: 'reg', component: RegisterComponent, canActivate: [AuthGuard], runGuardsAndResolvers: 'always' },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    runGuardsAndResolvers: 'always'
  },
  { path: 'success', component: LoginSuccessComponent, canActivate: [AuthGuard], runGuardsAndResolvers: 'always' },
  { path: 'registerSucc', component: RegisterSuccessComponent, canActivate: [AuthGuard], runGuardsAndResolvers: 'always' },
  { path: 'model-content', component: AppModalContentComponent, canActivate: [AuthGuard], runGuardsAndResolvers: 'always' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
