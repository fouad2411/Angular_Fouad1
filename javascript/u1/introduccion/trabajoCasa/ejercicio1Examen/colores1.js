window.addEventListener("load", inicio)


function inicio() {
    const reset = document.createElement("button");
    reset.textContent="Resetear"
    const cuerpo= document.body
    cuerpo.appendChild(reset);
    console.log("fs")
    const contenedorPadre = document.getElementById("todos")

    const boton = document.querySelector("button")
    
    const colores = ["red", "green", "blue", "yellow"];

    const divMax = 20;


    for (let i = 0; i <= divMax; i++) {
        const cajas = document.createElement("div")
        const random = Math.floor(Math.random()*colores.length)

        cajas.style.backgroundColor= colores[random];
        contenedorPadre.appendChild(cajas);

        if(cajas.style.backgroundColor == "red"){
            cajas.textContent="rojo"
        }else if(cajas.style.backgroundColor == "blue"){
            cajas.textContent="azul"
        }else if(cajas.style.backgroundColor == "green"){
            cajas.textContent="verde"
        }else if(cajas.style.backgroundColor == "yellow"){
            cajas.textContent="amarillo"
        }

    }
    boton.addEventListener("click", funcionalidadBoton);

    function funcionalidadBoton(){

        const cajaRoja= document.getElementById("rojos")
        const cajaAzul= document.getElementById("azules")
        const cajaVerde= document.getElementById("verdes")
        const cajaAmarilla= document.getElementById("amarillos")
        const divs= document.querySelectorAll("div")

        divs.forEach(divActual =>{
            const divColorActual= divActual.style.backgroundColor
            if(divActual.style.backgroundColor=="red"){
                cajaRoja.appendChild(divActual)
            }else if(divColorActual== "green"){
                cajaVerde.appendChild(divActual)
            }else if(divColorActual== "blue"){
                cajaAzul.appendChild(divActual)
            }else if(divColorActual== "yellow"){
                cajaAmarilla.appendChild(divActual)
            }
        })
    }
    reset.addEventListener("click",()=>{
        contenedorPadre.innerHTML = ""; // Limpiar el contenedor padre
        document.getElementById("rojos").innerHTML = ""; // Limpiar caja de rojos
        document.getElementById("azules").innerHTML = ""; // Limpiar caja de azules
        document.getElementById("verdes").innerHTML = ""; // Limpiar caja de verdes
        document.getElementById("amarillos").innerHTML = ""; // Limpiar caja de amarillos
        for (let i = 0; i <= divMax; i++) {
            const cajas = document.createElement("div")
            const random = Math.floor(Math.random()*colores.length)
    
            cajas.style.backgroundColor= colores[random];
            contenedorPadre.appendChild(cajas);
    
            if(cajas.style.backgroundColor == "red"){
                cajas.textContent="rojo"
            }else if(cajas.style.backgroundColor == "blue"){
                cajas.textContent="azul"
            }else if(cajas.style.backgroundColor == "green"){
                cajas.textContent="verde"
            }else if(cajas.style.backgroundColor == "yellow"){
                cajas.textContent="amarillo"
            }
            
        }


    })

}