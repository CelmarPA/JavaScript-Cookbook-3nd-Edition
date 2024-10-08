"use strict";

let soma = 0;

// Usa querySelectorAll para encontrar todas as células da segunda tabela
const celulas = document.querySelectorAll("td:nth-of-type(2)");

// Itera por cada uma das celulas
celulas.forEach(celula => {
    soma += Number.parseFloat(celula.firstChild.data);
});

// Adiciona a soma no fim da tabela
const novaLinha = document.createElement("tr");

// Primeira celula
const primeiraCelula = document.createElement("td");
const textoPrimeiraCelula = document.createTextNode("Soma:");
primeiraCelula.appendChild(textoPrimeiraCelula);
novaLinha.appendChild(primeiraCelula);

// Segunda celula com a soma
const segundaCelula = document.createElement("td");
const textoSegundaCelula = document.createTextNode(soma);
segundaCelula.appendChild(textoSegundaCelula);
novaLinha.appendChild(segundaCelula);

// Adiciona a linha na tabela
document.getElementById("tabela1").appendChild(novaLinha);
