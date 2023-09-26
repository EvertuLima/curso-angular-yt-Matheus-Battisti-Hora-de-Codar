import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName:string = 'Jack';
  userAge:number = 12;
  userData = {
    email12: 'jack@email.com',
    role12: 'Admin'
  }
  title = 'curso-angular';
}
