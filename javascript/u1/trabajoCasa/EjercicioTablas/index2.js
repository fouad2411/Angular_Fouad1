window.addEventListener("load", inicio);



function inicio(){

    const cuerpo = document.body
    
    const tabla= document.createElement("table");
    tabla.style.border="1px solid black"
    cuerpo.appendChild(tabla)
   
    const btn = document.body.querySelector('button').addEventListener("click", ()=>{
        limpiar();
        for(let i=0;i< 5; i++){
            const fila = document.createElement("tr")
            if (i %2== 0){
                fila.style.backgroundColor = '#b2babb'
            }else{
                fila.style.backgroundColor = '#e5e8e8'
            }
            tabla.appendChild(fila)
            for(let j=0; j < 5; j++){
                const columna= document.createElement("td");
                fila.appendChild(columna)
                const numero= Math.floor(Math.random()*10)
                columna.textContent=numero

            }

           
        }
    }
    );


    function limpiar(){
        while(tabla.firstChild){
            tabla.removeChild(tabla.firstChild)
        }
    }


   
}