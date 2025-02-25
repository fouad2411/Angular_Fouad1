// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

export default function InicioSesion() {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [respuesta, setRespuesta] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();

    const datos = { email: correo, pwd: contrasena };

    fetch("http://localhost/chat/serviciosCliente/login.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    }).then((response) => response.json())
      .then((data) => setRespuesta(data.message))
      
  };

  return (
    <div className="container mt-5">
      <h2>Iniciar sesión</h2>
      <form onSubmit={manejarEnvio}>
        <div className="mb-3">
          <label htmlFor="correo" className="form-label">
            Dirección de correo electrónico
          </label>
          <input
            type="email"
            className="form-control"
            id="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contrasena" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="contrasena"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>

      <div>
        <p>{respuesta}</p>
      </div>
    </div>
  );
}
