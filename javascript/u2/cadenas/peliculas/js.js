window.addEventListener("load", inicio);
const cabecera = document.querySelector("thead tr");
const cuerpo = document.querySelector("tbody");

function inicio() {
  const url = "peliculas.csv";
  fetch(url)
    .then((response) => response.text())
    .then((data) => mostrar(data))
    .finally(() => console.log("fin"))
    .catch((error) => console.error(error));
}

function mostrar(datos) {
  //separo ahora por filas
  const fila = datos.split("\n");
  //separo la primera fila para poder hacer la cabecera
  const filaCabecera = fila[0].split(",");
  //cabecera
  filaCabecera.forEach((element) => {
    const cabeceraTh = document.createElement("th");
    cabeceraTh.textContent = element;
    cabeceraTh.style.color = "red";
    cabecera.appendChild(cabeceraTh);
  });

  fila.forEach((element, i) => {
    if (i > 0) {
      const datosPelicula = element.split(",");
      const datosTr = document.createElement("tr");
      cuerpo.appendChild(datosTr);

      datosPelicula.forEach((element) => {
        const posicion = document.createElement("td");
        posicion.textContent = element;
        // console.log(element);
        //ahora añado cada td al tr
        datosTr.appendChild(posicion);
      });

      const celdas = datosTr.querySelectorAll("td");
      if (Number(datosPelicula[4]) >= 2000) {
        datosTr.style.backgroundColor = "pink";
      } else {
        datosTr.style.backgroundColor = "green";
      }
    }
  });
}
