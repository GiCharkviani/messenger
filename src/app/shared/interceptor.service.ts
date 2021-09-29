import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'

@Injectable({providedIn: 'root'})

export class AppInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('request on the way')
    return next.handle(req).pipe(tap(res => {
      console.log(res, 'here')
    }))
  }
}
