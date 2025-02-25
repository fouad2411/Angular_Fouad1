window.addEventListener("load",inicio)


function inicio(){
    //contenedor existente que seria el body
    const cuerpo= document.body;        
    console.log("cuerpo "+cuerpo)

    //crear contenedor principal

    const divPrincipal= document.createElement('div');
    divPrincipal.className='contenedorPrincipal';
    divPrincipal.textContent="Estoy en contenedor principal";
    cuerpo.appendChild(divPrincipal);
    //contenedor secundario
    //crear una nueva caja(div)
    const divSecundario= document.createElement('div');
    //class name para el css
    divSecundario.className='contenedorSecundario';
    //agregar texto
    divSecundario.textContent='Contenedor Secundario';
    // ahora iria el div secundario dentro del primero:
    divPrincipal.appendChild(divSecundario)
    
    const listaBotones=['Botón1', 'Boton2', 'Boton3', 'Boton4', 'Boton5','Boton6','Boton7','Boton8'];
     
    //Bucle para recorrer cada elemento del array
    //item es cada elemento del array
    listaBotones.forEach((item,indice)=>{
        //crear nuevo botón (total botones: listaBotones.lenght)
       const  nuevoBoton= document.createElement("button");
        nuevoBoton.textContent=item;
        //agregar la clas botonX
        nuevoBoton.className='botonX';
        divSecundario.appendChild(nuevoBoton);

        nuevoBoton.addEventListener("click",()=>{
            console.log("evento de "+item)
            //crear una imagen por cada evento click

            const imagenX= document.createElement('img');
            //añadir al atributo src de la etiqueta img un valor 
            //imagenX.setAttribute("src","https://randomuser.me/api/portraits/men/10.jpg");
            //divSecundario.appendChild(imagenX);
            let random = Math.floor(Math.random()*50)
            if(indice % 2 ==0){
                imagenX.setAttribute("src","https://randomuser.me/api/portraits/women/"+random+".jpg")
                divSecundario.appendChild(imagenX);
            }else{
                imagenX.setAttribute("src","https://randomuser.me/api/portraits/men/"+random+".jpg")
                divSecundario.appendChild(imagenX);
            }
        })

    })
}
