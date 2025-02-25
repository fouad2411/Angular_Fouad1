window.addEventListener("load", inicio);

function inicio(){
    // el contador va fuera de la funcion del click porque si no siempre seria 0
    let contador =0;
    const boton = document.createElement("button");
    boton.textContent= "Cargar imagenes";
    document.body.appendChild(boton);
    boton.addEventListener("click", ()=>{
        const imagen= document.createElement("img");
        let random= Math.floor(Math.random()*50);
        
        if( contador % 2 == 0){
            imagen.setAttribute("src", "https://randomuser.me/api/portraits/women/"+random+".jpg")
        }else{
            imagen.setAttribute("src", "https://randomuser.me/api/portraits/men/"+random+".jpg")
            
        }
        contador++
        document.body.appendChild(imagen);
    })
    } 

   
           
    