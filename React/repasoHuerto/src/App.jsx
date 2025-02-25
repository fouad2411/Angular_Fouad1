/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hortaliza from './componentes/Hortaliza'
import Frutal from './componentes/Frutal'
function App() {
  const [huertoAlHortaliza, setHuertoAlHortaliza] = useState("")
  const [hortalizaAlPadre, setHortalizaAlPadre] = useState("")
  
  const [huertoAlFrutal, setHuertoAlFrutal]=useState("")
  const [frutalAlPadre, setFrutalAlPadre] = useState("")
  
  const [semilleros, setSemilleros] = useState(0);
  const [platones, setPlatones] = useState(0);
  function seteoAhortaliza(e){
    setHuertoAlHortaliza(e.target.value)
  }
  function seteoHortalizaApadre(e){
    setHortalizaAlPadre(e)
  }
  function seteoSemilleros(e){
    setSemilleros(e)
  }


  function seteoMensajeParaFrutal(e){
    setHuertoAlFrutal(e.target.value)

  }

  function seteoFrutalApadre(e){
    setFrutalAlPadre(e)
  }
  function seteoPlatones(e){
    setPlatones(e)
  }
  return (
    <>
    <div>
     <h1>Huerto</h1>
    <p>
     Mensaje de huerto para hortaliza: <input type="text" onChange={seteoAhortaliza} />
    </p>
    <p>Hortaliza le dice A Huerto: {hortalizaAlPadre}</p>
    </div>
    <p>
    Peticiones de Hortaliza (semilleros) a huerto:{semilleros}
    </p>


    <div className="">
      <h1>Hortaliza</h1>
      <Hortaliza mensajeDeHuerto={huertoAlHortaliza} mensajeDeHijoHortaliza={seteoHortalizaApadre} semillaParaPadre={seteoSemilleros} ></Hortaliza>
    </div>

    <div>
      <p>
      <h1>Huerto</h1>
      Mensaje Huerto para Frutal: <input type="text" onChange={seteoMensajeParaFrutal}/>
      </p>
      <p>Frutal dice a padre: {frutalAlPadre}</p>
      <p>Platones recibidos por frutal: {platones}</p>
    </div>
    <h1>Frutal</h1>
      <Frutal mensajeDePadre={huertoAlFrutal} mensajeFrutalAhuerto={seteoFrutalApadre} mandarPLatones={seteoPlatones} ></Frutal>
    
    </>
  )
}

export default App
