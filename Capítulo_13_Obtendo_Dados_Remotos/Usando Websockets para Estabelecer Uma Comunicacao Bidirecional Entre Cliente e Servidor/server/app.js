"use strict";

/**
 *      Para o servidor, estou usando o módulo ws Node. Uma vez que o 
 *      servidor é criado, ele inicia a comunicação com o cliente   
 *      enviando por meio de um objeto JavaScript com dois membros: um 
 *      contador de números e uma string. O objeto deve primeiro ser 
 *      convertido em string. O código escuta tanto uma mensagem de 
 *      entrada quanto um evento de fechamento. Quando ele recebe uma
 *      mensagem de entrada, ele incrementa o contador e envia o objeto:
*/
var wsServer = require("ws").Server;
var wss = new wsServer({ port:8080 });
wss.on("connection", (function (conn) {
    // Objeto sendo passado para frente e para trás entre cliente e servidor
    var counter = {counter: 1, strng: ""};

    // Envia a primeira comunicação ao cliente
    conn.send(JSON.stringify(counter));

    // Em resposta de volta
    conn.on("message", function (message) {
        var ct = JSON.parse(message);
        ct.counter = parseInt(ct.counter) + 1;
        if (ct.counter < 100) {
            conn.send(JSON.stringify(ct));
        }
    });
}));
