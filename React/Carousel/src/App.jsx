/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Carousel from './componentes/Carousel'
import Card from './componentes/Card'
import { Route, Routes, BrowserRouter as Router, Link } from "react-router-dom";

 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <div>
  <Router>
  <div className="container-fluid p-0">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top shadow-sm">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"  // Ajuste para B4
              data-target="#navbarNav" // Ajuste para B4
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link text-white font-weight-bold" to="/">Inicio</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white font-weight-bold" to="/Carousel">Listado 1</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white font-weight-bold" to="/Card">Listado 2</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/"  />
          <Route path="/Carousel" element={<Carousel/>} />
          <Route path="/Card" element={<Card/>} />
        </Routes>
      </div>
    </Router>
  
  </div>
    </>
  )
}

export default App
