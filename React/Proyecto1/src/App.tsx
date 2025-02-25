import { useState } from 'react'
import './App.css'
import Botones from "./componentes/Botones.js";
import Cabecera from './componentes/Cabecera.js';
import Pie from './componentes/Pie.js';
function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [count, setCount] = useState(0)

  return (
    <>
     <Cabecera/>
     Principal
      <Botones/>
      <Pie></Pie>
    </>
  )
}

export default App
