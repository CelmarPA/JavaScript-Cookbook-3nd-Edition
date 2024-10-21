"use strict";

/**
 *      Você deseja acessar um utilitário de linha de comando, como o 
 *      ImageMagick, de dentro de um aplicativo Node.
 * 
 *      Use o módulo child_process do Node. Por exemplo, se você quiser 
 *      usar o identify do ImageMagick e então imprimir os dados no 
 *      console, use o seguinte:
*/
const { spawn } = require("child_process");

const identify = spawn("identify", ["-verbose", "osprey.jbg"]);

identify.stdout.on("data", dados => {
    console.log(`stdout: ${dados}`);
});

identify.stderr.on("data", dados => {
    console.log(`stderr: ${data}`);
});

identify.on("exit", codigo => {
    console.log(`child process saiu com código ${codigo}`);
});

/**
 *    O módulo child_process fornece quatro métodos para executar 
 *    operações de linha de comando e processar dados retornados:
 * 
 *      spawn(command, [args], [options]): Isso inicia um processo 
 *                                         fornecido, com argumentos de 
 *                                         linha de comando opcionais e 
 *                                         um objeto options 
 *                                         especificando informações 
 *                                         adicionais, como cwd para 
 *                                         alterar o diretório e uid 
 *                                         para encontrar o ID do 
 *                                         usuário do processo.
 * 
 *      exec(command, [options], callback): Isso executa um comando em 
 *                                          um shell e armazena o 
 *                                          resultado em buffer.
 * 
 *      execFile(file, [args],[options],[callback]): Isso é como 
 *                                                   exec(), mas 
 *                                                   executa o arquivo 
 *                                                   diretamente.
 * 
 *      fork(modulePath, [args],[options]): Este é um caso especial de 
 *                                          spawn() e gera processos 
 *                                          Node, retornando um objeto
 *                                          que tem um canal de 
 *                                          comunicação integrado. Ele 
 *                                          também requer uma instância 
 *                                          separada do V8 com cada 
 *                                          uso, então use com 
 *                                          moderação.
 * 
 *    Os métodos child_process têm três fluxos associados a eles: stdin,
 *    stdout e stderr. O método spawn() é o mais amplamente usado dos 
 *    métodos child_process e o usado na solução. Do topo da solução, o 
 *    comando dado é o aplicativo de linha de comando ImageMagick 
 *    identify, que pode retornar uma riqueza de informações sobre uma 
 *    imagem. Na matriz args, o código passa o sinalizador --verbose e 
 *    o nome do arquivo de imagem. Quando o evento de dados acontece 
 *    com o fluxo child_process.stdout, o aplicativo o imprime no 
 *    console. Os dados são um buffer que usa toString() implicitamente 
 *    quando concatenado com outra string. Se um erro acontecer, ele 
 *    também será impresso no console. Um terceiro manipulador de 
 *    eventos apenas comunica que o processo filho está saindo.
 *    
 *    Se você quiser processar o resultado como um array, modifique o 
 *    manipulador de eventos de entrada:
*/
identify.stdout.on("data", (dados) => {
    console.log(data.toString().split("\n"));
});
