import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {

  name: string = 'Everton';
  age: number = 23;
  job: string = 'Progamador';
  hobbies: string[] = ['Basquete', 'Filmes']
  car = {
    name: 'Corsa',
    year: 2005
  } 
}
