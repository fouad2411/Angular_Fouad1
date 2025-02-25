window.onload = inicio

function inicio() {
    // Selecciona todos los divs que tienen el atributo name
    const cajas = document.querySelectorAll("div[name]");
    const divTexto = document.querySelectorAll("div[name='texto']");
    //ahora con los hijos
    //como para trabajar un all hay que hacer un bucle pues=
    recuperarComunidades(cajas,divTexto)
   
    hijos.forEach((item,indice) =>{
    
  
   item.addEventListener("click",()=>{
    alert("Hijo "+indice +":"+item.textContent)
   })
     
   })
   
}

   function recuperarComunidades(cajas,divTexto){
        cajas.forEach((item) => {
            const nombre = item.querySelector("h2")
            //con el get atribute vamos a sacar el nombre 
            //que tiene en el name en este caso norte o sur
            let orientacion=item.getAttribute("name")
           
            nombre.onclick=()=>mensajeComunidades(nombre,orientacion,divTexto)
            
            //como estamos dentro del div 
            const hijos = item.querySelectorAll("ul[name='lista'] li")
            hijos.forEach((item,i) => {
            item.addEventListener("click", ()=>{
                alert("Hijo "+(i+1)+":"+item.textContent)
            })               
            });
        });
    }
    function mensajeComunidades(nombre,orientacion,divTexto){
        //alert("has pulsado: "+nombre.textContent+" hijo de "+orientacion)
        divTexto.textContent="has pulsado: "+nombre.textContent+" hijo de "+orientacion
        alert(divTexto.textContent)
    }