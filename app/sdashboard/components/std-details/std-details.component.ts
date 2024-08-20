import { Component, OnInit } from '@angular/core';
import { StdserviceService } from '../../services/stdservice.service';

@Component({
  selector: 'app-std-details',
  templateUrl: './std-details.component.html',
  styleUrls: ['./std-details.component.css']
})
export class StdDetailsComponent implements OnInit {
  studentName!: string;
  teacherEmail!: string;
  teacherPassword!: string;
  teacherImage!: string;
  stdEmail!:string;

  constructor(private api: StdserviceService) {}

  ngOnInit(): void {
    // Retrieve the student's email from localStorage
    const stdEmail = localStorage.getItem('stdEmail');
    if (stdEmail) {
      this.api.getStd(stdEmail).subscribe((response) => {
        console.log("std details=>", response);
        
        this.studentName = response.data2.name;
        this.teacherEmail = response.data2.email_teacher;
        this.stdEmail = response.data2.email;
        this.teacherPassword = response.data2.password;
        this.teacherImage = response.data2.image;
      });
    } else {
      console.error('No student email found in localStorage');
    }
  }
}
