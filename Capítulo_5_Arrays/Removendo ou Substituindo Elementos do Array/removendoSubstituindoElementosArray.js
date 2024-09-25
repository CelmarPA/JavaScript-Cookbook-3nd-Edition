"use strict";

/**
 *      Você quer encontrar ocorrências de um determinado valor em um 
 *      array e remover o elemento ou substituí-lo.
 * 
 *      Primeiro, encontre a localização do item que você quer remover 
 *      usando indexOf(). Então, você pode usar uma das duas abordagens. 
 *      
 *      Para trabalhos pequenos, a solução mais limpa é construir um novo 
 *      array em torno do item que você não quer. Você constrói o novo 
 *      array usando slice() e o operador spread:
*/
const animais = ["cachorro", "gato", "foca", "morsa", "leão", "gato"];

// Encontra onde o item "morsa" está
const indiceMorsa = animais.indexOf("morsa");

// Junte a porção antes de "morsa" com a porção após
const animaisSliced = [...animais.slice(0, indiceMorsa), ...animais.slice(indiceMorsa + 1)];

console.log(animaisSliced); // ['cachorro', 'gato', 'foca', 'leão', 'gato']

/**
 *      Uma abordagem alternativa é executar uma edição de array no 
 *      local, em vez de criar uma cópia alterada. Isso pode ter um 
 *      desempenho melhor para arrays grandes. No entanto, quanto mais 
 *      mutabilidade você permitir, mais complexo seu código se tornará, 
 *      o que pode torná-lo mais difícil de gerenciar e depurar no futuro.
 *      
 *      Para executar uma edição no local, você usa o método splice() com 
 *      nome similar, mas muito diferente. Ele permite que você remova 
 *      quantos itens quiser, começando de qualquer posição:
*/

// Começando em indeceMorsa, remove 1 elemento
animais.splice(indiceMorsa, 1);

console.log(animais); // ['cachorro', 'gato', 'foca', 'leão', 'gato']

/**
 *      Este é o único argumento que você precisa fornecer. Se você 
 *      deixar de fora os outros, todos os elementos do array do índice 
 *      até o final serão removidos:
*/
const animais2 = ["gato", "morsa", "leão", "gato"];

// Começa em "leão" e remover o resto dos elementos
animais2.splice(2);

console.log(animais2); // ['gato', 'morsa']

/**
 *      O segundo argumento opcional é o número de elementos a serem 
 *      removidos. O terceiro argumento é um conjunto opcional de 
 *      elementos de substituição a serem inseridos no mesmo local.
*/
const animais3 = ["gato", "morsa", "leão", "gato"];

// Remove um elemento e adiciona dois novos
animais3.splice(2, 1, "zebra", "elefante");

console.log(animais3); // ['gato', 'morsa', 'zebra', 'elefante', 'gato']

/**
 *      Você pode usar indexOf() em um loop para encontrar e remover uma 
 *      série de elementos correspondentes. Mas se esse for seu objetivo, 
 *      o método filter() geralmente fornece uma abordagem mais limpa, 
 *      permitindo que você defina uma função que seleciona os itens que 
 *      você deseja manter.
*/
