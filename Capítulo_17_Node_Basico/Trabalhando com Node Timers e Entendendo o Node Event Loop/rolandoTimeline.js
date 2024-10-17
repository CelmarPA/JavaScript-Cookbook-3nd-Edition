"use strict";
const app = require("http");
const fs = require("fs");
const ws = require("nodejs-websocket");

let server;

// Serve uma página estática
const manipulador = (req, res) => {
    fs.readFile(`${__dirname}/desenharLinha.html`, (err, dados) => {
        if (err) {
            res.writeHead(500);
            return res.end("Erro ao carregar desenharLinha.html");
        }
        res.writeHead(200);
        res.end(dados);
        return dados;
    });
};

// Inícia o servidor web, conexões a Porta 8124 seram manipuladas pelo manipulador
const httpServer = app.createServer(manipulador);
httpServer.listen(8124, () => {
    console.log("Servidor HTTP ouvindo na porta 8124");
})

// Temporizador de dados
const iniciarTimer = () => {
    setInterval(() => {
        const novoValor = Math.floor(Math.random() * 100) + 1;
        if (server.connections.length > 0) {
            console.log(`enviando ${novoValor}`);
            const counter = { counter: novoValor};
            server.connections.forEach(conexao => {
                conexao.sendText(JSON.stringify(counter), () => {
                    console.log("conexao enviada");
                });
            });
        }
    }, 3000);
};

// Crie um manipulador de conexão websocket em uma porta diferente
server = ws
    .createServer(conexao => {
        console.log("conectado");
        conexao.on("close", () => {
            console.log("Conexão fechada");
        });
    })
    .listen(8001, () => {
        console.log("Servidor WebSocket escutando na porta 8001");
        iniciarTimer();
    });
