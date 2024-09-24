"use strict";

/**
 *      Você quer copiar uma parte de um array e manter o array original 
 *      intacto.
 * 
 *      Use o método Array.slice(), que faz uma cópia superficial de uma 
 *      parte de um array existente e retorna isso como um novo array:
*/
const animais = ["elefante", "tigre", "leão", "zebra", "gato", "cachorro", "coelho", "ganso"];

// Obter o pedaço do índice 4 ao índice 7.
const domestico = animais.slice(4, 7);

console.log(domestico); // [ 'gato', 'cachorro', 'coelho' ]

/**
 *      O método slice() recebe dois parâmetros, indicando uma posição 
 *      inicial e final. Você pode omitir o segundo parâmetro para ir do 
 *      índice inicial até o final do array. Chamar slice(0) em um array 
 *      copia o array inteiro.
 * 
 *      Por exemplo, este código usa slice para obter duas subseções do 
 *      primeiro array e usá-las para construir um novo array:
*/
const primeiraMetade = animais.slice(0, 3);
const segundaMetade = animais.slice(4, 7);

// Coloca dois novos animais no meio
const animaisExtras = [...primeiraMetade, "ema", "ornitorrinco", ...segundaMetade]; 

console.log(animaisExtras); // ["elefante", "tigre", "leão", "ema", "ornitorrinco", gato", "cachorro", "coelho"];

/**
 *      Isso pode parecer um exemplo arbitrário, porque os números de 
 *      índice são codificados. Mas você pode combiná-lo com pesquisas de 
 *      array e o método findIndex() para encontrar o lugar onde você 
 *      deve dividir um array.
 * 
 *      O método slice() é facilmente confundido com o método splice(), 
 *      que é usado para substituir ou excluir partes de um array. Ao 
 *      contrário de slice(), o método splice() faz alterações no local 
 *      que afetam o array original. Na prática moderna, é considerado 
 *      melhor bloquear seus objetos, mantê-los imutáveis ​​quando 
 *      possível (daí o uso de const) e criar uma nova cópia com as 
 *      alterações. Então, fique com slice() a menos que você tenha um 
 *      forte motivo para usar splice() (por exemplo, há uma diferença no 
 *      desempenho que é significativa em seu caso de uso).
*/
