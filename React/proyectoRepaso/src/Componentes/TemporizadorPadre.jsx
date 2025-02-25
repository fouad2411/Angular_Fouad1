/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import TemporizadorHijo from "./TemporizadorHijo";

export default function TemporizadorPadre() {
  const [segundos, setSegundos] = useState(0);
  const [esActivo, setEsActivo] = useState(false);

  useEffect(() => {
    let intervalo;
    if (esActivo) {
      intervalo = setInterval(() => {
        if (segundos > 0) {
          setSegundos((contador) => contador - 1);
        }

        if (segundos < 0) {
          setSegundos(0);
        }
      }, 1000);
    }

    return () => {
      if (intervalo) clearInterval(intervalo);
    };
  }, [esActivo, segundos]);

  function iniciarTemporizador() {
    setEsActivo(true);
  }

  function pararTemporizador() {
    setEsActivo(false);
  }
  return (
    <>
      <p>Seegundos restantes: {segundos}</p>
      <button className="btn btn-primary" onClick={iniciarTemporizador}>
        Iniciar
      </button>
      <button className="btn btn-danger" onClick={pararTemporizador}>
        Parar
      </button>

      <TemporizadorHijo cantidadSegundos={setSegundos} />
    </>
  );
}
