//url frl ficheor json
const url="getWebcamphp.json";
const ubicacion= document.querySelector("#fila");
//contenedor donde muestran los datos

//realizar solicitud
fetch(url)
  .then(response => response.json()) //aqui lo convierte en un array
  .then(data => {
                console.log(data)
                mostrar(data)
    })
  .finally(() => console.log("Terminado."))
  .catch(error => console.error(error));

function mostrar(datos){
     // <div class="card">
        //         <img class="card-img-top" src="holder.js/100x180/" alt="">
        //         <div class="card-body">
        //             <h4 class="card-title">Title</h4>
        //             <p class="card-text">Text</p>
        //         </div>
        //     </div>
   datos.forEach(webc => {
    const  columna = document.createElement("div")
        columna.className="col-lg-4"
        ubicacion.appendChild(columna);
    
    const tarjeta = document.createElement("div")
        columna.appendChild(tarjeta)
        tarjeta.className="card"
    
    const videoW =document.createElement("video")
        videoW.setAttribute("src", webc.url) ;
        videoW.autoplay=true;
        videoW.loop=true;
        tarjeta.appendChild(videoW);
    
    const cardBody = document.createElement("div");
        cardBody.className="card-body";
        tarjeta.appendChild(cardBody);

    const titulo= document.createElement("h4")
        cardBody.appendChild(titulo)
        titulo.className="card-title"
        titulo.textContent=webc.lugar;
    
    const subtitulo= document.createElement("p")
        subtitulo.className="card-text";
        subtitulo.innerHTML=webc.tiempo
        cardBody.appendChild(subtitulo)

       
   });
}