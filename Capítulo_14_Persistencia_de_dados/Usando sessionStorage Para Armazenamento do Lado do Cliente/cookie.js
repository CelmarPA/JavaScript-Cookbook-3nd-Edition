"use strict";

// Definir cookie session
function definirCookie(cookie, valor) {
    const cookieVal = `${cookie}=${encodeURIComponent(valor)};path=/`
    document.cookie = cookieVal;
    console.log(cookieVal);
}

// Obtém cada cookie separado por ponto e vírgula
function obterCookie(chave) {
    const chaveValor = chave.replace(/([.*+?^=!:${}()|[\]/\\])/g, '\\$1');
    const { cookie } = document;
    const regex = new RegExp(`(?:^|;)\\s?${chaveValor}=(.*?)(?:;|$)`, 'i');
    const correspondencia = cookie.match(regex);

    return correspondencia && decodeURIComponent(correspondencia[1]);
}

// Define data do cookie para o passado para apagar
function apagarCookie(chave) {
    const cookie = `${chave}=;path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
    document.cookie = cookie
    console.log(cookie);
}
