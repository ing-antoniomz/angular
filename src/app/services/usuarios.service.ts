import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export interface User {
  id: number;
  username: string;
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
  private apiUrl = 'http://localhost:3000/api/usuarios/';

  // Signal para notificaciones
  notification = signal<string | null>(null);

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  createUsuario(usuario: Partial<User & { password: string }>) {
    return this.http.post<User>(this.apiUrl, usuario).pipe(
      tap((newUser: User) => {
        // Actualizamos el signal al ser exitosa la creación
        this.notification.set(`Usuario "${newUser.username}" creado`);
        // Limpiar la notificación después de 3 segundos
        setTimeout(() => this.notification.set(null), 3000);
      })
    );
  }
}
