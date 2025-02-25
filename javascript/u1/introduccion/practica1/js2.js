//funcion empezar

window.addEventListener("load",activar);
function activar(){
    const btn1 = document.querySelector("#btn1");
    // para un solo click utilizar simplemente click
    //para doble click utilizar dblclick
    btn1.addEventListener("click", inicio)
}
function inicio(){
    //darle una identificacion a h1
   // const encab= document.body.getElementsByTagName("h1");   
    const encab= document.body.querySelector("h1");  
    const etiqueta1 = document.querySelector("h2") 
    //referencia para el programador
    console.log("encabezado"+encab.tagName) 
    //modificar el h1
    encab.style.backgroundColor='pink'
    encab.style.color='red'
    // modificar el h2
    etiqueta1.style.backgroundColor="blue"
    //para darle el body estilo
    with(document.body.style){
        backgroundColor="yellow";
        padding= "30px";
        border ="3px solid blue"
        margin="2em"
        fontFamily="sans"

    }

    
}

setTimeout(() =>{
document.body.style.visibility= 'hidden'

        
},5000)

setInterval(()=> {
    if(document.body.style.visibility=== 'visible'){
        document.body.style.visibility ='hidden'
    }else{
        document.body.style.visibility ='visible'
    }
},1000)