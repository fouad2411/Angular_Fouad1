window.addEventListener("load", inicio)


function inicio(){

    const div = document.querySelector(".container")
   div.className="container"
   const galeria = document.querySelector(".gallery")
   galeria.className="gallery";

   div.appendChild(galeria);
    
   for( let i =0 ; i <=9; i++){
    const nuevaImg= document.createElement("img");

    setInterval(() => {
        let random= Math.floor(Math.random()*20)
        nuevaImg.setAttribute("src", "img/"+random+".JPG")
    },1000)
    galeria.appendChild(nuevaImg)

   }


    


}