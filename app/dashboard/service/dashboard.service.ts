import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
Observable
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
 private api="http://localhost:3000";
  constructor(private http:HttpClient) { }
  stdSignUp(data:any):Observable<any>{
  console.log("front end data come:",data);
   return this.http.post(`${this.api}/stdSignup`,data);
  }
  showStd(data:any):Observable<any>{
  console.log("front end data come:",data);
   return this.http.get(`${this.api}/Allget`);
  }
  deleteStudent(id:String):Observable<any>{
  return this.http.delete(`${this.api}/student/${id}`)
  }
  updateStudent(id: string, studentData: any): Observable<any> {
    return this.http.put(`${this.api}/student/${id}`, studentData);
  }
}
