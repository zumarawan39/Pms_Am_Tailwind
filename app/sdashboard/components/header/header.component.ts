import { Component, OnInit } from '@angular/core';
import { StdserviceService } from '../../services/stdservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  headerImageUrl!: string;

constructor(private api:StdserviceService,private route:Router){}
ngOnInit(): void {
  let stdEmail=localStorage.getItem("stdEmail");
  console.log(stdEmail);
  this.api.getStd(stdEmail).subscribe((res)=>{
    console.log("backend response",res);
    this.headerImageUrl = res.data2.image;
    
  })
}
logOut(){
  localStorage.removeItem("stdEmail");
  this.route.navigate(['signin'])

}
}
