let accion = document.getElementById("validar")
let avanzar = true;
accion.onsubmit = () => {
    avanzar = true;
    //identificicamos n1 
    let n1 = document.getElementById("idN1").value;
    let sm1 = document.getElementById("smn1");
    //identificamos n2
    let n2 = document.getElementById("idN2").value;
    let sm2 = document.getElementById("smn2");
    //identificamos n3
    let n3 = document.getElementById("idN3").value;
    let sm3 = document.getElementById("smn3");
    //identificamos n4
    let n4 = document.getElementById("idN4").value;
    let sm4 = document.getElementById("smn4");
    //identificamos n5
    let n5 = document.getElementById("idN5").value;
    let sm5 = document.getElementById("smn5");
    //identificamos n6
    let n6 = document.getElementById("idN6").value;
    let sm6 = document.getElementById("smn6");

    //llamar a la función
    validar(n1, sm1);
    validar(n2, sm2);
    validar(n3, sm3);
    validar(n4, sm4);
    validar(n5, sm5);
    validar(n6, sm6);
    //repeticiones
    let arrayNumeros = [n1, n2, n3, n4, n5, n6]
    let arrayAux = []
    let estaR = false;
    for (let i = 0; i < arrayNumeros.lenght; i++) {
        if (arrayAux.includes(arrayNumeros[i])) {
            estaR = true
        } else {
            arrayAux.push(arrayNumeros[i])
        }
    }
    const btn = document.getElementById("smDuplicados")
    if (estaR == true) {
        btn.textContent = "* Hay números duplicados"
        avanzar = false;
    } else {
        btn.textContent = ""
    }
    return avanzar;


    function validar(nX, sX) {
        if (nX == "") {
            avanzar = false;
            sX.innerHTML = "* campo obligatorio"
        } else if (isNaN(nX)) {
            console.log("dcsd")
            avanzar = false;
            sX.innerHTML = "* no es número"
        } else if (!Number.isInteger(Number(nX))) {
            avanzar = false;
            sX.innerHTML = "* no es número entero"
        } else if (Number(nX) < 1 || Number(nX) > 50) {
            avanzar = false;
            sX.innerHTML = "* número fuera de rango "
        } else {
            sm.textContent = "";
        }
    }
    
}