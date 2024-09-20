"use strict";

/**
 *      Você quer encontrar todas as ocorrências de uma substring   
 *      específica em uma string e substituí-las por outra coisa.
 * 
 *      Você pode usar o método String.replaceAll() para fazer a 
 *      alteração em uma etapa. Tudo que você precisa é de uma 
 *      substring para procurar e outra string para trocar em seu 
 *      lugar:
*/
const textoHistoria = "Eu não sei onde nasci, exceto que o castelo era" + " infinitamente velho e infinitamente horrível.";

const historiaMudada = textoHistoria.replaceAll("infinitamente", "um tanto");

console.log(historiaMudada);

/**
 *      O método replaceAll() tem a capacidade de usar uma expressão 
 *      regular para pesquisaem vez de uma string comum.
*/
