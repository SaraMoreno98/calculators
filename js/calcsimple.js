function calcular(){
    let num1 = document.getElementById("numero1").value
        num1 = Number (num1)
    let num2 = document.getElementById("numero2").value
        num2 = Number (num2)

    let operador = document.getElementById("operator").value
    let resultado_operacion = ""

    let esCorrecto

    if (operador == '+'){
        resultado_operacion = num1 + num2
    }
    if (operador == '-'){
        resultado_operacion = num1 - num2
    }
    if (operador == 'x'){
        resultado_operacion = num1 * num2
    }

    if ((num2 == 0) && (operator == '/')){
        alert("No se puede dividir por 0")
        esCorrecto = false
    }
    else{
        resultado_operacion = num1 / num2
    }

    document.getElementById("resultado_calc").textContent = `El resultado es ${resultado_operacion}`
}

function clear(){
    document.getElementById('numero1').value = ''
    document.getElementById('numero2').value = ''
    document.getElementById('operator').value = '+'    
    document.getElementById('resultado_calc').textContent = ''
}