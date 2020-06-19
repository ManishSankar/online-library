import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from '@ag-grid-community/angular';
import {LoginComponent } from './components/user/login.component';
import { ReactiveFormsModule} from '@angular/forms'
import{RegisterComponent} from './components/user/register.component';
import { AdminComponent } from './components/admin/admin.component';
import {LoginSuccessComponent} from './components/user/login-success/login-success.component';
import {AppModalContentComponent} from './components/model/app.model.content.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ConfigService} from './services/config.service';
import {AuthGuardService} from './services/auth.guard.service';
import {TokenInterceptorService} from './services/token-interceptor.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,LoginComponent,RegisterComponent, AdminComponent, LoginSuccessComponent
    ,AppModalContentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    NgbModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true },
    ConfigService,AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
