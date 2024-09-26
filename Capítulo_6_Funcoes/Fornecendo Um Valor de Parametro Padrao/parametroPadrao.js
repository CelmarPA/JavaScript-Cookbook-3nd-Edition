"use strict";

/**
 *      Você quer especificar um valor padrão para um parâmetro, que será 
 *      usado se o chamador não passar um argumento ao chamar a função.
 * 
 *      Você pode atribuir valores padrões diretamente aos seus 
 *      parâmetros quando declara uma função. Aqui está um exemplo que 
 *      define um valor padrão para o terceiro parâmetro, tercNum:
*/
function adicNumeros(priNumero, segNumero, terNumero=0) {
    return priNumero + segNumero + terNumero;
}

/**
 *      Agora é possível chamar esta função sem especificar todos os três 
 *      parâmetros:
*/
console.log(adicNumeros(42, 6, 10)); // 58
console.log(adicNumeros(42, 6)); // 48

/**
 *      Parâmetros padrão são uma invenção relativamente recente. No 
 *      ntanto, JavaScript nunca forçou chamadores de função a fornecer 
 *      todos os parâmetros para uma função. Neste passado distante, 
 *      funções podiam simplesmente verificar se um parâmetro era 
 *      undefined (testando-o com o operador typeof).
 * 
 *      Você pode definir valores padrão para quantos parâmetros quiser. 
 *      Como uma questão de bom estilo, você deve colocar seus parâmetros 
 *      obrigatórios primeiro, seguidos por parâmetros que tenham valores 
 *      padrão. Em outras palavras, uma vez que você adiciona um 
 *      parâmetro padrão, todos os parâmetros depois também devem se 
 *      tornar opcionais e ter valores padrão. Esta convenção não é
 *      obrigatória, mas torna o código mais claro.
 * 
 *      Ao chamar uma função que tem vários parâmetros padrão, você pode 
 *      escolher quais valores fornecer. Considere este exemplo:
*/
function adicNumeros2(priNumero = 10, segNumero = 20, terNumero = 30, multiplicador = 1) {
    return multiplicador * (priNumero + segNumero + terNumero);
}

/**
 *      Se você quiser especificar priNumero, segNumero e multiplicador, 
 *      mas omitir o parâmetro terNumero, use undefined como 
 *      um placeholder. Isso permite que você passe todos os seus 
 *      parâmetros na ordem correta:
*/
const sum = adicNumeros2(42, 10, undefined, 1);
console.log(sum); // 72

/**
 *      Mas null não funcionará como um placeholder. Neste exemplo, ele é 
 *      simplesmente convertido para o número 0, alterando o resultado:
*/
const sum2 = adicNumeros2(42, 10, null, 1);
console.log(sum2); // 52
