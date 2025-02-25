window.addEventListener("load", inicio);


function inicio(){
    const boton1 = document.getElementById('btn1').addEventListener("click", accion1)
    const boton2 = document.getElementById('btn2').addEventListener("click", accion2)
    const boton3 = document.getElementById('btn3').addEventListener("click", accion3)
    const boton4 = document.getElementById('btn4').addEventListener("click", accion4)
    const boton5 = document.getElementById('btn5').addEventListener("click", accion5)

    function accion1(){
        const div1= document.getElementById("c1");
        div1.style.backgroundColor="green";
    }

    function accion2(){
        const div2 = document.getElementById("c2");
        div2.style.backgroundColor="yellow"
        let num =Math.floor(Math.random()*100) ; 
        div2.textContent= num;
    }
    function accion3(){
        const div3= document.getElementById("c3");
        let num1= prompt("Introduce el primer número: ")
        let num2= prompt("Introduce el segundo número: ")

        
            div3.textContent=Number(num1)+Number(num2)
            div3.style.backgroundColor="blue";

    }
    function accion4(){
        const div4=document.getElementById("c4");
        let nSecreto= Math.floor(Math.random()*10);
        let fin = false;
        let numIntentos=0;
        
        while(!fin){
            numIntentos++;
            let numero= prompt("Introduce el número secreto: ")
            if(nSecreto == numIntentos){
                div4.textContent = "Has acertado el numero era: "+nSecreto+" con "+numIntentos+" intentos"
                fin = true;
            }
        }
    }
    function accion5(){

        const div5 = document.getElementById("c5");

        const fecha= new Date()
        const hora = fecha.getHours();
        const minutos= fecha.getMinutes();
        const dia = fecha.getDate();
        const mes = fecha.getMonth();
        const anio= fecha.getFullYear();
         div5.textContent="Hora:" +hora+":"+minutos+"\nDia:"+dia+"/"+mes+"/"+anio

    }
}