"use strict";

/**
 *      Você quer criar um aplicativo Node que possa responder a uma 
 *      solicitação muito básica do navegador.
 * 
 *      Use o servidor HTTP Node integrado para responder às 
 *      solicitações:
*/

// Carrega o módulo http
const http = require("http");

// Cria o servidor http
http
    .createServer((req, res) => {
        // Conteúdo do header
        res.writeHead(200, { "content-type": "text/plain "});

        // Escreva a mensagem e sinalize que a comunicação está completa
        res.end("Hello world!")
    })
    .listen(8124);

console.log("Servidor rodando na porta 8124");

/**
 *      Começando do topo, a primeira linha da solução carrega o módulo 
 *      http usando a função require() do Node. Isso instrui o sistema 
 *      modular do Node a carregar um recurso de biblioteca específico 
 *      para uso no aplicativo. O módulo http é um dos muitos que vêm, 
 *      por padrão, com uma instalação do Node.
 * 
 *      Em seguida, um servidor HTTP é criado usando 
 *      http.createServer(), passando uma função anônima, conhecida como 
 *      RequestListener com dois parâmetros. O Node anexa essa função 
 *      como um manipulador de eventos para cada solicitação do 
 *      servidor. Os dois parâmetros são solicitação e resposta. A 
 *      solicitação é uma instância do objeto http.IncomingMessage e a 
 *      resposta é uma instância do objeto http.ServerResponse.
 * 
 *      O http.ServerResponse é usado para responder à solicitação da 
 *      web. O objeto http.Incoming Message contém informações sobre a 
 *      solicitação, como a URL da solicitação. Se você precisar obter 
 *      informações específicas da URL (por exemplo, parâmetros de 
 *      string de consulta), você pode usar o módulo utilitário Node url 
 *      para analisar a string.
*/
