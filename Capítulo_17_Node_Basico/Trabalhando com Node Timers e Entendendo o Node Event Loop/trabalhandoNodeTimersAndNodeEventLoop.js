"use strict";

/**
 *      Você precisa usar um timer em um aplicativo Node, mas não tem 
 *      certeza de qual dos três timers do Node usar, ou quão precisos 
 *      eles são.
 * 
 *      Se seu timer não precisa ser preciso, você pode usar 
 *      setTimeout() para criar um único evento de timer, ou 
 *      setInterval() se você quiser um timer recorrente:
*/
setTimeout(() => {}, 3000);

setInterval(() => {}, 3000);

/**
 *      Ambos os temporizadores de função podem ser cancelados:
*/
const timer1 = setTimeout(() => {}, 3000);
clearTimeout(timer1);

const timer2 = setInterval(() => {}, 3000);
clearInterval(timer2);

/**
 *      No entanto, se você precisar de um controle mais finito do seu 
 *      timer e resultados imediatos, você pode querer usar 
 *      setImmediate(). Você não especifica um atraso para ele, pois 
 *      você quer que o callback seja invocado imediatamente após todos 
 *      os callbacks de I/O serem processados, mas antes de qualquer
 *      callback setTimeout() ou setInterval():
*/
setImmediate(() => {

});

/**
 *      Ele também pode ser limpo com clearImmediate().
 * 
 *      Tanto setTimeout() quanto setInterval() disparam após o atraso 
 *      fornecido, mas o que acontece é uma mensagem para esse efeito é 
 *      adicionada ao loop de eventos, para ser processada por sua vez. 
 *      Então, se o loop de eventos estiver particularmente 
 *      desorganizado, há um atraso antes que os callbacks das funções 
 *      do timer sejam chamados.
 * 
 *      Na maioria das vezes, qualquer atraso que aconteça está além do 
 *      alcance dos nossos sentidos humanos, mas pode resultar em 
 *      animações que não parecem rodar suavemente. Também pode 
 *      adicionar um efeito estranho a outras aplicações.
 * 
 *      O próximo exemplo, cria uma linha do tempo de rolagem SVG, com 
 *      dados alimentados ao cliente via WebSockets. Para emular dados 
 *      do mundo real, usei um cronômetro de três segundos e 
 *      aleatoriamente gerei um número para atuar como um valor de 
 *      dados. No código do servidor, usei setInterval(), porque o 
 *      cronômetro é recorrente:
*/
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

/**
 *      A solução usa setInterval(), um dos três tipos diferentes de 
 *      timers do Node. A função setInterval() tem o mesmo formato que a 
 *      que usamos no navegador. Você especifica um retorno de chamada 
 *      para a primeira função, fornece um tempo de atraso (em 
 *      milissegundos) e quaisquer argumentos potenciais. O timer vai 
 *      disparar em três segundos, mas já sabemos que o retorno de 
 *      chamada para o timer pode não ser processado imediatamente.
 *  
 *      
*/
