"use strict";

// Manipuladores de evento
document.getElementById("terceiro-campo").onchange = validarCampo;
document.getElementById("primeiro-campo").onblur = campoObrigatorio;
document.getElementById("testeform").onsubmit = verificacaoFinal;

// Função para remover mensagem de alerta na página
function removerAlerta() {
    var msg = document.getElementById("msg");

    if (msg) {
        document.body.removeChild(msg);
    }
}

// Função para resetar (limpar) campos de um elemento do form
function resetarCampo(elemento) {
    elemento.parentNode.setAttribute("style", "background-color: #ffffff");
    
    var valido = elemento.getAttribute("aria-invalid");

    if (valido) elemento.removeAttribute("aria-invalid");
}

// Função marcar campo inválido
function campoRuim(elemento) {
    elemento.parentNode.setAttribute("style", "background-color: #ffeeee");

    elemento.setAttribute("aria-invalid", true);
}

// Função para gerar alerta
function gerarAlerta(texto) {
    // Cria novos elementos texto e div e define valores, id, Aria e class.

    var textoNode = document.createTextNode(texto);
    const msg = document.createElement("div");
    msg.setAttribute("role", "alert");
    msg.setAttribute("id", "msg");
    msg.setAttribute("class", "alert");

    // Anexa o texto a div e a div ao documento
    msg.appendChild(textoNode);
    document.body.appendChild(msg);
}

function validarCampo() {
    // Remove qualquer alertar existente independende do valor
    removerAlerta();

    // Verifica o número
    if (!isNaN(this.value)) {
        resetarCampo(this);
    } else {
        campoRuim(this);
        gerarAlerta("Você inseriu um valor inválido no Terceiro Campo." + "Somente valores numéricos como 105 ou 3.54 são permitidos")
    }
}

function campoObrigatorio() {
    // Remove qualquer alerta
    removerAlerta();

    // Verifica valor
    if (this.value.length > 0) {
        resetarCampo(this);
    } else {
        campoRuim(this);
        gerarAlerta("Você deve inserir um valor no Primeiro Campo")
    }
}

function verificacaoFinal() {
    removerAlerta();
    var campos = document.querySelectorAll("[aria-invalid= 'true']");

    if (campos.length > 0) {
        gerarAlerta("Você tem entradas de campo incorretas que devem ser corrigidas " + "antes de enviar este formulário");

        return false;
    }
}