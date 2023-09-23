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
    email: 'jack@email.com',
    role: 'Admin'
  }
  title = 'curso-angular';
}
