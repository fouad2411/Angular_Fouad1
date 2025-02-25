/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

export const Listado2 = () => {
    const [datos, setDatos] = useState([])
    const [url, setUrl] = useState("")
    const [posicion, setPosicion] = useState(0)
    const url1 = 'http://localhost/servicioChat/listadoMensajes.php'
    const urlUser = 'http://localhost/servicioChat/listadoUsuarios.php'
    
    //funcion que recoge el evento boton X
    const listadoDatos = (url, posicion) => {
        setUrl(url)
        setPosicion(posicion)
    }

    useEffect(() => {
        if (url) {
            fetch(url)
                .then((response) => response.json())
                .then((data) => setDatos(data))
                .catch((error) => console.log(error))
        }
    }, [url])

    return (
        <>
            <div>
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-info" onClick={() => listadoDatos(url1, 1)}>Listado 1 </button>
                        <button className="btn btn-info" onClick={() => listadoDatos(urlUser, 2)}>Listado 2</button>
                        <button className="btn btn-info" onClick={() => listadoDatos(url1, 1)}>Listado 3</button>
                        <button className="btn btn-info" onClick={() => listadoDatos(url1, 1)}>Listado 4</button>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <table className="table table-bordered table-striped">
                                <tbody>
                                    {posicion == 1 && (
                                        datos.map((dato, index) => (
                                            <tr key={index}>
                                                <td>{dato.usuario}</td>
                                                <td>{dato.fecha}</td>
                                                <td>{dato.mensaje}</td>
                                            </tr>
                                        ))
                                    )}
                                    {posicion == 2 && (
                                        datos.map((dato, index) => (
                                            <tr key={index}>
                                                <td>{dato.nombre}</td>
                                                <td>{dato.email}</td>
                                                <td>{dato.activo}</td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
