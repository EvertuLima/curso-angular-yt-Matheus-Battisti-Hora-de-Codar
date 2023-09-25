import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';
@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {

  animals: Animal[] = [
    { name: 'Turca', type: 'Dog', age: 12 },
    { name: 'Tom', type: 'Cat', age: 3 },
    { name: 'Frida', type: 'Dog', age: 16},
    { name: 'Bob', type: 'Horse', age: 13},
  ];

  animal: Animal = {
    name: 'Teste',
    type: 'Algo',
    age: 1
  }

  animalDetails = ''

  showAge(animal: Animal){
    // window.alert(animal.age)
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`
  }

}
