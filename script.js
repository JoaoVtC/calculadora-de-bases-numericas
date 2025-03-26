var valorA;
var valorB;
var tipoA;
var tipoB;

function converter() {
    valorA = Number(iptValorA.value);
    valorB = Number(iptValorB.value); 

    msgResultA.innerHTML = `<b>Conversão do valor ${valorA}</b> <br>
        <p>Octal:
        <span>${valorA.toString(8)}</span>
        </p>
        <p>Hexadecimal:
        <span>${valorA.toString(16)}<span>
        </p>
        <p>Binário:
        <span>${valorA.toString(2)}</span>
        </p>`;

        msgResultB.innerHTML = `<b>Conversão do valor ${valorB}</b> <br>
        <p>Octal:
        <span>${valorB.toString(8)}</span>
        </p>
        <p>Hexadecimal:
        <span>${valorB.toString(16)}<span>
        </p>
        <p>Binário:
        <span>${valorB.toString(2)}</span>
        </p>`;
} 
function subtracao(valorA, valorB){
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
    tipoB = slctBaseB.value
    if (resultBase == "decimal") {
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

        msgResultA.innerHTML = `O resultado da soma de ${valorA} com ${valorB} em decimal é: ${result}`
        }

        if (resultBase == "binario") {
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
                valorDecA =  (valorA, 16)
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

        msgResultA.innerHTML = `O resultado da soma de ${valorA} com ${valorB} em binário é: 
        ${result.toString(2)}`
        }
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

