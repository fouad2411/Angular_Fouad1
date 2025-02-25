let cargar= document.querySelector("form")

let avanzar = true;

cargar.onsubmit=()=>{
    /*V1: Una longitud exacta de 10 caracteres, el primero y el último obligatoriamente
tienen que ser números
V2: Una longitud de 12 caracteres, 6 primeros caracteres no pueden ser números, 6
últimos caracteres no pueden ser letras.
V3: Debe tener 20 caracteres, solo puede haber cuartetos de números y el quinto
carácter un guión “-”.
V4: 8 caracteres, obligatoriamente 2 letras mayúsculas en cualquier posición.*/ 
    avanzar = true;
    //primera validacion
    let caja1 = document.getElementById("v1").value;
    let smv1= document.getElementById("smv1");

    if(caja1.length != 10){

        avanzar= false;
        smv1.textContent="Tiene que tener exactamente 10 letras"
    }else if(!/^[A-Z][A-Za-z][a-z]/.test(caja1)){
        avanzar= false;
        smv1.textContent="Tiene que tener una mayuscula al principio y minicula al final "
    }else{
        smv1.textContent=""

    }

    //segunda validación
    let caja2 = document.getElementById("v2").value;
    let smv2= document.getElementById("smv2");

    let primeraParte = caja2.substring(0,5);
    let segundaParte = caja2.substring(6);
    
    if(caja2.length != 12){
        avanzar= false;
        smv2.textContent="Tiene que tener exactamente 12 caracteres"
    }else if(/\d/.test(primeraParte)){
        avanzar=false;
        smv2.textContent="El mensaje no puede contener numero el los primeros seis caracteres"
    }else if(/[A-Za-z]/.test(segundaParte)){
        avanzar=false;
        smv2.textContent="El mensaje no puede contener letras el los segundos seis caracteres"
   
    }else{
        smv2.textContent=""

    }
    //tercera validación
     //segunda validación
     let caja3 = document.getElementById("v3").value;
     let smv3= document.getElementById("smv3");

     if(caja3.length != 20){
        avanzar= false;
        smv3.textContent="Tiene que tener exactamente 20 caracteres"
    }else if(!/[1-9]{4}-/.test(caja3)){
        avanzar= false
        smv3.textContent="mal formato"
    }else{
        smv3.textContent=""
    }


    //cuarta validación
    let texto2 = document.querySelector("input[name=v4]").value;

    let caja4 = document.getElementById("v4").value;
    let smv4= document.getElementById("smv4");
    if(caja4.length != 8){
        avanzar= false;
        smv4.textContent="Tiene que tener exactamente 8 caracteres"
    }else {
        avanzar= false;
        smv4.textContent="tiene que contener 2 musculas"
   
    }

    return avanzar;
}

