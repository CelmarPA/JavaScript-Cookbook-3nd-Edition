"use strict";

/**
 *      Você deseja iniciar uma comunicação bidirecional em tempo real 
 *      entre um servidor e um cliente de página da web.
 * 
 *      WebSockets permite que você suporte comunicação bidirecional 
 *      entre o cliente e o servidor. O cliente cria um novo objeto 
 *      WebSockets, passando o URL para o servidor WebSockets. Observe 
 *      que o protocolo ws: é usado no lugar de http ou https. Quando o 
 *      cliente recebe uma mensagem, ele converte o texto da mensagem 
 *      em um objeto, recupera o contador de números, o incrementa e, 
 *      em seguida, o usa no membro string do objeto.
 * 
 *      No exemplo a seguir, o cliente imprime números alternados, 
 *      começando com 2. O estado é mantido entre o cliente e o 
 *      servidor passando a string a ser impressa dentro da mensagem:
*/
const socket = new WebSocket("ws://localhost:8080");
socket.onmessage = evento => {
    const msg = JSON.parse(evento.data);
    msg.counter = Number(msg.counter) + 1;
    msg.strng += `${msg.counter}-`;
    
    const html = `<p> ${msg.strng} </p>`;
    document.getElementById("saida").innerHTML = html;
    socket.send(JSON.stringify(msg));
};
/**
 *      Comunicação bidirecional, também conhecida como comunicação 
 *      full-duplex, é uma comunicação bidirecional que pode ocorrer ao 
 *      mesmo tempo. Pense nisso como uma estrada de mão dupla, com 
 *      tráfego indo em ambas as direções. Todos os navegadores 
 *      modernos suportam a especificação WebSockets, e como você pode 
 *      ver, é extremamente fácil de usar.
 * 
 *      WebSockets suporta dados binários, assim como texto. E como os 
 *      exemplos demonstraram, você pode transmitir JSON chamando JSON.
 *      stringify() no objeto antes de enviar, e JSON.parse() na string 
 *      na extremidade receptora.
*/
