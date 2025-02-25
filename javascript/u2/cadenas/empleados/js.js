window.addEventListener("load", inicio);
const cabecera = document.querySelector("thead tr");
const cuerpo = document.querySelector("tbody");

function inicio() {
  const url = "empleados.csv";
  fetch(url)
    .then((response) => response.text())
    .then((data) => mostrar(data))
    .finally(() => console.log("fin"))
    .catch((error) => console.error(error));
}

function mostrar(datos) {
  const fila = datos.split("\n");
  const filaCabecera = fila[0].split(",");

  filaCabecera.forEach((element) => {
    const cabeceraTh = document.createElement("th");
    cabeceraTh.textContent = element;
    cabeceraTh.style.color = "blue";
    cabecera.appendChild(cabeceraTh);

    fila.forEach((element, i) => {
      if (i > 0) {
        const datosEmpleados = element.split(",");
        //por cada vuelta de todos los empleados crea un tr
        const datosTr = document.createElement("tr");
        cuerpo.appendChild(datosTr);
        //ahora itero todos los elementos de cada fila
        datosEmpleados.forEach((element, i) => {
          const posicion = document.createElement("td");
          posicion.textContent = element;
          datosTr.appendChild(posicion);
          if (Number(datosEmpleados[3]) >= 100000 && i == 3) {
            posicion.style.color = "red";
          }
        });
        if (Number(datosEmpleados[1]) >= 30) {
          datosTr.style.backgroundColor = "yellow";
        } else {
          datosTr.style.backgroundColor = "green";
        }
      }
    });
  });
}
