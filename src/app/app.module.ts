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
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
