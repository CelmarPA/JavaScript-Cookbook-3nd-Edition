"use strict";

// Define o cookie
function definirDado() {
    const chaveForm = document.getElementById("chave").value;
    const valorForm = document.getElementById("valor").value;

    const cookieVal = `${chaveForm}=${encodeURIComponent(valorForm)}`;
    document.cookie = cookieVal;
}

// Obtém o valor do cookie para uma chave específica
function obterDado() {
    const chave = document.getElementById("chave").value;
    const cookie = document.getElementById("cookieStr");
    
    cookie.innerHTML = "";

    const chaveValor = chave.replace(/([.*+?^=!:${}()|[\]/\\])/g, '\\$1');
    const regex = new RegExp(`(?:^|;)\\s?${chaveValor}=(.*?)(?:;|$)`, 'i');
    const correspondencia = document.cookie.match(regex);
    const valor = (correspondencia && decodeURIComponent(correspondencia[1])) || "";
    cookie.innerHTML = `<p>${valor}</p>`;
}

// Apaga o cookie para chave específica
function apagarDado() {
    const chave = document.getElementById("chave").value;
    document.getElementById("cookieStr").innerText = "";

    const cookie = `${chave}=; expires=Thu, 01 Jan 1970 00:00:00 UTC`
    document.cookie = cookie;
}

document.getElementById("definir").onclick = definirDado;
document.getElementById("obter").onclick = obterDado;
document.getElementById("apagar").onclick = apagarDado;
