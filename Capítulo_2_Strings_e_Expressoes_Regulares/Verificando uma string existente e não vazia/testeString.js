"use strict";
// Se você quer ter certeza de que uma variável é uma string, use esse teste:
if (typeof variavelDesconhecida === "string") {
    // variavelDesconhecida é uma string
}

// Se você quer verificar se você tem um string não vazia você pode fazer o seguinte:
if (typeof variavelDesconhecida === "string" && variavelDesconhecida.length > 0) {
    // Esta é uma string genuína com caracteres ou espaço em branco
}

// Para elminar strings apenas com espaços em branco, use o método String.trim():
if (typeof variavelDesconhecida === "string" && variavelDesconhecida.trim().length > 0) {
    // Esta é uma string genuína que não é vazia e não possui espaços em branco
}

// A order das condições é importante, JavaScript usa "short-circuit evaluation", assim, apenas avalia a segunda condição caso a primeira seja bem sucedida.
// Este teste apenas se soubermos que variavelDesconhecida é uma string
if (variavelDesconhecida > 0) {
    // Faz algo
}

// Há uma lacuna potencial ao usar o operador typeof. É possível contornar o teste de string usando um objeto String em vez de um literal de string:
const variavelDesconhecida = new String("teste");

// Nesse caso o operador typeof irá retornar object em vez de string, porque a string primitiva é encapsulada em um objeto String.

// Evite criar instancias of String Object, contudo, caso seja necessário acomodar possíveis String Object, use um teste mais complexo como este:
// eslint-disable-next-line no-prototype-builtins
if (typeof variavelDesconhecida === "string" || String.prototype.isPrototypeOf(variavelDesconhecida)) {
    // É uma string primitiva ou um string encapsulada em um objeto.
}

/**
 *      O operador typeof pode retornar os seguintes valores:
 *      
 *      • undefined
 *      • boolean
 *      • number
 *      • bigint
 *      • string
 *      • symbol
 *      • function
 *      • object
 */

// Ocasionalmente você pode se depara com essa tecnica de validação antiga, simplesmente verifica se o valor pode ser tratado como um string e que não é uma string vazia:
if (variavelDesconhecida) {
    /* Chegamos aqui desde que:
        variavelDesconhecida tenha sido declarada,
        variavelDesconhecida não seja null,
        variavelDesconhecida não seja uma string vazia
     */
}

/**
 *      Isso funciona porque valores null, undefined e strings vazias (" ") são todos falsos em JavaScript
 */