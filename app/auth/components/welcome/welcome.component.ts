import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements  OnInit{
  ngOnInit(): void {
    localStorage.setItem("isteacher", ""); 
  }
  constructor(public route:Router){
  }
  teacher(){
    localStorage.setItem("isteacher",JSON.stringify(true));
    this.route.navigate(["signup"]);
    
    }
   student(){
    localStorage.setItem("isteacher",JSON.stringify(false));
    this.route.navigate(["signin"]);
   }
}
