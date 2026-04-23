export interface User {
  id: number;
  email: string;
  nom: string;
  telephone?: string;
  localisation?: string;
  avatarUrl?: string;
  certification?: string;
  createdAt?: Date;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  nom: string;
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  userId: number;
  email: string;
  nom: string;
}

export interface RegisterResponse {
  id: number;
  email: string;
  nom: string;
}