import { Component } from '@angular/core';

@Component({
  selector: 'app-proyecto3',
  templateUrl: './proyecto3.component.html',
  styleUrls: ['./proyecto3.component.css']
})
export class Proyecto3Component {

    title = 'angular3';
    numero:number=0;
     incrementar(){
       this.numero++;
     }
     decrementar(){
       this.numero--;
     }
}
