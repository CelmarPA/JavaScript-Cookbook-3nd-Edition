"use strict";

/**
 *      Você deseja fazer uma solicitação a um servidor remoto dentro 
 *      do seu aplicativo Node.
 * 
 *      Use node-fetch, um dos módulos mais populares e amplamente 
 *      usados, que traz o window.fetch do navegador para o Node. Ele é 
 *      instalado com npm:
 * 
 *          $ npm install node-fetch
 * 
 *      e pode ser usado tão simplesmente como:
*/
const fetch = require("node-fetch");

fetch("https://google.com")
    .then(res => res.text())
    .then(body => console.log(body));

/**
 *      node-fetch fornece uma API que espelha de perto o window.fetch 
 *      do navegador, permitindo que nossos programas Node acessem 
 *      recursos remotos. Como window.fetch, ele oferece suporte para 
 *      os métodos HTTP de GET, POST, DELETE e PUT. No caso de GET, se 
 *      a resposta indicar sucesso (um código de status de 200), você 
 *      pode então processar os dados retornados (formatados como HTML 
 *      neste caso) como quiser.
 * 
 *      Você pode fazer uma solicitação para um recurso JSON: 
*/
fetch("http://swapi.dev/api/people/1")
    .then(res => res.json())
    .then(json => console.log(json));

/**
 *      Também é possível usar a sintaxe async/await, incluindo um  
 *      bloco try/catch para tratamento de erros:
*/
(async () => {
    try {
        const response = await fetch("https://swapi.dev/api/people/3");
        const json = await response.json();
        console.log(json);
    } catch (erro) {
        console.log(erro);
    }
})();

/**
 *      Você também pode transmitir um resultado para um arquivo usando 
 *      o módulo filesystem:
*/
const fs = require("fs");

fetch("https://example.com/image.png")
    .then(res => {
        const dest = fs.createWriteStream("imge.png");
        res.body.pipe(dest);
    });

/**
 *      node-fetch também pode manipular métodos POST, DELETE e PUT, 
 *      permitindo que você envie dados para um servidor. No exemplo a 
 *      seguir, fazemos uma solicitação POST:
*/
const body = {
    id: 1,
    titule: "Exemplo"
};

fetch("https://exemplo.com/post", {
    method: "post",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
    })
    .then(res => res.json())
    .then(json => console.log(json));
