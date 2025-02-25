import React from 'react'
import { useState } from 'react';

function TablaNumeros() {

    const generarNumeroRandom = () => Math.round(Math.random() * 100) ;
    const [Vector, setVector] = useStateState(Array.from({ length: 10 }, generarNumeroRandom));
   /*setVector([...Vector, generarNumeroRandom()]);
  */
 return (
    <div className='d-flex justify-content-center'>
        <table className="table">
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Número</th>
                    <th>Eliminar</th>
                    <th>Modificar</th>
                </tr>
            </thead>
            <tbody>
                {
                Vector.map((item, index)=>{

                })
                }
            </tbody>
        </table>

    </div>
  )
}

export default TablaNumeros