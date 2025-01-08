import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sample',
  standalone: true,
  imports: [],
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.css'
})
export class SampleComponent {
  dataService = inject(DataService);
  handle() {
    this.dataService.setValue(Math.random());
  }
}
