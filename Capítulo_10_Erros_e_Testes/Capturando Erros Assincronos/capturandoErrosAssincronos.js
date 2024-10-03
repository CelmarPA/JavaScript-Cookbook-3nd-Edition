"use strict";

/**
 *      Você quer adicionar tratamento de erros, mas a operação arriscada 
 *      é executada em um thread em segundo plano.
 * 
 *      As APIs JavaScript têm mais de um modelo de assincronicidade, e a 
 *      maneira como você lida com erros depende da função que você está 
 *      usando.
 * 
 *      Se você estiver usando uma API mais antiga, pode ser necessário 
 *      fornecer uma função de retorno de chamada que será chamada em 
 *      caso de erro ou anexar um manipulador de eventos. O objeto 
 *      XMLHttpRequest fornece um evento de erro para notificá-lo sobre 
 *      solicitações com falha, por exemplo:
*/
const solicitacao = new XMLHttpRequest();

solicitacao.onerror = function tratamentoErro(erro) {
    console.log(erro);
}

solicitacao.open("GET", "http://noserver");
solicitacao.send();

/**
 *      Aqui, a chamada para send() dispara a operação assíncrona que 
 *      leva ao erro, mas o erro real ocorre em um thread separado. 
 *      Adicionar um bloco try...catch em torno desta instrução não 
 *      detectará o problema. O melhor que você pode fazer é receber uma 
 *      notificação por meio do evento de erro.
 * 
 *      Se você estiver usando uma API baseada em promessa, anexe sua 
 *      função de tratamento de erros chamando Promise.catch(). Aqui está 
 *      um exemplo com a API Fetch:
*/
fetch("http://noserver")
.then((resposta) => {
    console.log("Nós fizemos, fam.");
})
.catch((erro) => {
    console.log(erro);
});

/**
 *      O código que você escreve aqui será acionado no caso de um erro 
 *      não tratado ou uma promessa rejeitada. Se você não pegar um erro 
 *      que ocorre em uma promessa, ele irá borbulhar para o thread 
 *      principal do seu aplicativo e acionar o evento 
 *      window.unhandledrejection, que é o equivalente baseado em 
 *      promessa para o evento window.error.
 * 
 *      Por fim, se você estiver usando promessas com o modelo async e 
 *      await de nível superior, você pode usar um bloco de tratamento de 
 *      erros tradicional. A seção catch será anexada à promessa 
 *      automaticamente com Promise.catch(). Aqui está um exemplo:
*/
async function facaTrabalho() {
    try {
        const resposta = await fetch("http://noserver");
    } catch (erro) {
        console.log(erro);
    }
}

facaTrabalho().then(() => {
    console.log("Tudo feito.");
});
