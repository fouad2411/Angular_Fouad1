/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

function Hortaliza({mensajeDeHuerto,mensajeDeHijoHortaliza,semillaParaPadre}) {
  const [hortalizaAHuerto,setHortalizaAHuerto]=useState("")
  const [numero, setNumero]=useState(0)

  const seteo=(e)=>{
    setHortalizaAHuerto(e.target.value)
    mensajeDeHijoHortaliza(e.target.value)
  }
  function seteoSemilleros(e){
    let num= Math.floor(Math.random()*100)
    setNumero(num)
    semillaParaPadre(num)

  }
  return (
    <>
    <h2>Hortaliza</h2>
    <p><input type="text" value={hortalizaAHuerto} onChange={seteo} /></p>
    <p>El huerto dice:{mensajeDeHuerto}</p>
    <button onClick={seteoSemilleros}>Mandar Semilleros </button>
    </>
  )
}

export default Hortaliza