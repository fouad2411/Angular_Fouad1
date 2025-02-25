import { Component } from '@angular/core';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component {
  segundos:number=0
  para!:boolean;
pararIntervalo() {
  this.para = true;
  this.segundos=0
}

iniciarIntevalo() {
  this.para = false;
  setInterval(() => {
    if (!this.para) {
      this.segundos++;
    }
  }, 1000);
}

}
