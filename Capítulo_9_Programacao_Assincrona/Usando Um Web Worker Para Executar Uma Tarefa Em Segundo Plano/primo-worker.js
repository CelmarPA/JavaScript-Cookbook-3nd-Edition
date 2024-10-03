"use strict";
function encontrarPrimos(doNumero, paraNumero) {
    // Crie um array contendo todos os inteiros entre os dois números especificados.

    const lista = [];
    for (let i = doNumero; i <= paraNumero; i++) {
        if (i > 1) {
            lista.push(i);
        }
    }

    // Testa por primos
    const maxDiv = Math.round(Math.sqrt(paraNumero));
    const primos = [];

    for (let i = 0; i < lista.length; i++) {
        let falhou = false;
        for (let j = 2; j <= maxDiv; j++) {
            if ((lista[i] !== j) && (lista[i] % j === 0)) {
                falhou = true;
            } else if ((j === maxDiv) && (falhou === false)) {
                primos.push(lista[i]);
            }
        }
    }

    return primos;
}

onmessage = evento => {
    // Executar a pesquisa de números primos
    console.log("Worker recebeu mensagem");
    console.log(evento.data);

    const primos = encontrarPrimos(Number(evento.data.inicio), Number(evento.data.fim));

    // Envia o resultado de volta
    console.log("Worker enviando mensagem")
    postMessage(primos);
};
