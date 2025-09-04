import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  user: string;
  email?: string;
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  cuentaAp: string;
  status: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private apiUrl = 'http://localhost:3000/usuarios/';

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
}
