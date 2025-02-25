window.addEventListener("load", inicio);

const body = document.querySelector("body");
const url = "getDam1.json";
let vectorNotas = [];
let arrayTodosAprobados = [];
let arrayNotasMedias = [];
let arrayMismasNotas = [];
let arrayMediaA = [];
let nombreNotaAlta = "";
let notaMasAlta = 0;
function inicio() {
  //espacio de desarrolo de funcines de cálculos
  function calcularNotaMedia(alumno) {
    let suma = 0;
    const notas = [
      alumno.nota1,
      alumno.nota2,
      alumno.nota3,
      alumno.nota4,
      alumno.nota5,
      alumno.nota6,
    ];
    notas.forEach((element) => {
      suma += Number(element);
    });
    return suma / notas.length;
  }
  function apruebaTodo(alumno) {
    let todo = true;
    const notas = [
      alumno.nota1,
      alumno.nota2,
      alumno.nota3,
      alumno.nota4,
      alumno.nota5,
      alumno.nota6,
    ];
    notas.forEach((element) => {
      if (Number(element) < 5) {
        todo = false;
      }
    });

    return todo;
  }
  /* function comprobarSeisExamenes(alumno) {
    let todo = true;

    const notas = [
      alumno.nota1,
      alumno.nota2,
      alumno.nota3,
      alumno.nota4,
      alumno.nota5,
      alumno.nota6,
    ];
    let notaX = alumno.nota1;
    notas.forEach((element) => {
      if (element != notaX) {
        todo = false;
      }
    });
  }*/
  function comprobarTresExamenes(alumno) {
    let todo = false;

    const notas = [
      alumno.nota1,
      alumno.nota2,
      alumno.nota3,
      alumno.nota4,
      alumno.nota5,
      alumno.nota6,
    ];
    for (let i = 0; i < notas.length; i++) {
      let contIgualdades = 0;
      notas.forEach((element) => {
        if (element != alumno[i]) {
          contIgualdades++;
        }
      });
      if (contIgualdades != 3) {
        todo = false;
      }
    }
    return todo;
  }

  function suspendeAlMenosUnaVez(alumno) {
    let unSuspenso = false;
    const notas = [
      alumno.nota1,
      alumno.nota2,
      alumno.nota3,
      alumno.nota4,
      alumno.nota5,
      alumno.nota6,
    ];
    notas.forEach((element) => {
      if (Number(element) < 5) {
        unSuspenso = true;
      }
    });
    return unSuspenso;
  }

  fetch(url)
    .then((response) => response.json())
    .then((alumnos) => {
      console.log(alumnos);
      calculos(alumnos);
    })
    .finally(() => console.log("Fin"))
    .catch((error) => console.error(error));

  function calculos(alumno) {
    //a) nombr del alumnos con la nota media más alta
    //necesitamos dods para comparar el uno con el otro
    let mejorAlumno = alumno[0];
    let mejorMedia = calcularNotaMedia(mejorAlumno);
    alumno.forEach((item) => {
      //continuacion del apartado a) las comparaciones para sacar la nota media más alta
      let media = calcularNotaMedia(item);

      if (media > mejorMedia) {
        mejorMedia = media;
        mejorAlumno = item.alumno;
      }
      //b ) alumnos que aprueban todo
      if (apruebaTodo(item)) {
        arrayTodosAprobados.push(item.alumno);
      }
      //c) alumnos con la musima nota en los 3  examenes
      if (comprobarTresExamenes(item)) {
        arrayMismasNotas.push(item);
      }
      //d) aprueba media pero suspende al menos un examen
      if (calcularNotaMedia(item) > 5 && suspendeAlMenosUnaVez(item)) {
        arrayMediaA.push(item.alumno);
      }
    });
    alert("Mejor Alumno: " + mejorAlumno + "La nota media:" + mejorMedia);
    alert("Aprueba todo: " + arrayTodosAprobados);
    alert("Alumnos todas notas iguales" + arrayMismasNotas);
    alert(
      "Alumnos con media aprobada pero con un examen suspenso" + arrayMediaA
    );
  }
}
