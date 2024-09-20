"use strict";

/**
 *      Você quer ver se duas strings correspondem, enquanto trata 
 *      letras maiúsculas e minúsculas como a mesma coisa.
 * 
 *      A abordagem improvisada é usar o método String.toLowerCase() 
 *      em ambas as strings e comparar o resultado, assim:
*/
const a = "olá";
const b =  "OLÁ";

if (a.toLocaleLowerCase() === b.toLocaleLowerCase()) {
    // Acabamos aqui, poque as versês minúsculas de ambas as string correspondem.
}

/**
 *      Uma abordagem alternativa e garantida é usar o método String.
 *      localeCompare() com sensibilidade definida como acento, 
 *      conforme mostrado aqui: 
*/

let c = "olá";
let d = "OLÁ";

if (c.localeCompare(b, undefined, { sensitivity: "accent"}) === 0) {
    // Terminamos aqui porque as strings que não diferenciam maiúsculas de minúsculas e correspondem.
}

/**
 *      Se localeCompare() considerar que duas strings correspondem, 
 *      ele retorna 0. Caso contrário, ele retorna um inteiro positivo 
 *      ou negativo indicando se a string comparada cai antes ou 
 *      depois da string referenciada na ordem de classificação. (Como 
 *      estamos usando localeCompare() para testar a igualdade, a 
 *      ordem de classificação não é importante, e você pode 
 *      ignorá-la.)
 * 
 *      O segundo parâmetro de localeCompare() contém uma string que 
 *      especifica o locale. Se você passar undefined, então 
 *      localeCompare() usa o localidade atual do computador, que é 
 *      quase sempre o que você quer.
 * 
 *      Para executar uma comparação que não diferencia maiúsculas de 
 *      minúsculas, você precisa definir a propriedade de 
 *      sensitivity. Existem dois valores que podem funcionar. Se você 
 *      definir sensitivity como "accent", caracteres que têm acentos 
 *      diferentes (como a e á) são tratados como desiguais. Mas se 
 *      você definir sensitivity como "base", você obterá uma 
 *      comparação mais permissiva que não diferencia maiúsculas de 
 *      minúsculas que trata todas letras acentuadas como 
 *      correspondências.
*/
