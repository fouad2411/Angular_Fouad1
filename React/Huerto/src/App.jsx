import { useState } from 'react'

import './App.css'
import Hortaliza from './Componentes/Hortaliza';
import Frutal from './Componentes/Frutal';
function App() {
  const [huertoAlHortaliza, setHuertoAlHortaliza] = useState("")
  const [hortalizaContenido, sethortalizaContenido] = useState("");
  
  const [huertoAlFrutal, setHuertoAlFrutal]=useState("")
  const [frutalContenido, setFruralContenido] = useState("");

  const [semilleros, setSemilleros] = useState(0);
  const [platones, setPlatones] = useState(0);

const mensajeAFrutal=(e)=>{
  setHuertoAlFrutal(e.target.value)
}

const setearSemilleros=(semillero)=>{
  setSemilleros(semillero)
} 


const setearPlatones=(platon)=>{
  setPlatones(platon)
}
  const mensajeAHortaliza=(e)=>{
    setHuertoAlHortaliza(e.target.value)
  }
  const mensajeHortalizaAHuerto=(e)=>{
    sethortalizaContenido(e)
  }

  const mensajeFrutalAHuerto=(e)=>{
    setFruralContenido(e)
  }
  return (
    <>
   <div >
    <h3>Huerto</h3>
    <p> 
      Mensaje de huerto para hortaliza <input type="text" value={huertoAlHortaliza} onChange={mensajeAHortaliza} />
    </p>
    <p>Hortaliza dice a huerto: {hortalizaContenido}</p>
    <p>Semilleros recibidos {semilleros}</p>
    </div>   
      <div>
    <Hortaliza mensajeDeHuerto={huertoAlHortaliza} mensajeParaHuerto={mensajeHortalizaAHuerto} mandarSemillero={setearSemilleros} />
      </div>
      
      
      
      
      <div>
        Mensaje de huerto para Frutal <input type="text" value={huertoAlFrutal} onChange={mensajeAFrutal}/>
        <p>Frutal dice a Huerto {frutalContenido}</p>
        <p>Peticiones de Hostaliza a huerto {platones}</p>
        <Frutal mensajeDeHuerto={huertoAlFrutal} mensajeParaHuerto={mensajeFrutalAHuerto} mandarPlatones={setearPlatones}/>

      </div>
    
    
    
   
    </>
  )
}

export default App
