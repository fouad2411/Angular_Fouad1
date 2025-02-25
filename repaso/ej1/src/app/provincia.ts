export class Provincia {
  nombreProvincia!: string;
  votosPA!: string;
  votosPB!: string;
  votosPC!: string;
  votosPD!: string;
  Representantes!: string;

  constructor(
    nombreProvincia: string,
    votosPA: string,
    votosPB: string,
    votosPC: string,
    votosPD: string,
    Representantes: string
  ) {
    this.nombreProvincia = nombreProvincia;
    this.votosPA = votosPA;
    this.votosPB = votosPB;
    this.votosPC = votosPC;
    this.votosPD = votosPD;
    this.Representantes = Representantes;
  }

}
