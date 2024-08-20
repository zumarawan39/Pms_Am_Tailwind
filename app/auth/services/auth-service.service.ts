import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private api = 'http://localhost:3000';
  constructor(private http: HttpClient, private router: Router) {}
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token'); // Check if a token exists
  }

  signUpTch(data: any): Observable<any> {
    return this.http.post<any>(`${this.api}/tSignin`, data).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  loginTch(data: any): Observable<any> {
    return this.http.post<any>(`${this.api}/Tlogin`, data).pipe(
      catchError(this.handleError.bind(this))
    );
  }
  
  loginStd(data: any): Observable<any> {
    return this.http.post<any>(`${this.api}/std_login`, data).pipe(
      catchError(this.handleError.bind(this))
    );
  };

  private handleError(error: HttpErrorResponse) {
    if (error.status === 401 || error.status === 403) {
      // Handle token expiration or unauthorized access
      if (error.error && error.error.message === 'jwt expired') {
        this.router.navigate(['/login'], { queryParams: { expired: true } });
      } else {
        this.router.navigate(['/error'], { queryParams: { message: error.error.message || 'Unauthorized access' } });
      }
    } else if (error.status === 0) {
      this.router.navigate(['/error'], { queryParams: { message: 'Network error' } });
    } else {
      console.error('Error status: ', error.status);
      console.error('Error body: ', error.error);
      this.router.navigate(['/error'], { queryParams: { message: 'Something went wrong!' } });
    }
    return throwError(() => new Error(error.error.message || 'Something went wrong!'));
  }
}