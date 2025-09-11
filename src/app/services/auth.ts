import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private loginUrl = 'http://localhost:3000/api/auth/login';
  private logoutUrl = 'http://localhost:3000/api/auth/logout';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {

    return this.http.post<{ access_token: string }>(`${this.loginUrl}`, { username, password })
      .pipe(
        tap(response => {
          localStorage.setItem('token', response.access_token);
        })
      );
  }

  logout() {
    localStorage.removeItem('token');
    this.http.post<{ access_token: string }>(`${this.logoutUrl}`,{});
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
