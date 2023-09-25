import { Injectable } from '@angular/core';
import { Animal } from '../Animal';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  remove(animals: Animal[], animal: Animal){
    //window.alert("Ativando service")
    return animals.filter((a) => animal.name !==a.name);
  }
}
