/*parte de inserçao de numeros*/
function insert (num){
    let numero = document.querySelector('#resultado').innerHTML;
    document.querySelector('#resultado').innerHTML = numero + num
}
function clean (){
    document.querySelector('#resultado').innerHTML = "";
}
function back (){
    let resultado = document.querySelector('#resultado').innerHTML;
    document.querySelector('#resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
/*fazendo os calculos*/
function calc(){
    let resultado = document.querySelector('#resultado').innerHTML;
    if(resultado){
        document.querySelector('#resultado').innerHTML = eval(resultado)
    }
    else{
        document.querySelector("#resultado").innerHTML = "" /*nada para calcular*/
    }
}