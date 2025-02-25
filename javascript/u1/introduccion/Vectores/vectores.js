window.addEventListener("load", activar);


function activar(){
    //asignamos una constante  cada boton y li
        const ul = document.querySelectorAll("#lista")
        const li = document.querySelectorAll("li");
        const boton1 = document.querySelector("#btn1")
        const boton2 = document.getElementById('btn2')
        const boton3 = document.getElementById('btn3')
        const boton4 = document.getElementById('btn4')

         // Array utilizado para obtener colores aleatorios
    const colores = ["red", "blue", "green", "orange"];
    boton1.addEventListener("click", numerosAleatorios)
    boton2.addEventListener("click", numerosAleatoriosCol)
    boton3.addEventListener("click", coloresRandom)

    function numerosAleatorios(){
        for (let item of li){
        let num = Math.floor(Math.random() * 1001);
             item.textContent= num;
             

        }
    }

    function numerosAleatoriosCol(){
        for (let item of li){
        let num = Math.floor(Math.random() * 1001);
             item.textContent= num;
             if(num > 500){
                item.style.color="blue";
             }else{
                item.style.color="green";
             }

        }
    }
    function coloresRandom(){
        for (let item of li){
            let num = Math.floor(Math.random() * 1001)
            item.textContent= num
            let numeroRandom = Math.floor(Math.random() * colores.length);
            const colorAl = numeroRandom
            item.style.color=colores[colorAl];

        }
    }
}