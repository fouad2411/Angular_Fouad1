/* eslint-disable react/prop-types */
import React from 'react'
import { useState } from 'react'

function Ejercicio2({vector1,vector2}) {
    // eslint-disable-next-line no-unused-vars
    const [coincidencias, setCoincidencias] = useState(0)

        const comparacion= ()=>{
            // eslint-disable-next-line no-unused-vars
            let coincidencia=0;
            vector1.forEach(element => {
                if(vector2.includes(element)){
                    coincidencia++;
                }
            });
            setCoincidencias(coincidencia)
        }
  
    return (
    <>
        <p>
        Vector1: <br /> {vector1.join(', ')}
        </p> 
        <p>
        Vector2: <br />{vector2.join(', ')}
        </p> 
        <p>
            <button onClick={comparacion}>
                Nº de igualdades
            </button>
        </p>
        <p>Numero de coindicencias: {coincidencias}  </p>

    </>
  )
}

export default Ejercicio2