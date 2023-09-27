import { Component } from '@angular/core';
import { Pessoa } from 'src/app/Pessoa';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent {

  pessoas: Pessoa[] = [];
  
  constructor(private listService: ListService) {
    this.getPessoas();
  }
  
  getPessoas() : void{
    this.listService.getAllPessoas().subscribe((pessoas) => (this.pessoas = pessoas));
  }
}
