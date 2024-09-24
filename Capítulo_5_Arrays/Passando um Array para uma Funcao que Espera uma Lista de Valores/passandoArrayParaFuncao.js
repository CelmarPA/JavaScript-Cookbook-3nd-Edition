"use strict";

/**
 *      Seu array tem uma lista de valores que você quer passar para uma 
 *      função. Mas a função espera uma lista de valores de argumento, 
 *      não um objeto array.
 * 
 *      Use o operador spread para expandir seu array. Aqui está um 
 *      exemplo com o método Math.max():
*/
const numeros = [2, 42, 5, 304, 1, 13];

// Essa sintax não é permitida. O resultado será NaN.
const maiorFalha = Math.max(numeros);
console.log(maiorFalha); // NaN

const maior = Math.max(...numeros);
console.log(maior); // 304

/**
 *      O operador spread desdobra um array em uma lista de elementos. 
 *      Tecnicamente, ele funciona com qualquer objeto iterável, 
 *      incluindo outros tipos de coleções.
 * 
 *      O operador spread não precisa fornecer todos os argumentos para 
 *      uma função, ou mesmo os argumentos finais. É perfeitamente válido 
 *      usá-lo assim:
*/

// Chama max() no array de valores, com mais 3 argumentos
const maximo = Math.max(24, ...numeros, 96, 7);
console.log(maximo); // 304

/**
 *      Você provavelmente não quer usar essa abordagem se a ordem dos 
 *      seus argumentos tiver qualquer significado. É muito fácil acabar 
 *      com um array que é um pouco maior ou menor do que você pensou, o 
 *      que então deslocará seus outros argumentos para novas posições e 
 *      mudará seu significado.
*/
