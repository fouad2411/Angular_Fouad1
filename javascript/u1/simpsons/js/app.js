window.onload=inicio;
//const listaImagenes=document.querySelectorAll("#images img");
const listaImagenes=document.getElementById("images").querySelectorAll("img");
const contenedorDestino=document.querySelector("#picture img");
//identifico el contenedor de fondo para color o fondo

const contenedorFondo= document.getElementById("picture")
const contenedorBorde= document.getElementById("frame")

//array de los colores de fondo
//const listaFondos=document.querySelectorAll("#fondos div");
const listaFondos=document.getElementById("fondos").querySelectorAll("div");
//const listaFondos=document.getElementById("fondos").getElementsByTagName("div");
//array de los colores de bordes
//const listaBordes=document.querySelectorAll("#bordes div");
const listaBordes=document.getElementById("bordes").querySelectorAll("div");
const zoom=document.querySelectorAll("#zoom img");
//funcion principal
function inicio(){
    //versión Camacho
listaImagenes.forEach(cargarImagenes);
// versión Adrián
//listaImagenes.forEach(item=>{
//     item.onclick=()=>{
//         cargarImagenes2(item,contenedorDestino);
//     }
//} 
//)

//cargar colores de fondo
listaFondos.forEach(cargarFondos);

listaBordes.forEach(cargarBordes);

//sntes de cerra la funcino de incio quedan dos funciones: zoom+ zoom-
  zoom[0].onclick=zoomMas;
  zoom[1].onclick= zoomMenos;
}

//funcion de zoom mas
  function zoomMas(objeto){
    contenedorDestino.style.transform="scale(2)";
  }
  function zoomMenos(objeto){
    contenedorDestino.style.transform="scale(1)";
  }
function cargarBordes(item){
  item.onclick=(item)=>{
  let nombreColor= item.target.id;
  switch(nombreColor){
    case 'negroBorde': contenedorFondo.style.border= "10px solid black";
    break;
    case 'rojoBorde': contenedorFondo.style.border= "10px solid red";
    break;
    case 'azulBorde': contenedorFondo.style.border= "10px solid blue";
    break;
    case 'amarilloBorde': contenedorFondo.style.border= "10px solid yellow";
    break;
    case 'verdeBorde': contenedorFondo.style.border= "10px solid green";
    break;
    case 'rosaBorde': contenedorFondo.style.border= "10px solid pink";
    break;
  }
  }
}

function cargarFondos(item){
  item.onclick=mostrarFondo;
}
function mostrarFondo(item){
    let nombreColor= item.target.id;
    switch(nombreColor){
      case 'negro': contenedorFondo.style.backgroundColor= "black";
      break;
      case 'rojo': contenedorFondo.style.backgroundColor= "red";
      break;
      case 'azul': contenedorFondo.style.backgroundColor= "blue";
      break;
      case 'amarillo': contenedorFondo.style.backgroundColor= "yellow";
      break;
      case 'verde': contenedorFondo.style.backgroundColor= "greem";
      break;
      case 'rosa': contenedorFondo.style.backgroundColor= "pink";
      break;
    }
}



//funcionalidades
function cargarImagenes(item,indice){
  item.onclick=mostrar;
}
function mostrar(img){
    //contenedorDestino.src=img.target.src;
    contenedorDestino.setAttribute("src",img.target.src);
   

}
// function cargarImagenes2(item,contenedorDestino){
// contenedorDestino.src=item.src;
// }