window.addEventListener("load", inicio);


function inicio(){
    const boton1 = document.getElementById('btn1').addEventListener("click", accion1)
    const boton2 = document.getElementById('btn2').addEventListener("click", accion2)
    const boton3 = document.getElementById('btn3').addEventListener("click", accion3)
    const boton4 = document.getElementById('btn4').addEventListener("click", accion4)
    const boton5 = document.getElementById('btn5').addEventListener("click", accion5)

    function accion1(){
        const div1 = document.getElementById('c1')
        div1.style.backgroundColor="green";
    }
    function accion2(){
        const div1 = document.getElementById('c2')
        div1.style.backgroundColor="yellow";
        
        let num= Math.floor(Math.random()*100);
        div1.textContent=num;
        div1.style.fontSize="25px"
    }

    function accion3(){
        const div3= document.getElementById("c3");
        let num1= prompt("Introduce un numero:")
        let num2= prompt("Introduce el segundo numero:")

        div3.textContent= (Number(num1)+Number(num2));

        div3.style.backgroundColor="blue";
         
    }

    function accion4(){
        const div4= document.getElementById('c4');
        let numSecreto= Math.floor(Math.random()*10)
        let fin= false;
        let numIntentos=0;
        while (!fin){

            numIntentos++;
        let numeros= prompt("Introduce el número secreto")
        parseInt(numeros)

            if(numSecreto == numeros){
                div4.textContent = "Has acertado el numero era: "+numeros+" con "+numIntentos+" intentos"
                fin = true;
            }
    }
    }
    function accion5(){

        const fecha= new Date()
        const hora = fecha.getHours();
        const minutos= fecha.getMinutes();
        const dia = fecha.getDate();
        const mes = fecha.getMonth();
        const anio= fecha.getFullYear();

      //  const div5.textContent= document.getElementById('c5').innerText= hora+":"+minuto+"\n"+dia+"/"+mes+"/"+anio
    }
}