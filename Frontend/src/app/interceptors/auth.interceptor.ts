import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
  
    let token = localStorage.getItem("token");
    let newRequest : HttpRequest<any>;
     newRequest = request.clone({
        headers: request.headers.set("Authorization","Bearer " + token)
    });

    return next.handle(newRequest);
  }
}
