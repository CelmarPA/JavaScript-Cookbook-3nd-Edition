"use strict";
function encontrarPrimos(doNumero, ateNumero) {
    // Cria um array contendo todos os inteiros entre os dois números especificados.

    const lista = [];

    for (let i = doNumero; i <= ateNumero; i++) {
        if (i > 1) {
            lista.push(i);
        }
    }

    // Testa por primos
    const maxDiv = Math.round(Math.sqrt(ateNumero));
    const primos = [];
    let progressoAnterior = 0;

    for (let i = 0; i < lista.length; i++) {
        let falhou = false;
        for (let j = 2; j <= maxDiv; j++) {
            if ((lista[i] !== j) && (lista[i] % j === 0)) {
                falhou = true;
            } else if ((j === maxDiv) && (falhou === false)) {
                primos.push(lista[i]);
            }
        }

        // Atualiza o progresso
        const progresso = Math.round(i / lista.length * 100);
        if (progresso !== progressoAnterior) {
            postMessage({tipoMensagem: "Progresso", data: progresso});
            progressoAnterior = progresso;
        }
    }

    return primos;
}

onmessage = evento => {
    // Executa a pesquisa de números primos
    console.log("Worker recebeu mensagem");
    console.log(evento.data);

    const primos = encontrarPrimos(Number(evento.data.inicio), Number(evento.data.fim));

    // Manda o resultado de volta
    console.log("Worker enviando mensagem");
    postMessage({tipoMensagem: "ListaPrimos", data: primos});
};
