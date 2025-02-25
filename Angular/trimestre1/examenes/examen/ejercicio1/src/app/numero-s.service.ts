import { Injectable } from '@angular/core';
import { numeros } from './numeros';

@Injectable({
  providedIn: 'root'
})
export class NumeroSService {
  listaN:numeros[]=[]
  numero!:numeros;
  constructor() {
    for (let i = 0; i < 200; i++) {
      this.listaN.push(this.generarLista(i))

    }

  this.devolver()

  }
  devolver(){
  return this.listaN;
  }
  generarLista(i:number){

    let n1= Math.floor(Math.random()*100);
    let n2= Math.floor(Math.random()*100);
    let n3= Math.floor(Math.random()*100);
    let n4= Math.floor(Math.random()*100);
    let n5= Math.floor(Math.random()*100);
    let n6= Math.floor(Math.random()*100);


    return new numeros(i,n1,n2,n3,n4,n5,n6)
  }


  eliminarElemento(id:number){
    if(confirm('Estas seguro de que quieres borrarlo')){
      //de esta forma actualizo el array con todos los coches que tengan un id distinto
      this.listaN = this.listaN.filter((numeros) => numeros.id !== id);

    }
    return this.listaN
  }
  insertarElemento(n:numeros){
    n.id= this.listaN.length+1
    this.listaN.push(new numeros(n.id,n.n1,n.n2,n.n3,n.n4,n.n5,n.n6))
    return this.listaN
  }
  actualizarTupla(n:numeros){
    const numeroTmp = this.listaN.find(n=>n.id == n.id)
    if(numeroTmp != null){
      numeroTmp.n1= n.n1
      numeroTmp.n2= n.n2
      numeroTmp.n3= n.n3
      numeroTmp.n4= n.n4
      numeroTmp.n5= n.n5
      numeroTmp.n6= n.n6
    }

return this.listaN
  }
}
