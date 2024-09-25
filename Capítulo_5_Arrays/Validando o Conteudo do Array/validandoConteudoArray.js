"use strict";

/**
 *      Você quer garantir que o conteúdo do Array atenda a determinados 
 *      critérios.
 * 
 *      Use o método Array.every() para verificar se cada elemento passa 
 *      em um determinado teste. Por exemplo, o código a seguir verifica 
 *      para garantir que cada elemento no array consiste em caracteres 
 *      alfabéticos usando uma expressão regular:
*/

// A função teste
function contemApenasLetras(elemento) {
    const expTexto = /^[a-zA-Z]+$/;
    return expTexto.test(elemento);
}

// Testa um array
const itensMisteriosos = ["**", 123, "aaa", "abc", "-", 46, "AAA"];

let resultado = itensMisteriosos.every(contemApenasLetras);

console.log(resultado); // false

// Testa outro array
const itensMisteriosos2 = ["elefante", "leao", "gato", "cachorro"];

resultado = itensMisteriosos2.every(contemApenasLetras);

console.log(resultado); // true

/**
 *      Ou use o método Array.some() para garantir que pelo menos um dos 
 *      elementos passe no teste. Como exemplo, o código a seguir 
 *      verifica para garantir que pelo menos um dos elementos do array 
 *      seja uma string alfabética:
*/

// Função de teste
function testeValor(elemento) {
    const expTexto = /^[a-zA-Z]+$/;
    return expTexto.test(elemento);
}

// Executa o teste
const result = itensMisteriosos.some(testeValor);

console.log(result); // true

/**
 *      Ao contrário de muitos outros métodos de array que usam funções 
 *      de callback, os métodos every() e some() não funcionam 
 *      em todos os elementos do array. Em vez disso, eles processam 
 *      apenas  quantos elementos do array forem necessários para cumprir 
 *      sua funcionalidade. A solução demonstra que a mesma função 
 *      callback pode ser usada para os métodos every() e some(). 
 *      A diferença é que ao usar every(), assim que  a função 
 *      retorna um valor falso, o processamento é concluído e o método 
 *      retorna false. O método some() continua a testar em todos os 
 *      elementos do array até que a função de callback retorne true. 
 *      Nesse momento, nenhum outro elemento é validado e o método 
 *      retorna true. No entanto, se a função de callback testar em todos 
 *      os elementos e não retornar true para nenhum deles, some() 
 *      retornará false.
*/
