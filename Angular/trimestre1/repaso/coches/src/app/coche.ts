export class Coche {
  id:number=0
  matricula:string=""
  color:string=""
  marca:string=""
  km:string=""
  constructor(id:number,matricula:string,color:string,marca:string,km:string){
    this.id=id
    this.matricula = matricula;
    this.color =color;
    this.marca=marca;
    this.km =km;
  }
}
