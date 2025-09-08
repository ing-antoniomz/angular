// auth.guard.ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from './auth';
import { jwtDecode } from 'jwt-decode';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(Auth);
  const router = inject(Router);

  const token = auth.getToken();



  if (token) {
    // si hay token, deja entrar
    if (token) {
      const payload: any = jwtDecode(token);
      const isExpired = payload.exp * 1000 < Date.now();
      if (!isExpired) return true;
    }
    return true;
  }

  // si no hay token, redirige al login
  router.navigate(['/login']);
  return false;
};
