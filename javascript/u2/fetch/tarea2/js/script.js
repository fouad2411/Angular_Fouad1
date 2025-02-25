document.addEventListener("DOMContentLoaded", () => {
const url= "http://camacho.atwebpages.com/jumbotronAleatorio/getImagenes.php"
const ubicacion = document.querySelector("#cajaX")
fetch(url)
.then(response => response.json())
.then(data =>{
    console.log(data)
    mostrar(data)
})
.finally(()=>console.log("Terminado"))
.catch(error => console.error(error))




function mostrar(datos){
    datos.forEach(paisaje => {
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
            imagen.setAttribute("src",paisaje.imagen)
            tarjeta.appendChild(imagen) 
        //creamos el card body
        const tarjetaInterior=document.createElement("div")
            tarjetaInterior.className="card-body"
            tarjeta.appendChild(tarjetaInterior)
        ////ahora vamos con el titulo
        const titulo= document.createElement("h4")
            titulo.className="card-title"
            titulo.textContent=paisaje.texto
            tarjetaInterior.appendChild(titulo)
        //y ahora el subtitulo
        const subtitulo= document.createElement("p")
            subtitulo.className="card-text"
            subtitulo.textContent=paisaje.subtexto
            tarjetaInterior.appendChild(subtitulo)
        //boton ver 
        const botonVer= document.createElement("button")
        botonVer.className="btn btn-prymary"
        botonVer.textContent="Ver"
        tarjetaInterior.appendChild(botonVer)
        //boton editar
         //boton ver 
         const botonEditar= document.createElement("button")
         botonEditar.textContent="Editar"
         botonVer.appendChild(botonEditar)
 

    });

   
}})
/*
<div class="card">
    <img class="card-img-top" src="holder.js/100x180/" alt="">
    <div class="card-body">
      <h4 class="card-title">Title</h4>
      <p class="card-text">Text</p>
    </div>
  </div>
*/ 