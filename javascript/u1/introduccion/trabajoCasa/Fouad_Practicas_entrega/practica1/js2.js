//funcion empezar

window.addEventListener("load",inicio);

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
        color="green";
        padding= "30px";
        border ="3px solid red"
        margin="2em"
        fontFamily="sans"
        opacity="50%"

    }

    
}



//const intervalo= setInterval(()=> {
  //  if(document.body.style.visibility=== 'visible'){
    //    document.body.style.visibility ='hidden'
    //}else{
      //  document.body.style.visibility ='visible'
   // }
//},5000)
//pasados 3 segundos se oculta 
setTimeout(() =>{
    document.body.style.visibility= 'hidden'

    
            
    },3000)
//pasados 6000 segundos se vuelve a mostrar
    setTimeout(() =>{
        document.body.style.visibility= 'visible'
    
        
                
        },6000)