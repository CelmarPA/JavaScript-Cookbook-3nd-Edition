"use strict";

/**
 *      Você quer que o código de longa duração seja executado em um 
 *      thread separado, para que ele não bloqueie a interface do usuário.
 * 
 *      Use a API Web Worker. Você cria um objeto Worker, que executa 
 *      todo o seu código em um thread de segundo plano. Embora o objeto 
 *      Worker seja isolado do resto do seu código (ele não pode acessar 
 *      o DOM, a página ou quaisquer variáveis ​​globais, por exemplo), 
 *      você pode se comunicar com ele enviando mensagens de um lado para 
 *      o outro.
 * 
 *      O botão Iniciar aciona uma função chamada iniciarBusca(). Ele 
 *      cria um novo trabalhador, anexa funções para manipular os eventos 
 *      Worker.error e Worker.message e finalmente inicia a operação 
 *      chamando Worker.postMessage(). Aqui está o código relevante
 *      no script para a página da web:
*/

// Mantém uma referência ao worker então nos podemos cancelar, caso necessário
let worker;

function iniciarBusca() {
    // Cria o worker
    worker = new Worker("primo-worker.js");

    const mostrarStatus = document.getElementById("status");
    mostrarStatus.textContent = "Busca iniciada.";

    // Relata mensagem de erro na página
    worker.onerror = erro => {
        mostrarStatus.textContent = erro.message;
    };

    // Responde  às mensagens do worker e exibi o resultado final (a lista de primos) na página quando for recebida
    worker.onmessage = evento => {
        console.log("Recebendo uma mensagem do worker")
        const primos = evento.data;

        document.getElementById("primoContainer").textContent = primos.join(", ");
        mostrarStatus.textContent = "Busca Finalizada."
    };

    // Obtém o intervalo de pesquisa e diz ao worker para iniciar
    document.getElementById("primoContainer").textContent = "";
    const doNumero = document.getElementById("inicio").value;
    const paraNumero = document.getElementById("fim").value;

    worker.postMessage({inicio: doNumero, fim: paraNumero});

    console.log("Worker começou.");    
}

function cancelarBusca() {
    console.log("Cancelando worker");
    document.getElementById("status").textContent = "Busca cancelada."
    worker.terminate();
    
}

function limpar() {
    window.location.reload()
}

window.onload = function onload() {
    document.getElementById("cancelar").addEventListener("click", cancelarBusca);
    document.getElementById("buscar").addEventListener("click", iniciarBusca);
    document.getElementById("limpar").addEventListener("click", limpar)
}
 