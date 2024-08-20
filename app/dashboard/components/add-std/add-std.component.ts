import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from '../../service/dashboard.service';
import { Router } from '@angular/router';
import { DashboardComponent } from '../../dashboard.component';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-std',
  templateUrl: './add-std.component.html',
  styleUrls: ['./add-std.component.css']
})
export class AddStdComponent implements OnInit {
  uploadedFiles: Array<File> = [];
  addStudentForm!: FormGroup;
  imageError: string | null = null;
  selectedImage: File | null = null;

  constructor(private fb: FormBuilder, private api: DashboardService,private route:Router,private dialogRef: MatDialogRef<DashboardComponent>) { }

  ngOnInit(): void {
    this.addStudentForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      image: [null]  // This field is optional and used to store image file
    });
  }

  onFileChange(event: any) {
    this.uploadedFiles = event.target.files;
    if (event.target.files && event.target.files[0]) {
      this.selectedImage = event.target.files[0];  // Set the first file as selectedImage
    }
    console.log(`element.target.files: ${event.target.files}`);
  }

  onSubmit() {
    if (this.addStudentForm.valid && this.uploadedFiles.length > 0) {
      const formData = new FormData();
      formData.append('name', this.addStudentForm.get('name')?.value);
      formData.append('email', this.addStudentForm.get('email')?.value);
      formData.append('password', this.addStudentForm.get('password')?.value);

      for (let i = 0; i < this.uploadedFiles.length; i++) {
        formData.append('image', this.uploadedFiles[i], this.uploadedFiles[i].name);
      }

      console.log("FORM DATA IS =>", formData);

      // Make API call to submit the form data
      this.api.stdSignUp(formData).subscribe(response => {
        console.log('Form submitted successfully', response);
        if(response.user.email){
          localStorage.setItem("emailTeacher",JSON.stringify(response.user.email_teacher))
          if(response.user.email) {
            this.dialogRef.close(true); 
          }
          // this.route.navigate(["/dashboard/showStd"])

        }
      });
    } else if (!this.selectedImage) {
      this.imageError = 'Please upload an image.';
    }
  }
}
