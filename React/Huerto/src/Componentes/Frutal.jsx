// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

// eslint-disable-next-line react/prop-types
function Frutal({mensajeDeHuerto, mensajeParaHuerto, mandarPlatones}) {
  const [mensajeAHuerto, setMensajeHuerto]=useState("")
  // eslint-disable-next-line no-unused-vars
  const [numero, setNumero]=useState(0)
  const seteoNum=()=>{
    let num= Math.floor(Math.random()*100)
    setNumero(num)
    mandarPlatones(num)
  }
  const seteo=(e)=>{
    setMensajeHuerto(e.target.value);
    mensajeParaHuerto(e.target.value)
};
  return (
    <div>
      <h3>Frutal</h3>
    <input type="text" value={mensajeAHuerto} onChange={seteo}/>
    <p>el huerto dice:{mensajeDeHuerto}</p>
    <button onClick={seteoNum}>Mandar Platones</button>
    </div>
  )
}

export default Frutal