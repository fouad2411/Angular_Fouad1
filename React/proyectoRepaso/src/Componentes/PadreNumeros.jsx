import { useState } from "react";
import HijoNumeros from "./HijoNumeros";

function PadreNumeros() {
  const [numeros, setNumeros] = useState(
    Array.from({ length: 5 }, () => Math.floor(Math.random() * 100))
  );

  const regenerarNumeros = () => {
    setNumeros(
      Array.from({ length: 5 }, () => Math.floor(Math.random() * 100))
    );
  };

  const añadirNumero = () => {
    setNumeros([...numeros, Math.floor(Math.random() * 100)]);
  };

  function añadirNumeroPorTeclado  (){
    let numeroTeclado = prompt("inroduce un numero al array");
    setNumeros([...numeros, Number(numeroTeclado)]);
  };
  return (
    <div>
      <h1>Ejercicio React</h1>
      <HijoNumeros
        numeros={numeros}
        onRegenerar={regenerarNumeros}
        onAñadir={añadirNumero}
        onPedirNumero={añadirNumeroPorTeclado}
      />
    </div>
  );
}

export default PadreNumeros;
