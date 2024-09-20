"use strict";

/**
 *      Vamos dar uma olhada em um exemplo mais detalhado que mostra
 *      como você pode encontrar e destacar correspondências de texto
 *      em uma página da web.
 *
 *      Esta página tem uma textarea e uma caixa de texto de entrada
 *      para inserir uma string de pesquisa e uma expressão regular. O
 *      padrão é usado para criar um objeto RegExp, que é então
 *      aplicado ao texto na textarea usando matchAll().
 *
 *      Conforme o código examina as correspondências, ele cria uma
 *      string, consistindo tanto do texto não correspondido quanto do
 *      texto correspondido. O texto correspondido é cercado por um
 *      elemento <span>, com uma classe CSS usada para destacar o
 *      texto. A string resultante é então inserida na página, usando
 *      a propriedade innerHTML de um elemento <div>.
 */
// Cria ouvinte para evento onclick
document.getElementById("submeterPesquisa").onclick = function () {
    // Obtém o padrão
    const padrao = document.getElementById("inPadrao").value;
    const regex = new RegExp(padrao, "g");

    // Obtém o texto para pesquisa
    const textoPesquisa = document.querySelector("textarea").value;

    // Inicializa variáveis
    let resultadoDestacado = "<pre>";
    let posicaoInicial = 0;
    let posicaoFinal = 0;

    // Encontra cada correspondência, e monta o resultado
    const correspondencias = textoPesquisa.matchAll(regex);

    for (const correspondencia of correspondencias) {
        posicaoFinal = correspondencia.index;

        // Obtém todas as strings correspondêntes e concatena
        resultadoDestacado += textoPesquisa.slice(posicaoInicial, posicaoFinal);

        // Adiciona o texto correspondente usando uma classe CSS para formatação
        resultadoDestacado +=
            "<span class='encontrado'>" + correspondencia[0] + "</span>";

        // Atualiza a posição inicial
        posicaoInicial = posicaoFinal + correspondencia[0].length;
    }

    // Finaliza a string do resultado
    resultadoDestacado += textoPesquisa.slice(posicaoInicial);
    resultadoDestacado += "</pre>";

    // Exibe o resultado destacado na página
    document.getElementById("resultadoPesquisa").innerHTML = resultadoDestacado;
};

// Rode o arquivo index.html para testar esse código, exemplo de expressão regular: "fo(lhas|lhagens)"
