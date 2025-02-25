window.addEventListener("load", inicio);



function inicio(){
    const cuerpo = document

    const trs= document.querySelectorAll("tr");

    const btn = document.body.querySelector('button').addEventListener("click", ()=>{
        for(let i=0;i< trs.length; i++){


            if(i % 2 == 0){
                trs[i].style.backgroundColor = '#b2babb'
    
            }else{
                trs[i].style.backgroundColor = '#e5e8e8'
    
            }
        }
    }
    );


   
}