import "./estilo.css"
import  { useState } from "react";

export default function Pie() {
    const [numeroRandom, setNumeroRandom] = useState(0);
   const generarNumeroRandom =()=>{
    const numero = Math.floor(Math.random() * 100) + 1;
    setNumeroRandom(numero);
  };
    return (
    <div className='app'>
        <div>Pie Página</div>
        <div> Número Aleatorio: {numeroRandom}</div>
        <button className='estilo_decremento' onClick={generarNumeroRandom}> Generar Nuevo Numero</button>
    </div>
  )
}
