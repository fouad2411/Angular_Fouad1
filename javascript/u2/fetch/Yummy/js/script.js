const listaPanaderias = [
  "Jesus",
  "Almagro",
  "Julia",
  "Andalusi",
  "JoseAntonio",
  "el trigal",
];
function cambiarBarra() {
  const barraNav = document.querySelectorAll("#navbar a");

  barraNav.forEach((element, i) => {
    element.textContent = listaPanaderias[i];
  });
}
function cambiarNumeros() {
  const cajaExperiencia = document.querySelectorAll(".stats-item");

  cajaExperiencia.forEach((element, i) => {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
    const espacio = document.createElement("span");
    const parrafo = document.createElement("p");
    element.appendChild(espacio);
    element.appendChild(parrafo);
    if (i == 0) {
      espacio.textContent = Math.floor(Math.random() * 500);

      parrafo.textContent = "Clientes";
    }
    if (i == 1) {
      espacio.textContent = Math.floor(Math.random() * 500);

      parrafo.textContent = "Proyectos";
    }
    if (i == 2) {
      espacio.textContent = Math.floor(Math.random() * 500);

      parrafo.textContent = "Pedidos Diarios";
    }
    if (i == 3) {
      espacio.textContent = Math.floor(Math.random() * 500);
      parrafo.textContent = "Trabajadores";
    }
  });
}

const urlPlatos = "getPlatosphp.json";
fetch(urlPlatos)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    mostrar(data);
  })
  .finally(() => console.log("Fin"))
  .catch((error) => console.error(error));

function mostrar(data) {
  const caja = document.querySelectorAll(".col-lg-4.menu-item");
  const imagenPlatos = document.querySelectorAll(".col-lg-4.menu-item img ");
  data.forEach((item, i) => {
    imagenPlatos[i].setAttribute("src", item.imagen);

    const h4 = caja[i].querySelector("h4");
    h4.textContent = item.nombre;

    const ingredientes = caja[i].querySelector("p");
    ingredientes.textContent = item.ingredientes;

    const precio = ingredientes.nextElementSibling;
    precio.textContent = item.precio + "€";
  });
}
cambioCocineros();
function cambioCocineros() {
  const url = "getCocinerophp.json";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      mostrar(data);
    })
    .finally(() => console.log("Fin"))
    .catch((error) => console.error(error));

  function mostrar(data) {
    const cocineroImg = document.querySelectorAll(".member-img img");

    const datosPersonales = document.querySelectorAll(".member-info");
    data.forEach((item, i) => {
      eliminarContenido(datosPersonales, i);

      const nombre = document.createElement("h4");
      const funcion = document.createElement("p");
      const descripcion = document.createElement("p");

      datosPersonales[i].appendChild(nombre);
      datosPersonales[i].appendChild(funcion);
      datosPersonales[i].appendChild(descripcion);

      nombre.textContent = item.nombre;
      funcion.textContent = item.funcion;
      descripcion.textContent = item.descripcion;

      cocineroImg[i].setAttribute("src", item.imagen);
    });
  }
}

function eliminarContenido(datosPersonales, i) {
  while (datosPersonales[i].firstChild) {
    datosPersonales[i].removeChild(datosPersonales[i].firstChild);
  }
}
