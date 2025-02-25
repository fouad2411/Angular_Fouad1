/* eslint-disable no-unused-vars */
// App.js
import { useState } from 'react';
import './App.css';
import { Listado1 } from './componentes/Listado1';
import { Listado2 } from './componentes/Listado2';
import { Listado3 } from './componentes/Listado3';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/listado1">Listado1</Link>
        <Link to="/listado2">Listado2</Link>
        <Link to="/listado3">Listado3</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<h1>Bienvenido</h1>} />
        <Route path="/listado1" element={<Listado1 />} />
        <Route path="/listado2" element={<Listado2 />} />
        <Route path="/listado3" element={<Listado3 />} />
      </Routes>
    </>
  );
}

export default App;
