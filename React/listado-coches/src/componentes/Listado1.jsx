/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export const Listado1 = ({coches}) => {
  <div>

 { console.log('gslnsdn'+coches)}
  </div>
  return (
    <>
    <table className='table m-3'>
      <thead>
        <th>marca</th>
        <th>modelo</th>
        <th>Tipo Motor</th>
        <th>Color</th>
        <th>Consumo</th>
      </thead>
      <tbody>
      {coches.filter(item =>item.color=='Green' && item.precio >10000)
      .sort((a,b)=> a.precio - b.precio)
      .map((item,index)=>(

        
        <tr key={index}>
          <td>{item.marca}</td>
          <td>{item.modelo}</td>
          <td>{item.tipoMotor}</td>

          <td>{item.color}</td>
          <td>{item.consumo}</td>

          </tr>  
          )
      )}

        
      
      

      </tbody>
    </table>
    </>
    
  )
}
