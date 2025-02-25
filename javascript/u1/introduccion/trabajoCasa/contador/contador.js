window.addEventListener("load", inicio )

function inicio(){
    const parrafo = document.querySelector("#clickCounter") 
    
    const boton = document.querySelector("#countButton")

    const reset = document.querySelector("#resetButton")

    boton.addEventListener("click", botonContar);
    reset.addEventListener("click", botonReser);

    let contador = 1;
    let contarMax = 11;
    function botonContar(){

        if(contador < contarMax){
            parrafo.textContent = "Contador: " + (contador++)  
             
    }else{
        
    }
    if(contador == contarMax){
        boton.disabled= true
        boton.textContent = "Limite alcanzado"
    }

    }

    function botonReser(){
        contador = 0;
        parrafo.textContent="Contador:"+ 0
        boton.disabled= false;
        boton.textContent= "Hacer Click"
    }

}