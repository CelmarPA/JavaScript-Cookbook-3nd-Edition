"use strict";

/**
 *      Você quer analisar um número em uma string e convertê-lo para o 
 *      tipo de dados numérico. 
 * 
 *      É sempre seguro converter um número em uma string, porque essa 
 *      operação não pode falhar. A tarefa reversa — converter uma string 
 *      em um número, para que você possa usá-la em cálculos — é um 
 *      assunto mais delicado.
 * 
 *      A abordagem canônica é usar a função Number():
*/
const dadoString = "42";
const dadoNumerico = Number(dadoString);

/**
 *      A função Number() não aceita formatação como símbolos de moeda e 
 *      separadores de vírgula. Ela permitirá espaços extras no início e 
 *      no fim da string. A função Number() também converte strings 
 *      vazias ou strings com apenas espaços em branco para o número 0. 
 *      Este pode ser um padrão razoável, mas nem sempre é apropriado
 *      (por exemplo, se você estiver recuperando a entrada do usuário de 
 *      uma caixa de texto). Para evitar esse caso, considere testar uma 
 *      string somente com espaços em branco antes de chamar Number():
*/
if (dadoString.trim() === '') {
    // Esta é uma string vazia ou com todos os espaços em branco
}

/**
 *      Se uma conversão falhar, a função Number() atribui o valor NaN à 
 *      sua variável. Você pode testar essa falha chamando o método 
 *      Number.isNaN() imediatamente após usar Number():
*/
if (Number.isNaN(dadoNumerico)) {
    // É seguro processar esses dados como um número
}

/**
 *      O método isFinite() é quase o mesmo que isNaN(), exceto que ele 
 *      evita casos extremos estranhos, como 1/0, que retorna um valor de 
 *      infinito. Se você usar o método isNaN() em infinito, ele retorna 
 *      duvidosamente falso.
 * 
 *      Uma abordagem alternativa é usar o método parseFloat(). É uma 
 *      conversão um pouco mais flexível que tolera texto após o número. 
 *      No entanto, parseFloat() é mais rigoroso com strings em branco, 
 *      as recusando.
*/
console.log(Number("42")); // 42
console.log(parseFloat("42")); //42

console.log(Number('12 cabras')); // NaN
console.log(parseFloat('12 cabras')); // 12

console.log(Number('cabras 12')); // NaN
console.log(parseFloat('cabras 12')); // NaN

console.log(Number("2001/01/01")); // NaN
console.log(parseFloat("2001/01/01")); // 2001

console.log(Number(' ')); // 0
console.log(parseFloat(' ')); // NaN

/**
 *      Os desenvolvedores usam alguns truques de conversão que são 
 *      funcionalmente equivalentes à função Number(), como multiplicar 
 *      uma string por 1 (numberInString*1) ou usar o operador unário 
 *      (+numberInString). Mas usar Number() ou parseFloat() é preferível 
 *      para maior clareza.
 * 
 *      Se você tem um número formatado (como 2,300), precisa trabalhar 
 *      mais para convertê-lo. O método Number() retornará NaN, e 
 *      parseFloat() parará na vírgula e tratará como 2. Infelizmente, 
 *      embora o JavaScript tenha um objeto Intl.NumberFormat que pode 
 *      criar strings formatadas a partir de números , ele não fornece 
 *      funcionalidade de análise para a operação reversa.
*/
