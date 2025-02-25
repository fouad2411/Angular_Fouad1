window.addEventListener("load", inicio)

function inicio(){
    const body = document.querySelector("body");

    with(document.body.style){
        fontSize="20px"
    }
    const ol =  document.getElementById("semana")
    ol.style.color="blue ";
    const li= ol.lastElementChild
    li.style.backgroundColor = 'red'
    const penultimaLinea=li.previousElementSibling
    penultimaLinea.style.backgroundColor = 'green'

    
     const edad= document.getElementById('edad') 
      edad.style.color='red'

}