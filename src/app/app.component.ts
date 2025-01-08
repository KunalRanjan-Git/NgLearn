import { Component, computed, signal, ViewEncapsulation } from '@angular/core';
import { SampleComponent } from './sample/sample.component';
import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SampleComponent,DemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent {















































//   cssClass = computed(() =>
//    this.counter() >= 10 ? ['text-danger', 'fw-bold'] : 'text-primary'
//  );


//   counter = signal(1);
  
//   increment() {
//     this.counter.update((v)=>v+1);
//   }

//   decrement() {
//     this.counter.update((v)=>v-1);
//   }




//   High = false;
//   Toggle() {
//   this.High = !this.High;
// }
//   message = 'Hello, world!';
//   handleMessage(m: string) {
//    console.log('message received - ', m);
//  }

// //   handleClick(ar: MouseEvent) {
// //    console.log('Button is clicked', ar);
//   //  }
  
// //   handleInput(e: Event) {
// //    const ie = (e as InputEvent).target as HTMLInputElement;
// //    console.log('typed', ie.value);
// //  }
//   username = '';
//  password = '';


//  onLogin() {
//    const obj = {
//      username: this.username,
//      password: this.password,
//    };


//    this.username = '';
//    this.password = '';


//    console.log('Login submitted', obj);
//  }


}
function Signal(arg0: number) {
  throw new Error('Function not implemented.');
}

