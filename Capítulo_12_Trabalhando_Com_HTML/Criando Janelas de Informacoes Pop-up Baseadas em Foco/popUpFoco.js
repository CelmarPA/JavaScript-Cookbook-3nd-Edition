"use strict";

/**
 *      Você quer criar uma interação onde um usuário passa o mouse 
 *      sobre uma imagem em miniatura e informações adicionais são 
 *      exibidas.
 * 
 *      Essa interação é baseada em quatro funcionalidades diferentes.
 *      Primeiro, você precisa capturar os eventos mouseover e mouseout 
 *      para cada miniatura de imagem para exibir ou remover a janela 
 *      pop-up, respectivamente. No seguinte código, os manipuladores 
 *      de eventos cross-browser são anexados a todas as imagens na 
 *      página:
*/
window.onload = () => {
    const imagens = document.querySelectorAll("img");

    imagens.forEach(imagem => {
        imagem.addEventListener("mouseover", () => {
            obterInformacao(imagem.id);
        }, false);

        imagem.addEventListener("mouseout", () => {
            removerJanela();
        }, false);
    });
};

/**
 *      Segundo, você precisa acessar algo sobre o item sobre o qual 
 *      está passando o mouse para saber o que usar para preencher o 
 *      balão pop-up. As informações podem estar na página, ou você 
 *      pode usar a comunicação do servidor web para obter as 
 *      informações:
*/
function obterInformacao(id) {
    // Obtém os dados
}

/**
 *      Terceiro, você precisa mostrar a janela pop-up, se ela já 
 *      existir e não for exibida, ou criar a janela. No código a 
 *      seguir, a janela pop-up é criada logo abaixo do objeto, e logo 
 *      à direita quando a chamada do servidor web retorna com as
 *      informações sobre o item. O método getBoundingClientRect() é 
 *      usado para determinar o local onde o pop-up deve ser colocado, 
 *      e createElement() e createTextNode() são usados ​​para criar o 
 *      pop-up: 
*/

// Calcula posição para o pop-up
function calcularPosicao(obj) {
    const retangulo =  obj.getBoundingClientRect();
    let height;
    if (retangulo.height) {
        height = retangulo.height;
    } else {
        height = retangulo.bottom - retangulo.top;
    }
    const top = retangulo.top + height + 10;
    return [retangulo.left, top];
}

function mostrarJanela(id, resposta) {
    const img = document.getElementById(id);

    console.log(img);

    // Deriva localização para pop-up
    const loc = calcularPosicao(img);
    const left = `${loc[0]}px`;
    const top = `${loc[1]}px`;

    // Cria o pop-up
    const div = document.createElement("popup");
    div.id = "popup";
    const texto = document.createTextNode(resposta);
    div.appendChild(texto);

    // Estilo do pop-up
    div.setAttribute("class", "popup");
    div.setAttribute("style", `position: fixed; left: ${left}; top: ${top}`);
    document.body.appendChild(div);
}

/**
 *      Por fim, quando o evento mouseover dispara, você precisa 
 *      ocultar a janela pop-up ou removê-la — o que fizer sentido na 
 *      sua configuração. Como o aplicativo criou uma nova janela 
 *      pop-up no evento mouseover, ele remove o pop-up no manipulador 
 *      de eventos mouseout:
*/
function removerJanela() {
    const popup = document.getElementById("popup");
    if (popup) popup.parentNode.removeChild(popup);
}