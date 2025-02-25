const listaPanaderias = [
  "Jesus",
  "Almagro",
  "Julia",
  "Andalusi",
  "JoseAntonio",
  "el trigal",
];
const listaEnlaces = [
  "panaderiajesus.com",
  "panalmagro.es",
  "panaderiasjulia.es",
  "panaderialaandalusi.com",
  "panaderiajoseantonio.com",
  "eltrigal.com",
];

const url = "getPanaderos.json";
const enlaces = document.querySelectorAll(".nav-item.nav-link");
const cajaExperiencia = document.querySelectorAll(".fact-item");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    mostrarDatos(data);
  })
  .finally(() => console.log("Fin"))
  .catch((error) => console.error(error));

const imgTrabajador = document.querySelectorAll(".team-item img");
const datosTrabajador = document.querySelectorAll(".team-title");

console.log(cajaPanaderos);

function mostrarDatos(data) {
  data.forEach((item, i) => {
    imgTrabajador[i].setAttribute("src", item.imagen);

    const nombre = datosTrabajador[i].firstElementChild;
    const profesion = nombre.nextElementSibling;

    nombre.textContent = item.nombre;
    profesion.textContent = item.funcion;
  });
}

cajaExperiencia.forEach((element, indice) => {
  const parrafo = element.querySelector("p");
  const numero = element.querySelector("h1");
  if (indice == 0) {
    parrafo.textContent = "Años de experiencia";
    numero.textContent = Math.floor(Math.random() * 1000);
  }
  if (indice == 1) {
    parrafo.textContent = "Trabajadores: ";
    numero.textContent = Math.floor(Math.random() * 1000);
  }
  if (indice == 1) {
    parrafo.textContent = "Trabajadores: ";
    numero.textContent = Math.floor(Math.random() * 1000);
  }
  if (indice == 2) {
    parrafo.textContent = "Total de producutos: ";
    numero.textContent = Math.floor(Math.random() * 1000);
  }
  if (indice == 3) {
    parrafo.textContent = "Pedidos diarios: ";
    numero.textContent = Math.floor(Math.random() * 1000);
  }
});

enlaces.forEach((element, indice) => {
  element.textContent = listaPanaderias[indice];

  element.setAttribute("href", listaEnlaces[indice]);
});
