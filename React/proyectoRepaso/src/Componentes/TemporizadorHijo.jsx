// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function TemporizadorHijo({ cantidadSegundos }) {
  const [segundos, setSegundos] = useState(0);

  function cuandoCambia(event) {
    const nuevoValor = parseInt(event.target.value) ;
    setSegundos(nuevoValor);
    cantidadSegundos(nuevoValor); 
  }

  return (
    <>
      <input
        type="number"
        name="numero"
        id="numero"
        value={segundos}
        onChange={cuandoCambia} 
      />
    </>
  );
}
