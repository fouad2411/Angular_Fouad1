/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function Personas({ personas, nombrePersonas }) {
  let arrayPersonas = Array.from(personas);
  let concidencias = arrayPersonas.filter((persona) =>
    persona.name.toLowerCase().includes(nombrePersonas.toLowerCase())
  );
  return (
    <>
      <h1>personas</h1>
      {concidencias.length === 0 && <p>No se encontraron usuarios</p>}
      <ul>
        {nombrePersonas
          ? concidencias.map((persona, index) => (
              <li key={index}>{persona.name}</li>
            ))
          : arrayPersonas.map((persona, index) => (
              <li key={index}>{persona.name}</li>
            ))}
      </ul>
    </>
  );
}

Personas.propTypes = {
  personas: PropTypes.array.isRequired,
  nombrePersonas: PropTypes.string.isRequired,
};
