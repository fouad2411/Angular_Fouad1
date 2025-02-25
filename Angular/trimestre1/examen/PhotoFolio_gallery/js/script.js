window.addEventListener("load", inicio);
const url = "datos.json";
const arrayImagenesNaturaleza = [];
const arrayTextoNaturaleza = [];
const arrayImagenesPersona = [];
const arrayTextoPersona = [];
const arrayImagenesArquitectura = [];
const arrayTextoArquitectura = [];

const arrayImagenesAnimales = [];
const arrayTextoAnimales = [];

const arrayImagenesDeportes = [];
const arrayTextoDeportes = [];

function inicio() {
  const nature = document.querySelectorAll(".active");

  console.log(nature[1]);
  console.log(nature[2]);

  accion(1, "naturaleza", arrayImagenesNaturaleza, arrayTextoNaturaleza);
  accion(2, "gente", arrayImagenesPersona, arrayTextoPersona);
  accion(3, "arquitectura", arrayImagenesArquitectura, arrayTextoArquitectura);
  accion(4, "animales", arrayImagenesAnimales, arrayTextoAnimales);
  accion(5, "deportes", arrayImagenesDeportes, arrayTextoDeportes);

  function accion(indice, tipo, arrayImg, arrayText) {
    array = [];
    nature[indice].addEventListener("click", () => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          mostrar(data);
        })
        .finally(() => console.log("fin"))
        .catch((error) => console.error(error));
      const caja = document.querySelectorAll(".gallery-item.h-100");
      const cajaNature = document.querySelectorAll(".img-fluid");
      function mostrar(data) {
        data.forEach((element, i) => {
          if (element.tipo == tipo) {
            arrayImg.push(element.imagen);
            arrayText.push(element.texto);
          }
        });
        let j = 0;

        for (let i = 0; i < 8; i++) {
          cajaNature[i].setAttribute("src", arrayImg[j]);
          j++;

          if (j >= arrayImg.length) {
            j = 0;
          }
        }
        caja.forEach((element, i) => {
          const texto = document.createElement("span");

          texto.textContent = arrayText[i];
          element.appendChild(texto);
        });
      }
    });
  }

  function accion2() {
    nature[1].addEventListener("click", () => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          mostrar(data);
        })
        .finally(() => console.log("fin"))
        .catch((error) => console.error(error));
      const caja = document.querySelectorAll(".gallery-item.h-100");
      const cajaNature = document.querySelectorAll(".img-fluid");
      function mostrar(data) {
        data.forEach((element, i) => {
          if (element.tipo == "naturaleza") {
            arrayImagenesNaturaleza.push(element.imagen);
            arrayTextoNaturaleza.push(element.texto);
          }
        });
        console.log(arrayImagenesNaturaleza);
        let i = 0;
        alert(arrayTextoNaturaleza);
        for (let i = 0; i < 8; i++) {
          cajaNature[i].setAttribute("src", arrayImagenesNaturaleza[i]);
          cajaNature[i].textContent = arrayTextoNaturaleza[i];
        }
        caja.forEach((element, i) => {
          alert;
          const texto = document.createElement("p");
          texto.textContent = arrayTextoNaturaleza[i];
          element.appendChild(texto);
        });
      }
    });
  }
}
