window.addEventListener("load", inicio)

function inicio(){
    const botonPrincipal= document.getElementById("boton-agregar")
    const divGaleria= document.querySelector(".gallery")
    const divContenedor= document.querySelector(".container")
    
    const segundoDiv= document.createElement("div")
    divContenedor.appendChild(segundoDiv)
    segundoDiv.className="gallery"
    //contador de botones
    let contadorBotones=1;
    botonPrincipal.addEventListener("click", ()=>{
       
        const botonDinamico= document.createElement("button")
        botonDinamico.textContent="Boton "+contadorBotones
        divGaleria.appendChild(botonDinamico)
        contadorBotones++;

        botonDinamico.addEventListener("click", ()=>{
            limpiarCaja();

            let x= Math.floor(Math.random()*20)

            let nrandom = Math.floor(Math.random()*10)
            botonDinamico.textContent= nrandom
            
            for(let i =0; i <nrandom; i++){

                const imagenes= document.createElement("img")
                imagenes.setAttribute("src", "img/"+x+".JPG")

                segundoDiv.appendChild(imagenes);
            }



        })
        function limpiarCaja(){
            while(segundoDiv.hasChildNodes()){
                segundoDiv.removeChild(segundoDiv.firstChild)
            }
        }

        

    })
}


