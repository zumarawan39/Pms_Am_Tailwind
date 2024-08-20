import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signInForm!: FormGroup;

  constructor(private fb: FormBuilder , private api:AuthServiceService, private route:Router) {
    this.signInForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    }, {
      validator: this.mustMatch('password', 'confirmPassword')
    });
  }

  mustMatch(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[password];
      const matchingControl = formGroup.controls[confirmPassword];
      
      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        return;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  onSubmit() {
    if (this.signInForm.valid) {
      let data = this.signInForm.value;
      console.log('Form Submitted', data);
      
      this.api.signUpTch(data).subscribe(
        (res) => {
        if(res.email){
        this.route.navigate(['signin'])
        }
        },
        (error) => {
          console.error("Error:", error);
        }
      );
    } else {
      console.log('Form is not valid');
    }
  }
  
}
