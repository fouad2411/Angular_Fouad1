/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

function Ejercicio1({arreglo}) {
    let maximo= Math.max(... arreglo)    
    let min= Math.min(... arreglo)    
    let suma = 0 
    arreglo.forEach(element => {
     suma += element
         });
    let media = suma / arreglo.length
    let num=0
         for (let i = 0; i < arreglo.length; i++) {
        
            if(arreglo[i] === arreglo[i+1]){
                num = arreglo[i];
                break
            }
         }
    return (
    <>
    <p>
    {arreglo.join(', ')}
    </p>
    <p>{maximo}</p>
    <p>{min}</p>
    <p>{media}</p>
    <p>El número repetido es: {num}</p>

  </>
  )
}

export default Ejercicio1