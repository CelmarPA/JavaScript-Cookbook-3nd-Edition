"use strict";

/**
 *      O exemplo a seguir demonstra uma página simples que captura o 
 *      evento de alteração para um elemento select, faz uma 
 *      solicitação de busca com o valor do valor selecionado e 
 *      preenche uma nova lista de seleção analisando os dados 
 *      retornados. No exemplo, os dados são retornados como um array, 
 *      e novas opções são criadas com o texto retornado tendo um 
 *      rótulo de opção e um valor de opção. Antes de preencher o 
 *      elemento select, seu comprimento é definido como 0.
 *      Esta é uma maneira rápida e fácil de truncar o elemento select 
 *      — removendo todas as opções existentes e começando do zero.
*/
const coisasLegais = document.getElementById("coisaLegal");
const selecionado = document.getElementById("legalCoisa");
const url = "http://localhost:8080/select";

// Executa solicitação GET quando o valor selecionado for alterado
coisasLegais.addEventListener("change", async () => {
    // Objeto contendo valor selecionado
    const selecionados = {
        coisaLegal: coisasLegais.value
    };

    // Solicitação GET para o servidor
    const resposta = await fetch(url, {
        method: "post",
        headers: {
            "Content-type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(selecionados)
    });

    // Se busca for bem-sucedida
    if (resposta.ok) {
        const resultado = await resposta.json();

        // Limpa o elemente selecionado
        selecionado.length = 0;

        // Adiciona uma opção de exibição padrão com texto e nenhum valor
        selecionado.options[0] = new Option("--Por favor escolha uma opção--", "");

        // Preenche o selecionado com os valores retornados
        for (let i = 0; i < resultado.length; i++) {
            selecionado.options[selecionado.length] = new Option(resultado[i], resultado[i]);
        }

        // Exibe o elemento selecionar
        selecionado.style.display = "block";
    } else {
        // Se houver um problema ao buscar os dados, exibir um erro
        alert("Erro");
    }
});
