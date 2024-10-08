"use strict";

// Valores da tabela
const valores = new Array(3);
valores[0] = [123.45, "maçã", true];
valores[1] = [65, "banana", false];
valores[2] = [1034.99, "cereja", false];

const misturado = document.getElementById("misturado");
const tbody = document.createElement("tbody");

function podarLinha() {
    // Remove linha
    const pai = this.parentNode;
    const linhaVelha = pai.removeChild(this);

    // String de dados das linhas removidas
    let dadosString = "";

    linhaVelha.childNodes.forEach(linha => {
        dadosString += `${linha.firstChild.data} `;
    });

    // Exibe a mensagem
    const mensagem = document.createTextNode(`${dadosString} removido`);
    const p = document.createElement("p");
    p.appendChild(mensagem);
    document.getElementById("resultado").appendChild(p);
}

// Para cada linha externa do array
valores.forEach(valor => {
    const tr = document.createElement("tr");

    // Para cada celular interna do array, cria td e anexa o texto
    valor.forEach(celula => {
        const td = document.createElement("td");
        const texto = document.createTextNode(celula);
        td.appendChild(texto);
        tr.appendChild(td);
    });

    // Anexa o manipulador de eventos 
    tr.onclick = podarLinha;

    // Adiciona linha na tabela
    tbody.appendChild(tr);
    misturado.appendChild(tbody);
});
