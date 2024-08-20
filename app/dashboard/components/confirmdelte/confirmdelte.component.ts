import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-confirmdelte',
  templateUrl: './confirmdelte.component.html',
  styleUrls: ['./confirmdelte.component.css']
})
export class ConfirmdelteComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmdelteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string }
  ) { }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }
}
