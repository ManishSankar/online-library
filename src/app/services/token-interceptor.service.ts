import { Injectable } from '@angular/core';
import {HttpRequest,HttpHandler,HttpEvent,HttpInterceptor} from '@angular/common/http';
import {AuthenticationService} from './authentication.service'
import { Observable } from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
@Injectable()
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private authService:AuthenticationService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    if(request.url != 'http://localhost:8080/api/authenticate'){
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authService.getToken()}`
        }
      });
    }
    
    console.log('req',request);
    return next.handle(request);
  }
}
