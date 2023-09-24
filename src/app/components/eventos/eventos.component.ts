import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {
  show: boolean = false;
  showMessage(evento: any):void{
    if (evento.value === "") {
      this.show = false;
    }else{
      this.show = !this.show; //toggle
    }
    
  }
}
