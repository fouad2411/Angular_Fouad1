window.addEventListener("load",inicio)


function inicio(){
    const cuerpo = document.body
    const boton = document.getElementById("jugar1")


    let contenedor= document.createElement("div")
    contenedor.className= "container"

    let galeria= document.createElement("div")
    galeria.className="gallery"

    cuerpo.appendChild(contenedor)
    contenedor.appendChild(galeria)

    for(let i =0 ;i <40; i++){
        const conjuntoCajas=document.createElement("div")
        conjuntoCajas.setAttribute= ""
        conjuntoCajas.className="fondo"
        galeria.appendChild(conjuntoCajas)

    }

}