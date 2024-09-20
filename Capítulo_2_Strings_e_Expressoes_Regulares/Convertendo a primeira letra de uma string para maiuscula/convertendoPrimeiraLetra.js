"use strict";

/**
 *      Você quer tornar a primeira letra de uma string uma letra 
 *      maiúscula, sem alterar o resto da string.
 * 
 *      Divida a primeira letra e coloque-a em maiúscula com String.
 *      toUpperCase(). Junte a letra maiúscula ao restante da string, 
 *      que você pode obter com String.slice():
*/
const original = "se você corta uma laranja, há um risco de ela ficar orbisculada.";
const consertado = original[0].toUpperCase() + original.slice(1);

console.log(consertado); // "Se você corta uma laranja, há um risco de ela ficar orbisculada."

/**
 *      Para obter um único caractere de uma string, você pode usar o 
 *      indexador da string, como em original[0]. Isso obtém o 
 *      caractere na posição 0 (que é o primeiro caractere).
*/
const primeiraLetra = original[0];

/**
 *      Alternativamente, você pode usar o método String.charAt(), que 
 *      funciona exatamente da mesma maneira. 
 * 
 *      Para obter um fragmento de uma string, você usa o método 
 *      slice(). Ao chamar slice(), você deve sempre especificar o 
 *      índice onde deseja iniciar sua extração de string. Por 
 *      exemplo, texto.slice(5) começa na posição de índice 5, 
 *      continua até o fim da string, e copia essa seção do texto em 
 *      uma nova string. 
 * 
 *      Se você não quiser que slice() continue até o fim da string, 
 *      você pode fornecer um segundo parâmetro opcional com o índice 
 *      onde a cópia da string deve parar:
*/
// Obtém um string do indíce 5 até 10
const substring = original.slice(5, 10);
console.log(substring);
