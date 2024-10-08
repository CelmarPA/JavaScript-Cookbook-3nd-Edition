"use strict";

const dados = ["Olá 0", "Olá 1", "Olá 2"];

// Calcula a posição para o pop up
function calcularPosicao(obj) {
    const retang = obj.getBoundingClientRect();
    let height;

    if (retang.height) {
        height = retang.height;
    } else {
        height = retang.bottom - retang.top;
    }

    const top = retang.top + height + 10;

    return [retang.left, top];
}


// Processa o retorno
function mostrarJanela(id, resposta) {
    const img = document.getElementById(id);

    console.log(img);

    // Deriva a localização para o pop up
    const loc = calcularPosicao(img);
    const left = `${loc[0]}px`;
    const top = `${loc[1]}px`;

    console.log(left, top);

    // Cria o pop up
    const div = document.createElement("popup");
    div.id = "popup";
    const texto = document.createTextNode(resposta);
    div.appendChild(texto);

    // Estilo do pop up
    div.setAttribute("class", "popup");
    div.setAttribute("style", `position: fixed; left: ${left}; top: ${top}`);
    document.body.append(div);
}

// Obtém informação
function obterInformacao(id) {
    mostrarJanela(id, dados[id]);
}

// Função para remover a janela
function removerJanela() {
    const popup = document.getElementById("popup");
    if (popup) popup.parentNode.removeChild(popup);
}

// Adicionar ouvinte para o evento onload
window.onload = () => {
    const imgs = document.querySelectorAll("img");

    imgs.forEach(img => {
        img.addEventListener("mouseover", () => {
            obterInformacao(img.id);
        }, false);

        img.addEventListener("mouseout", () => {
            removerJanela();
        }, false);
    });    
};
