"use strict";

/**
 *      Você quer unir dois arrays inteiros em um novo array.
 * 
 *      Existem duas abordagens comumente usadas para combinar dois 
 *      arrays. A abordagem honrada pelo tempo (e provavelmente a opção 
 *      de melhor desempenho) é usar o método Array.concat(). Você chama 
 *      concat() no primeiro array, passando o segundo array como um
 *      argumento. O resultado é um terceiro array que contém todos os 
 *      elementos de ambos:
*/
const pares = [2, 4, 6, 8];
const impares = [1, 3, 5, 7, 9];

const paresImpares = pares.concat(impares);

console.log(paresImpares); // [2, 4, 6, 8, 1, 3, 5, 7, 9]

/**
 *      O array resultante tem os itens do primeiro array primeiro 
 *      (pares, neste exemplo), seguidos pelos itens do segundo array 
 *      (ímpares). Claro, você pode seguir seu concat() com uma chamada 
 *      para o método Array.sort().
 * 
 *      Uma abordagem alternativa é usar o operador de spread:
*/
const paresImpares2 = [...pares, ...impares];

console.log(paresImpares2); // [2, 4, 6, 8, 1, 3, 5, 7, 9]

/**
 *      A vantagem dessa abordagem é que o código é (indiscutivelmente) 
 *      mais intuitivo e fácil de ler. O operador spread também é uma 
 *      ótima ferramenta se você quiser combinar mais de dois arrays por 
 *      vez, ou se quiser combinar arrays com valores literais:
*/
const paresImpares3 = [...pares, 10, 12, ...impares, 11];

console.log(paresImpares3); // [2, 4, 6, 8, 10, 12, 1, 3, 5, 7, 9, 11]

/**
 *      Após mesclar dois arrays com qualquer dessas técnicas, você fica 
 *      com três matrizes: as duas originais e o novo resultado mesclado. 
 *      Se seus arrays contiverem valores primitivos (números, strings, 
 *      valores booleanos), eles serão duplicados no novo array. Mas se 
 *      seu array contiver objetos, a referência do objeto será copiada. 
 *      Por exemplo, se você mesclar dois arrays de objetos Date, nenhum 
 *      novo objeto Date será criado. Em vez disso, o novo array mesclado
 *      obtém referências apontando para os mesmos objetos Date. Se você 
 *      alterar um objeto Date no array mesclado, verá a modificação no 
 *      array original também:
*/
const datas2020 = [new Date(2020, 1, 10), new Date(2020, 2, 10)];
const datas2021 = [new Date(2021, 1, 10), new Date(2021, 2, 10)];

const datasCombinadas = [...datas2020, ...datas2021];

// Muda uma data no novo array
datasCombinadas[0].setFullYear(2022);

console.log(datas2020[0].getFullYear()); // 2022
