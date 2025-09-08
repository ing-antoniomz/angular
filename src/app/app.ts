import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { Auth } from './services/auth';
import { CommonModule, NgIf } from '@angular/common';
import { CounterDisplay } from "./pages/counter-display";
import { CounterButtons } from "./pages/counter-butons";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgIf, CounterDisplay, CounterButtons], // 👈 agregar NgIf
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('angular');

  constructor(public auth: Auth, private router: Router) {}

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
