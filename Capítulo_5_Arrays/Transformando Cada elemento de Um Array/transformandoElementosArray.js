"use strict";

/**
 *      Você quer converter cada elemento em um array usando a mesma 
 *      transformação e usar os valores alterados para construir um novo 
 *      array.
 * 
 *      Use o método Array.map() e forneça uma função que realize a 
 *      alteração. O método map() percorre todo o array, aplicando sua 
 *      função a cada elemento e construindo um novo array com os valores 
 *      de retorno.
 * 
 *      Aqui está um exemplo que usa essa abordagem para alterar uma 
 *      matriz de números decimais em uma nova matriz com seus 
 *      equivalentes hexadecimais:
*/
const decArray = [23, 255, 122, 5, 16, 99];

// Usa o método toString() para converter em valores base-16
const hexArray = decArray.map(elemento => elemento.toString(16));

console.log(hexArray); // ['17', 'ff', '7a', '5', '10', '63']

/**
 *      Normalmente, a função map() está interessada apenas nos elementos 
 *      do array. No entanto, sua função de retorno de chamada pode 
 *      aceitar mais dois parâmetros: o índice e o array original.
 *      Usando esses detalhes, é tecnicamente possível usar map() para 
 *      alterar seu array original. Isso é considerado um antipadrão. Em 
 *      outras palavras, se você não planeja usar o novo array que map() 
 *      retorna, você não deve usar o método map(). Considere usar o 
 *      método forEach() em vez disso , ou apenas itere sobre seu array 
 *      proceduralmente.
*/
