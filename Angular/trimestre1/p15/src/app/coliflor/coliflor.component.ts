import { Component } from '@angular/core';

@Component({
  selector: 'app-coliflor',
  templateUrl: './coliflor.component.html',
  styleUrls: ['./coliflor.component.css']
})
export class ColiflorComponent {
  numero: any;
  ingles: any;
  spain: any;





   conversion() {
    if( this.numero ==1 ){
        this.ingles= 'one'
        this.spain= 'uno'
    }else if( this.numero ==2 ){
      this.ingles= 'two'
      this.spain= 'dos'
    }else if( this.numero ==3 ){
      this.ingles= 'tree'
      this.spain= 'tres'
    }else if( this.numero ==4 ){
      this.ingles= 'four'
      this.spain= 'cuatro'
    }else if( this.numero ==5 ){
      this.ingles= 'five'
      this.spain= 'cinco'
    }else if( this.numero ==6 ){
      this.ingles= 'six'
      this.spain= 'seis'
    }else if( this.numero ==7 ){
      this.ingles= 'seven'
      this.spain= 'siete'
    }else if( this.numero ==8 ){
      this.ingles= 'eight'
      this.spain= 'ocho'
    }else if( this.numero ==9 ){
      this.ingles= 'nine'
      this.spain= 'nueve'
    }else if( this.numero ==10 ){
      this.ingles= 'theen'
      this.spain= 'diez'
    }
  }
}
