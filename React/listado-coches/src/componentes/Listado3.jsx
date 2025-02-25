/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export const Listado3 = ({coches=[]}) => {
  let cocheMasCaro=coches[0];

  coches.forEach(coche => {
    if(coche.precio >cocheMasCaro.precio){
      cocheMasCaro=coche
    }
  });
  return (
    
    <div>
    <p>Coche más caro: {cocheMasCaro.marca} - {cocheMasCaro.modelo} - {cocheMasCaro.precio}</p>
    </div>
    
    
  )
}
