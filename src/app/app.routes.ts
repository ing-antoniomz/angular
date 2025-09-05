import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/login/login').then((m) => m.Logint),
  },
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'usuarios',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/usuarios/usuarios').then((m) => m.Usuarios),
      },
      {
        path: 'crear',
        loadComponent: () =>
          import('./pages/usuarios-create/usuarios-create').then(
            (m) => m.UsuariosCreate
          ),
      }
    ]
  },
  { path: '**', redirectTo: '' }
];
