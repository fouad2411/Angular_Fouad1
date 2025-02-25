// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

export default function Acordeon() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    fetch("Acordeon.json")
      .then((response) => response.json())
      .then((data) => setDatos(data));
  }, []);
  return (
    <>
      <div className="accordion mb-2" id="accordionExample">
        {datos.map((item, index) => {
          return (
            <div key={index} className="accordion-item">
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className="accordion-button collapsed" 
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`} 
                  aria-expanded="false"  
                  aria-controls={`collapse${index}`}  
                >
                  {item.pregunta}
                </button>
              </h2>
              <div
                id={`collapse${index}`}  
                className="accordion-collapse collapse" 
                data-bs-parent="#accordionExample"  
              >
                <div className="accordion-body">
                  {item.respuesta}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
