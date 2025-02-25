const url ="http://camacho.atwebpages.com/carouselCiudades2/getCiudades.php"

const ubicacion = document.querySelector("tbody");


fetch(url)
.then(response => response.json())
.then(data =>{console.log(data)
            mostrar(data)
})
.finally(()=>console.log("Terminado."))
.catch(error=> console.error(error))


function mostrar(datos){
    datos.forEach(ciudad => {
        const fila = document.createElement("tr")
            ubicacion.appendChild(fila);
       
            const tdCiudad = document.createElement("td")
            fila.appendChild(tdCiudad)
            tdCiudad.textContent=ciudad.ciudad_nombre

        const tdHabitantes=document.createElement("td");
            fila.appendChild(tdHabitantes);
            tdHabitantes.textContent=ciudad.ciudad_poblacion

        const tdVideo= document.createElement("td");
            fila.appendChild(tdVideo)
           tdVideo.innerHTML=ciudad.video
        
       const tdImagen= document.createElement("td");
       fila.appendChild(tdImagen)
            const imagen = document.createElement("img")
                imagen.setAttribute("src", ciudad.imagen)
                imagen.width="280"
                imagen.height="220"
                tdImagen.appendChild(imagen)
           
        const tdMapa =document.createElement("td")
            fila.appendChild(tdMapa)
            tdMapa.innerHTML=ciudad.mapa   
        const tdId= document.createElement("td")
            fila.appendChild(tdId)
            tdId.textContent=ciudad.ciudad_ID
    });
}