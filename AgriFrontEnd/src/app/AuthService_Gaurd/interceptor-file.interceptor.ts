import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class InterceptorFileInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Retrieve AuthService using injector
    const authService = this.injector.get(AuthService);
    
    // Get the token from AuthService
    const token = authService.GetToken();
    // console.log(token + "  hello");

    // Clone the request and set the new Authorization header
    const jwtToken = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    // Pass the modified request to the next handler
    return next.handle(jwtToken);
  }
}
