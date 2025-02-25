let cargar= document.getElementById("cargar");

    cargar.onsubmit = () =>{
        //esto hace que no se vaya a otra página lo ge buscado en internet
        event.preventDefault(); 

        avanzar = true;
        /*
        let diw = document.getElementById("diw").value;
        let dec = document.getElementById("dec").value;
        let des = document.getElementById("des").value;
        let dim = document.getElementById("dim").value;
        */
       //mensaje será el que va a hacer que salga todo concatenando las cosas
        let mensaje=""
       //primera validacion
       let elementosRadio = document.getElementsByName("radio");
        mensaje="Valor del radio:";

       for (let i=0; i < elementosRadio.length; i++){
        if(elementosRadio[i].checked){
            mensaje +=  elementosRadio[i].value;
        }
       }
       //segunda validación
       mensaje+= "\n Valor de los checkBox: ";

        let elementosCheckBox=document.getElementsByName("modulos");
        let smCheck= document.getElementById("smCheck")
        let eleCheck= false;
        for (let i=0; i<elementosCheckBox.length; i++){
        if(elementosCheckBox[i].checked==true){
            eleCheck= true;
            mensaje+= elementosCheckBox[i].value+",";
        }
        //dejamos elecheck  falso si no cambia a true signfica que no hay campos llenos asi que no vale
       }
       if(eleCheck== false){
        smCheck.textContent="Tiene que haber por lo menos un modulo relleno";
        avanzar= false;
       }else{
        smCheck.textContent=""
       }
       //tercera validacion
       //como viene un valor predeterminado no hace falta hacer la validación entonces concatenmos directamente
       mensaje+="\nCurso: ";
       let elementosOpciones= document.getElementById("selectCurso").value;
       mensaje += elementosOpciones;
       

       //última validación
       mensaje+= "\nNombre: ";

       let nombre= document.getElementById("nombre").value
       let smNombre= document.getElementById("smNombre");

       if (nombre.length < 3){
        avanzar=false;
        smNombre.textContent="* El campo nombre no puede contener menos de 3 letras"

       }else if (/\d/.test(nombre)){
        avanzar=false;
        smNombre.textContent="El nombre no puede contener numeros"
       }else{
       
        smNombre.textContent=""
       }
       mensaje +=nombre

       //si avanzar esta true significa que todo está bien si no nos salta alert para que revisemos lo que tenemos mal
       if(avanzar==true){
        alert(mensaje);
       }else{
        alert("Hay campos que no estan rellenos o están con mal formato")
       }
       



       
    }
