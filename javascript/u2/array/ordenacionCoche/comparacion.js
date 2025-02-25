window.addEventListener("load", inicio);
const url = "coches.json";
const boton1 = document.getElementById("ord_kms");
const boton2 = document.getElementById("ord_marca");
const boton3 = document.getElementById("ord_consumo");
const cajaPrincipal = document.querySelector(".container");

const coches = [];
let ordenadokms = [];
let ordenadoMarca = [];
let ordenadoPorConsumo = [];
let btnkm = false;
let btnMarca = false;
let btnConsumo = false;
function inicio() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      mostrar(data);
    })
    .finally(() => console.log("fin"))
    .catch((error) => console.error(error));

  function mostrar(listaCoches) {
    listaCoches.forEach((item) => {
      coches.push(item);
    });
  }
  boton1.addEventListener("click", () => {
    limpiarP();
    if (btnkm == false) {
      ordenadokms = coches.slice().sort((a, b) => a.kms - b.kms);
      btnkm = true;
    } else if (btnkm == true) {
      ordenadokms = coches
        .slice()
        .sort((a, b) => a.kms - b.kms)
        .reverse();
      btnkm = false;
    }
    ordenadokms.forEach((element, i) => {
      const parrafo = document.createElement("p");

      parrafo.textContent =
        "Coches en la posicion " + i + " ordenados por kms:" + element.kms;
      cajaPrincipal.appendChild(parrafo);
    });
  });
  boton2.addEventListener("click", () => {
    limpiarP();
    if (btnMarca == false) {
      ordenadoMarca = coches
        .slice()
        .sort((a, b) => a.marca.localeCompare(b.marca));
      btnMarca = true;
    } else if (btnMarca == true) {
      ordenadoMarca = coches
        .slice()
        .sort((a, b) => a.marca.localeCompare(b.marca))
        .reverse();
      btnMarca = false;
    }
    ordenadoMarca.forEach((element, i) => {
      const parrafo = document.createElement("p");
      parrafo.textContent =
        "Coches en la posicion " + i + " ordenados por marca:" + element.marca;
      cajaPrincipal.appendChild(parrafo);
    });
  });
  boton3.addEventListener("click", () => {
    limpiarP();
    if (btnConsumo == false) {
      ordenadoPorConsumo = coches.slice().sort((a, b) => a.consumo - b.consumo);
      btnConsumo = true;
    } else if (btnConsumo == true) {
      ordenadoPorConsumo = coches
        .slice()
        .sort((a, b) => a.consumo - b.consumo)
        .reverse();
      btnConsumo = false;
    }
    ordenadoPorConsumo.forEach((element, i) => {
      const parrafo = document.createElement("p");
      parrafo.textContent =
        "Coches en la posicion " +
        i +
        " ordenados por consumo:" +
        element.consumo;
      cajaPrincipal.appendChild(parrafo);
    });
  });
  function limpiarP() {
    while (cajaPrincipal.firstElementChild) {
      cajaPrincipal.removeChild(cajaPrincipal.firstElementChild);
    }
  }
}
