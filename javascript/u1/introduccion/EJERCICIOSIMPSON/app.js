console.log("entro en js")
const personajes=["tony", "chanf","flanders","homer","march","malospelos","ken","lisa","krusty","moe","martin"]
const puntos= document.querySelector("#puntuacion")
//cada 2 segundos se cambian las imágenes
let temporolizador = setInterval(cargarImagenes, 5000);
//contenedor que coniene todas las imágenes
const cajaGallery= document.querySelector(".gallery")
const contenedorMuestra= document.querySelector(".claseMuestra");

//crear contenido de referencia
 const imagenMuestra= document.createElement("img");
 //obtenfo random para seleccionar la imagen
 let random=Math.floor(Math.random()*personajes.length)
 //cargar con setAttribute una imagen/.jog
 imagenMuestra.setAttribute("src","img/"+random+".JPG")
 //crear contenedo rpara la imagen de muestra
  
   contenedorMuestra.appendChild(imagenMuestra)
    
function cargarImagenes(){
    //function que resetea el contenido de la caja
    //cada dos segundos
    limpiarCaja();
   let puntuacion=0;
    for(let i=0; i<10; i++){
        //crear una imagenes
        let item = document.createElement("img")
        //texto que conteiene el texto de la imagen
        let rotulo= document.createElement("span")
        let random= Math.floor(Math.random()*10)
        item.setAttribute("src", "img/"+random+'.JPG')
        item.className="gallery img"
        rotulo.innerText= personajes[random]
        //añadir elementos
        cajaGallery.appendChild(item)
        cajaGallery.appendChild(rotulo)
        item.addEventListener("click",()=>{
            
            //alert("Soy: "+ personajes[random])

            if(item.src == imagenMuestra.src){
                puntuacion++;
               
                puntos.textContent= "Puntuacion: "+puntuacion;
            }else{
                puntuacion--;
                puntos.textContent= "Puntuacion: "+puntuacion;
            }
        })
    }


}
function limpiarCaja(){
    while (cajaGallery.firstChild){
        cajaGallery.removeChild(cajaGallery.firstChild)
    }
}