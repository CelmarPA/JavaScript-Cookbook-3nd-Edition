"use strict";

/**
 *      Você quer executar facilmente trechos de código do Node baseados 
 *      em servidor.
 * 
 *      Use o REPL (Read-Evalute-Print-Loop) do Node, uma versão 
 *      interativa de linha de comando do Node que pode executar 
 *      qualquer trecho de código.
 * 
 *      Para usar o REPL, digite node na linha de comando sem 
 *      especificar um aplicativo para executar:
 * 
 *          $ node
 * 
 *      Você pode então especificar JavaScript em um estilo de edição de 
 *      linha simplificado. Você pode importar bibliotecas, criar 
 *      funções — tudo o que você pode fazer dentro de um aplicativo 
 *      estático. A principal diferença é que cada linha de código é 
 *      interpretada instantaneamente:
 * 
 *          > const add = (x, y) => { return x + y };
 *          undefined
 *          add(2, 2);
 *          4
 * 
 *      Quando terminar, saia do programa com .exit:
 * 
 *          .exit
 * 
 *      O REPL pode ser iniciado de forma independente ou dentro de 
 *      outro aplicativo se você quiser definir certos recursos. Você 
 *      digita o JavaScript como se estivesse digitando o script em um 
 *      arquivo de texto. A principal diferença comportamental é que 
 *      você pode ver um resultado após digitar em cada linha, como o 
 *      undefined que aparece no REPL em tempo de execução. 
 *      
 *      Mas você pode importar módulos:
 *          > const fs = require('fs');
 * 
 *      E você pode acessar os objetos globais, o que fizemos quando 
 *      usamos require(). O undefined que aparece depois de digitar 
 *      algum código é o valor de retorno para a execução da linha de 
 *      código anterior. Definir uma nova variável e criar uma função 
 *      são alguns dos JavaScript que retornam undefined, o que pode se 
 *      tornar irritante rapidamente. Para eliminar esse comportamento, 
 *      bem como fazer algumas outras modificações, você pode usar a 
 *      função REPL.start() dentro de um pequeno aplicativo Node que 
 *      dispara REPL (mas com as opções que você especificar).
 * 
 *      As opções que você pode usar são:
 * 
 *          prompt: Altera o prompt que mostra (o padrão é >)
 * 
 *          input: Altera o fluxo legível de entrada (o padrão é 
 *                 process.stdin, que é o padrão input)
 * 
 *          output: Altera o fluxo gravável de saída (o padrão é 
 *                  process.stdout, o padrão output)
 * 
 *          terminal: Definido como verdadeiro se o fluxo deve ser 
 *                    tratado como um TTY e ter códigos de escape ANSI/
 *                    VT100 escritos
 * 
 *          eval: Função usada para substituir a função assíncrona 
 *                eval() usada para avaliar o JavaScript
 * 
 *          useColors: Definido como true para definir as cores de saída 
 *                     para a função writer (o padrão é baseado nos 
 *                     valores padrão do terminal)
 * 
 *          useGlobal: Definido como true para usar o objeto global, em 
 *                     vez de executar scripts em um contexto
 *      
 *          ignoreUndefined: Definido como true para eliminar os valores 
 *                           de retorno undefined
 * 
 *          writer: A função que retorna o resultado formatado do código 
 *                  avaliado para a exibição (o padrão é a função 
 *                  util.inspect)
 * 
 *      O seguinte é um exemplo de aplicativo que inicia o REPL com um 
 *      novo prompt, ignorando os valores indefinidos e usando cores:
*/
const repl = require("repl");

const opcoes = {
    prompt: "-> ",
    useColors: true,
    ignoreUndefined: true
};

repl.start(opcoes);

/**
 *      As opções que queremos são definidas no objeto opcoes e então 
 *      passadas como parâmetros para repl.start(). Quando executamos o 
 *      aplicativo, o REPL é iniciado, mas não precisamos mais lidar com 
 *      valores indefinidos:
 * 
 *          -> const add = (x, y) => { return x + y };
 *          -> add(2, 2);
 *          4
 * 
 *      Extra: Espere um segundo, qual objeto global?
 * 
 *      Uma diferença entre JavaScript no Node e JavaScript no navegador 
 *      é o escopo global. Tradicionalmente em um navegador, quando você 
 *      cria uma variável fora de uma função, usando var, ela pertence 
 *      ao objeto global de nível superior, que conhecemos como window:
 * 
 *          var teste = "Isso é um teste";
 *          console.log(window.teste); // "Isso é um teste"
 * 
 *      Da mesma forma, ao usar let ou const no navegador, as variáveis ​
 *      ​têm escopo global, embora não sejam anexadas ao objeto window.
 * 
 *      No Node, cada módulo opera dentro de seu próprio contexto 
 *      separado, então os módulos podem declarar as mesmas variáveis, e 
 *      elas não entrarão em conflito se forem todas usadas no mesmo 
 *      aplicativo.
 * 
 *      No entanto, há objetos acessíveis a partir do objeto global do 
 *      Node. Usamos alguns em exemplos anteriores, incluindo console, o 
 *      objeto Buffer e require(). Outros incluem alguns velhos amigos 
 *      muito familiares: setTimeout(), clearTimeout(), setInterval() e 
 *      clearInterval().
*/
