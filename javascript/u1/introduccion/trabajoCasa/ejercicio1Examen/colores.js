window.addEventListener("load", inicio)


    function inicio(){
        const fieldset = document.querySelector('#todos')
        const boton = document.querySelector('button')
        const maxDivs = 20
        const colores = ['red', 'blue', 'green', 'yellow']


        for(let i=1; i<= maxDivs; i++){
            
            const cajas = document.createElement("div");
            const random = Math.floor(Math.random()*colores.length)
            cajas.style.backgroundColor = colores[random]
            if(cajas.style.backgroundColor == "red"){
                cajas.textContent="rojo"
            } else if(cajas.style.backgroundColor == "blue"){
                cajas.textContent="Azul"
            }else if(cajas.style.backgroundColor == "green"){
                cajas.textContent="Verde"
            }else if(cajas.style.backgroundColor == "yellow"){
                cajas.textContent="Amarillo"
            }

            fieldset.appendChild(cajas)

        }

        boton.addEventListener("click", ()=>{
            const CajaRoja= document.querySelector("#rojos")
            const CajaAzul= document.querySelector("#azules")
            const CajaVerde= document.querySelector("#verdes")
            const CajaAmarrillo= document.querySelector("#amarillos")
            const divs = document.querySelectorAll("div")
           
            divs.forEach(divActual => {
                const coloresDivActual =  divActual.style.backgroundColor;
                if(coloresDivActual == "red"){
                    CajaRoja.appendChild(divActual)
                }else if(coloresDivActual == "blue") {
                    CajaAzul.appendChild(divActual)
                }else if (coloresDivActual== "green"){
                    CajaVerde.appendChild(divActual)
                }else if(coloresDivActual=="yellow"){
                    CajaAmarrillo.appendChild(divActual)
                }
            })


            })
    }