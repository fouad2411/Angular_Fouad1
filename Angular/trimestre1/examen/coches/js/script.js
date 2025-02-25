/*a) Listado de coches verdes,de la marca Volkswagen, que consuman
menos de 7 litros, que valgan más de 25.000 euros. (1 punto*/

window.addEventListener("load", inicio);
const url = "coches.json";

arrayApartadoA = [];
arrayApartadoB = [];
arrayApartadoC = [];

cocheMasKm = "";

function inicio() {
  function apartadoA(coche) {
    if (
      coche.marca == "Volkswagen" &&
      coche.color == "Green" &&
      coche.consumo < 7 &&
      coche.precio > 25000
    ) {
      return coche.marca + "-" + coche.modelo;
    }
  }

  function calcularMediaPrecio(coche) {
    let suma = 0;
    coche.forEach((element) => {
      suma += Number(element.precio);
    });
    return suma / coche.length;
  }

  function calcularMediaKm(coche) {
    let suma = 0;
    coche.forEach((element) => {
      suma += Number(element.kms);
    });
    return suma / coche.length;
  }
  function informacionC(coche) {
    let km = 0;
    coche.forEach((element) => {
      if (element.kms > km) {
        km = element.kms;
      }
    });
    return km;
  }

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      mostrar(data);
    })
    .finally(() => console.log("fin"))
    .catch((error) => console.error(error));

  function mostrar(data) {
    masKm = 0;
    mediaPrecio = 0;

    data.forEach((item, i) => {
      //apartado A
      if (apartadoA != null) {
        arrayApartadoA.push(apartadoA(item));
      }
      //apartado b
      mediaPrecio = calcularMediaPrecio(data);

      mediakm = calcularMediaKm(data);

      if (item.precio > mediaPrecio && item.kms > mediakm) {
        arrayApartadoB.push(item.marca);
      }
      //apartado C
      arrayApartadoC.push(informacionC(data));
    });
    console.log("Apartado A: " + arrayApartadoA);
    console.log("Coches por encima de la media: " + arrayApartadoB);
    console.log("apartado c" + arrayApartadoC);
  }
}
/*c) Información completa del coche con más kms (1 punto)
Honda Modelo-373*/
