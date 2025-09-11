import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class Logint {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: Auth, private router: Router) {}

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe({
      next: () => this.router.navigate(['/']),
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Credenciales inválidas';
      }
    });
  }
}
