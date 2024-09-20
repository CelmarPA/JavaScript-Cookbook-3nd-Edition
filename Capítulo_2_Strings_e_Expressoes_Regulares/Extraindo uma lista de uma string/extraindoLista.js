"use strict";

/**
 *      Você tem uma string com várias sentenças, uma das quais inclui 
 *      ma lista de itens. A lista começa com dois pontos (:), termina 
 *      com um ponto (.) e separa cada item com uma vírgula (,). Você 
 *      quer extrair apenas a lista.
 */

// Antes:
const string = "Esta é uma lista de items: cerejas, limas, laranjas, maçâs";

// Depois:
const list = ["cerejas", "limas", "laranjas", "maçâs"];

/**
 *      A solução requer duas ações: extrair a string contendo a lista 
 *      de itens e então converter essa string em uma lista.
 * 
 *      Use o método String.indexOf() duas vezes — primeiro para 
 *      localizar os dois pontos e novamente para encontrar o primeiro 
 *      ponto após os dois pontos:
*/
const sentenca = "Está é uma sentença. Esta é uma sentença com uma lista de itens:" + "cerejas, laranjas, maçâs, bananas. Essa foi a lista de itens."

const inicio = sentenca.indexOf(":");
const fim = sentenca.indexOf(".", inicio + 1);

/**
 *      Usando esses dois locais e o método String.slice(), você pode 
 *      extrair a string que deseja.
*/
const lista = sentenca.slice(inicio + 1, fim);
console.log(lista);

/**
 *      Você poderia escrever um loop que usa o método indexOf() para 
 *      procurar por vírgulas, e o método slice() para dividir a 
 *      string da lista em pedaços menores, um para cada item. Mas há 
 *      uma abordagem mais fácil. Você pode quebrar a string em um 
 *      array usando o método String.split():
*/
let frutas = lista.split(",");
console.log(frutas); // [ 'cerejas', ' laranjas', ' maçâs', ' bananas' ]

/**
 *      Quando você chama split(), você deve escolher um delimitador. 
 *      Pode ser um espaço, uma vírgula, uma série de traços ou outra 
 *      coisa. O delimitador é usado para dividir a string em pedaços 
 *      menores, e ele não aparecerá nos resultados.
 * 
 *      O resultado da divisão da string extraída é um array de itens 
 *      de lista. No entanto, os itens podem vir com artefatos (nesse 
 *      caso, um espaço inicial extra em todas as strings, exceto a 
 *      primeira). Felizmente, é fácil limpá-los.
 * 
 *      O truque é usar o Array.map(), que executa um pedaço de código 
 *      que você fornece em cada elemento no array. Você precisa de 
 *      apenas uma única linha de código para chamar o método trim():
*/
frutas = frutas.map(s => s.trim());
console.log(frutas); // [ 'cerejas', 'laranjas', 'maçâs', 'bananas' ]
