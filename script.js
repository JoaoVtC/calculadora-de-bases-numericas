function converter() {
    var valor = iptValorA.value;
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
function adicao(valorA, valorB) {
    var valorA = Number(iptValorA.value);
    var valorB = Number(iptValorB.value);

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

