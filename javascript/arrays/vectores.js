window.addEventListener("DOMContentLoaded",inicio);

  


function inicio(){
    const vector1=[2,5,2,4,6,8,9,6];
    const vector2=["paco","lola","pedro"];
    const vector3=[
        {
            titulo: 'Los lunes al sol',
            minutos: 120
          },
          {
            titulo: 'La delgada línea roja',
            minutos: 120
          },
          {
            titulo:"Bienvenido MrMarsall",
            minutos:93
          }
    ]
    

    const boton1 = document.getElementById("btnaniadirN")

    boton1.addEventListener("click", () => {

      let numeroX = Math.floor(Math.random()*10)

      vector1.push(numeroX)

      console.log("Despues de añadir numeros: "+vector1)
    })


    const boton2 = document.getElementById("btnaniadirB")

    boton2.addEventListener("click", () => {
    
      let texto = prompt("Introduce un texto")

      vector2.push(texto)

      console.log("Listado de texto: "+vector2)

    })


    const boton3 = document.getElementById("btnaniadirP")

    boton3.addEventListener("click", () => {
      
      let nombrePelicula = prompt("Introduce el nombre de la pelicula")
      let tiempoPelicula = prompt("Introduce los minutos que tiene la pelicula")

      vector3.push({ titulo: nombrePelicula, minutos: Number(tiempoPelicula) })

      console.log("Peliculas: "+vector3)
      vector3.forEach(elemento => {
        console.log("Peliculas: "+vector3.elemento)

      })

    })


    const boton4 = document.getElementById("btnEliminarN")

    boton4.addEventListener("click", () => {  
      
      let ultimoElemento = vector1.pop()

      console.log(ultimoElemento)
      console.log("Despues de eliminar el numero: "+vector1)

    })


    const boton5 = document.getElementById("btnAniadirU")

    boton5.addEventListener("click", () => {

      let numeroX = Math.floor(Math.random()*10)

      vector1.unshift(numeroX)

      console.log(vector1)

    })


    const boton6 = document.getElementById("btnEliminarS")

    boton6.addEventListener("click", () => {

      let contenido=vector1.shift()

      console.log(contenido)
      console.log("Despues de eliminar el numero: "+vector1)

    })


    const boton7 = document.getElementById("btnSlice")

    boton7.addEventListener("click", () => {

      let copia =  vector1.slice(0, vector1.length)

      console.log("El vector real es: "+vector1)

      console.log("La copia del vector es: "+copia)

    })


    const boton8 = document.getElementById("btnJoin")

    boton8.addEventListener("click", () => {



      let vectorSeparado = vector2.join(prompt("¿Que separador quieres usar?"))

      console.log(vectorSeparado)

    })


    const boton9 = document.getElementById("btnIncludes")

    boton9.addEventListener("click", () => {

      let numeroPregunta = prompt("¿Que numero quieres buscar?")

      if(vector1.includes(Number(numeroPregunta))){
        console.log("Numero encontrado")
      } else {
        console.log("No se ha encontrado el numero")
      }

    })


    const boton10 = document.getElementById("btnSort")

    boton10.addEventListener("click", () => {

      console.log(vector1.sort())
      console.log(vector2.sort())
      console.log(vector3.sort((a, b) => (a.minutos - b.minutos)))
    })


    const boton11 = document.getElementById("btnReverse")

    boton11.addEventListener("click", () => {

      console.log(vector1.sort().reverse())
      console.log(vector2.sort().reverse())
      console.log(vector3.sort((a, b) => (a.minutos - b.minutos)).reverse())
    })


    const boton12 = document.getElementById("btnMap")

    boton12.addEventListener("click", () => {
      
      let v1 = vector1.map(numeros => {
        if(numeros > 5){
          return numeros
        }
      })

      console.log(v1)

      let v2 = vector2.map(textos => {
        if(textos.length >= 5){
          return textos
        }
      })

      console.log(v2)

      let v3 = vector3.map(peliculas => {
        if(peliculas.minutos > 100){
          return peliculas
        }
      })

      console.log(v3)

    })


    const boton13 = document.getElementById("btnReduce")

    boton13.addEventListener("click", () => {
      
      let v1 = vector1.reduce((suma, numeros) => suma + numeros, 0)
      console.log(v1)

      let v2 = vector2.reduce((suma, nombres) => suma + nombres)
      console.log(v2)

      let v3 = vector3.reduce((suma, pelicula) => suma + pelicula.minutos, 0)
      console.log(v3)

    })


    const boton14 = document.getElementById("btnFilter")

    boton14.addEventListener("click", () => {

      let v1 = vector1.filter(numeros => numeros % 2 == 0)
      console.log(v1)

      let v2 = vector2.filter(nombres => nombres.length >= 5)
      console.log(v2)

      let v3 = vector3.filter(pelicula => pelicula.minutos > 100)
      console.log(v3)
      
    })


    const boton15 = document.getElementById("btnSome")

    boton15.addEventListener("click", () => {
      
      if(vector1.some(numeros => numeros % 2 == 0)){
        console.log("Los elementos han sido encontrados")
      }

      if(vector2.some(nombres => nombres.length < 5)){
        console.log("Los elementos han sido encontrados")
      }

      if(vector3.some(pelicula => pelicula.minutos < 100 )){
        console.log("Los elementos han sido encontrados")
      }

    })


    const boton16 = document.getElementById("btnEvery")

    boton16.addEventListener("click", () => {
      
      if(vector1.every(numeros => numeros % 2 == 0)){
        console.log("Los elementos son todos iguales")
      } else {
        console.log("Los elementos no son todos iguales")

      }

      if(vector2.every(nombres => nombres.length < 5)){
        console.log("Los elementos son todos iguales")
      } else {
        console.log("Los elementos no son todos iguales")

      }

      if(vector3.every(pelicula => pelicula.minutos < 100 )){
        console.log("Los elementos son todos iguales")
      } else {
        console.log("Los elementos no son todos iguales")

      }

    })


    const boton17 = document.getElementById("btnFind")

    boton17.addEventListener("click", () => {

      let buscarNumero = prompt("¿Que numero quieres buscar?")
      let buscarNombre = prompt("¿Que nombre quieres buscar?")
      let buscarPelicula = prompt("¿Que pelicula quieres buscar?")


      
      if(vector1.find(numeros => numeros === Number(buscarNumero))){
        console.log("Elemento encontrado")
      } else {
        console.log("Elemento no encontrado")

      }

      if(vector2.find(nombres => nombres === buscarNombre)){
        console.log("Elemento encontrado")
      } else {
        console.log("Elemento no encontrado")

      }

      if(vector3.find(pelicula => pelicula.titulo === buscarPelicula)){
        console.log("Elemento encontrado")
      } else {
        console.log("Elemento no encontrado")

      }


    })


    const boton18 = document.getElementById("btnKeys")

    boton18.addEventListener("click", () => {

      vector3.forEach(elemento => {
        const claves = Object.keys(elemento)
        console.log(claves)

      })
      

    })


    const boton19 = document.getElementById("btnValues")

    boton19.addEventListener("click", () => {
    
      vector3.forEach(elemento => {
        const claves = Object.values(elemento)
        console.log(claves)

      })

    })


    const boton20 = document.getElementById("btnEntry")

    boton20.addEventListener("click", () => {

      let suma = 0
      Object.entries(vector1).forEach(numeros => suma += numeros)

      console.log(suma)

    })


}

