/* eslint-disable no-unused-vars */
import  { useState } from 'react'
import { useEffect } from 'react';

function Crud() {
    const generarNumeroRandom = () => Math.round(Math.random() * 100) ;
    const [Vector, setVector] = useState(Array.from({ length: 10 }, generarNumeroRandom));
    console.log(Vector)

    function agregarNumero(){
    setVector([  generarNumeroRandom(),...Vector]);
    }
    function eliminar(index){
        console.log(index)
            const copiaV = [...Vector];
            setVector(copiaV.splice(index,1))
            setVector(copiaV)
    }
    function modificar(index){
        // const nuevoNumero = prompt("Teclea el nuevo número:", Vector[index]);
        // const copiaV = Vector.map((item,i)=>{
        //     if(index ===  i){
        //         return nuevoNumero
        //     }
        //     return item;
        // })
        // setVector([...copiaV])
        const copiaV = [...Vector];
        setVector(copiaV.splice(index,1))
        const nuevoNumero = prompt("Teclea el nuevo número:", Vector[index]);
        setVector([  nuevoNumero,...Vector]);

    }
    function orderASC(){
       const vectorAux= [...Vector].sort((a,b)=> a-b)
    
       setVector(vectorAux)
    }
    function orderDesc(){
        const vectorAux= [...Vector].sort((a,b)=> b-a)
    
        setVector(vectorAux)
    }
return (
    <div className='container'>
        <button type="button" onClick={agregarNumero} className="btn btn-outline-primary">Añadir</button>
        <button className='btn btn-danger' onClick={()=>orderASC()}>Order ASC</button>
        <button className='btn btn-info' onClick={()=>orderDesc()}>Order DESC</button>

   
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
            Vector.map((item,index)=>(
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item}</td>
                    <td><button className='btn btn-danger' onClick={()=>eliminar(index)} >Eliminar</button></td>
                    <td><button className='btn btn-info' onClick={()=>modificar(index)}>Modificar</button></td>
                    {
                    }
                </tr>
            )
           )
            }
        </tbody>
    </table>  
    </div>
  )
}

export default Crud