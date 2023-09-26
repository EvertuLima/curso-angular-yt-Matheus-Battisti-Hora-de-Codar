import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent {

  @Input() name1: string = '';
  @Input() age1 = 0
  @Input() userData1!: {email12:string; role12:string};



}
