"use strict";

let soma = 0;

// Usa querySelectorAll para encontrar todas as células da segunda tabela
let celulas = document.querySelectorAll("td:nth-of-type(2)");

for (var i = 0; i < celulas.length; i++) {
    soma += parseFloat(celulas[i].firstChild.data);
}
