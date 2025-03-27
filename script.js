var valorA;
var valorB;
var tipoA;
var tipoB;

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
function adicaoDec() {
    var valorDecA;
    var valorDecB; 
    var resultBase = slctAdiResult.value
    var result;

    valorA = iptValorA.value;
    valorB = iptValorB.value; 
    tipoA = slctBaseA.value
    if (resultBase == "decimal") {
            if (tipoA == "octal") {
                valorDecA = parseInt(valorA, 8)
                valorDecB = parseInt(valorB, 8)
            }
            if (tipoA == "binario") {
                valorDecA = parseInt(valorA , 2)
                valorDecB = parseInt(valorB , 2)
            }
            if (tipoA == "decimal") {
                valorDecA = valorA
                valorDecB = valorB
            }
            else if(tipoA == "hexa"){
                valorDecA = parseInt(valorA, 16)
                valorDecB = parseInt(valorB, 16)
            }
            }
            
            valorDecA = Number(valorDecA);
            valorDecB = Number(valorDecB);

            result = valorDecA + valorDecB;

        msgResultA.innerHTML = `O resultado da soma de ${valorA} com ${valorB} em decimal é: ${result}`
        }

        if (resultBase == "binario") {
            if (tipoA == "octal") {
                valorDecA = parseInt(valorA, 8)
                valorDecA = valorDecA.toString(8)
                valorDecA = parseInt(valorDecA, 8)
            }
            if (tipoA == "binario") {
                valorDecA = parseInt(valorA , 2)
            }
            if (tipoA == "decimal") {
                valorDecA = valorA
            }
            if(tipoA == "hexa"){
                valorDecA =  (valorA, 16)
            }

            if (tipoB == "octal") {
                valorDecB = parseInt(valorB, 8)
                valorDecB = valorDecB.toString(8)
                valorDecB = parseInt(valorDecB, 8)
            }
            if (tipoB == "binario") {
                valorDecB = parseInt(valorB , 2)
                
            }
            if (tipoB == "decimal") {
                valorDecB = valorB
            }
            else if(tipoB == "hexa"){
                valorDecB = parseInt(valorB, 16)
            }
            
            valorDecA = Number(valorDecA);
            valorDecB = Number(valorDecB);

            result = valorDecA + valorDecB;

        msgResultA.innerHTML = `O resultado da soma de ${valorA} com ${valorB} em binário é: 
        ${result.toString(2)}`
        }

        if (resultBase == "octal") {
            if (tipoA == "octal") {
                valorDecA = parseInt(valorA, 8)
            }
            if (tipoA == "binario") {
                valorDecA = parseInt(valorA , 2)
            }
            if (tipoA == "decimal") {
                valorDecA = valorA
            }
            if(tipoA == "hexa"){
                valorDecA = parseInt(valorA, 16)
            }

            if (tipoB == "octal") {
                valorDecB = parseInt(valorB, 8)
            }
            if (tipoB == "binario") {
                valorDecB = parseInt(valorB , 2)
                
            }
            if (tipoB == "decimal") {
                valorDecB = valorB
            }
            else if(tipoB == "hexa"){
                valorDecB = parseInt(valorB, 16)
            }
            
            valorDecA = Number(valorDecA);
            valorDecB = Number(valorDecB);

            result = valorDecA + valorDecB;

        msgResultA.innerHTML = `O resultado da soma de ${valorA} com ${valorB} em octal é: ${result.toString(8)}`
        }

        if (resultBase == "hexa") {
            if (tipoA == "octal") {
                valorDecA = parseInt(valorA, 8)
            }
            if (tipoA == "binario") {
                valorDecA = parseInt(valorA , 2)
            }
            if (tipoA == "decimal") {
                valorDecA = valorA
            }
            if(tipoA == "hexa"){
                valorDecA = parseInt(valorA, 16)
            }

            if (tipoB == "octal") {
                valorDecB = parseInt(valorB, 8)
            }
            if (tipoB == "binario") {
                valorDecB = parseInt(valorB , 2)
                
            }
            if (tipoB == "decimal") {
                valorDecB = valorB
            }
            else if(tipoB == "hexa"){
                valorDecB = parseInt(valorB, 16)
            }
            
            valorDecA = Number(valorDecA);
            valorDecB = Number(valorDecB);

            result = valorDecA + valorDecB;

        msgResultA.innerHTML = `O resultado da soma de ${valorA} com ${valorB} em hexadecimal é: ${result.toString(16)}`
        }

    

// operações em bases diferentes
// subtração
// divisão
// adição
// multiplicação
// usuário poder inserir diferentes bases númericas para fazer soma

// O Binário é o caminho da luz. converter tudo para decimal para realizar as contas
// LINKS UTEIS
// https://dev.to/mlgvla/javascript-number-conversions-using-parseint-and-tostring-7fm#:~:text=parseInt()%20can%20be%20used,how%20the%20radix%20parameter%20functions.&text=In%20each%20case%20we%20are,or%2011%20in%20base%2010.
// https://www.npmjs.com/package/base-converter

