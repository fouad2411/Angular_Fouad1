/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";

function HijoNumeros({ numeros, onRegenerar, onAñadir ,onPedirNumero}) {
  return (
    <div>
      <button onClick={onRegenerar}>Regenerar Números</button>
      <button onClick={onAñadir}>Añadir Número</button>
      <button onClick={onPedirNumero}>Añadir Número de froma manual</button>

      <ul>
        {numeros.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
}

export default HijoNumeros;
