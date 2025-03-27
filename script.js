
function converter() {
    var valor = iptValorConvert.value;
    var baseA = iptBaseA.value;
    var baseB = iptBaseB.value;
    var resultado = document.getElementById("resultado");

    var bases = { "decimal": 10, "binario": 2, "octal": 8, "hexa": 16 };
    var decimal = parseInt(valor, bases[baseA]);

    if (isNaN(decimal)) {
        resultado.innerHTML = "Número inválido para a base selecionada.";
        return;
    }

    var convertido = decimal.toString(bases[baseB]);

    if (baseB === "hexa") {
        convertido = convertido.toUpperCase();
    }

    resultado.innerHTML = `${valor} na base ${baseA} é igual a ${convertido} na base ${baseB}.`;
}

function limpar() {
    iptValorA.value = "";
    document.getElementById("resultado").innerHTML = "";
}
function subtracao(valorA, valorB) {
    var valorA = Number(iptValorA.value);
    var valorB = Number(iptValorB.value);
}
function calcular() {
    var valorAdiA;
    var valorAdiB; 
    var resultBase = slctAdiResult.value
    var result;
    var valorA = iptValorA.value;
    var valorB = iptValorB.value; 
    var tipoResult = Number(slctBase.value)
    var tipoCalc = slctTipoCalc.value;


    if (resultBase == "decimal") {
            valorAdiA = parseInt(valorA , tipoResult)
            valorAdiB = parseInt(valorB , tipoResult)

            if(tipoCalc == 'soma'){
                result = valorAdiA + valorAdiB;
            }

            if(tipoCalc == 'subtração'){
                result = valorAdiA - valorAdiB;
            }

            if(tipoCalc == 'divisão'){
                result = valorAdiA / valorAdiB;
            }

            if(tipoCalc == 'multiplicação'){
                result = valorAdiA * valorAdiB;
            }
            

            msgResultA.innerHTML = `A ${tipoCalc} de ${valorA} com ${valorB} em decimal é: ${result}`
    }

        if (resultBase == "binario") {
            valorAdiA = parseInt(valorA , tipoResult)
            valorAdiB = parseInt(valorB , tipoResult)

             if(tipoCalc == 'soma'){
                result = valorAdiA + valorAdiB;
            }

            if(tipoCalc == 'subtração'){
                result = valorAdiA - valorAdiB;
            }

            if(tipoCalc == 'divisão'){
                result = valorAdiA / valorAdiB;
            }

            if(tipoCalc == 'multiplicação'){
                result = valorAdiA * valorAdiB;
            }
            
            msgResultA.innerHTML = `A ${tipoCalc} de ${valorA} com ${valorB} em binário é: 
        ${result.toString(2)}`
        }

        if (resultBase == "octal") {
            valorAdiA = parseInt(valorA , tipoResult)
            valorAdiB = parseInt(valorB , tipoResult)

            if(tipoCalc == 'soma'){
                result = valorAdiA + valorAdiB;
            }

            if(tipoCalc == 'subtração'){
                result = valorAdiA - valorAdiB;
            }

            if(tipoCalc == 'divisão'){
                result = valorAdiA / valorAdiB;
            }

            if(tipoCalc == 'multiplicação'){
                result = valorAdiA * valorAdiB;
            }
            

            msgResultA.innerHTML = `A ${tipoCalc} de ${valorA} com ${valorB} em octal é: ${result.toString(8)}`
        }

        if (resultBase == "hexa") {
            valorAdiA = parseInt(valorA, tipoResult)
            valorAdiB = parseInt(valorB, tipoResult)

            if(tipoCalc == 'soma'){
                result = valorAdiA + valorAdiB;
            }

            if(tipoCalc == 'subtração'){
                result = valorAdiA - valorAdiB;
            }

            if(tipoCalc == 'divisão'){
                result = valorAdiA / valorAdiB;
            }

            if(tipoCalc == 'multiplicação'){
                result = valorAdiA * valorAdiB;
            }
            

            msgResultA.innerHTML = `A ${tipoCalc} de ${valorA} com ${valorB} em hexadecimal é: ${result.toString(16)}`
        }

        if(resultBase == ''){
            msgResultA.innerHTML = `Escolha a base do resultado!!!`
        }

        

        else if(tipoCalc == ''){
            msgResultA.innerHTML = `Escolha uma operação!!!`
        }
}
    

