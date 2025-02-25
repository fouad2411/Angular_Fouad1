/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

function Carousel() {
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
    <div>
      <div id="carouselId" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner" role="listbox">
          {imagenes.map((img, index) => {
            if (index === 0) {
              return (
                
                <div key={index} className="carousel-item active">
                  <img src={img.imagen} alt={img.imagen} width={1000} />
                  <div className="carousel-caption d-none d-md-block" >
                    <h3>{img.texto}</h3>
                    <p>{img.subtexto}</p>
                  </div>

                  {console.log(img.imagen)}
                </div>
              );
            } else {
              return (
                <div key={index} className="carousel-item">
                  <img src={img.imagen} alt={img.imagen} />
                  <div className="carousel-caption d-none d-md-block" >
                    <h3>{img.texto}</h3>
                    <p>{img.subtexto}</p>
                  </div>
                </div>
              );
            }
          })}

          <a
            className="carousel-control-prev"
            href="#carouselId"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselId"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
