const listaPanaderias = [
  "Jesus",
  "Almagro",
  "Julia",
  "Andalusi",
  "JoseAntonio",
  "el trigal",
];

const barraNav = document.querySelectorAll(".nav-item");
const cualidades = document.querySelectorAll(".ps-4");
const carta = document.getElementsByClassName(
  "col-md-6 col-lg-3 text-center wow fadeIn"
);
const cartaEmpleados = document.getElementsByClassName("team-item");

//ahora cambair las fotos de los diagnosticos
const url = "json.json";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    mostrar(data);
  })
  .catch((error) => console.error(error));

function mostrar(data) {
  const cajaMecanico = document.getElementsByClassName(
    "position-absolute img-fluid w-100 h-100"
  );

  data.forEach((item, i) => {
    cajaMecanico[i].setAttribute("src", item.image);
  });
}

//borrar y hacer de nuevo donde hay numero random
console.log(carta);
for (let i = 0; i < carta.length; i++) {
  while (carta[i].firstElementChild) {
    carta[i].removeChild(carta[i].firstChild);
  }
}

for (let i = 0; i < carta.length; i++) {
  let numero1 = Math.floor(Math.random() * 1000);
  let numero2 = Math.floor(Math.random() * 1000);
  let numero3 = Math.floor(Math.random() * 1000);
  let numero4 = Math.floor(Math.random() * 1000);
  arrayNumeros = [numero1, numero2, numero3, numero4];
  arrayPalabeas = [
    "numero mecanicos",
    "ordenes diarias",
    "numero de empresas",
    "bla bla",
  ];
  const h1 = document.createElement("h1");
  const span = document.createElement("span");
  h1.textContent = arrayNumeros[i];
  span.textContent = arrayPalabeas[i];
  carta[i].appendChild(h1);
  carta[i].appendChild(span);
}
const numeroArray = barraNav.forEach((item, i) => {
  item.textContent = listaPanaderias[i];
});

cualidades.forEach((item, i) => {
  const h5 = item.firstElementChild;
  const pa = h5.nextElementSibling;
  const aw = item.lastElementChild;
  console.log(h5, pa, aw);
  arrayH5 = [
    "Servicio de calidad",
    "Trabajdoroes expertos",
    "Equipamiento Moderno",
  ];
  arrayP = [
    "Los mejores servicio de la mano de nuestro ingeniero jesus",
    "Bueno experto experto no se pero llama miahi",
    "Eso si que es verdad porque mihai lo roba",
  ];
  h5.textContent = arrayH5[i];
  pa.textContent = arrayP[i];
  aw.textContent = "Leer más";
});
