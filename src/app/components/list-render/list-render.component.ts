import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {

  animals: Animal[] = [];

  // animal: Animal = {
  //   id: 1,
  //   name: 'Teste',
  //   type: 'Algo',
  //   age: 1
  // }

  animalDetails = ''

  constructor(private listService: ListService) {
    this.getAnimals();
  }

  showAge(animal: Animal){
    // window.alert(animal.age)
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`
  }

  removeAnimal(animal: Animal){
    this.animals = this.animals.filter((a) => animal.name !==a.name);
    this.listService.remove(animal.id).subscribe();
  }

  getAnimals(): void{
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }

}
