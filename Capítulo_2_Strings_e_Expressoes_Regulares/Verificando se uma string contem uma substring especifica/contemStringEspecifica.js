"use strict";

/**
 *      Você quer verificar se uma string contém outra substring. Se 
 *      você simplismente precisa de um teste de sim ou não, você pode 
 *      usar o método String.includes():
*/
const buscaString = "infinitamente";
const textoCompleto = "Eu não sei onde nasci, exceto que o castelo era" + " infinitamente velho e infinitamente horrível.";

if (textoCompleto.includes(buscaString)) {
    // A string pesquisada foi encontrada.
}

/**
 *      Opcionalmente, você pode dizer ao método includes() onde 
 *      começar sua busca por posição de caractere. Por exemplo, passe 
 *      o valor 5 e a busca pula para o sexto caractere na string, e 
 *      continua até o final:
*/
if (textoCompleto.includes(buscaString, 70)) {
    // Ainda é verdade, porque a busca ignora o primeiro 'infinitamente' e atinge o segundo.
}

/**
 *      A pesquisa que includes() realiza é sensível a maiúsculas e 
 *      minúsculas. Se você quiser uma pesquisa que não faça distinção 
 *      entre maiúsculas e minúsculas, você pode chamar toLowerCase() 
 *      em ambas as strings primeiro:
*/
buscaString = "INFINITAMENTE";

if (textoCompleto.toLocaleLowerCase().includes(buscaString.toLowerCase())) {
    // A string pesquisada foi encontrada
}

/**
 *      O método includes() não fornece nenhuma informação sobre onde uma correspondência ocorre. Se você quiser essa informação, considere usar o método String.indexOf() em vez disso.
*/
