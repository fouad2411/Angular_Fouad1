import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente5',
  templateUrl: './componente5.component.html',
  styleUrls: ['./componente5.component.css']
})
export class Componente5Component implements OnInit{
aniarNumero() {
  let numero = prompt("Ingrese un número:");
  if (numero !== null) {
    this.lista.push(parseInt(numero));
  }
}
  lista:number[]=[]
  eliminar(index: number) {
    this.lista.splice(index,1)
  }
  modificar(index: number) {
    this.lista[index]= Math.floor(Math.random()*100)
  }
  ngOnInit(): void {
    for (let i = 0; i < 20; i++) {
      this.lista.push(Math.floor(Math.random()*100))
    }
  }


}
