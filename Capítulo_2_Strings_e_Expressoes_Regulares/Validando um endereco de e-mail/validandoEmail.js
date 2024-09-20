"use strict";

/**
 *      Você quer detectar e rejeitar erros comuns em endereços de  
 *      e-mail.
 * 
 *      Expressões regulares são úteis para mais do que pesquisar. 
 *      Você também pode usá-las para validar strings testando se uma 
 *      string corresponde a um determinado padrão. Em JavaScript, 
 *      você testa se uma string corresponde a uma expressão regular 
 *      usando o método RegEx.test().
*/
const emailValido = "pedroAlvares@gmail.com";
const emailInvalido = "pedroAlvares@gmail .com";

const regex = /\S+@\S+\.\S+/;

if (regex.test(emailValido)) {
    // Este código é executado, porque o email passou no teste.
    console.log("E-mail válido!");
}

if (regex.test(emailInvalido)) {
    // Este código não é executado, porque o email falhou no teste.0
}
