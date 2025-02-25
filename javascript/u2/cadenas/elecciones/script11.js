window.addEventListener("load", inicio);
const cabecera = document.querySelector("thead tr");
const cuerpo = document.querySelector("tbody");
const recuento = document.createElement("p");
let recuentoTrump = 0;
document.body.appendChild(recuento);
function inicio() {
  let recuentoBidem = 0;

  const url = "eleccionesUSA.csv";
  fetch(url)
    .then((response) => response.text())
    .then((data) => mostrar(data))
    .finally(() => console.log("fin"))
    .catch((error) => console.error(error));

  function mostrar(datos) {
    //separo ahora por filas
    const fila = datos.split("\n");
    //separo la primera fila para poder hacer la cabecera
    const filaCabecera = fila[0].split(";");
    filaCabecera.forEach((element) => {
      const cabeceraTh = document.createElement("th");
      cabecera.appendChild(cabeceraTh);
      cabeceraTh.textContent = element;
    });

    //itero todas filas para poder seprarlas en ;
    fila.forEach((element, i) => {
      console.log("ets es el" + element);
      //ahora le digo qu e la cabecera sea mayor a 0
      //que empiece porque la  es la cabecera
      if (i > 0) {
        const datosElecciones = element.split(";");
        //console.log(datosElecciones);
        //creo el tr donde van a ir los td
        const datosTr = document.createElement("tr");
        cuerpo.appendChild(datosTr);

        //ahora volvemos a hacer un for each para poder separar
        //cada elemento en cada td
        datosElecciones.forEach((element) => {
          const posicion = document.createElement("td");
          posicion.textContent = element;
          // console.log(element);
          //ahora añado cada td al tr
          datosTr.appendChild(posicion);
        });
        //cojo todos los td para poder pintra las celdas
        const celdas = datosTr.querySelectorAll("td");
        //oregunto quien tiene más votos
        if (Number(datosElecciones[2]) > Number(datosElecciones[3])) {
          //si ha ganado biden suma ell los votos electorales
          recuentoBidem += Number(datosElecciones[1]);
          //pinto de azul si gana biden y añado la celda con los votos electorales que ha ganado

          celdas[2].style.backgroundColor = "blue";
          const tdBiden = document.createElement("td");
          tdBiden.textContent = "Biden-" + datosElecciones[1];
          datosTr.appendChild(tdBiden);
        } else {
          //si ha ganado trump suma ell los votos electorales
          recuentoTrump += Number(datosElecciones[1]);
          //pinto de rojo si gana trump y añado la celda con los votos electorales que ha ganado
          celdas[3].style.backgroundColor = "red";
          const tdTrump = document.createElement("td");
          tdTrump.textContent = "Trump-" + datosElecciones[1];
          datosTr.appendChild(tdTrump);
        }
      }
    });
    //muestro el recuento aqui
    recuento.textContent =
      "El partido de Biden ha sacado: " +
      recuentoBidem +
      "\nY el partido de Trump: " +
      recuentoTrump;
  }
}
