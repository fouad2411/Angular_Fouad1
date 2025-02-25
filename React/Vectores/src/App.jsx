/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ejercicio1 from './Compontes/Ejercicio1'
import Ejercicio2 from './Compontes/Ejercicio2'
function App() {
  const [array, setArray] = useState([])
  const [array1, setArray1] = useState([])
  const [array2, setArray2] = useState([])

  const llenarArray =()=>{
    //aqui lo que hacemos es quitar la necesidad de utilizar un for
    // y llamamos a una funcion anonima que cree los números aleatorios
    setArray(Array.from({length:50} , ()=>Math.floor(Math.random()*500)))
  }
  const llenarArrayEjercicio2=()=>{
    setArray1(Array.from({length:6} , ()=>Math.floor(Math.random()*500)))
    setArray2(Array.from({length:6} , ()=>Math.floor(Math.random()*500)))

  }

  return (
    <>
    <div>
    <h1>Ejercicio 1</h1>
    <Ejercicio1  arreglo={array}/>
     <button onClick={llenarArray}>Llenar</button>
     <hr />
    </div>
    <div>
      <h1>Ejercicio 2 </h1>
      <Ejercicio2  vector1={array1} vector2={array2}/>

      <button onClick={llenarArrayEjercicio2}>Llenar</button>

    </div>



    </>
  )
}

export default App
