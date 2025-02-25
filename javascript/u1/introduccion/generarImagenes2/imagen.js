 window.addEventListener("load", inicio)


 function inicio(){
    
 const cuerpo= document.body
//Creacion del botón
const boton= document.createElement('button')
boton.textContent='Generar Imagenes'
// introducción del boton en el body
cuerpo.appendChild(boton);


boton.addEventListener("click", ()=>{

    cuerpo.replaceChildren();
    cuerpo.appendChild(boton);


    let nImaganes= parseInt(prompt("Introduce el número de imagenes que quieres que salgan"));
    if(nImaganes <5 || nImaganes >50){
        alert('Error número incorrectos')
        //limpieza()
    }else{
        //limpieza()
        let imagenes= declararArray(nImaganes)
        let i=0;
        let genero;
        for (const imagen of imagenes){
            if(i%2==0){
                genero = "men"
            }else{
                genero =  "women"
            }

            random = generarNumero(40)

            imagen.setAttribute('src',"https://randomuser.me/api/portraits/"+genero+"/"+random+".jpg")
            cuerpo.appendChild(imagen)
            i++
        }
    }

    function declararArray(nImaganes){
        let imagenes =[]
        for(let i=0; i <nImaganes; i++){
            let imagenX= document.createElement('img')
            imagenes.push(imagenX)
        }
        return imagenes
    }
    function generarNumero(max){
        let random = Math.floor(Math.random()*max )
        return random
    }
    function limpieza(){
        //como el boton es el primer hijo cuan el último
        //significa que el resto han sido borrados

        while(cuerpo.lastChild !== boton){
            cuerpo.removeChild(cuerpo.lastChild)
        }
        }

})
 }