export interface RegisterRequest {
  FirstName: string;
  LastName: string;
  Email: string;
  Password: string;
}
export interface RegisterResponse {
  userId: number;
}

export interface LoginRequest {
  Email: string;
  Password: string;
}

export interface LoginResponse {
  message: boolean;
  token: string;
}
