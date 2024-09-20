"use strict";

/**
 *      Você quer gerar um número inteiro aleatório que caia em um 
 *      intervalo definido (por exemplo, de 1 a 6).
 * 
 *      Você pode usar o método Math.random() para gerar um valor de 
 *      ponto flutuante entre 0 e 1. Normalmente, você dimensionará 
 *      esse valor fracionário e o arredondará, para que você acabe 
 *      com um inteiro em um intervalo específico. Supondo que seu 
 *      intervalo se estenda de um número mínimo min a um número 
 *      máximo max. Observe o exemplo a seguir:
 *      
 *      numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
*/
 
// Por exemplo, se você quiser escolher um número aleatório entre 1 e 6, o código se torna:
const numeroAleatorio = Math.floor(Math.random() * 6) + 1;
console.log(numeroAleatorio); // Exibe um número aleatótio de 1 a 6.

/**
 *      Este código usa Math.random() para obter um número fracionário aleatório e 
 *      Math.floor() para truncar a parte decimal, deixando você com um inteiro.
 * 
 *      Para entender como isso funciona, vamos considerar uma execução de exemplo. Primeiro, 
 *      Math.random() escolhe um valor entre 0 e 1, como 0,563324823:
*/
const randomNum = Math.floor(0.563324823 * 6) + 1;

/**
 *      Esse número é multiplicado pelo número de valores em seu intervalo (neste exemplo, 6),
 *      tornando-se 3.379948938. Então a função Math.floor() trunca isso para apenas 3.
 *      
 *      Finalmente, o número inicial do intervalo é adicionado, dando o resultado final de 3. 
 *      Repita este cálculo e você obterá um número diferente, mas sempre será um inteiro do 
 *      intervalo que definimos de 1 a 6.
 */
