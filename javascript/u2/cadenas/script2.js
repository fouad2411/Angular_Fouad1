window.addEventListener("load", inicio);

function inicio() {
  //primeros5caracteres();
  //ultimos5caracteres();
}

function primeros5caracteres() {
  let nombre = prompt("Teclea tu nombre completo");
  let nombre5 = nombre.slice(0, 5);
  alert(nombre5);
}

function ultimos5caracteres() {
  let nombre = prompt("Teclea tu nombre completo");
  let ultimos5 = nombre.slice(-5);
  alert(ultimos5);
}
