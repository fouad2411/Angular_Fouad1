import './App.css'
import Hijo from './componentes/Hijo'

function App() {
  const nombre1 = "Fouad";
  const nombre2 = "Jose";
  const calificacion1 = Math.floor(Math.random()*11)
  const calificacion2 = Math.floor(Math.random()*11)

  return (
    <>
      <Hijo nombre={nombre1} calificacion={calificacion1}/>
      <Hijo nombre={nombre2} calificacion={calificacion2}/>
    </>
  )
}

export default App
