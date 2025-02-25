window.addEventListener("load", inicio);

arrayNotaMedia = [];
arrayApruebaTodo = [];
arrayMismaNota = [];
arrayApruebaIgual = [];
arrayApruebaYsuspende = [];

const url = "getDam1.json";

function inicio() {
  function calcularMedia(alumno) {
    let suma = 0;
    const notas = [
      Number(alumno.nota1),
      Number(alumno.nota2),
      Number(alumno.nota3),
      Number(alumno.nota4),
      Number(alumno.nota5),
      Number(alumno.nota6),
    ];
    notas.forEach((element) => {
      suma += Number(element);
    });
    return suma / notas.length;
  }
  function apruebanTodos(alumno) {
    let apruebaTodo = true;
    const notas = [
      Number(alumno.nota1),
      Number(alumno.nota2),
      Number(alumno.nota3),
      Number(alumno.nota4),
      Number(alumno.nota5),
      Number(alumno.nota6),
    ];
    notas.forEach((element) => {
      if (element < 5) {
        apruebaTodo = false;
      }
    });
    return apruebaTodo;
  }
  function mismaNotaEn3(alumno) {
    let tres = false;
    const notas = [
      Number(alumno.nota1),
      Number(alumno.nota2),
      Number(alumno.nota3),
      Number(alumno.nota4),
      Number(alumno.nota5),
      Number(alumno.nota6),
    ];
    for (let i = 0; i < notas.length && tres == false; i++) {
      let contadorIgualdades = 0;
      notas.forEach((element) => {
        if (element == notas[i]) {
          contadorIgualdades++;
        }
      });
      if (contadorIgualdades >= 3) {
        tres = true;
      }
    }
    return tres;
  }
  function alMenos1Suspenso(alumno) {
    let suspenso = false;
    const notas = [
      Number(alumno.nota1),
      Number(alumno.nota2),
      Number(alumno.nota3),
      Number(alumno.nota4),
      Number(alumno.nota5),
      Number(alumno.nota6),
    ];
    notas.forEach((element) => {
      if (element < 5) {
        suspenso = true;
      }
    });
    return suspenso;
  }
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      mostrar(data);
    })
    .catch((error) => console.error(error));

  //en el apartado a) lo primero que hacemos es calcular la media y como necesitamos comparar calculamos la media dos veces
  //una dentro del buvle y otro fuera
  function mostrar(alumno) {
    let mejorAlumno = alumno[0];
    let mejorMedia = calcularMedia(mejorAlumno);

    alumno.forEach((item) => {
      let media = calcularMedia(item);
      if (media > mejorMedia) {
        mejorMedia = media;
        mejorAlumno = item.alumno;
      }
      //si aprueban todo entran en el array
      if (apruebanTodos(item)) {
        arrayApruebaTodo.push(item.alumno);
      }

      //cuantos alumnos sacan la misma nota en los tres examenes
      if (mismaNotaEn3(item)) {
        arrayApruebaIgual.push(item.alumno);
      }
      //que tengan la media aprobado pero que tengan un examen suspenso al menos
      if (calcularMedia(item) >= 5 && alMenos1Suspenso(item)) {
        arrayApruebaYsuspende.push(item.alumno);
      }
    });
    alert(
      "La nota media más alta la tiene " + mejorAlumno + " con un " + mejorMedia
    );
    alert("Los alumnos que han aprobado todo son " + arrayApruebaTodo);
    alert(
      "Los que han aprobado el examen con tres notas iguales: " +
        arrayApruebaIgual
    );
    alert(
      "Los Alumnos que tiene la media aprobada pero por lo menos un examen suspenso son:  " +
        arrayApruebaYsuspende
    );
  }
}
