import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../service/dashboard.service';

import { MatDialog } from '@angular/material/dialog';
import { AddStdComponent } from '../add-std/add-std.component';
import { ConfirmdelteComponent } from '../confirmdelte/confirmdelte.component';
@Component({
  selector: 'app-show-std',
  templateUrl: './show-std.component.html',
  styleUrls: ['./show-std.component.css'],
})
export class ShowStdComponent implements OnInit {
  students: any[] = [];
  isEditDialogOpen = false;
  editStudentData: any = {};

  constructor(private api: DashboardService,private dialog: MatDialog ) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(AddStdComponent, {
      width: '500px',
      data: {} // Pass any data if needed
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) { // If result is `true`, it means the student was added successfully
        this.loadStudents(); // Refresh the student list
      }
    });
  }
  loadStudents() {
    let emailTeach = localStorage.getItem('emailTeacher');
    console.log('email teacher=', emailTeach);

    this.api.showStd(emailTeach).subscribe((res) => {
      console.log('here is all students response', res);
      this.students = res;
    });
  }
  ngOnInit() {
    let emailTeach = localStorage.getItem('emailTeacher');
    console.log('email teacher=', emailTeach);

    this.api.showStd(emailTeach).subscribe((res) => {
      console.log('here is all students response', res);
      this.students = res;
    });
  }

  openEditDialog(student: any) {
    this.editStudentData = { ...student }; // Clone the student data
    this.isEditDialogOpen = true;
  }

  closeEditDialog() {
    this.isEditDialogOpen = false;
  }

  saveEdit() {
    console.log('Edited student data:', this.editStudentData);
    // Call the update API with the edited student data
    this.api.updateStudent(this.editStudentData._id, this.editStudentData).subscribe((res) => {
      console.log('Update response:', res);
      // Update the local student list with the edited data
      const index = this.students.findIndex(student => student._id === this.editStudentData._id);
      if (index !== -1) {
        this.students[index] = { ...this.editStudentData };
      }
      this.isEditDialogOpen = false;
    });
  }

  deleteStudent(id: string) {
    if (id) {
      this.api.deleteStudent(id).subscribe(res => {
        this.students = this.students.filter(student => student._id !== id);
        console.log('Student deleted successfully');
      });
    } else {
      console.error('Student ID is undefined!');
    }
  }
  openConfirmationDialog(studentId: string): void {
    const dialogRef = this.dialog.open(ConfirmdelteComponent, {
      width: '400px',
      data: { message: 'Are you sure you want to delete this student?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteStudent(studentId);
      }
    });
  }
}
