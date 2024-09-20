"use strict";

/**
 *      Você quer cortar espaços extras que preenchem o início ou o 
 *      fim de uma string.
 * 
 *      Use o método String.trim(). Ele remove todos os espaços em 
 *      branco de ambas as extremidades de uma string, incluindo 
 *      espaços, tabulações, espaços sem quebra e caracteres 
 *      terminadores de linha.
*/
const stringEspacada = "     A estrada é longa, com muitas curcas sinuosas.     ";

const stringTrimada = stringEspacada.trim();
console.log(stringTrimada); // "A estrada é longa, com muitas curcas sinuosas."

/**
 *      O método trim() é direto, mas não personalizável. Se você 
 *      tiver requisitos de alteração de string ainda mais complexos, 
 *      precisará usar uma expressão regular.
 * 
 *      Um problema comum que frustra o método trim() é remover o 
 *      excesso de espaço em branco dentro de uma string. O método 
 *      replaceAll() pode realizar essa tarefa com relativa facilidade 
 *      usando uma expressão regular com o caractere \s para 
 *      corresponder ao espaço em branco:
*/
const stringEsp = "A estrada é longa,    com muitas     curcas sinuosas."

const stringTrim = stringEsp.replaceAll(/\s\s+/g, " ");
console.log(stringTrim); // "A estrada é longa, com muitas curcas sinuosas."
