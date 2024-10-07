"use strict";

// Usa getElementById para acessar o elemento div
const div = document.getElementById("alvo");

// Obtém o texto do parágrafo
const texto = prompt("Digite o texto do novo parágrafo", "");

// use getElementsByTagName e o índice da coleção para acessar o primeiro parágrafo
const paragrafoAntigo = document.getElementsByTagName("p")[0];

// Cria um nó texto
const noTexto = document.createTextNode(texto);

// Cria o novo parágrafo
const novoParagrafo = document.createElement("p");

// Anexa of texto ao novo parágrafo, e inseri o novo parágrafo
novoParagrafo.appendChild(noTexto);
div.insertBefore(novoParagrafo, paragrafoAntigo);
