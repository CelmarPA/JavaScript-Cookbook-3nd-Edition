"use strict";

/**
 *      Extra: Usando Processos Child com Windows
 *      
 *      A solução demonstra como usar processos filhos em um ambiente 
 *      macOS ou Linux. Há semelhanças e diferenças entre usar 
 *      processos filhos no Linux/Unix e usá-los no Windows.
 *      No Windows, você não pode dar explicitamente um comando com um 
 *      processo filho; você tem que invocar o executável cmd.exe do 
 *      Windows e fazer com que ele execute o processo. Além disso, o 
 *      primeiro sinalizador para o comando é /c, que diz ao cmd.exe 
 *      para processar o comando e então encerrar.
 * 
 *      No seguinte código, o comando cmd.exe é usado para obter uma 
 *      listagem de diretório, usando o comando dir do Windows:
*/
const { spawn } = require("child_process");

const cmd = spawn("cmd", ["/c", "dir\n"]);

cmd.stdout.on("data", dados => {
    console.log(`stdout: ${dados}`);
});

cmd.stderr.on("data", dados => {
    console.log(`stderr: ${dados}`);
});

cmd.on("exit", codigo => {
    console.log(`processo child saiu com código ${codigo}`);
});
