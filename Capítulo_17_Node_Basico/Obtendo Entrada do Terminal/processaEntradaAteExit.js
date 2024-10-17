"use strict";
const readline = require("readline");

let soma = 0

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Digite números, um por linha, Digite 'exit' para encerrar.");

rl.setPrompt(">> ");
rl.prompt();

rl.on("line", input => {
    const entradaUsuario = input.trim();
    if (entradaUsuario === "exit") {
        rl.close();
        return;
    }

    soma += Number(entradaUsuario);
    rl.prompt();
});

// Usuário digita "exit"
rl.on("close", () => {
    console.log(`O total é ${soma}`);
    process.exit(0);
});

/**
 *      Executar a aplicação com vários números resulta na seguinte 
 *      saída:
 * 
 *          Digite números, um por linha, Digite 'exit' para encerrar.
 *          >> 55
 *          >> 209
 *          >> 23.44
 *          >> 0    
 *          >> 1
 *          >> 6
 *          >> exit
 *          O total é 294.44
*/
