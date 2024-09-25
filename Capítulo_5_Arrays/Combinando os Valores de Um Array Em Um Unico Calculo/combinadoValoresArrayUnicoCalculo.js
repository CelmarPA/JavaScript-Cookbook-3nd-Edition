"use strict";

/**
 *      Você quer usar todos os valores em um array em algum tipo de 
 *      cálculo agregado, como calcular uma soma ou média.
 * 
 *      Você pode iterar sobre o array em um loop. Mas para uma solução 
 *      mais simplificada, use o método Array.reduce() com uma função de 
 *      callback. Sua função (chamada de função redutora) é chamada para 
 *      cada elemento no array. Você constrói algum tipo de total 
 *      corrente usando um acumulador, um valor que o método reduce() 
 *      mantém até o processo terminar.
 * 
 *      Por exemplo, imagine que você queira calcular a soma de uma 
 *      matriz de números. Cada vez que sua função redutora é chamada, 
 *      ela obtém o total atual em execução no acumulador. Em seguida, 
 *      ela adiciona o valor do elemento atual e retorna o novo total:
*/
const funcaoRedutora = function (acumulador, elemento) {
    // Adicione o valor atual ao total corrente no acumulador.
    const novoTotal = acumulador + elemento;
    return novoTotal;
};

/**
 *      Este novo total se torna o acumulador quando o redutor é chamado 
 *      para o próximo item. Agora você pode usar esta função para somar 
 *      um array:
*/
const numeros = [23, 255, 122, 5, 16, 99];

// O segundo argumento (0) define o valor inicial do acumulador.
// Se você não definir um valor inicial, o acumulador será definido automaticamente para o primeiro elemento.
const total = numeros.reduce(funcaoRedutora, 0);
console.log(total); // 520

/**
 *      Quando a função redutora é chamada no último item, ela faz seu 
 *      cálculo final. Esse valor de retorno se torna o resultado 
 *      retornado de reduce().
 * 
 *      Quando estiver confortável com a maneira como reduce() funciona, 
 *      você pode tornar seu código mais curto e conciso com funções 
 *      inline e sintaxe de seta. Aqui está uma demonstração que usa 
 *      reduce() para calcular a soma dos valores quadrados, uma média e 
 *      o valor máximo:
*/

// A função redutora adiciona ao acumulador
const totalQuadrados = numeros.reduce((acum, val) => acum + val**2, 0);
console.log(totalQuadrados); // 90520

// A função acumuladora adiciona ao acumulador
const media = numeros.reduce((acum, val) => acum + val, 0) / numeros.length;
console.log(media); // 86.66666666666667

// A função redutora retorna o maior valor (acumulador ou valor atual)
const max = numeros.reduce((acum, val) => acum > val ? acum : val);
console.log(max); // 255

/**
 *      Usar o método reduce() pode parecer mais complicado do que outros 
 *      métodos de processamento de array de estilo funcional, como 
 *      map(), filter() ou sort(). A diferença é que você precisa pensar 
 *      cuidadosamente sobre quais dados você precisa armazenar após cada 
 *      chamada de função. Lembre-se de que você pode usar o acumulador 
 *      para armazenar um objeto personalizado com mais de uma 
 *      propriedade, permitindo que você rastreie quantas informações 
 *      precisar. Você também pode adicionar mais dois parâmetros 
 *      opcionais à sua função redutora: index (o número de índice atual 
 *      do elemento) e array (o array inteiro que está sendo reduzido). 
 *      Mas tenha cuidado. Código excessivamente entusiasmado que usa 
 *      reduce() pode rapidamente ficar difícil para os outros entenderem.
*/
