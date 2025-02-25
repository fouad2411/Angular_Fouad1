const url2 ="getWebcams.json"
const ubicacion = document.querySelector("div")
const boton = document.getElementById("mostrar")
fetch(url2)
.then(response=> response.json())
.then(data => {console.log
               mostrar(data) 
})
.finally(()=> console.log("terminado"))
.catch(error=>console.error(error))

function mostrar(datos){
  
   
    
    boton.addEventListener("click", ()=>{
        setInterval(()=>{
            const random = Math.floor(Math.random()*9);
            let d =   datos[random]
           console.log(random)
            const video= document.createElement("video");
            video.className="gallery"
            video.setAttribute("src", d.url)
            video.autoplay=true;
            video.loop=true;
            video.style.width = "100%";
            ubicacion.replaceChildren()
            ubicacion.appendChild(video)
        },1000)
    })
}
