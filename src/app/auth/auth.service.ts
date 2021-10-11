import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<{ user: User }> {
    return this.http.post<{ user: User }>(`/v1/auth/login`, {
      username,
      password,
    });
  }

  me(): Observable<{ user: User }> {
    return this.http.get<{ user: User }>(`/v1/auth/me`);
  }

  logout() {
    return this.http.get(`/v1/auth/logout`);
  }
}
