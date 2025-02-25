const url2 ="getWebcams.json"
const ubicacion = document.querySelector("div")
const boton = document.getElementById("mostrar")
mostrar()

function mostrar(){
  
   
    
    boton.addEventListener("click", () => {
        setInterval(() => {
            const random = Math.floor(Math.random() * 9);
            let v = "video" + random + ".mp4";  // Cambiar \\ por /
            console.log(random);
    
            const video = document.createElement("video");
            video.className = "gallery";
            video.setAttribute("src", v);
            video.autoplay = true;
            video.loop = true;
            video.style.width = "100%";
    
            ubicacion.replaceChildren(video);  // Reemplazar el contenido anterior con el nuevo video
        }, 1000);
    });
    
}
