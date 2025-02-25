import { Component } from '@angular/core';

@Component({
  selector: 'app-repollo',
  templateUrl: './repollo.component.html',
  styleUrls: ['./repollo.component.css']
})
export class RepolloComponent {
  numero: number=0
  listaN:number[]=[]
  numAl!:number

  termina:boolean = false
  coindicencias:number=0;
  apariciones(){
    this.coindicencias=0
   for (let i = 0; i < 100; i++) {
     this.numAl= Math.floor(Math.random()*20)
     this.listaN.push(this.numAl)
     if(this.numero == this.listaN[i] ){
       this.coindicencias++

     }
    }
   }

}
