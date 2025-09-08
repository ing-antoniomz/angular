import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-counter-buttons',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="d-flex justify-content-center gap-2">
      <button class="btn btn-success" (click)="counterService.increment()">➕ Incrementar</button>
      <button class="btn btn-warning" (click)="counterService.decrement()">➖ Decrementar</button>
      <button class="btn btn-danger" (click)="counterService.reset()">🔄 Reset</button>
    </div>
  `
})
export class CounterButtons {
  constructor(public counterService: CounterService) {}
}
