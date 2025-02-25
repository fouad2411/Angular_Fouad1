window.addEventListener("load", inicio);

const nombres = ["chirimoya", "ciruela", "fresa", "kiwi", "mandarina",
    "melocoton", "melon", "naranja", "nectarina", "papaya", "peras", "piña",
    "platanos", "pomelos", "prunus", "sandias"];

const precios = [3, 4, 2, 3, 5, 6, 2, 3, 1, 1, 3, 5, 6, 1, 3, 6];

const imagenes = ["imagenes/chirimoya.PNG", "imagenes/ciruela.PNG", "imagenes/fresa.PNG", "imagenes/kiwi.PNG",
    "imagenes/mandarina.PNG", "imagenes/melocoton.PNG", "imagenes/melon.PNG", "imagenes/naranja.PNG",
    "imagenes/nectarina.PNG", "imagenes/papaya.PNG", "imagenes/peras.PNG", "imagenes/piña.PNG",
    "imagenes/platanos.PNG", "imagenes/pomelos.PNG", "imagenes/prunus.PNG", "imagenes/sandias.PNG"];

function inicio() {

    const gallery = document.getElementById("galeria")
    let contenedorImagenes;
    for (let i = 0; i < nombres.length; i++) {

        contenedorImagenes = document.createElement("div")
        contenedorImagenes.style.backgroundColor = "grey";
        let fotos = document.createElement("img")
        fotos.setAttribute("src", imagenes[i])

        fotos.addEventListener("click", () => {

            let kg = prompt("introduce el peso de " + nombres[i] + ":");

            const tabla = document.getElementById("cesta")
            const fila = document.createElement("tr")
            const columna1 = document.createElement("td");
            const columna2 = document.createElement("td");
            const columna3 = document.createElement("td");
            const columna4 = document.createElement("td");
            const caja1 = document.createElement("div")
            const caja2 = document.createElement("div")
            const caja3 = document.createElement("div")
            const boton = document.createElement("button")

            tabla.appendChild(fila)
            fila.appendChild(columna1)
            columna1.appendChild(caja1)

            caja1.textContent = nombres[i]

            fila.appendChild(columna2)
            columna2.appendChild(caja2)

            caja2.textContent = kg

            fila.appendChild(columna3)
            columna3.appendChild(caja3)

            caja3.textContent = parseInt(precios[i]) + parseInt(kg)

            fila.appendChild(boton)


            boton.textContent = "Eliminar"


            boton.addEventListener("click", () => {
                while (fila.firstChild) {
                    fila.removeChild(tabla.firstChild)
                }
            })

        })
        gallery.appendChild(contenedorImagenes);
        contenedorImagenes.appendChild(fotos)

        let spann = document.createElement("span");
        contenedorImagenes.appendChild(spann)

        spann.innerHTML = nombres[i] + "</br> Precio: " + precios[i] + "€";



    }


}



