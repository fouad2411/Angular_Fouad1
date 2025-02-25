let cargar= document.getElementById("cargar")
let avanzar = true;

cargar.onsubmit=()=>{
    avanzar = true;

    //primera validacion numero

    let n1 = document.getElementById("n1").value;
    let smN1= document.getElementById("smn1");

   if( parseInt(n1) < 0|| parseInt(n1)> 100){
    avanzar=false;
    smN1.textContent="El numero tiene que estar comprendido entre 0-100"
   }else if(/[A-Za-z]/.test(n1)){
    avanzar=false;
    smN1.textContent="no puede contener letras los numeros"
   }
    else{
    smN1.textContent=""
   }

   //segunda validación
   let txt1= document.getElementById("txt1").value;
   let smTxt1= document.getElementById("smtxt1")
   
   if(txt1.length <3 || txt1.length >15){
        avanzar=false;
        smTxt1.textContent="no puede haber menos de 3 letras ni más de 15";
   }else if(/\d/.test(txt1)){
    avanzar=false;
    smTxt1.textContent="no puede contener números";
   }else{
    smTxt1.textContent="";
   }
   //tercera validación

   let n2 = document.getElementById("n2").value;
   let smN2= document.getElementById("smn2");

  if( parseInt(n2) < -10|| parseInt(n2)> +10){
   avanzar=false;
   smN2.textContent="El numero tiene que estar comprendido entre -10 -15"
  }else if(/[A-Za-z]/.test(n2)){
   avanzar=false;
   smN2.textContent="no puede contener letras los numeros"
  }
   else{
   smN2.textContent=""
  }
  //cuarta validación
  let txt2= document.getElementById("txt2").value;
  let smTxt2= document.getElementById("smtxt2")
  
   if(!/[a]/i.test(txt2) || !/[o]/i.test(txt2) || !/[e]/i.test(txt2)){
   avanzar=false;
   smTxt2.textContent="tiene que contener las letras a e o ";
  }else{
   smTxt2.textContent="";
  }
  //quinta cali

  let modulos= document.getElementsByName("modulos");
  let smModulos= document.getElementById("smModulos");
let pulsado= false
  for(let i =0;i< modulos.length;i++ ){
    if(modulos[i].checked){
        pulsado= true;
        break;
    }
  }
  if(pulsado==false){
    avanzar=false;
    smModulos.textContent="Selecciona al menos un modulo"
  }else{
    smModulos.textContent=""
  }

  //sexta validacion

  let asig= document.getElementsByName("radio");
  let smasig= document.getElementById("smasig");
let pulsadoR= false
for (let i = 0; i < asig.length; i++) {

    if(asig[i].checked == true){
        pulsadoR= true;
    break;       
    }
}
  if(pulsadoR==false){
    avanzar=false;
    smasig.textContent="Selecciona al menos una asignatura."
  }else{
    smasig.textContent=""
  }


   return avanzar;
   
}