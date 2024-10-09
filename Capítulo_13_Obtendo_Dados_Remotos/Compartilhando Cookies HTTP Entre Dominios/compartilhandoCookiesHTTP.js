"use strict";

/**
 *      Você deseja acessar um recurso de outro domínio como uma 
 *      solicitação credenciada, incluindo cookies HTTP e quaisquer 
 *      informações de autenticação.
 * 
 *      Alterações precisam ser feitas nos aplicativos cliente e 
 *      servidor para suportar solicitações credenciadas. No exemplo a 
 *      seguir, o aplicativo cliente é atendido em algumdominio.com 
 *      enquanto o servidor está em api.exemplo.com. Como esses são
 *      domínios diferentes, por padrão, as solicitações credenciadas 
 *      não seriam compartilhadas do cliente para o servidor.
 * 
 *      No cliente, temos que testar a propriedade credentials na 
 *      solicitação fetch:
*/
fetch("http://api.exemplo.com", {
    credentials: "include"
});

/**
 *      No servidor, o valor do cabeçalho Access-Control-Allow-Controls 
 *      deve ser definido como true:
*/
const http = require("http");
const Cookies = require("cookies");

const server = http.createServer((req, res) => {
    // Set CORS headers
    res.setHeader("Content-type", "text/plain");
    res.setHeader("Access-Control-Allow-Origin", "https://algumdominio.com");
    res.setHeader("Access-Control-Allow-Credentials", true);

    const cookies = new Cookies (req, res);
    cookies.set("apple", "red");

    res.writeHead(200);
    res.end("Olá domínio cruzado")
});

server.listen(8080);

/**
 *      Compartilhar informações entre domínios é chamado de 
 *      Cross-Origin Resource Sharing ou CORS. Por motivos de 
 *      segurança, os navegadores restringem informações compartilhadas 
 *      entre domínios, como cookies e cabeçalhos de credenciais. Ser 
 *      capaz de enviar cookies HTTP ou enviar cabeçalhos de 
 *      autenticação entre domínios é possível configurando a extensão 
 *      CORS, desde que tanto o cliente quanto o servidor sinalizem 
 *      acordo.
 * 
 *      Se estiver usando XMLHttpRequest no cliente no lugar de fetch, 
 *      defina a propriedade withCredentials:
*/
const solicitacao = new XMLHttpRequest();

solicitacao.onreadystatechange = function() {
    if (this.readyState == 4) {
        console.log(this.status);
        if (this.status == 200) {
            document.getElementById("resultado").innerHTML = this.responseText;
        }
    }
};
solicitacao.open("GET", "http://localhost:8080/");
solicitacao.withCredentials = true;
solicitacao.send(null);
