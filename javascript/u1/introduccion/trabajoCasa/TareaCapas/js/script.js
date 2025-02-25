//FOUAD ALLAY ALLAI
window.addEventListener("load", inicio)

function inicio(){
    //asociamos el cuerpo
    const cuerpo = document.body

    //creamos el div el fieldset y la leyenda
    const cajaPrincipal= document.createElement("div");
    const fieldset= document.createElement("fieldset");
    const leyenda = document.createElement("legend");
    //añadimos el div al cuerpo y el fieldset al div
    cuerpo.appendChild(cajaPrincipal)
    cajaPrincipal.appendChild(fieldset)
    //añadimos le damos un nombre a leyenda y lo añadimos al fieldset
    leyenda.textContent= "Practica Imagenes Fouad"
    fieldset.appendChild(leyenda)
    //les damos estilo
    cajaPrincipal.className="container"
    fieldset.className="gallery"

    imagenes(fieldset);
}
function imagenes( fieldset){
    //constante que va a limitar la creacionn de img a 40
    const MAXIMAGENES=40;
    for(let i=0 ; i<MAXIMAGENES;i++){
        //creamos las imagenes
        const imagen= document.createElement("img")
        let x= Math.floor(Math.random()*50)
        //seteamos la imagen para poder asignarle una foto random de la página que nos pasas
        imagen.setAttribute("src", "https://randomuser.me/api/portraits/men/"+x+".jpg")
        //lo añadimos para que salga
        fieldset.appendChild(imagen)
        //añadimos un evento y ademas utilizamos la funcion toggle que sirve para aplicar 
        //el estilo si lo tiene, pero si lo tiene lo quita
        
        imagen.addEventListener("click",()=>{
           if(imagen.className==="ponerBorde"){
            imagen.className="quitarBorde"
           }else {
            imagen.className="ponerBorde"

           }
        })
    }
}