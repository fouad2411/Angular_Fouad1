window.addEventListener("load", inicio);
const cabecera = document.querySelector("thead tr");
const cuerpo = document.querySelector("tbody");
function inicio() {
  const url = "eleccionesUSA.csv";
  fetch(url)
    .then((response) => response.text())
    .then((data) => mostrar(data))
    .finally(() => console.log("fin"))
    .catch((error) => console.error(error));
}

function mostrar(datos) {
  let filasElecciones = [];
  let cabeceraElecciones = [];

  filasElecciones = datos.split("\n");
  //parte de la cabecera
  cabeceraElecciones = filasElecciones[0].split(";");
  cabeceraElecciones.forEach((element) => {
    const a = document.createElement("th");
    a.textContent = element;
    cabecera.appendChild(a);
  });

  filasElecciones.forEach((estado, i) => {
    if (i > 0) {
      const columnas = estado.split(";");
      console.log(columnas);
      const fila = document.createElement("tr");
      cuerpo.appendChild(fila);

      columnas.forEach((element, i) => {
        const posicion = document.createElement("td");
        posicion.textContent = element;
        fila.appendChild(posicion);
      });

      const celdas = fila.querySelectorAll("td");
      if (Number(columnas[2]) > Number(columnas[3])) {
        celdas[2].style.backgroundColor = "blue";
        let tdBiden = document.createElement("td");
        tdBiden.textContent = "Biden " + columnas[1];
        fila.appendChild(tdBiden);
      } else {
        celdas[3].style.backgroundColor = "red";
      }
    }
  });
}
