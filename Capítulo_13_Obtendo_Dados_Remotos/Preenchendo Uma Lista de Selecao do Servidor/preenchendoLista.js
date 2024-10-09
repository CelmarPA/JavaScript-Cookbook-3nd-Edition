"use strict";

/**
 *      Com base nas ações de um usuário com outro elemento de 
 *      formulário, você deseja preencher uma lista de seleção
 *      com valores.
 * 
 *      Capture o evento change para o elemento do formulário:
*/
const coisaLegais = document.getElementById("coisas-legais");
coisaLegais.addEventListener("change", async () => {
    // Solicitações GET e eventos vão aqui
})

/**
 *      Na função do manipulador de eventos, faça uma solicitação de 
 *      busca como um POST com os dados do formulário como JSON:
*/
const url = "http://localhost:8080/select";

 // Executa solicitação GET quando o valor selecionado muda
coisaLegais.addEventListener("change", async () => {
   // Objeto contendo valor selecionado
   const selecao = {
    coisaLegal: coisaLegais.value
   };

   // Solicitação GET para o servidor
   const resposta = await fetch(url, {
        method: "post",
        headers: {
            "Content-type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(selecao)
   });
});

/**
 *      Preencha a lista de seleção com o resultado:
*/
const selecionado = document.getElementById("coisa-legal");

if (resposta.ok) {
    const resultado = await resposta.json();
    // Limpar o elemento selecionado
    selecionado.length = 0;
    // Adicione uma opção de exibição padrão com texto e nenhum valor
    selecionado.options[0] = new Option("-- Por favor escolha uma opção--", "");
    // Preencher o select com os valores retornados
    for (let i = 0; i < resultado.length; i++) {
        selecionado.options[selecionado.length] = new Option(resultado[i], result[i]);
    }
    selecionado.style.display = "block";
} else {
    // Se houver um problema ao buscar os dados, exibir um erro
    alert("Erro");
}
