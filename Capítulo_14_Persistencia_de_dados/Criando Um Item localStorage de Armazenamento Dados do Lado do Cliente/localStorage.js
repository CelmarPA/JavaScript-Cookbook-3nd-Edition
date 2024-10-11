"use strict";

// Armazena a entrada de elementos do input como uma variável
const elementos = document.querySelectorAll("input");

// Armazena valores dos campos
function camposProcessados() {
    localStorage.setItem(window.location.href, "true");
    localStorage.setItem(this.id, this.value);
}

// Limpar campos individuais
function limparArmazenamento() {
    elementos.forEach(elemento => {
        if (elemento.type === "text") {
            localStorage.removeItem(elemento.id);
        }
    });
}

// Capturar botão de envio para limpar o armazenamento quando clicado
document.getElementById("entradaForm").onsubmit = limparArmazenamento;

// Na alteração do elemento do formulário, armazene o valor em localStorage
elementos.forEach(elemento => {
    if (elemento.type === "text") {
        const valor = localStorage.getItem(elemento.id);
        if (valor) elemento.value = valor;

        // Evento change
        elemento.onchange = camposProcessados;
    }
});
