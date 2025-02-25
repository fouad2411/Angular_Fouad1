/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Listado1 } from './componentes/Listado1'
import { Listado2 } from './componentes/Listado2'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Listado1></Listado1>      
<Listado2></Listado2>

    </>
  )
}

export default App
