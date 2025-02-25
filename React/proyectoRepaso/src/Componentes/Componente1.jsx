/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Personas from "./Personas";

export default function Componente1() {
  const [datos, setDatos] = useState([]);
  const [buscar, setBuscar] = useState('');

  useEffect(() => {
    fetch("personas.json")
      .then((response) => response.json())
      .then((data) => setDatos(data));
  }, []);

  function cuandoCambia(event) {
    setBuscar(event.target.value);
  }

  console.log(buscar)
  return (
    <>
      <label htmlFor="nombre">nombre</label>
      <input
        type="text"
        name="nombre"
        id="nombre"
        value={buscar}
        onChange={() => cuandoCambia(event)}
      />

      <Personas personas = {datos} nombrePersonas={buscar}></Personas>
    </>
  );
}
