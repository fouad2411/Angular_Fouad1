import React from 'react'
import "./estilo.css"
import  { useState } from "react";

function Botones() {
    const [contador, setContador] = useState(0);
    const [num1, setNum1] = useState(0);
    
    const obtenerNumero = (e: React.ChangeEvent<HTMLInputElement>) => {
      const valor = Number(e.target.value);
      if (!isNaN(valor)) {
        setNum1(valor);
      }
    };
      const incX=()=>{
        setContador(contador+ num1)
      }
    const incrementar1 =()=>{
        setContador(contador+1)
    }
    const decrementar1 =()=>{
        setContador(contador-1)
    }
  return (
    <div className="app">
      <div className='estilo_contador'>Contador Fouad</div>
        <div className='estilo_contador'>{contador}</div>
        <button className="estilo_incremento " onClick={incrementar1}>
        Incrementar
      </button>
      <button className="estilo_decremento" onClick={decrementar1}>
        Decrementar
      </button>
      <input type="number" value={num1} onChange={obtenerNumero} placeholder="incrementador"/><br />
      <button className='estilo_incremento' onClick={incX}> Inc</button>
    </div>
    
  )
}

export default Botones