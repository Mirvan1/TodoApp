import { Component, Inject } from '@angular/core';
import { Todo } from '../../../models/todo.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../../../services/todo.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-todo',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
  ],

  templateUrl: './edit-todo.component.html',
  styleUrl: './edit-todo.component.scss',
})
export class EditTodoComponent {
  todoForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditTodoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { todo: Todo },
    private fb: FormBuilder,
    private todoService: TodoService,
    private snackBar: MatSnackBar
  ) {
    this.todoForm = this.fb.group({
      Title: [data.todo?.Title || '', Validators.required],
      Description: [data.todo?.Description || ''],
      Status: [data.todo?.Status.toString() || '', Validators.required],
      DueDate: [data.todo?.DueDate || ''],
      CreatedAt: [data.todo?.CreatedAt || ''],
    });
  }

  onSubmit(): void {
    debugger;
    if (this.todoForm.valid) {
      console.log('asfdsf');
      const formResult: Todo = {
        Title: this.todoForm.get('Title')?.value,
        Description: this.todoForm.get('Description')?.value,
        Status: this.todoForm.get('Status')?.value,
        CreatedAt: new Date(),
        DueDate: this.todoForm.get('DueDate')?.value,
      };
      console.log('asdfdsf', formResult);
      if (this.data.todo?.Id) {
        formResult.Id = this.data.todo?.Id;
        this.todoService.updateTodo(formResult).subscribe({
          next: (res) => {
            this.dialogRef.close(true);
          },
          error: (err) => {
            this.snackBar.open(
              `Something wrong: ${JSON.stringify(err)}`,
              'Close',
              {
                duration: 3000,
              }
            );
          },
        });
      } else {
        this.todoService.createTodo(formResult).subscribe({
          next: (res) => {
            this.dialogRef.close(true);
          },
          error: (err) => {
            this.snackBar.open(
              `Something wrong: ${JSON.stringify(err)}`,
              'Close',
              {
                duration: 3000,
              }
            );
          },
        });
      }
    } else {
      this.snackBar.open('Form is not filled correctly', 'Close', {
        duration: 3000,
      });
    }
  }
}
