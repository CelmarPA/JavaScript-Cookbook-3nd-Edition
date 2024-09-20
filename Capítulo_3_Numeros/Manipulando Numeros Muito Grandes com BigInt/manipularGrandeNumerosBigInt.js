"use strict";

/**
 *      Você precisa trabalhar com números inteiros muito grandes (acima 
 *      de 2^53), sem perder precisão.
 *      
 *      Use o tipo de dados BigInt, que pode conter inteiros de qualquer 
 *      tamanho, limitado apenas pela memória do sistema (ou a 
 *      implementação BigInt do mecanismo JavaScript que você está 
 *      usando).
 * 
 *      Você pode criar um BigInt de duas maneiras. Você usa a função 
 *      BigInt(), como segue:
*/
// Cria um BigInt e o defini para 10
const bigInteger = BigInt(10); // 10n

// Ou você pode adicionar a letra n no final do número:
const bigInteger2 = 10n;

/**
 *      Este exemplo mostra a diferença entre um Number comum e o BigInt 
 *      para valores muito grandes:
*/
// Normalmente, números inteiros grandes sofrem de imprecisão
const maxInt = Number.MAX_SAFE_INTEGER; // Provavelmente por volta de 9007199254740991

console.log(maxInt + 1); // 9007199254740992
console.log(maxInt + 2); // 9007199254740992
console.log(maxInt + 3); // 9007199254740994
console.log(maxInt + 4); // 9007199254740996

// BigInts se comportam de forma mais confiável
const bigInt = BigInt(maxInt) // 9007199254740991n

console.log(bigInt + 1n); // 9007199254740992n
console.log(bigInt + 2n); // 9007199254740993n
console.log(bigInt + 3n); // 9007199254740994n
console.log(bigInt + 4n); // 9007199254740995n

/**
 *      Quando você registra um BigInt no console do desenvolvedor, ele 
 *      aparece com um n anexado ao seu valor (como em 
 *      9007199254740992n). Essa convenção facilita o reconhecimento de 
 *      valores BigInt. Mas se você quiser apenas o valor numérico do seu 
 *      BigInt, você simplesmente precisa convertê-lo para texto 
 *      primeiro, com BigInt.toString().
 * 
 *      Depois que passamos de 253, a imprecisão é maior que 1 e aparece 
 *      em cálculos com números integrais, não apenas valores decimais. O 
 *      JavaScript tem uma solução parcial para esse problema com o tipo 
 *      BigInt, introduzido como parte da especificação ECMAScript 2020. 
 *      Um BigInt é um inteiro de tamanho arbitrário que permite que você 
 *      represente números extremamente grandes. 
 *      Praticamente falando, não há limite superior para a largura de 
 *      bits de um BigInt.
 * 
 *      Quase todos os operadores que você está acostumado a usar com 
 *      números regulares podem ser usados em um BigInt, incluindo adição 
 *      (+), subtração (-), multiplicação (*), divisão (/), e 
 *      exponenciação (**). No entanto, BigInt é um inteiro e não 
 *      armazena valores fracionários. Quando você realiza uma operação 
 *      de divisão, BigInt silenciosamente descarta a porção decimal:
*/
const resultado = 10n / 6n;
console.log(resultado); // 1n.

/**
 *      BigInts e Numbers não são intercambiáveis ​​nem são 
 *      interoperáveis. Mas eles podem ser convertidos um no outro usando 
 *      as funções Number() e BigInt():
 */
let bigInteiro = 10n
let inteiro = Number(bigInteiro);
console.log(inteiro); // 10

inteiro = 20;
bigInteiro = BigInt(inteiro);
console.log(bigInteiro);  // 20n

/**
 *      Você precisa executar uma conversão se quiser usar um BigInt com 
 *      um método que espera um Number, como os métodos do objeto Math. 
 *      Da mesma forma, você precisa executar uma conversão se quiser 
 *      usar um Number em um cálculo com outro BigInt.
 * 
 *      Se você tentar converter um Number que contém um valor 
 *      fracionário em um BigInt, você receberá um RangeError. Você pode 
 *      evitar essa possibilidade arredondando primeiro:
*/
const decimal = 10.8;
const bigInteiro2 = BigInt(Math.round(decimal));

console.log(bigInteiro2); // 11n

/**
 *      Lembre-se de manter as operações consistentes com o tipo. Às 
 *      vezes, o que parece uma operação simples pode falhar porque você 
 *      acidentalmente combina um BigInt com um número comum:
*/
let x = 10n;
x = x * 2; // TypeError: Não é possível misturar BigInt e outros tipos, use conversões explícitas
x += 1; // mesmo TypeError

x = x * 2n; // x agora é 20n, conforme esperado
x += 1n; // x é 21n

/**
 *      Você pode comparar um valor BigInt com um valor Number usando os 
 *      operadores de comparação padrão (<, >, <=, >=). Se você quiser 
 *      testar se um BigInt e um número são iguais, use os operadores de 
 *      igualdade flexível (== e !=). Igualdade estrita (===) sempre 
 *      retornará false, porque BigInt e Number são tipos de dados 
 *      diferentes. Ou, melhor ainda, converta explicitamente seu Number 
 *      em um BigInt e então compare-o com ===.
 * 
 *      Uma última coisa a considerar com BigInt: ele não é (no momento 
 *      da publicação) serializável para JSON. Tentativas de chamar JSON.
 *      stringify() em um BigInt produzem um erro de sintaxe. Você tem 
 *      várias opções a considerar como solução. Você pode fazer um 
 *      monkey-patch na sua implementação BigInt com um método toJSON() 
 *      apropriado:
*/
BigInt.prototype.toJSON = function () { return this.toString() };
