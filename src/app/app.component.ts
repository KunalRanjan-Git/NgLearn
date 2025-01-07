import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent {
  message = 'Hello, world!';
}
