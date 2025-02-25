window.addEventListener("load", () => {
  const url = "documento.txt";

  let temperatiraMediaMax = [];
  let mediaPluviometria = [];
  let temperaturaMasAlta = [];
  let puebloMasLlueve = [];

  fetch(url)
    .then((response) => response.text())
    .then((data) => mostrar(data))
    .finally(() => console.log("fin"))
    .catch((error) => console.error(error));

  function mostrar(datos) {
    let cadena = [];
    cadena = datos.split("\n");
    // console.log(cadena);
    //ahora para recorre todo hacemos un for each
    let cadenaPuntos = [];
    cadena.forEach((element) => {
      cadenaPuntos.push(element.split(":"));
    });
    let numMayor = 0;

    cadenaPuntos.forEach((element) => {
      console.log(element);
      console.log(element[1]);
      if (element[1] > numMayor) {
        console.log("holaa");
        numMayor = element[1];
      }
    });
    console.log("La temperatura máxima:" + numMayor);
  }
});
