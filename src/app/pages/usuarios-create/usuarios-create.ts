import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Para ngModel
import { UsuariosService, User } from '../../services/usuarios.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-usuarios-create',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './usuarios-create.html',
  styleUrls: ['./usuarios-create.css']
})
export class UsuariosCreate {
  user: string = '';
  email: string = '';
  password: string = '';
  mensaje: string[] = [];
  nombre: string = '';
  apellidoPaterno: string = '';
  apellidoMaterno: string = '';
  cuentaAp: string = '';
  status: boolean = false;

  constructor(private usuariosService: UsuariosService) {}

  crearUsuario() {
    const nuevoUsuario: any = {
      user: this.user,
      nombre: this.nombre,
      apellidoPaterno: this.apellidoPaterno,
      apellidoMaterno: this.apellidoMaterno,
      cuentaAp: this.cuentaAp,
      status: this.status,
      email: this.email,
      password: this.password
    };

    this.usuariosService.createUsuario(nuevoUsuario).subscribe({
      next: res => {
        this.mensaje = ['Usuario creado correctamente'];
        this.user = '';
        this.nombre = '';
        this.apellidoPaterno = '';
        this.apellidoMaterno = '';
        this.cuentaAp = '';
        this.status = false;
        this.email = '';
        this.password = '';
      },
      error: (err: any) => {
        console.error(err);
        if (Array.isArray(err.error.message)) {
          this.mensaje = err.error.message;
        } else {
          this.mensaje = [err.error.message || 'Error desconocido'];
        }
      }
    });
  }
}
