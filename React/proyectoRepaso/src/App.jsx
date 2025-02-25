// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { useEffect } from "react";
import Componente1 from "./Componentes/Componente1";
import TemporizadorPadre from "./Componentes/TemporizadorPadre";
import Acordeon from "./Componentes/Acordeon";
import Login from "./Componentes/Login";
import PadreNumeros from "./Componentes/PadreNumeros";

function App() {
  return (
    <>
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                Navbar
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/listado1">
                      Buscar Personas
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/listado2">
                      Cronometro inverso
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/listado3">
                      Preguntas y respuestas
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/listado4">
                      Login
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/listado5">Numeros</Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/listado6"></Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="mt-4">
            <Routes>
              <Route path="/listado1" element={<Componente1 />} />
              <Route path="/listado2" element={<TemporizadorPadre />} />
              <Route path="/listado3" element={<Acordeon />} />
              <Route path="/listado4" element={<Login />} />
              <Route path="/listado5" element={<PadreNumeros />} />

            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
