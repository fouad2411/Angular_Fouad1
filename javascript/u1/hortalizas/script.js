window.onload=inicio;


 function inicio(){
    //otoño
    const otonio= document.querySelector("h2")
    const hijosOtonio = document.getElementById("otonio").querySelectorAll("li")
     //verano
    const h2Verano= document.getElementById("verano").previousElementSibling;
    const hijosVerano= document.getElementById("verano").querySelector("li")
    const hijosVerano2= document.getElementById("verano").children;
    //primavera
    const h2Primavera= document.getElementById("primavera").previousElementSibling;
    const hijosPrimavera= document.getElementById("primavera").children;

    //hacemos la funcion en la que recuperamos previamente todos los hijos de otonio
    estacionOtonio(hijosOtonio,otonio);
    
    
    //dos formas de hacer lo de la estcion de vernao con el querry selector y querry slector all
   // estacionVerano(h2Verano, hijosVerano);
    //estacionVerano2(h2Verano, hijosVerano2);
    estacionVerano3(h2Verano,hijosVerano2);
    
    //estación de primavera
    estacionPrimavera(h2Primavera, hijosPrimavera);
    
}

    function estacionOtonio(hijosOtonio, otonio){
        otonio.style.backgroundColor="red"

        hijosOtonio.forEach(linea => {
            linea.style.backgroundColor="orange";
        });
    }

    function estacionVerano(h2Verano, hijosVerano){
        h2Verano.style.backgroundColor="green"
        
       hijosVerano.style.backgroundColor="yellow"
       hijosVerano.nextElementSibling.style.backgroundColor="pink"
       hijosVerano.nextElementSibling.nextElementSibling.style.backgroundColor="blue"
       hijosVerano.nextElementSibling.nextElementSibling.nextElementSibling.style.backgroundColor="violet";
       hijosVerano.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.backgroundColor="yellow"
       hijosVerano.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.backgroundColor="yellow"
       

    }

    function estacionVerano2(h2Verano, hijosVerano2){
        h2Verano.style.backgroundColor="green"
      
       hijosVerano2[0].style.backgroundColor="yellow"
        hijosVerano2[1].style.backgroundColor="pink"
        hijosVerano2[2].style.backgroundColor="blue"
        hijosVerano2[3].style.backgroundColor="violet"
        hijosVerano2[4].style.backgroundColor="yellow"
        hijosVerano2[5].style.backgroundColor="yellow"
    }
    function estacionVerano3(h2Verano, hijosVerano2){
        h2Verano.style.backgroundColor="green"
      for (let i = 0; i < hijosVerano2.length; i++) {
        hijosVerano2[i].style.backgroundColor="yellow"
      }
      const elemento=hijosVerano2[2].style.backgroundColor="blue";
      hijosVerano2[2].previousElementSibling.style.backgroundColor="pink";
      hijosVerano2[2].nextElementSibling.style.backgroundColor="violet";
    }

    function estacionPrimavera(h2Primavera, hijosPrimavera){
        h2Primavera.style.backgroundColor="#ff2299"
      
       hijosPrimavera[4].style.backgroundColor="lightgreen"

       let siguiente= hijosPrimavera[4].nextElementSibling
       let anterior= hijosPrimavera[4].previousElementSibling

       while(siguiente){
        siguiente.style.backgroundColor="red"
        siguiente=siguiente.nextElementSibling;
       }
       while(anterior){
        anterior.style.backgroundColor="blue"
        anterior=anterior.previousElementSibling;
       }
       
    }