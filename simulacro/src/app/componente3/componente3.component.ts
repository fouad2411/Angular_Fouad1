import { Component } from '@angular/core';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component {
random!: number;
arrayProvincia:string[]=["Valladolid","Madrid","Gerona" ]
nombreProvincia!:string
generarImagen() {
this.random = Math.floor(Math.random()*2)
this.nombreProvincia=this.arrayProvincia[this.random]
}

}
