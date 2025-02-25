window.addEventListener("DOMContentLoaded", inicio);

function inicio() {
  const vector1 = [2, 5, 2, 4, 6, 8, 9, 6];
  const vector2 = ["paco", "lola", "paco", "pedro"];
  const vector3 = [
    {
      titulo: "Los lunes al sol",
      minutos: 120,
    },
    {
      titulo: "La delgada línea roja",
      minutos: 120,
    },
    {
      titulo: "Bienvenido MrMarsall",
      minutos: 83,
    },
  ];
  anadirPush(vector1);
  anadirNombre(vector2);
  anadirPelicula(vector3);
  eliminarNumero(vector1);
  eliminarAlPrincipio(vector1);
  copiaArray(vector1);
  arrayJoin(vector2);
  // mio(vector3);
  arrayIncludes(vector2);
  ordenarArray(vector3);
  invertirArray(vector2);
  arrayMap(vector3);
  arrayReduce(vector1);
  //lo mismo que el include
  arraySome(vector2);
  /*18. vector.every() retorna true si todos los elementos del 
  array cumplen con la condición que se pasa como parámetro.*/
  arrayEvery(vector1);

  /**vector.find( función ) retorna el primer elemento del
   *  array que cumpla con la condición de la función que
   *  se pasa como parámetro.
   */
  arrayFind(vector2);
  //esto decuelve el nombre del atributo
  arrayKeys(vector3);
  //devuelve el valor del atributo del array
  arrayValues(vector3);
  //22. Object.entries(vector)  nos permite obtener un array con los
  // pares clave-valor de un objeto.
  arrayEntry(vector3);
}
function arrayEntry(vector3) {
  const btnEntry = document.querySelector("#btnEntry");
  btnEntry.onclick = () => {
    vector3.forEach((element) => {
      console.log(Object.entries(element));
    });
  };
}
function arrayValues(vector3) {
  const btnValues = document.querySelector("#btnValues");
  btnValues.onclick = () => {
    vector3.forEach((element) => {
      console.log(Object.values(element));
    });
  };
}
function arrayKeys(vector3) {
  const btnFind = document.querySelector("#btnKeys");
  btnFind.onclick = () => {
    vector3.forEach((element) => {
      console.log(Object.keys(element));
    });
  };
}
function arrayFind(vector2) {
  const btnFind = document.querySelector("#btnFind");
  btnFind.onclick = () => {
    console.log(vector2.find((nombre) => nombre === "paco"));
  };
}
function arrayEvery(vector1) {
  const btnEvery = document.querySelector("#btnEvery");
  btnEvery.onclick = () => {
    console.log(vector1.every((numeros) => numeros > 2));
  };
}
function arraySome(vector2) {
  const btnSome = document.querySelector("#btnSome");
  btnSome.onclick = () => {
    console.log(vector2.some((nombre) => nombre === "paco"));
  };
}
function arrayReduce(vector1) {
  //primero la suma que es donde añmacena
  //item cada iteracion del array
  //luego se pone la operacion
  //y luego el numero de la operacion
  const botonReduce = document.querySelector("#btnReduce");
  botonReduce.onclick = () => {
    let num = vector1.reduce((suma, item) => (suma += item), 0);
    console.log(num);
  };
}
function arrayMap(vector3) {
  const btnMap = document.querySelector("#btnMap");
  btnMap.onclick = () => {
    const vec = vector3
      .filter((pelicula) => pelicula.minutos > 83)
      .map((cambio) => (cambio.minutos = 0));
    console.log(vec);
  };
}
function invertirArray(vector2) {
  const btnReverse = document.querySelector("#btnReverse");
  btnReverse.onclick = () => {
    console.log(vector2.reverse());
  };
}
function ordenarArray(vector3) {
  //console.log(vector1.sort());
  const sortIncludes = document.querySelector("#btnSort");
  sortIncludes.onclick = () => {
    console.log(vector3.sort((a, b) => a.minutos - b.minutos));
  };
}
function arrayIncludes(vector2) {
  //includes devuelve treue o false dependiendo de si le encuenrta o no
  const botonIncludes = document.querySelector("#btnIncludes");
  botonIncludes.onclick = () => {
    console.log(vector2.includes("ssss"));
  };
}
function arrayJoin(vector2) {
  const botonJoin = document.querySelector("#btnJoin");
  botonJoin.onclick = () => {
    const cadena = vector2.join("-");
    console.log(cadena);
  };
}
function mio(vector3) {
  let vector = vector3[0].titulo.split(" ");
  const cadena = vector.join("-");
  console.log(cadena);
}
function copiaArray(vector1) {
  const copia = document.querySelector("#btnSlice");
  copia.onclick = () => {
    const copiaArr = vector1.slice(2, 5);
    console.log("Copia del array " + copiaArr);
  };
}

function eliminarAlPrincipio(vector1) {
  const botonBorrar = document.querySelector("#btnEliminarS");
  botonBorrar.onclick = () => {
    console.log("antes " + vector1);
    console.log(vector1.shift());
    console.log("después " + vector1);
  };
}
function eliminarNumero(vector1) {
  const botonBorrar = document.querySelector("#btnEliminarN");
  botonBorrar.onclick = () => {
    console.log("antes " + vector1);
    console.log(vector1.pop());
    console.log("después " + vector1);
  };
}
function anadirPelicula(vector3) {
  const botonPelicula = document.querySelector("#btnaniadirP");
  botonPelicula.onclick = () => {
    const vectorPelicula = vector3.slice();
    vectorPelicula.push({ titulo: "El den den", minutos: 135 });

    console.log(vectorPush);
  };
}
function anadirNombre(vector2) {
  const botonNombre = document.querySelector("#btnaniadirB");
  botonNombre.onclick = () => {
    const vectorPush = vector2;
    vectorPush.push("Fouad");

    console.log(vectorPush);
  };
}
function anadirPush(vector1) {
  console.log("entro");
  const botonPush = document.querySelector("#btnaniadirN");
  botonPush.onclick = () => {
    let num = Math.floor(Math.random() * 100);
    const vectorPush = vector1;
    vectorPush.push(num);

    console.log(vectorPush);
  };
}
