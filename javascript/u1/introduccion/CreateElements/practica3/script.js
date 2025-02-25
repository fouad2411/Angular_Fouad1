window.addEventListener('load',inicio)
function inicio(){
    const imagenes = document.querySelectorAll("img")
   

       imagenes.forEach((item, indice) => {
        console.log(imagenes)

        let random = Math.floor(Math.random()*20) 

        item.setAttribute("src","img/"+random+".JPG")
   
   
   
        
       });
    
}