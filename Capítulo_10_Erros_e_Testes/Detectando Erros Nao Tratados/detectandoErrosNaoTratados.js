"use strict";

/**
 *      Você quer capturar erros que não foram tratados em seu código,
 *      possivelmente para criar um log de diagnóstico.
 *
 *      Manipule o evento window.error. Sua função de manipulação de
 *      eventos recebe cinco parâmetros com informações de erro. Junto
 *      com um objeto de erro que representa o erro real , você também
 *      obtém um parâmetro de mensagem separado e informações de
 *      localização (fonte com a URL do arquivo de script, lineno com o
 *      número da linha onde o erro ocorreu, e colno com o número da
 *      coluna).
 *
 *      Aqui está um exemplo que testa este evento:
 */

// Anexar o manipulador de eventos
window.onerror = (messagem, url, linhaNo, colunaNo, erro) => {
    console.log(`Um erro não tratado ocorreu em ${url}`);
};

// Causa um erro não tratado
console.log(null.length);

/**
 *      Erros não tratados que ocorrem no thread principal do seu
 *      aplicativo sobem na pilha até atingirem o nível superior do seu
 *      código e — se não forem tratados lá — acionam o evento window.
 *      error no navegador.
 *
 *      Para código assíncrono, os erros são tratados de forma diferente.
 *      Para APIs mais antigas baseadas em callback, geralmente não há
 *      erros. Em vez disso, essas APIs usam callbacks para notificar seu
 *      código sobre condições de erro. Mas para APIs baseadas em
 *      promessa, erros não tratados surgem e acionarão o evento
 *      window.unhandledrejection:
 */

// Anexa o manipulador de eventos
window.onunhandledrejection = (e) => {
    console.log(e.reason);
};

// Crie uma promessa que causará um erro assíncrono não tratado
const promessaDefeituosa = new Promise(() => {
    throw new Error("Desastres acontecem!");
});

// Crie uma promessa que rejeite (também acione window.onunhandledrejection)
const promessaRejeitada = new Promise((resolve, reject) => {
    reject(new Error("Outro desastre acontece!"));
});

/**
 *      O evento unhandledrejection passa um único objeto com 
 *      propriedades de evento para seu manipulador de eventos. A 
 *      propriedade reason tem o objeto do erro não tratado, ou qualquer 
 *      objeto que foi passado para Promise.reject() se a promessa foi
 *      manualmente rejeitada. Você também pode obter o objeto Promise 
 *      subjacente da propriedade promise.
 * 
 *      Assim como window.error, window.unhandledrejection é um evento 
 *      cancelável. No entanto, ele usa uma convenção diferente e mais 
 *      moderna para cancelamento. Em vez de retornar true, você pode 
 *      usar o método preventDefault() do objeto com os argumentos do 
 *      evento. Aqui está um exemplo que mostra uma mensagem quando 
 *      ocorre um erro de promessa não tratada, mas oculta o registro 
 *      automático de erros:
*/
window.onunhandledrejection = (e) => {
    console.log("Um erro ocorreu, mas nos não iremos dizer qual foi.");

    // Cancela o manipulador de erro padrão
    e.preventDefault();
}
