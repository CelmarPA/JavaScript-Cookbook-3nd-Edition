"use strict";

/**
 *      Você quer obter informações do usuário do aplicativo por meio do 
 *      terminal.
 *      
 *      Use o módulo Readline do Node. Para obter dados da entrada 
 *      padrão, use um código como o seguinte:
*/
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Qual é o seu nome? ", answer => {
    console.log(`Ola meu nome é ${answer}!`);
    rl.close();
});

/**
 *      O módulo Readline fornece a capacidade de obter linhas de texto 
 *      de um fluxo legível. Você começa criando uma instância da 
 *      interface Readline com createInterface() passando, no mínimo, os 
 *      fluxos legíveis e graváveis. Você precisa de ambos, porque você 
 *      está escrevendo prompts, bem como lendo texto. Na solução, o 
 *      fluxo de entrada é process.stdin, o fluxo de entrada padrão, e o 
 *      fluxo de saída é process.stdout. Em outras palavras, a entrada e 
 *      a saída são de, e para, a linha de comando.
 * 
 *      A solução usa a função question() para postar uma pergunta e 
 *      fornece uma função de retorno de chamada para processar a 
 *      resposta. Dentro da função, close() é chamado, o que fecha a 
 *      interface, liberando o controle dos fluxos de entrada e saída.
 * 
 *      Você também pode criar um aplicativo que continua a ouvir a 
 *      entrada, tomando alguma ação nos dados recebidos, até que algo 
 *      sinalize o aplicativo para terminar. Normalmente esse algo é uma 
 *      sequência de letras sinalizando que a pessoa terminou, como a 
 *      palavra exit. Esse tipo de aplicativo faz uso de outras funções 
 *      Readline, como setPrompt() para alterar o prompt fornecido ao 
 *      indivíduo para cada linha de texto; prompt(), que prepara a área 
 *      de entrada, incluindo a alteração do prompt para aquele definido 
 *      por setPrompt(); e write(), para escrever um prompt. Além disso, 
 *      você também precisará usar manipuladores de eventos para 
 *      processar eventos, como line, que escuta cada nova linha de 
 *      texto.
 * 
 *      O próximo exemplo contém uma aplicação Node completa que 
 *      continua a processar a entrada do usuário até que ele digite 
 *      exit. Observe que o aplicativo faz uso de process.exit(). Esta 
 *      função encerra o aplicativo Node de forma limpa.
*/