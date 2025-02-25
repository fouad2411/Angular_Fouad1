window.addEventListener("load", inicio);


function inicio(){
   const boton= document.getElementById("tablaa")
    const caja= document.getElementById("contenido")
   
    boton.addEventListener("click",()=>{
        console.log("s")
        const tabla = document.createElement("table")
        tabla.style.border="1px"; 


        caja.appendChild(tabla)
        let numeroFilas= prompt("Elige el numero de filas")
        let numeroColumnas= prompt("Elige el numero de columnas")
        for(let i = 0;i< numeroFilas;i++){
            let fila= document.createElement("tr");

            for(let j=0; j<numeroColumnas; j++){
                let x = Math.floor(Math.random()*100)
                let columna= document.createElement("td");
                columna.style.border="1px solid blue"
                columna.textContent=x

                fila.appendChild(columna)
            }
            tabla.appendChild(fila)

        }

    })
}