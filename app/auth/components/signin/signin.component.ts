import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{
  loginVar!: FormGroup;
  isTeacher: boolean = false;
 ngOnInit(): void {
  //  localStorage.setItem("isTeacher","")
 }
  constructor(private fb: FormBuilder, private api: AuthServiceService, private route: Router) {
    this.loginVar = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]]
    });

    // Check localStorage for the "isteacher" value
    this.isTeacher = localStorage.getItem("isteacher") === "true";
  }

  login() {
    if (this.isTeacher) {
      let data = this.loginVar.value;
      this.api.loginTch(data).subscribe((res) => {
        console.log("back end response", res);
        if(res.message){
          alert(res.message)
        }else{
        localStorage.setItem("token", `${res.token}`);
        this.route.navigate(["dashboard"]);
        }
      });
      console.log("Teacher login", this.loginVar.value);
    } else {
      let data = this.loginVar.value;
      this.api.loginStd(data).subscribe((res) => {
        console.log("back end response", res);
        if(res.message){
          alert(res.message)
        }else if(res.email){
          localStorage.setItem("stdEmail",res.email);
          this.route.navigate(["StdDashboard/std"]);
          };
      });
    }
  }
}
