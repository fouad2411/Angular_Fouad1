import "./estilo.css"

// eslint-disable-next-line react/prop-types
function Cuerpo({num1, num2}) {
  const suma = num1+num2 
  const resta = num1-num2
  const multiplicar = num1*num2
  const dividir = num1/num2

  return (
    <div className="app">
      <p>la suma : {suma}</p>
      <p> la resta: {resta}</p>
      <p> la multiplicacion: {multiplicar}</p>
      <p>la division: {dividir}</p>
     
    </div>
  )
}

export default Cuerpo