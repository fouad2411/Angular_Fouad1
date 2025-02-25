const url="getTodoPersonal.json"
const ubicacion = document.getElementById("ubicacion")

fetch(url)
.then(response => response.json())
.then(data =>{console.log(data)
                mostrar(data)
})
.finally(()=> console.log("Terminado"))
.catch(error => console.error(error))


function mostrar(datos){
    datos.forEach(persona => {
        //contenedor principal que tendra 3 tarjetas por fila
        const columna = document.createElement("div");
        columna.className = "col-lg-4";
        ubicacion.appendChild(columna);
        

        //tarjeta que va a contener las imagenes
        const tarjeta= document.createElement("div")
            tarjeta.className="card"
            columna.appendChild(tarjeta)
        //imagen de la tarjeta
        const imagen = document.createElement("img")
            imagen.className="card-img-top"
            imagen.setAttribute("src",persona.imagen)
            tarjeta.appendChild(imagen) 
        //creamos el card body
        const tarjetaInterior=document.createElement("div")
            tarjetaInterior.className="card-body"
            tarjeta.appendChild(tarjetaInterior)
        ////ahora vamos con el nombre
        const titulo= document.createElement("h4")
            titulo.className="card-title"
            titulo.textContent=persona.nombre
            tarjetaInterior.appendChild(titulo)
     
        //y ahora direccion
            const direccion= document.createElement("p")
            direccion.className="card-text"
            direccion.textContent="Direccion: "+persona.direccion
            tarjetaInterior.appendChild(direccion)
        //cargo
        const cargo= document.createElement("p")
            cargo.className="card-text"
            cargo.textContent="Cargo: " +persona.cargo
            tarjetaInterior.appendChild(cargo)

        //edad
        const edad= document.createElement("p")
            edad.className="card-text"
            edad.textContent="Edad: "+persona.edad
            tarjetaInterior.appendChild(edad);
    });

   
}
/*
<div class="card">
    <img class="card-img-top" src="holder.js/100x180/" alt="">
    <div class="card-body">
      <h4 class="card-title">Title</h4>
      <p class="card-text">Text</p>
    </div>
  </div>
*/ 