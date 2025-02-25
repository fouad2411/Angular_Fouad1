window.addEventListener("load", inicio)

function inicio(){
    //asociamos el cuerpo
    const cuerpo = document.body
    //asociamos el boton
    const boton= document.getElementById("jugar")
    const boton2= document.getElementById("jugar2")
    //creamos los dos div y los añadimos y les asociamos la clase
    const contenedor = document.createElement("div")
    const galeria = document.createElement("div")
    contenedor.className="container"
    galeria.className="gallery"

    cuerpo.appendChild(contenedor)
    contenedor.appendChild(galeria)

    //creamos las 20 cajas verdes
    const MAXCAJAS=20;
    for(let i=0; i <MAXCAJAS; i++){
        console.log("d")
        const cajas= document.createElement("div")
        galeria.appendChild(cajas)
        cajas.className="fondo"
        cajas.style.backgroundColor="green"
    }
    //recuperamos todas las cajas
        
    boton.addEventListener("click",()=>{
        const caja= galeria.querySelectorAll('div')

        let contador=0
        setInterval(()=>{
            if(contador<caja.length){
           if(caja[contador].style.backgroundColor=== "green"){
            caja[contador].style.backgroundColor= "red"
           }else{
            caja[contador].style.backgroundColor= "green"

           }
           contador++
          
            
           }else if(contador >= caja.length){
            contador =0
           }

        },500)
    })
    boton2.addEventListener("click",()=>{
        const caja= galeria.querySelectorAll('div')
        setInterval(()=>{
            let random = Math.floor(Math.random()*caja.length)

            if(caja[random].style.backgroundColor==="green"){
                caja[random].style.backgroundColor="red"
            }else{
                caja[random].style.backgroundColor="green"
            }
        },500)

    })

}