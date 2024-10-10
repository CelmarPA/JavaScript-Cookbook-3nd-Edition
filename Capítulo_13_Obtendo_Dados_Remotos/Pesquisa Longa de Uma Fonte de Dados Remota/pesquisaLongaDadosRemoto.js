"use strict";

/**
 *      Você gostaria de manter uma conexão aberta com um servidor para
 *      que o cliente seja imediatamente atualizado com novas
 *      informações, mas o servidor não usa WebSockets.
 *
 *      Use long polling, uma técnica onde o cliente mantém uma conexão
 *      com o servidor usando uma função de busca assíncrona que chama
 *      a si mesma após uma resposta. Em seu estado mais básico, long
 *      polling do lado do cliente se parece com isto:
 */
const url = "http://localhost:8080/";

async function longPoll1() {
    const resposta = await fetch(url);

    // Se a mensagem for recebida, registre a resposta no console e chame a função de pesquisa
    const mensagem = await resposta.text();
    console.log(mensagem);

    await longPoll();
}

/**
 *      Isso pode ser melhorado adicionando algum tratamento de erro,
 *      que quando um erro for recebido, espere um período de tempo
 *      especificado e então tente consultar o servidor:
 */
async function longPoll() {
    try {
        // Se a mensagem for recebida, registre a resposta no console e chame a função de pesquisa
        const resposta = await fetch(url);
        const mensagem = await resposta.text();
        console.log(mensagem);

        await longPoll();
    } catch (erro) {
        // Se fetch retornar um erro, espere 1 segundo e tente novamente
        console.log(`Solicitação falhou ${erro}`);
        await new Promise(resolve => setTimeout(resolve, 1000));
        await longPoll();
    }
}

longPoll();

/**
 *      Long polling em um servidor envolve fazer uma solicitação e 
 *      manter uma conexão com esse servidor até que uma resposta seja 
 *      enviada. Uma vez que o cliente recebe a resposta, ele 
 *      imediatamente se reconecta ao servidor e aguarda uma nova 
 *      resposta. O processo pode ser dividido desta forma:
 * 
 *          1. O cliente envia uma solicitação ao servidor.
 *          2. O cliente permanece conectado ao servidor enquanto 
 *             aguarda uma resposta.
 *          3. O servidor envia uma resposta ao cliente.
 *          4. O cliente se reconecta ao servidor e o processo se 
 *             repete.
*/