import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  counter = signal(1);
  constructor() { }

  setValue(n: number) {
    this.counter.update(() => n);
  }
}
