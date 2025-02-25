window.addEventListener("load", inicio);

function inicio() {}

function pasarNombreAmayuscula() {
  let miNombre = prompt("tu nombre:");
  let nombreMayus = miNombre.toUpperCase();
  alert("Nombre en mayusc: " + nombreMayus);
}

function escribirTuNombreMaysu() {
  do {
    let miNombre = prompt("tu nombre en mayuscula:");
    alert(miNombre);
  } while (miNombre !== miNombre.toUpperCase());
}
