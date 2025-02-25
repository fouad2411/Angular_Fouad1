window.addEventListener("load", inicio)

function inicio(){
    const DIVMAX=20

    //asociar boton
    const boton = document.querySelector("button")
//array colores
const colores= ["red", "green", "blue", "orange"]
const nombreColores=["rojo","verde","azul","naranja"]
const cuerpo = document.body
const cajaPrincipal = document.createElement("div")
cajaPrincipal.className="container"
cuerpo.appendChild(cajaPrincipal)
//fieldset del todos

const fieldsetTodos= document.createElement("fieldset")
const leyendaT= document.createElement("legend")
leyendaT.textContent="Todos"
fieldsetTodos.className="gallery"
cajaPrincipal.appendChild(fieldsetTodos);
fieldsetTodos.appendChild(leyendaT);

const fieldsetRojo= document.createElement("fieldset")
const leyendaR= document.createElement("legend")
leyendaR.textContent="Rojo"

cajaPrincipal.appendChild(fieldsetRojo);
fieldsetRojo.appendChild(leyendaR);



const fieldsetVerde= document.createElement("fieldset")
const leyendaV= document.createElement("legend")
leyendaV.textContent="Verde"


cajaPrincipal.appendChild(fieldsetVerde);
fieldsetVerde.appendChild(leyendaV);

const fieldsetNaranja= document.createElement("fieldset")
const leyendaN= document.createElement("legend")
leyendaN.textContent="Naranja"
cajaPrincipal.appendChild(fieldsetNaranja);
fieldsetNaranja.appendChild(leyendaN);

const fieldsetAzul= document.createElement("fieldset")
const leyendaA= document.createElement("legend")
leyendaA.textContent="Azul"
cajaPrincipal.appendChild(fieldsetAzul);
fieldsetAzul.appendChild(leyendaA);


    for( let i=0; i < DIVMAX; i++){
        console.log("hol")
        const contenedorColores= document.createElement("div");

        contenedorColores.style.paddingBottom="25px"
        contenedorColores.style.fontWeight="bold"
        
        contenedorColores.style.width="70px"
        contenedorColores.style.height="50px"
        const random= Math.floor(Math.random()*colores.length)
       

        contenedorColores.style.backgroundColor= colores[random]
        contenedorColores.innerText= nombreColores[random]
        
        fieldsetTodos.appendChild(contenedorColores)

        

    }

    boton.addEventListener("click", ()=>{
       const divsColores = fieldsetTodos.querySelectorAll("div")
       
       divsColores.forEach(cajaActual => {
            if(cajaActual.style.backgroundColor=="red") {
            fieldsetRojo.appendChild(cajaActual)
       
        }else if(cajaActual.style.backgroundColor=="green"){
            fieldsetVerde.appendChild(cajaActual)
        }else if(cajaActual.style.backgroundColor=="blue"){
            fieldsetAzul.appendChild(cajaActual)
        }else if(cajaActual.style.backgroundColor=="orange"){
            fieldsetNaranja.appendChild(cajaActual)
        }
        });

    })
    

}


