import { useState } from 'react'
import './App.css'
import Cuerpo from './componentes/Cuerpo'
function App() {
  const [num1,setNum1]= useState(0)
  const [num2,setNum2]= useState(0)
 
  const setearPrimerNumero=(e)=>{//método que hace que cuando haya un cambio setee el num1 
    setNum1(Number(e.target.value))
 }
 const setearSegundoNumero=(e)=>{
  setNum2(Number(e.target.value))
  }
  return (
    <>
    <h1 className=''>Calculadora </h1>
      <input type="number" value={num1} onChange={setearPrimerNumero} placeholder="Primer número"/>
      <input type="number" value={num2} onChange={setearSegundoNumero} placeholder="Segundo número"/>
      <Cuerpo num1= {num1} num2={num2}></Cuerpo>
    </>
  )
}

export default App
