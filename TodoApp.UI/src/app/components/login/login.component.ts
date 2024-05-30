import { CommonModule, JsonPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../services/auth.service';
import { LoginRequest } from '../../models/auth.model';
import { Route, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
  ],
  providers: [AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      const request: LoginRequest = {
        Email: this.loginForm.get('email')?.value,
        Password: this.loginForm.get('password')?.value,
      };
      this.service.login(request).subscribe({
        next: (res) => {
          if (res.token) {
             console.log("asdasdas")
            this.router.navigateByUrl('/todo');

            this.snackBar.open('Logged in Succesfully', 'Close', {
              duration: 3000,
            });
          }
        },
        error: (err) => {
          this.snackBar.open(
            `Something wrong:${JSON.stringify(err.error)}`,
            'Close',
            {
              duration: 3000,
            }
          );
        },
      });
    } else {
      console.log('Form is not valid');
    }
  }
}
