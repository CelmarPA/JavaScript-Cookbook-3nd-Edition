"use strict";

/**
 *      Você tem um valor decimal e precisa encontrar seu equivalente 
 *      hexadecimal.
 * 
 *      Use o método Number.toString(), com um argumento que especifica a 
 *      base para a qual você está convertendo:
*/
const num = 255;

console.log(num.toString(16)); // Exibe ff, que é o valor hexadecimal equivalente

/**
 *      Por padrão, os números em JavaScript são de base 10, ou decimais. 
 *      No entanto, eles também podem ser convertidos para uma base 
 *      diferente, incluindo hexadecimal (16) e octal (8). Números 
 *      hexadecimais começam com 0x (um zero seguido por x minúsculo). 
 *      Números octais costumavam começar com apenas um zero (0), mas 
 *      agora devem começar com um zero e depois uma letra latina O 
 *      (maiúscula ou minúscula):
*/
const numeroOctal = 0o255; // Equivale a 173 decimal
const numeroHexadecimal = 0xad; // Equivale a 173 decimal

// Um número decimal pode ser convertido em outra base, em um intervalo de 2 a 36:
const numDecimal = 55;

const numOctal = numDecimal.toString(8); // 67
const numHexadecimal = numDecimal.toString(16); // 37
const numBinario = numDecimal.toString(2); // 110111

/**
 *      Para completar a apresentação octal e hexadecimal, você precisará 
 *      concatenar o 0o ao octal e o 0x ao valor hexadecimal. Mas 
 *      lembre-se, depois de converter seu número em uma string, não 
 *      espere usá-lo em nenhum tipo de cálculo numérico, não importa 
 *      como ele esteja formatado.
 * 
 *      Embora decimais possam ser convertidos em qualquer número base 
 *      (entre um intervalo de 2 a 36), somente os números octais, 
 *      hexadecimais e decimais podem ser manipulados diretamente como 
 *      números.
*/
