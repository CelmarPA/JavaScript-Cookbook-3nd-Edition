"use strict";

/**
 *      Você quer pesquisar um array por um item que atenda a certos 
 *      critérios. Por exemplo, talvez você esteja procurando por um 
 *      objeto com uma propriedade específica.
 * 
 *      Use um dos métodos de busca de array funcional: find() ou 
 *      findIndex(). De qualquer forma, você fornece a função que testa 
 *      cada item até que uma correspondência seja encontrada.
 * 
 *      Aqui está um exemplo que encontra o primeiro número acima de 10:
*/
const numeros = [2, 4, 19, 15, 183, 6, 7, 1, 1];

// Encontra o primeiro valor acima de 10
const numeroMaior = numeros.find(element => element > 10);

console.log(numeroMaior); // 19

/**
 *      Se em vez de encontrar o elemento correspondente, você preferir 
 *      saber sua posição, você pode usar o método similar findIndex():
*/
const indiceNumeroMaior = numeros.findIndex(element => element > 100);

console.log(indiceNumeroMaior); // 4 (primeira correspondência)

// Se nenhuma correspondência for encontrada, find() retornará undefined e findIndex() retornará –1.

/**
 *      Ao usar find() e findIndex(), você fornece uma função de callback 
 *      que recebe até três parâmetros (o elemento atual do array na 
 *      'iteração, seu índice e o próprio array). A sintaxe de seta 
 *      oferece uma abordagem mais simplificada, permitindo que você 
 *      defina a função de retorno de chamada exatamente onde você a usa. 
 * 
 *      Os métodos find() e findIndex() realmente brilham quando você 
 *      precisa escrever condições mais complicadas. Considere o código a 
 *      seguir, que encontra a primeira data em um ano específico:
*/

// Lembre-se, o construtor Date aceita um número de mês baseado em zero, então um valor de mês de 10 corresponde ao décimo primeiro mês, novembro
const datas = [new Date(2021, 10, 20), new Date(2020, 3, 12), new Date(2020, 5, 23), new Date(2022, 3, 18)];

// Encontra a primeira data em 2020
const dataCorrespondente = datas.find(data => data.getFullYear() === 2020);

console.log(dataCorrespondente); // 2020-04-12T03:00:00.000Z

/**
 *      Essa abordagem não é possível com o método indexOf(), porque 
 *      envolve examinar uma propriedade de um item de array. (Na 
 *      verdade, o método indexOf() padrão não consegue nem testar 
 *      objetos Date para igualdade, porque ele só verifica se as 
 *      referências do objeto correspondem.)
*/
