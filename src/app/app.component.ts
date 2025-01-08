import { Component, computed, inject, OnInit, signal, ViewEncapsulation } from '@angular/core';
import { SampleComponent } from './sample/sample.component';
import { DemoComponent } from './demo/demo.component';
import { RestService } from './rest.service';

export interface PostModel {
 userId: number;
 id: number;
 title: string;
 body: string;
}


@Component({
 selector: 'app-root',
 standalone: true,
 imports: [],
 templateUrl: './app.component.html',
 styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
 restService = inject(RestService);


 ngOnInit(): void {
   this.restService.get<PostModel[]>('posts').subscribe({
     next: (p) => console.log('post', p),
   });
 }
}
