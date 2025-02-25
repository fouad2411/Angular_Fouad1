// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

// eslint-disable-next-line react/prop-types
function Hortaliza({mensajeDeHuerto, mensajeParaHuerto, mandarSemillero}) {
    const [mensajeHuerto, setMensajeHuerto]=useState("")
    // eslint-disable-next-line no-unused-vars
    const [numero, setNumero]=useState(0)
  const seteoNum=()=>{
    let num= Math.floor(Math.random()*100)
    setNumero(num)
    mandarSemillero(num)
  }
    const seteo= (e)=>{
        setMensajeHuerto(e.target.value);
        mensajeParaHuerto(e.target.value)
    };
    return (
        <div>
        <h2>Hortaliza</h2>
  
        <input
          type="text"
          value={mensajeHuerto}
          onChange={seteo}
          placeholder="Mensaje para padre de hortaliza"
          />
          <p> EL huerto dice:{mensajeDeHuerto}</p>
          <button onClick={seteoNum}>Mandar Semillero</button>
      </div>
  )
}

export default Hortaliza