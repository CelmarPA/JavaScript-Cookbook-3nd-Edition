"use strict";

/**
 *      Você quer enviar um formulário do cliente.
 * 
 *      Faça uma solicitação POST de um objeto FormData, usando fetch:
*/
const meuForm = document.getElementById("meu-form");
const url = "http://localhost:8080/";

meuForm.addEventListener("submit", async evento => {
    evento.preventDefault();

    const dadosForm = new FormData(meuForm);
    // adicione um novo campo usando dadosForm.append
    dadosForm.append("usuario", true);

    const resposta = await fetch(url, {
        method: "post",
        body: dadosForm
    });

    const resultado = await resposta.text();
    alert(resultado);
});

/**
 *      No código de exemplo, estou selecionando um elemento de 
 *      formulário HTML usando getElementById e armazenando a URL para 
 *      postar o formulário como uma variável. Neste caso, estou 
 *      postando o formulário para um servidor de desenvolvimento 
 *      local, conforme mostrado no exemplo a seguir. Em seguida, 
 *      adicionei um event listener ao formulário e impedi o 
 *      comportamento padrão de envio do formulário, para que eu possa, 
 *      em vez disso, executar uma solicitação POST JavaScript usando 
 *      fetch.
 * 
 *      O FormData do JavaScript fornece um meio para criar facilmente 
 *      pares de chave/valor de todos os dados do formulário. Isso 
 *      funciona com elementos de formulário baseados em texto, como 
 *      demonstrado no exemplo, bem como com uploads de arquivos. 
 * 
 *      Você também pode manipular os dados contidos no FormData com 
 *      alguns métodos úteis:
 * 
 *          FormData.append(key, value) ou FormData.append(key, blob, 
 *          filename: Acrescenta novos dados ao formulário
 * 
 *          FormData.delete(key): Exclui um campo
 * 
 *          FormData.set(key, value): Acrescenta novos dados, removendo 
 *                                    uma chave duplicada, se presente
 *
 *      Também é possível trabalhar com os valores do formulário, 
 *      usando os métodos get e has:
 * 
 *          FormData.get(key): Obtém o valor de uma chave específica
 *      
 *          FormData.has(key): Verifica um valor com uma chave 
 *                             fornecida e retorna um Boolean
 *  
 *      Embora FormData seja incrivelmente útil, ele não é o único tipo 
 *      de valor de um corpo POST. Os seguintes tipos podem ser 
 *      enviados em uma solicitação POST:
 * 
 *          • Uma string
 *          • Uma string codificada, como JSON ou XML
 *          • Um objeto URLSearchParams
 *          • Um Blob ou BufferSource de dados binários
*/
