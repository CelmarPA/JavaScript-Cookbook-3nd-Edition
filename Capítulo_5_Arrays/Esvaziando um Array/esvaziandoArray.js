"use strict";

/**
 *      Você precisa eliminar todos os elementos de um array, seja para 
 *      recuperar memória ou para que seu array possa ser reutilizado.
 * 
 *      Defina a propriedade length do seu array para 0:
*/
const numeros = [2, 42 , 5, 304, 1, 13];
numeros.length = 0;
  
console.log(numeros); // []

/**
 *      Uma das maneiras mais fáceis de criar um novo array é 
 *      simplesmente atribuir um novo array em branco, como este:
*/
let meuArray = [];

/**
 *      No entanto, essa abordagem tem algumas limitações. Primeiro, 
 *      porque cria um novo objeto array, não funciona se você definiu 
 *      seu array com a palavra-chave const. Este é um pequeno detalhe, 
 *      mas a prática moderna favorece o uso de const em vez de let para 
 *      estreitar as possibilidades de bugs em seu código. Segundo, essa 
 *      atribuição não destrói o array. Se você tiver outra variável 
 *      apontando para seu array, ela permanecerá ativa e permanecerá na 
 *      memória.
 * 
 *      Uma solução alternativa é chamar o método Array.pop() 
 *      repetidamente. Cada vez que você chama pop(), você remove o 
 *      último item do array, então você pode esvaziar um array com um 
 *      loop que continua chamando pop() até que o array esteja vazio. No 
 *      entanto, o truque de configuração do length tem exatamente o 
 *      mesmo efeito e requer apenas uma única instrução. Os 
 *      desenvolvedores às vezes ignoram essa técnica, porque esperam que 
 *      que length seja uma propriedade somente leitura (como é em muitas 
 *      outras linguagens). Mas definir o length em um array 
 *      JavaScript permite que você reduza seu tamanho e descarte os 
 *      itens restantes.
 * 
 *      Existem outras maneiras interessantes de usar a propriedade 
 *      length. Por exemplo, você pode cortar apenas parte de um array 
 *      reduzindo o length, mas não todo o caminho até 0. Ou, você pode 
 *      adicionar itens em branco ao final de um array aumentando o 
 *      length:
*/
const arrayNumeros = [2, 42, 5, 304, 1, 13];
arrayNumeros.length = 3;

console.log(arrayNumeros); // [2, 42, 5]

arrayNumeros.length = 5;

console.log(arrayNumeros); // [2, 42, 5, <2 empty items>]
