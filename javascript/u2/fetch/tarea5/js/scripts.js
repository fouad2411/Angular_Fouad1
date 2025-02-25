window.addEventListener("load", inicio);
const url="getTodoPersonal.js";
const contenedorPadre = document.querySelectorAll(".col-md-4.mb-5");


function inicio(){
    eliminarPlantilla();
    fetch(url)
    .then(response=> response.json)
    .then(data => mostrar(data))
    .catch(()=>console.log("fin"))
    .finally(error=> console.error(error))


}
function mostrar(){
    
}


function eliminarPlantilla(){
console.log("dd")
    contenedorPadre.forEach(element => {
        while(element.hasChildNodes()){
            element.removeChild(element.firstChild)
           }
    });
   
    
}