/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

function Frutal({mensajeDePadre,mensajeFrutalAhuerto,mandarPLatones}) {
  const [mensajeAHuerto, setMensajeAHuerto]=useState("")
  const [numero, setNumero]=useState(0)

  const seteo =(e)=>{
    setMensajeAHuerto(e.target.value)
    mensajeFrutalAhuerto(e.target.value)
  }
  const setNumeros=()=>{
    let num= Math.floor(Math.random()*100)
    setNumero(num)
    mandarPLatones(num)

  }
  return (
    <div>
      <p>
        <input type="text" value={mensajeAHuerto} onChange={seteo}  />
      </p>
      <p>Mensaje de Huerto a Frutal: {mensajeDePadre}</p>
      <button onClick={setNumeros}>Mandar Platones</button>
    </div>
  )
}

export default Frutal