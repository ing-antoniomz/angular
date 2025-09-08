import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-counter-display',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="alert alert-info text-center">
      Contador actual: <strong>{{ counter() }}</strong>
    </div>
  `
})
export class CounterDisplay {
  counter;

  constructor(public counterService: CounterService) {
    // accedemos al signal directamente
    this.counter = this.counterService.counter;
  }
}
