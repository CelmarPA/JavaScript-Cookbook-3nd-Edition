"use strict";

// Carrega o módulo http
const http  = require("http");
const url = require("url");

// Cria server http
http
    .createServer((req, res) => {
        // Obtém string de consulta e parâmetros
        const { query } = url.parse(req.url, true);

        // Conteúdo do header
        res.writeHead(200, { "content-type": "text/plain" });

        // Escreve mensagem e sinaliza que a comunicação foi concluída
        const nome = query.first ? query.first : "World";

        // Escreve mensagem e sinaliza que a comunicação foi concluída
        res.end(`Hello ${nome}!`);
    })
    .listen(8124);

console.log("Server rodando na porta 8124");

/**
 *      Uma URL como a seguinte:
 * 
 *          http://localhost:8124/?first=Leitor
 * 
 *      resulta em uma página da web que diz “Olá, Leitor!”
 * 
 *      No código, o objeto do módulo url tem um método parse() que 
 *      analisa a URL, retornando vários componentes dela (href, 
 *      protocol, host, etc.). Se você passar true como o segundo 
 *      argumento, a string também é analisada por outro módulo, 
 *      querystring, que retorna a string de consulta como um objeto com 
 *      cada parâmetro como uma propriedade do objeto, em vez de apenas 
 *      retornar uma string.
 * 
 *      Tanto na solução quanto no exemplo, uma mensagem de texto é 
 *      retornada como saída de página, usando o método 
 *      http.ServerResponse end(). Eu também poderia ter escrito a 
 *      mensagem usando write() e, então, chamado end(): 
 * 
 *          res.write(`Hello, ${name}!`);
 *          res.end();
*/