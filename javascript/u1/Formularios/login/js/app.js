let accion = document.getElementById("validar")

accion.onsubmit=()=>{
    avanzar = true;
    //validación del email
    let campoEmail= document.getElementById("idEmail");
    let smEmail= document.getElementById("smEmail");
    const formatoEmail=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if(!formatoEmail.test(campoEmail.value)){
        avanzar= false;
        smEmail.textContent="*Email con formato inválido"
    }else{
        smEmail.textContent=""
    }

    //validacion contraseña

    let campoContrasena= document.getElementById("idPassword").value
    let smPassword = document.getElementById("smPassword")
    const formatoPassword= /^(?=.*[A-Z])(?=.*[0-9]).{5,}$/;
    
    if(!formatoPassword.test(campoContrasena)){
        avanzar=false;
        smPassword.textContent="La contraseña debe debe minimo una mayuscula, miniscula y números y tener por lo menos 5 caracteres"
    }else{
        smPassword.textContent="";
    }
    
    //validación Repeticion de la contraseña
    let campoContrasena2= document.getElementById("idPassword2").value
    let smPassword2 = document.getElementById("smPassword2")
    if(campoContrasena2 != campoContrasena){
        avanzar=false;
        smPassword2.textContent="Las contraseñas no coindicen"
    }else{
        smPassword2.textContent="";
    }
    return avanzar;
}