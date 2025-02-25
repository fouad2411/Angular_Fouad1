window.addEventListener("load", inicio);
//representantes
partidoA = 0;
partidoB = 0;
partidoC = 0;
partidoD = 0;
//privincias de cada partido
arrayProvinciasA = [];
arrayProvinciasB = [];
arrayProvinciasC = [];
arrayProvinciasD = [];
//suma de votos de cada partido
sumaVotosA = 0;
sumaVotosB = 0;
sumaVotosC = 0;
sumaVotosD = 0;

const url =
  "http://moralo.atwebpages.com/menuAjax/Provincias/getProvincias.php";
function inicio() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      mostrar(data);
    })
    .catch((error) => console.error(error));

  function mostrar(elecciones) {
    elecciones.forEach((element) => {
      const votosMax = Math.max(
        Number(element.votosPA),
        Number(element.votosPB),
        Number(element.votosPC),
        Number(element.votosPD)
      );

      if (votosMax == element.votosPA) {
        partidoA += element.Representantes;
        arrayProvinciasA.push(element.nombreProvincia);
      } else if (votosMax == element.votosPB) {
        partidoB += element.Representantes;
        arrayProvinciasB.push(element.nombreProvincia);
      } else if (votosMax == element.votosPC) {
        partidoC += element.Representantes;
        arrayProvinciasC.push(element.nombreProvincia);
      } else if (votosMax == element.votosPD) {
        partidoD += element.Representantes;
        arrayProvinciasD.push(element.nombreProvincia);
      }

      sumaVotosA += element.votosPA;
      sumaVotosB += element.votosPB;
      sumaVotosC += element.votosPC;
      sumaVotosD += element.votosPD; /*
      sumaVotosA.push(element.votosPA);
      sumaVotosB.push(element.votosPB);
      sumaVotosC.push(element.votosPC);
      sumaVotosD.push(element.votosPD);*/
    });

    console.log(sumaVotosA);
    console.log(sumaVotosB);
    console.log(sumaVotosC);
    console.log(sumaVotosD);
    alert(partidoA + "-" + partidoB + "-" + partidoC + "-" + partidoD);
    alert("El partido A ha ganado " + arrayProvinciasA.join(", "));
    alert("El partido B ha ganado " + arrayProvinciasB.join(", "));
    alert("El partido C ha ganado " + arrayProvinciasC.join(", "));
    alert("El partido D ha ganado " + arrayProvinciasD.join(", "));

    // Crear un array de resultados
    const resultados = [
      { partido: "A", representantes: partidoA, provincias: arrayProvinciasA },
      { partido: "B", representantes: partidoB, provincias: arrayProvinciasB },
      { partido: "C", representantes: partidoC, provincias: arrayProvinciasC },
      { partido: "D", representantes: partidoD, provincias: arrayProvinciasD },
    ];

    // Ordenar por representantes de forma descendente
    resultados.sort((a, b) => b.representantes - a.representantes);

    // Mostrar resultados
    resultados.forEach((resultado) => {
      alert(
        `El partido ${resultado.partido} ha ganado ${
          resultado.representantes
        } representantes en: ${resultado.provincias.join(", ")}`
      );
    });
  }
}
