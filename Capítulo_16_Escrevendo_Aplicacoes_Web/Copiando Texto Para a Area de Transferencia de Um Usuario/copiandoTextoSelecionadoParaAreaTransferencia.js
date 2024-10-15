"use strict";

/**
 *      No JavaScript eu sigo um padrão similar ao do exemplo anterior, 
 *      com a adição de usar document.getSelection() para obter o valor 
 *      de qualquer texto que o usuário tenha selecionado na página:
*/
const copiaTexto = document.getElementById("copia-texto");
const copiaBotao = document.getElementById("copia-botao");

const copiarAreaTransferencia = () => {
    const selecao = document.getSelection();
    copiaTexto.value = `${selecao} — Confira meu destaque em https://exemplo.com `;
    copiaTexto.select();
    navigator.clipboard.writeText(copiaTexto.value);
}

copiaBotao.addEventListener("click", copiarAreaTransferencia);
