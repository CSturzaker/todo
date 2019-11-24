import { Component, Inject } from '@angular/core'
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog'

@Component({
  selector: 'todo-todo-dialog',
  templateUrl: 'todo-dialog.html',
  styles: [
    `
      mat-form-field {
        width: 100%;
      }
    `,
  ],
})
export class TodoDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<TodoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: object
  ) {}

  onNoClick(): void {
    this.dialogRef.close()
  }
}
