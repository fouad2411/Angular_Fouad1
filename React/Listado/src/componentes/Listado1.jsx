/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useEffect } from 'react';

export const Listado1 = () => {
    const [mensajes, setMensajes]=useState([]);
    const [usuarios, setUsuarios]=useState([]);

    const url = 'http://localhost/servicioChat/listadoMensajes.php'
    const urlUsuarios = 'http://localhost/servicioChat/listadoUsuarios.php'

    useEffect(()=>{
        fetch(url)
        .then((response)=> response.json())
        .then((data)=>{setMensajes(data)})
        .catch((error)=>{console.log(error)})
    },[])

    useEffect(()=>{
        fetch(urlUsuarios)
        .then((response)=> response.json())
        .then((data)=>{setUsuarios(data)})
        .catch((error)=>{console.log(error)})
    },[])
  return (
    <></>
    /*<>
  <h1 className="text-center my-4">Listado Mensajes</h1>
<button className="btn btn-info mb-3">Listado Mensaje</button>
<div className="container-fluid">

    <div className="row">

        <div className="col-lg-6 col-md-12">
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>id</th>
                        <th>usuario</th>
                        <th>fecha</th>
                        <th>mensaje</th>
                        <th>activo</th>
                        <th>destinatario</th>
                    </tr>
                </thead>
                <tbody>
                    {mensajes.map((m, index) => (
                        <tr key={index}>
                            <td>{m.id}</td>
                            <td>{m.usuario}</td>
                            <td>{m.fecha}</td>
                            <td>{m.mensaje}</td>
                            <td>{m.activo}</td>
                            <td>{m.destinatario}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        <div className="col-lg-6 col-md-12">
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Pwd</th>
                        <th>activo</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((u, index) => (
                        <tr key={index}>
                            <td>{u.Nombre}</td>
                            <td>{u.Email}</td>
                            <td>{u.pwd}</td>
                            <td>{u.activo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    </div>
</div>


    </>*/
    
  )
}

