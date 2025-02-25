window.addEventListener('load', ()=>{


    const  accion = document.getElementById("cargar")

    accion.onsubmit=(event)=>{
        event.preventDefault();
        //primera validación;
        let avanzar = true
        const ciclos = document.querySelectorAll('input[name="radio"]');
       const smCiclos= document.getElementById("smRadio");
        let seleccionado = false;
        let ciclo=""
        ciclos.forEach(asig => {
            if(asig.checked == true){

                seleccionado =  true;
                smCiclos.textContent=""
                ciclo=asig.value
            }
        });
        if(!seleccionado){
            smCiclos.textContent="Selecciona un modulo"
            avanzar=false;
        }
        //segunda validación
        const inputModulos = document.querySelectorAll('input[name=modulos]')
        let moduloSelec= false;

        let modulos=[];

        let smModulos = document.getElementById("smCheck");

        inputModulos.forEach((item)=>{
            if(item.checked){
                moduloSelec= true;
                modulos.push(item.value);
                console.log(modulos);
            }
        })

        if(!moduloSelec){
            avanzar=false;
            smModulos.textContent="Tiene que haber un modulo por lo menos seleccionado."

        }else{
            smModulos.textContent=""
        }

        //tercera validación
        const curso = document.getElementById("selectCurso");
        const smCurso = document.getElementById('smCurso')

        if(curso.selectedIndex === 0){
        avanzar=false;
        smCurso.textContent="Selecciona al menos un curso"
       }else{
        smCurso.textContent=""
       }

       //cuarta validación 

       const nombre = document.getElementById("nombre").value
       const smNombre = document.getElementById("smNombre")


       if(nombre.length <2){
        avanzar = false;
        smNombre.textContent="No puede haber nombres con menos de dos letras"
       }else if(/\d/.test(nombre)){
        avanzar=false;
        smNombre.textContent="Los nombres no continen números"
       }else{
        smCiclos.textContent="";
       }

       let modulosCadena = ''
       if (modulos.length === 1) {
         modulosCadena = modulos.join('')
       } else {
         modulosCadena = modulos.join(', ')
       }
       let cc=""

       console.log(cc.bold().textContent="acdiscas");
      cc.fontcolor
   

       if(!avanzar){
        alert("No pasas wey")
       }else {
        alert(
           ` Curso: ${curso.value}\nNombre;${nombre}\nCiclo:${ciclo}\nModulos:${modulosCadena}`
        )
       }

        







    }
})