"use strict";

/**
 *      Você quer adicionar um caractere Unicode extendido que tem 4 
 *      bites condificado, como um emoji ou certos tipos de palas não 
 *      inglesas não acentuadas.
 * 
 *      Caso queria simplesmente criar um string com um emoji, o truque 
 *      de copiar e colar functiona geralmente. Em um editor de código 
 *      moderno você pode escrever código como este:
*/
const hamburguer = "🍔";
const histHamburguer = "Eu gosto de hamburgueres" + hamburguer;

console.log(histHamburguer);

/**
 *      Outra opção é usar o valor Unicode para o emoji. O problema é que 
 *      você não pode usar uma sequência de escape \u padrão para obter 
 *      um emoji, porque cada emoji é armazenado como um valor de 4 bytes.
 * 
 *      A solução é usar o método String.fromCodePoint():
*/
const hamburguerHist = "Eu gosto de hamburgueres" + String.fromCodePoint(0x1F354);

console.log(hamburguerHist);

// O emoji de hamburguer tem um código Hexadecimal U+1F354. Para usar com fromCodePoint() substitua o prefixo  U+ por 0x.

/**
 *      Se você precisa fazer processamento de strings com strings que 
 *      podem incluir emojis, outros problemas podem surgir. Por exemplo, 
 *      o que você espera que esse código encontre?
*/
const hamburguerLength = hamburguer.length;
console.log(hamburguerLength);

/**
 *      Mesmo que a sequência de caracteres do hambúrguer seja apenas um 
 *      caractere, para o seu código o comprimento parece ser 2 porque o 
 *      emoji do hambúrguer ocupa o dobro de bytes na memória. Esta é uma 
 *      abstração de vazamento e uma limitação do suporte do JavaScript 
 *      para Unicode.
*/
