import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { SpinnerService } from './spinner.service';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor(private spinnerService: SpinnerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.spinnerService.show();  // Show spinner when the request starts

    const token = localStorage.getItem('token');
    const modifiedRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log("Modified request=>",modifiedRequest);
    
    return next.handle(modifiedRequest).pipe(
      finalize(() => this.spinnerService.hide())  // Hide spinner when the request ends
    );
  }
}
