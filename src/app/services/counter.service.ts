import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  // Signal compartido
  counter = signal(0);

  increment() {
    this.counter.update(value => value + 1);
  }

  decrement() {
    this.counter.update(value => value - 1);
  }

  reset() {
    this.counter.set(0);
  }
}
