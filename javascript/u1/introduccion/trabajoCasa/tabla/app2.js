window.addEventListener("load", inicio)


function inicio(){
    //array colores para poner después el fondo de los botones
    const colores= ["red", "green", "blue"]
    //asociamos el boton y el div a const const
    const boton = document.getElementById("tablaa");
    const caja = document.getElementById("contenido");

  


    boton.addEventListener("click",()=>{
        //funcion que se va a encargar de limpiar caja cada vez que le de al boton
        limpiarCaja();
        //creamos la tabla y añadimos
        const tabla = document.createElement("table");

        caja.appendChild(tabla)
        tabla.style.border= "1px solid black"
        //preguntamos cuantas filas u columnas queremos
        let numeroFilas = prompt("¿Cuantas filas quieres?: ")
        let numeroColumnas= prompt("¿Cuantas columnas quieres?: ")
        //haicemos los dos for para crear las filas y las columnas 
        for(let i =0; i <numeroFilas; i++){
            //filas
            let fila = document.createElement("tr")
            tabla.appendChild(fila)
            for(let j=0; j<numeroColumnas; j++){
                //random que se va a encargar de darke çun color aleatorio a los botones
                let x = Math.floor(Math.random()*colores.length);
                //columnas
                let columna= document.createElement("td")
                fila.appendChild(columna)
                //funcion que añade los botones
                crearBotones(columna,x);
            }
        }

    })

    function crearBotones(columna, x){
        //creamos los botones los añaddimos y le ponemos un fondo aleatorio
        const botonesCont= document.createElement("button")
        columna.appendChild(botonesCont)
        botonesCont.style.backgroundColor=colores[x]
        //creo una función para que lo que haya en el text content del boton se el nombre del color
        contenidoBoton(botonesCont);
        //funcion que va a hacer que salte el alert con el colot del boton
        botonesCont.addEventListener("click",()=>{
            if(botonesCont.style.backgroundColor=="red"){
                alert("El boton es de color rojo")
            } else if(botonesCont.style.backgroundColor==="blue"){
                alert("El boton es de color azul")
            }else if(botonesCont.style.backgroundColor==="green"){
                alert("El boton es de color verde")
            }
        })
    }

   function contenidoBoton(botonesCont){
        if(botonesCont.style.backgroundColor=="red"){
           botonesCont.textContent="Rojo"
        } else if(botonesCont.style.backgroundColor==="blue"){
            botonesCont.textContent="Azul"
        }else if(botonesCont.style.backgroundColor==="green"){
            botonesCont.textContent="Verde"
        }
    }

    function limpiarCaja(){
        while(caja.firstChild){
            caja.removeChild(caja.firstChild)
        }
    }
}