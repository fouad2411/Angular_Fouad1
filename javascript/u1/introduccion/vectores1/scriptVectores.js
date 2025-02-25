window.addEventListener("load", activar);

function activar(){

const li = document.querySelectorAll("li");
const boton1 = document.querySelector("#btn1").addEventListener("click", accion1)
const boton2 = document.getElementById('btn2').addEventListener("click", accion2)
const boton3 = document.getElementById('btn3').addEventListener("click", accion3)
const boton4 = document.getElementById('btn4').addEventListener("click", accion4)


 // Array utilizado para obtener colores aleatorios
const colores = ["red", "blue", "green", "orange"];
function accion1(){

    for( let item of li){

        let  num= Math.floor(Math.random()*1000);
        item.textContent = num;
    }
    
}

function accion2(){

    for( let item of li){

        let  num= Math.floor(Math.random()*1000);
        item.textContent = num;

        if(num >500){
            item.style.color="blue";
        }else{
            item.style.color="green"; 
        }
        
    }
    
}

function accion3(){

    for(let item of li){
        let num= Math.floor(Math.random()*1000);
        let randomColor= Math.round(Math.random()*colores.length)
        item.textContent = num;
        item.style.color= colores[randomColor];
    }
    
}

function accion4(){
    //huecos donde ubicar el resultado del proyecto
    const items= document.querySelector("ul")
    const li1 = items.firstElementChild;
    const li2= li1.nextElementSibling;
    //desarrollar el resultado
    let num1= Math.floor(Math.random()*10);    
    let num2= Math.floor(Math.random()*10);

    li1.textContent = num1;
    li2.textContent = num2;
    if(num1 === num2){
        alert("Numero1: "+num1 +" Numero2: "+num2+" son iguales")
    }
}
}