window.addEventListener("load",inicio)

function inicio(){
    //damos color al fondo
    with(document.body.style){
        backgroundColor="#c8ffb5";
        

    }
    //identificamos el body
    const body = document.querySelector("body");
    
    //identificamos cada div
    const primerDiv= body.firstElementChild;
        const tabla = primerDiv.firstElementChild.firstElementChild
             const ultimaFila= tabla.lastElementChild;
                 ultimaFila.style.color="red";

    // con el next element identificamos cada uno
    const segundoDiv= primerDiv.nextElementSibling;
        const ultimoEnlace= segundoDiv.lastElementChild
        ultimoEnlace.setAttribute('href', 'https://www.eldiario.es')
        ultimoEnlace.textContent = 'El diario'
    const tercerDiv= segundoDiv.nextElementSibling;
    //
    const ol = tercerDiv.firstElementChild
    const li = ol.lastElementChild.previousElementSibling
    li.style.backgroundColor = 'blue'

    const cuartoDiv = tercerDiv.nextElementSibling;

    const primeraLinea= cuartoDiv.firstElementChild;
    primeraLinea.style.color="red";
    const segundaLinea= primeraLinea.nextElementSibling
    segundaLinea.style.color="blue";
    
    primerDiv.style.backgroundColor = "green";
    // primerDiv= body.firstElementChild;
   
}