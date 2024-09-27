"use strict";

/**
 *      Você tem um objeto misterioso e quer determinar seu tipo.
 * 
 *      Use o operador instanceof:
*/
const objetoMisterioso = new Date(2024, 8, 27);

if (objetoMisterioso instanceof Date) {
    // Terminamos aqui porque objetoMisterioso é um objeto Date
}

/**
 *      Você pode testar se um objeto não é uma instância de algum tipo 
 *      usando o operador not (!). Mas certifique-se de usar parênteses 
 *      para aplicar o ! a toda a condição instanceof:
*/
if (!(objetoMisterioso instanceof Date)) {
    // Você chega aqui se objetoMisterioso não for um objeto Date
}

// Não cometa esse erro!
if (!objetoMisterioso instanceof Date) {
    // Esse código nunca será executado
}

/**
 *      Há uma lacuna no operador instanceof. Ele não funciona com 
 *      valores primitivos, como números, strings, booleanos, valores 
 *      BigInt, null e undefined. Aqui está uma demonstração do problema:
*/
const numeroTeste = 42;
if (numeroTeste instanceof Number) {
    // Esse código nunca será executado
}

const stringTeste = "Olá Mundo";
if (stringTeste instanceof String) {
    // Esse código nunca será executado
}

// Os dois testes a seguir funcionam porque os primitivos são encapsulados em objetos, mas isso é incomum no JavaScript moderno.
const objetoNumero = new Number (42);
if (objetoNumero instanceof Number) {
    // Esse código executa
}

const objetoString = new String("olá Mundo");
if (objetoString instanceof String) {
    // Esse código executa
}

/**
 *      A solução é usar o operador typeof se você estiver testando uma 
 *      variável que pode conter um dos tipos de dados primitivos. Ao 
 *      contrário de instanceof, typeof fornece um dos nove valores de 
 *      string predefinidos. Se você obtiver um valor de object, você 
 *      pode usar o operador instanceof para se aprofundar mais:
*/
const primitivoMisterioso = 42;

if (typeof primitivoMisterioso === "number") {
    // Esse código executa
}

if (typeof objetoMisterioso === "object") {
    // Esse código executa, porque Date é um objeto, não um primitivo

    if (objetoMisterioso instanceof Date) {
        // Esse código roda
    }
}

/**
 *      O operador instanceof funciona inspecionando a cadeia de 
 *      protótipos de um objeto. Dependendo de como um objeto é 
 *      construído, pode haver vários tipos na cadeia de protótipos 
 *      (semelhante à maneira como um objeto em uma linguagem POO 
 *      tradicional pode herdar de uma sequência de classes). Por 
 *      exemplo, cada objeto tem o protótipo Object na base de sua 
 *      cadeia, então isso é sempre verdadeiro:
*/
if (objetoMisterioso instanceof Object) {
    // Isso é verdade, a menos que objetoMisterioso seja um tipo primitivo
}
