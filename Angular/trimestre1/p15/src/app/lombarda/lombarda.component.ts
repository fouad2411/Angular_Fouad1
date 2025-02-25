import { Component } from '@angular/core';

@Component({
  selector: 'app-lombarda',
  templateUrl: './lombarda.component.html',
  styleUrls: ['./lombarda.component.css']
})
export class LombardaComponent {
  colorLista:string[]=['red','blue','green','yellow']
  nombreLista:string[]=['red','blue','green','yellow']
  num!:number
  num2!:number
  nombre!:string

  color!:string
  puntuacion:number=0
  empezar(){
    setInterval(()=>{
      this.color=''
      this.nombre=''
        this.num = Math.floor(Math.random()*this.colorLista.length)
        this.color= this.colorLista[this.num]
        this.num2 = Math.floor(Math.random()*this.colorLista.length)
        this.nombre= this.colorLista[this.num2]

  },2000);
  }
  sumarPuntos(){
    if(this.color == this.nombre){
      this.puntuacion++
    }else{
      this.puntuacion--
    }
  }
}
