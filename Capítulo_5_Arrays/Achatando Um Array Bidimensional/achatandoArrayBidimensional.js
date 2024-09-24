"use strict";

/**
 *      Você quer achatar um array bidimensional para que ele se torne 
 *      uma lista unidimensional.
 * 
 *      Use o método Array.flat():
*/
const arrayFrutas = [];

// Adiciona três elementos a arrayFrutas, cada elementol é um array de strings
arrayFrutas[0] = ["morango", "mirtilo", "framboesa"];
arrayFrutas[1] = ["lima", "limão", "laranja", "uva"];
arrayFrutas[2] = ["tangerina", "damasco", "pêssego", "ameixa"];

const listaFrutas = arrayFrutas.flat();

// Agora listaFrutas tem 11 elementos, e cada um é uma string
console.log(listaFrutas); // ['morango', 'mirtilo', 'framboesa', 'lima', 'limão', 'laranja', 'uva', 'tangerina', 'damasco', 'pêssego', 'ameixa']

/**
 *      Consider um array bidimensional como o apresentado anteriormente. 
 *      Cada elemento no arrayFrutas contém outro array. Por exemplo, 
 *      arrayFrutas[0] tem três strings, representando diferentes 
 *      fruitinhas. arrayFrutas[1] tem frutas cítricas, e arrayFrutas[2] 
 *      tem frutas de caroço. 
 * 
 *      Você pode transformar arrayFrutas com a ajuda do método concat(). 
 *      Comece com o primeiro array aninhado, chame concat() e passe os 
 *      outros arrays aninhados, assim:  
*/
const frutasLista = arrayFrutas[0].concat(arrayFrutas[1], arrayFrutas[2]);

console.log(frutasLista); // ['morango', 'mirtilo', 'framboesa', 'lima', 'limão', 'laranja', 'uva', 'tangerina', 'damasco', 'pêssego', 'ameixa']

/**
 *      Se o array tiver vários membros, essa abordagem é tediosa e 
 *      propensa a erros. Como alternativa, você pode usar um loop ou 
 *      recursão, mas essas abordagens podem ser igualmente tediosas. O 
 *      método flat() implementa a mesma lógica e concatena cada linha 
 *      para você.
 * 
 *      O método flat() recebe um argumento de profundidade opcional, com 
 *      um valor padrão de 1. Você pode aumentar esse número para achatar 
 *      arrays aninhados mais profundamente. Por exemplo, imagine que 
 *      você tem um array que contém arrays aninhadas, e esses array 
 *      contêm outra camada de arrays aninhados. Nesse caso, uma 
 *      profundidade de 2 concatenará ambas as camadas, colocando tudo em 
 *      uma única lista:
*/

// Um array com vários leveis de arrays aninhados dentro dele
const tridimensionalNumeros = [1, [2, [3, 4, 5], 6], 7];

// O achatamento padrão
const achatado2D = tridimensionalNumeros.flat(1);

console.log(achatado2D); // [ 1, 2, [ 3, 4, 5 ], 6, 7 ]

// Achatamento de nível 2
const achatado1D = tridimensionalNumeros.flat(2);

console.log(achatado1D); // [1, 2, 3, 4, 5, 6, 7]

// Achata todos os níveis, não importa quantos sejam
const achatadoTest = tridimensionalNumeros.flat(Infinity);

console.log(achatadoTest); // [1, 2, 3, 4, 5, 6, 7]

/**
 *      O argumento depth define o nível máximo de achatamento que é 
 *      usado, se necessário. Não há risco em aumentar a profundidade 
 *      além das dimensões reais do seu array.
*/
