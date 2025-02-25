window.addEventListener("load",inicio);

function inicio(){
    const botonInicio= document.querySelector("#iniciar")
    botonInicio.addEventListener("click", comenzarJuego)
    botonInicio.className  = 'botonEmpezar'

    const conetenedorMuestra= document.querySelector(".claseMuestra")
    const contenedorTodos= document.querySelector(".gallery")
    const marcadorPuntos= document.querySelector("#puntos")
    marcadorPuntos.style.fontSize="45px"
    const marcadorTiempo=document.querySelector("#cuentaAtras")
    marcadorTiempo.style.fontSize="45px"
    let tiempoJuego;
    let puntos=0;
    let numeroRandom;
    let segundos=30;
    function comenzarJuego(){
        //funcion que va a contar los segundos
        contadorSegundos();

        //mostrarImagen
        funcionMuestra();

        cargarTodas();

       
    }

    function cargarTodas(){
        limpiarCaja();
        setInterval(()=>{
            for(let i = 0; i < 10; i++){
                let nr = (Math.floor(Math.random()*20))
                const imagenes = document.createElement("img")
    
                imagenes.setAttribute("src","img/"+nr+".JPG")
                contenedorTodos.appendChild(imagenes)
            }
        },3000)
       
    }

    function funcionMuestra(){
        const imagenMuestra= document.createElement("img")

        let random= Math.floor(Math.random()*20)

        imagenMuestra.setAttribute("src", "img/"+random+".JPG")
        conetenedorMuestra.appendChild(imagenMuestra)
    }
    function contadorSegundos(){
        tiempo = setInterval(cuentaAtras, 1000);

        function cuentaAtras(){
            botonInicio.disabled= true
            segundos--;
            marcadorTiempo.innerText="Tiempo:"+segundos;

            if(segundos == 0){
                botonInicio.disabled=false
                clearInterval(tiempo)
                clearInterval(tiempoJuego)
                limpiarCaja();
                segundos=30;
                puntos=0;
            }
        }
    }

    function limpiarCaja(){

        while(contenedorTodos.firstChild){
            contenedorTodos.removeChild(contenedorTodos.firstChild)
        }
    }

}