import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { MatDialog } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_NATIVE_DATE_FORMATS,
  MatNativeDateModule,
  NativeDateAdapter,
} from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    CommonModule,
    NgIf,
    NgClass,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatDividerModule,
    MatCardModule,
    MatButtonToggleModule
  ],

  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent{
  todos: Todo[] = [];
  currentDate: Date = new Date();
  filterTodos = new FormControl('');
  selectedFilter?: number=1;
  constructor(
    private todoService: TodoService,
    public dialog: MatDialog,
    public authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}


  ngOnInit(): void {
    this.loadTodos();
  }
 

  loadTodos(status?:number): void {
    this.todoService.getAllTodos(status).subscribe({
      next: (res) => {
        this.todos = res;
      },
      error: (err) => {
        this.snackBar.open(`Something wrong: ${JSON.stringify(err)}`, 'Close', {
          duration: 3000,
        });
      },
    });
  }

  openAddEditDialog(todo?: Todo): void {
    const dialogRef = this.dialog.open(EditTodoComponent, {
      width: '550px',
      data: todo ? { todo } : {},
    });

    dialogRef.afterClosed().subscribe({
      next: (res: any) => {
        if (res) {
          this.loadTodos(this.selectedFilter);
        }
      },
      error: (err: any) => {},
    });
  }

  openConfirmDialog(id?: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: { message: 'Are you sure you want to delete this todo?' },
    });

    dialogRef.afterClosed().subscribe({
      next: (res: any) => {
        if (res && id) {
          this.todoService.deleteTodo(id).subscribe(() => this.loadTodos(this.selectedFilter));
        }
      },
      error: () => {
        this.snackBar.open('Cannot delete todo', 'Close', {
          duration: 3000,
        });
      },
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
  isTodoActive(dueDate?: string | Date, status?: number): boolean {
    if (!dueDate) {
      return false;
    }

    const due = new Date(dueDate);
    return due < this.currentDate || status === 3;
  }

  getStatusLabel(status: number): string {
    const statusLabels: any = {
      1: 'New',
      2: 'In Progress',
      3: 'Done',
    };
    return statusLabels[status] || 'Unknown';
  }

  onFilterChange($e:any){
    this.loadTodos($e);
  }
}
