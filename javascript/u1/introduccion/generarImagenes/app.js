window.addEventListener('load', inicio)

function inicio(){
    //identificamos el body
    const cuerpo= document.body
    cuerpo.className="container"
    //Creamos elementos necesarios
    //El borón que realizará la acción y el div donde se guardarán las imágenes
    const boton = document.createElement('button')
    //texto
    boton.textContent="Generar Imagenes"
    const caja= document.createElement('div')
    caja.className="gallery"
    

    //añadir el botón al div y botón al div
    cuerpo.append(boton)
    cuerpo.appendChild(caja);

    boton.addEventListener("click", ()=>{
        let numImagenes= parseInt(prompt('Introduce el número de imágenes'))
        if (numImagenes < 5 || numImagenes >50){
            alert('El número de imágenes no puede ser menor de 5 ni mayor a 50')
        }else{
            //Limpiamos el contenido cada vez que se hace click
            //siempre limpia el primer hasta que no que no  haya más imagenes
            limpiarContenido()
           //caja.replaceChildren()
            for(let i =0; i< numImagenes; i++){
                //Nos creamos el elemento img para cada iteracion de i 
                const imagen = document.createElement("img");
                imagen.className= "gallery img"
                //Queda pendiente el className de imagen.className= 'gallery img'
                let random = Math.floor(Math.random()*50)
                //par chico, impar chica
                let genero=''
                if( i % 2== 0 ){
                    genero = "women"
                }else{
                    genero="men"
                }

                //seteamos el atributo src a la imagen
                imagen.setAttribute("src",  "https://randomuser.me/api/portraits/"+genero+"/"+random+".jpg")

                    caja.appendChild(imagen)
            }
        }
        function limpiarContenido(){
            while(caja.firstChild){
                caja.remove(caja.firstChild)
            }
        }
    })

    
    

}