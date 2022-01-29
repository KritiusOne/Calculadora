const displayValorAnterior = document.querySelector(".operation");
const displayValorActual = document.querySelector(".result");
const numeros = document.querySelectorAll(".numero");
const operador = document.querySelectorAll(".operation-button");

const display = new Display(displayValorAnterior, displayValorActual);

numeros.forEach(boton =>{
    boton.addEventListener('click', ()=>{
        display.aggNumeros(boton.innerHTML);
    })
})
document.addEventListener("keydown",(e)=>{
    console.log(e.keyCode);
    if(e.keyCode == 8){
        display.borrar();
    }
    if (e.keyCode == 13) {
        display.calcular();
    }
    if((e.keyCode >=48 && e.keyCode <=57) || (e.keyCode >= 96 && e.keyCode <=105)){
         display.aggNumeros(e.key);
    }
    if (e.keyCode == 107) {
        display.computar("suma");
    }
    if (e.keyCode == 109) {
        display.computar("resta");
    }
    if(e.keyCode == 106){
        display.computar("multiplicacion");
    }
    if (e.keyCode == 111) {
        display.computar("division");
    }
    if(e.keyCode == 13 ){
        display.calcular();
    }
})
operador.forEach(boton =>{
    boton.addEventListener('click',()=> display.computar(boton.value));
})

