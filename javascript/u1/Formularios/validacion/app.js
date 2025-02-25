let accion= document.getElementById("validar");
accion.onsubmit=()=>{
    let avanza= true;
    //primer cuadro de texto: entre 3 y 5 dígitos
    let exped= document.getElementById("idExpediente");
    let contExp= exped.value;
    let smExp= document.getElementById("smExpediente");
    if(contExp.length < 3 || contExp.lenght > 5){
        
        smExp.textContent="*Tiene que tener entre 3 y 5 caracteres númericos";
        avanza= false;
    }else if(isNaN(contExp)){
        avanza= false;
        smExp.textContent="*el expediente tiene que ser un valor numérico";
    }else{
        smExp.textContent="";
    }
   
 //segunda validacion
 let nombre= document.getElementById("idNombre").value;
 let smNombre= document.getElementById("smNombre")
 if(nombre.length < 3 ){
    avanza = false;

     smNombre.textContent="*Un nombre no puede contener menos de 3 letras"

 }else if(/\d/.test(nombre)){
    avanza= false;

     smNombre.textContent="*El nombre no puede contener números"
 }else {
    smNombre.textContent="";
 }
 //tercera validación
    let apellidos =document.getElementById("idApellidos").value
    let smApellidos= document.getElementById("smApellidos");
   
    if(apellidos.length < 3){
        avanza = false;
    
         smApellidos.textContent="*Un apellido no puede contener menos de 3 letras"
    
     }else if(/\d/.test(apellidos)){
        avanza= false;
    
        smApellidos.textContent="*El apellidos no puede contener números"
     }else {
        smApellidos.textContent="";
     }
     //cuatra validación
     let sge= document.getElementById("idSge").value;
     
     let smSge= document.getElementById("smSge");
     if( parseInt(sge) <1 || parseInt(sge) >10|| sge ==""){
        avanza= false;
        smSge.textContent="*Las notas no pueden ser ni mayores de 10 ni menores que 0 ni vacios"
     }else if(isNaN(sge)){
        avanza= false;
        smSge.textContent="*Las notas tienen que ser númericas"

     }else{
        smSge.textContent=""
     }
     //quinta validación
     let di= document.getElementById("idDi").value;
     
     let smDi= document.getElementById("smDi");
     if( parseInt(di) <1 || parseInt(di) >10|| di ==""){
        avanza= false;
        smDi.textContent="*Las notas no pueden ser ni mayores de 10 ni menores que 0"
     }else if(isNaN(di)){
        avanza= false;
        smDi.textContent="*Las notas tienen que ser númericas"

     }else{
        smDi.textContent=""
     }
     //sexta validación
     let ad= document.getElementById("idAd").value;
     let smAd= document.getElementById("smAd");
     if( parseInt(ad) <1 || parseInt(ad) >10|| ad ==""){
        avanza= false;
        smAd.textContent="*Las notas no pueden ser ni mayores de 10 ni menores que 0"
     }else if(isNaN(ad)){
        avanza= false;
        smAd.textContent="*Las notas tienen que ser númericas"

     }else{
        smDi.textContent=""
     }
     //septima validación
      let psp= document.getElementById("idPsp").value;
      let smPsp= document.getElementById("smPsp");
      if( parseInt(psp) <1 || parseInt(psp) >10|| psp ==""){
         avanza= false;
         smPsp.textContent="*Las notas no pueden ser ni mayores de 10 ni menores que 0"
      }else if(isNaN(psp)){
         avanza= false;
         smPsp.textContent="*Las notas tienen que ser númericas"
 
      }else{
         smPsp.textContent=""
      }

      //octavo validación
           let pmm= document.getElementById("idPmm").value;
           let smPmm= document.getElementById("smPmm");
           if( parseInt(pmm) <1 || parseInt(pmm) >10|| pmm ==""){
              avanza= false;
              smPmm.textContent="*Las notas no pueden ser ni mayores de 10 ni menores que 0"
           }else if(isNaN(pmm)){
              avanza= false;
              smPmm.textContent="*Las notas tienen que ser númericas"
      
           }else{
              smPmm.textContent=""
           }
        return avanza;
}