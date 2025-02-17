import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// IMPORTING A COMPONENT AND B COMPONENT
import { AComponent } from './a/a.component'; 
import { BComponent } from './b/b.component';

@Component({
  selector: 'root-directive',
  imports: [RouterOutlet, AComponent, BComponent], // IMPORTING A COMPONENT AND B COMPONENT
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-app';
  name: string = "David";
  age: number = 25;
  
}
