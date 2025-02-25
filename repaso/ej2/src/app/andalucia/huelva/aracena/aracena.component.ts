import { Component } from '@angular/core';

@Component({
  selector: 'app-aracena',
  templateUrl: './aracena.component.html',
  styleUrls: ['./aracena.component.css']
})
export class AracenaComponent {
numero:number=0

random(random:number){
  return Math.floor(Math.random()*100)
}
}
