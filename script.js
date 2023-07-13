var calculo = "";
var valor1 = 0;

function Valores(valor){
    
    resultado = document.getElementByld("resultado").innerHTML
    document.getElementByld("resultado").innerHTML += valor
}

function operadores(operador){
calculo = operador
valor1 = document.getElementById('resultado').innerHTML
document.getElementById('resultado').innerHTML = ""
    }

    function Calcular(){
 valor2 = document.getElementById('resultado').innerHTML
if(calculo == '+'){
    total = parseint(valor1) + parseint(valor2)
} else if (calculo == '-'){
    total = parseint(valor1) - parseint(valor2)
} else if (calculo == '*'){
    total = parseint(valor1) * parseint(valor2)
}
else if (calculo == '/'){
    total = parseint(valor1) / parseint(valor2)
}

document.getElementById('resultado').innerHTML = total

}

function limpar(){
document.getElementById('resultado').innerHTML = ""
valor1=""
calculo = ""
}

function C(){
 resultado = document.getElementById('resultado').innerHTML

 resultadoArray = resultado.split('')

 console.log(resultadoArray)
}