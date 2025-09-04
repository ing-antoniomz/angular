import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UsuariosService, User } from '../../services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  standalone: true,              // 👈 indica que es standalone
  imports: [CommonModule, HttpClientModule], // 👈 necesarios para *ngFor y HttpClient
  templateUrl: './usuarios.html',
  styleUrls: ['./usuarios.css']   // 👈 corregido: styleUrls (plural)
})
export class Usuarios implements OnInit {
  usuarios: User[] = [];
  cargando = true;
  error: string | null = null;

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.usuariosService.getUsuarios().subscribe({
      next: (data) => {
        this.usuarios = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al obtener usuarios', err);
        this.error = 'No se pudieron cargar los usuarios.';
        this.cargando = false;
      }
    });
  }
}
