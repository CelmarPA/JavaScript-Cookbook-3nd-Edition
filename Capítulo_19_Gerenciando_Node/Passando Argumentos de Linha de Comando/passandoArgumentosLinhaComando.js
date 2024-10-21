"use strict";

/**
 *      Você gostaria de poder passar argumentos de linha de comando e 
 *      ler seus valores dentro do seu aplicação Node.
 * 
 *      Para casos de uso simples, utilize a propriedade process.argv, 
 *      que retorna um array contendo quaisquer argumentos de linha de 
 *      comando passados ​​ao programa quando ele é executado. Como 
 *      esses valores são um array, podemos iterar sobre eles para ler 
 *      (ou neste exemplo, imprimir) seus valores:
*/
process.argv.forEach((valor, index) => {
    console.log(`${index}: ${valor}`);
});

/**
 *      Agora, se eu executar meu script, posso passar argumentos de 
 *      linha de comando, que serão impressos no console:
 * 
 *          $ node index.js --nome=Pedro --comida=pizza
 * 
 *      Que imprimirá o seguinte:
 * 
 *          0: /usr/local/bin/node
 *          1: /Users/ascott/Projects/command-line-args/index.js
 *          2: --nome=Pedro
 *          3: --comida=pizza
 * 
 *      O processo do Node é um objeto global que permite que um script 
 *      acesse informações sobre o processo atual do Node.js. A 
 *      propriedade argv ou o objeto do processo contém os valores
 *      dos argumentos. O primeiro índice é sempre o caminho para o 
 *      executável do Node do ambiente, o segundo valor do array é 
 *      sempre o caminho para o script em si, e os itens restantes são 
 *      os argumentos na ordem em que foram passados ​​para o script.
 * 
 *      Acessar argumentos diretamente do objeto de processo do Node 
 *      fornece uma maneira direta de recuperar propriedades de linha 
 *      de comando. No entanto, analisar e usar esses valores pode ser 
 *      complicado. Felizmente, utilizar o módulo popular Yargs torna o 
 *      trabalho com argumentos de linha de comando uma tarefa mais 
 *      simplificada:
*/
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const { argv } = yargs(hideBin(process.argv));

console.log(argv);

/**
 *      Agora, se eu executar meu script novamente, passando argumentos 
 *      de linha de comando, os valores serão impressos no console:
 * 
 *          $ node index.js --name=Pedro --comida=pizza
 * 
 *      # Registra o seguinte:
 *          
 *     { _: [], nome: 'Pedro', comida: 'pizza', '$0': 'yargs/index.js' }
 * 
 *      Ao usar o módulo Yargs, você pode facilmente ler valores
 *      específicos e agir sobre eles em seu script:
*/
if (argv.comida === "pizza") {
    console.log("mmm");
}
