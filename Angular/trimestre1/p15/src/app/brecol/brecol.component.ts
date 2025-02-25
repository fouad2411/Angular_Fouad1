import { Component } from '@angular/core';

@Component({
  selector: 'app-brecol',
  templateUrl: './brecol.component.html',
  styleUrls: ['./brecol.component.css']
})
export class BrecolComponent {
parar() {
clearInterval(this.id)
}
formatoColor:string[]=['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
segundos!:any;
color:string='#'
num!:number;
id!:any;
temporizador() {

  this.id = setInterval(()=>{
    this.color='#'
    for (let i = 0; i < 6; i++) {
      this.num = Math.floor(Math.random()*this.formatoColor.length)
      this.color+= this.formatoColor[this.num]
    }

},2000);
}
}
