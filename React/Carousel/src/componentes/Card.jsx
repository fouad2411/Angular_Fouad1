import { useEffect, useState } from "react";


function Card() {
    const [imagenes, setImagen] = useState([]);
    
      
      useEffect(() => {
          const url = "http://camacho.atwebpages.com/jumbotronAleatorio/getImagenes.php";
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            setImagen(data);
          })
          .catch((error) => {
            console.log(error);
          });
    
      }, []);
  return (
    
    <div className="row">
{

        imagenes.map((item,index)=>{
            return(
                
                <div key={index} className="card col-lg-3 m-4">
                
                <img className="card-img-top" src={item.imagen} alt={index}/>
                <div className="card-body">
                <h4 className="card-title">{item.texto}</h4>
                <p className="card-text">{item.subtexto}</p>
                <a href={item.imagen} className="btn btn-primary">Ver Imagen</a>
            </div>
        </div>
            )
        })
    }
        
        </div>
    )
}


export default Card