window.addEventListener("load", inicio);
const lista = document.querySelector(".carousel-indicators");
const cajaCarousel = document.querySelector(".carousel-inner");
const url = "getPanaderos.json";
function inicio() {
  borrarListaYfotos();
  //creamos el conteido de carousel-item
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      mostrar(data);
    })
    .finally(() => console.log("Fin"))
    .catch((error) => console.error(error));
}

function mostrar(data) {
  data.forEach((element, i) => {
    crearLista(element, i);
    //creamos la caja de carrosel item y cuadno la
    //i sea igual a 0 se le añade el active
    const itemCarousel = document.createElement("div");
    itemCarousel.className = "carousel-item";
    if (i == 0) {
      itemCarousel.className = "carousel-item active";
    }
    cajaCarousel.appendChild(itemCarousel);
    //creamos la imagen que tiene el carrousel-item
    const contenedorImagen = document.createElement("div");
    itemCarousel.appendChild(contenedorImagen);

    const imgCarousel = document.createElement("img");
    imgCarousel.setAttribute("src", element.imagen);
    imgCarousel.style = "width:100%;height:100vh;";
    contenedorImagen.appendChild(imgCarousel);
    //añadimos el tercer div que tiene el titulo y descripcion
    const cajaInterior = document.createElement("div");
    cajaInterior.className = "carousel-caption d-none d-md-block";
    itemCarousel.appendChild(cajaInterior);
    //añadimos el h3 y la que hay dentro de la caja interior
    const titulo = document.createElement("h3");
    titulo.textContent = element.nombre;
    cajaInterior.appendChild(titulo);

    const funcion = document.createElement("p");
    funcion.textContent = element.funcion;
    cajaInterior.appendChild(funcion);
  });
}

function crearLista(element, i) {
  const li = document.createElement("li");
  li.setAttribute("data-target", "#carouselId");
  li.setAttribute("data-slide-to", i);
  if (i == 0) {
    li.className = "active";
  }
  lista.appendChild(li);
}
function borrarListaYfotos() {
  lista.replaceChildren();

  cajaCarousel.replaceChildren();
}
