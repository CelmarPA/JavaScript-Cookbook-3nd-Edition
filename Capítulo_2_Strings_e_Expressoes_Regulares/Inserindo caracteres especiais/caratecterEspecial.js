"use strict";
// Você quer inserir caracter especial, tal como quebra de linha em uma string.

/**
 *      Por exemplo, se você estiver usando apóstrofos para delimitar 
 *      suas strings, você não pode colocar um caractere de apóstrofo 
 *      diretamente em sua string. Em vez disso, você precisa usar a 
 *      sequência de escape \', como esta:
*/
const filmeFavorito = "Meu filme favorito é \"Os setenta ladrões\".";
console.log(filmeFavorito); // Meu filme favorito é "Os setenta ladrões".

// O código Unicode para o símbolo de CopyRight é:
const copyright = "Está página \u00A9 Pereira Andrade.";
console.log(copyright); // Está página © Pereira Andrade.
