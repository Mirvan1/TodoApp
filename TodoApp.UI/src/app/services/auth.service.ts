import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from '../models/auth.model';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl: string = `${environment.baseUrl}auth/`;

  constructor(private httpClient: HttpClient) {}

  register(request: RegisterRequest): Observable<RegisterResponse> {
    return this.httpClient
      .post<RegisterResponse>(`${this.apiUrl}register`, request)
      .pipe(
        map((x) => x as RegisterResponse)
      );
  }

  login(request: LoginRequest): Observable<LoginResponse> {
    return this.httpClient
      .post<LoginResponse>(`${this.apiUrl}login`, request)
      .pipe(
        tap((x) => localStorage.setItem('token', x.token)),
        map((x) => x as LoginResponse)
      );
  }

  isTokenExpired(token: string): boolean {
    const decoded = jwtDecode(token);
    if (decoded.exp === undefined) {
      return false;
    }

    const currentTime = Date.now() / 1000;
    return decoded.exp > currentTime;
  }

  getFullName():string{
    const decoded:any=jwtDecode(localStorage.getItem('token')!);
    if(decoded.exp===undefined)
        localStorage.clear();
    
    return decoded['username'];
  }

  logout() {
    localStorage.clear();
  }
  

  
}
