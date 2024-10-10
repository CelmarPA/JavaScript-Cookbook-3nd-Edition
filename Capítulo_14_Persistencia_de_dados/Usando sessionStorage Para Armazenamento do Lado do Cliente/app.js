"use strict";

// Define dados para ambos session e cookie
function definirDado() {
    const chave = document.getElementById("chave").value;
    const { value} = document.getElementById("valor");
    
    let valor =  value;
    
    // Define sessionStorage
    sessionStorage.setItem(chave, valor);

    // Define localStorage
    localStorage.setItem(chave, valor);

    // Define cookie
    definirCookie(chave, valor);
}

function obterDado() {
    try {
        const chave = document.getElementById("chave").value;
        const session = document.getElementById("sessionStr");
        const local = document.getElementById("localStr");
        const cookie = document.getElementById("cookieStr");

        // Reseta o display
        session.innerHTML = "";
        local.innerHTML = "";
        cookie.innerHTML = "";

        // sessionStorage
        let valor = sessionStorage.getItem(chave) || "";
        if (valor) session.innerHTML = `<p>${valor}</p>`;

        // localStorage
        valor = localStorage.getItem(chave) || "";
        if (valor) local.innerHTML = `<p>${valor}</p>`;

        // cookie
        valor = obterCookie(chave) || "";
        if (valor) cookie.innerHTML = `<p>${valor}</p>`;

    } catch (e) {
        console.log(e);
    }
}

function removerDado() {
    const chave = document.getElementById("chave").value;

    // sessionStorage
    sessionStorage.removeItem(chave);

    // localStorage
    localStorage.removeItem(chave);

    // cookie
    apagarCookie(chave);

    // Reseta o display
    obterDado();
}

document.getElementById("definir").onclick = definirDado;
document.getElementById("obter").onclick = obterDado;
document.getElementById("apagar").onclick = removerDado;
