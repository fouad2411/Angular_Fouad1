import { Component } from '@angular/core';

@Component({
  selector: 'app-proyecto1',
  templateUrl: './proyecto1.component.html',
  styleUrls: ['./proyecto1.component.css']
})
export class Proyecto1Component {
  title = 'angular1';
  usuario:string="camacho"
  tiempo:number=0;
  nota:number=0;
  rojo:string="red";
  azul:string="blue"
  tamanio1:string="50px"
  constructor(){
    setInterval(() =>{
                    this.tiempo=(Math.round(Math.random()*1000));
                    this.nota=(Math.round(Math.random()*10))


    },1000);



  }
}
