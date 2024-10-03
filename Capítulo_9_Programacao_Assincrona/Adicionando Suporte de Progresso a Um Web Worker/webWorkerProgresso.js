"use strict";
// Isso manterá o trabalhador da web acessível para cancelamento
let worker;

function iniciarBusca() {
    // Use este elemento para exibir informações de progresso e a lista primos
    const mostrarStatus = document.querySelector("#status");
    const container = document.querySelector("#primoContainer");

    // Cria o worker
    worker = new Worker('primoWorker.js');
    
    mostrarStatus.textContent = "Busca iniciada.";

    // Reportar mensagem de erro da página
    worker.onerror = erro => {
        mostrarStatus.textContent = erro.message;
    }

    // Lida com as mensagens do worker
    worker.onmessage = evento => {
        const mensagem = evento.data;

        if (mensagem.tipoMensagem === "ListaPrimos") {
            const primos = mensagem.data;
            container.textContent = primos.join(", ");
        } else if (mensagem.tipoMensagem === "Progresso") {
            mostrarStatus.textContent = `${mensagem.data} % realizado...`;
        }
    }

    // Obtém o intervalo de pesquisa e diz ao worker para iniciar
    container.textContent = "";
    const doNumero = document.querySelector("#inicio").value;
    const ateNumero = document.querySelector("#fim").value;

    worker.postMessage({inicio: doNumero, fim: ateNumero});
    console.log("Worker iniciou");
}

function cancelarBusca() {
    console.log("Cancelando worker");
    document.querySelector("#status").textContent = "Busca cancelada."
    worker.terminate();
}

function limpar() {
    window.location.reload();
}

window.onload = function onload() {
    document.querySelector("#cancelar").addEventListener("click", cancelarBusca);
    document.querySelector("#limpar").addEventListener("click", limpar);
    document.querySelector("#buscar").addEventListener("click", iniciarBusca);
}
