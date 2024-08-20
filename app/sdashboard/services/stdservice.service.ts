import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StdserviceService {
  private api="http://localhost:3000"
  constructor(private http:HttpClient) { }

  getStd(data:any):Observable<any>{
  return this.http.post(`${this.api}/getStd`,{"email":data})
  }
}
