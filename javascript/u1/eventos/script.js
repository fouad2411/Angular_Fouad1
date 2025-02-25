window.onload = inicio;
//seleciono todos los img de la caja quee tiene como id images

const listaImagenes = document.querySelectorAll("#images img");
const destinoImagenes = document.querySelector("#picture img");

const contenedorFondo = document.querySelector("#picture");
const listaFondo = document.querySelectorAll("#fondos div");
const listaBordes = document.querySelectorAll("#bordes div");

const zoom = document.querySelectorAll("div[id='zoom']");
const ampliar = zoom[0];
const desampliar = zoom[1];
function inicio() {
  listaImagenes.forEach(cargarImagenes);
  listaFondo.forEach(cargarColores);
  coloresBorde();
}

function coloresBorde() {
  listaBordes.forEach((item) => {
    item.addEventListener("click", () => cambiarBorde(item));
  });
}
function cambiarBorde(item) {
  switch (item.id) {
    case "negroBorde":
      contenedorFondo.style.border = "10px solid black";
      break;
    case "rojoBorde":
      contenedorFondo.style.border = "10px solid red";
      break;
    case "azulBorde":
      contenedorFondo.style.border = "10px solid blue";
      break;
    case "amarilloBorde":
      contenedorFondo.style.border = "10px solid yellow";
      break;
    case "verdeBorde":
      contenedorFondo.style.border = "10px solid green";
      break;
    case "rosaBorde":
      contenedorFondo.style.border = "10px solid yellow";
      break;
  }
}
function cargarColores(item) {
  item.addEventListener("click", () => {
    switch (item.id) {
      case "negro":
        contenedorFondo.style.backgroundColor = "black";
        break;
      case "rojo":
        contenedorFondo.style.backgroundColor = "red";
        break;
      case "azul":
        contenedorFondo.style.backgroundColor = "blue";
        break;
      case "amarillo":
        contenedorFondo.style.backgroundColor = "yellow";
        break;
      case "verde":
        contenedorFondo.style.backgroundColor = "green";
        break;
      case "rosa":
        contenedorFondo.style.backgroundColor = "pink";
        break;
    }
  });
}
function cargarImagenes(item) {
  item.onclick = () => ponerImagen(item);
}

function ponerImagen(item) {
  destinoImagenes.setAttribute("src", item.src);
}
