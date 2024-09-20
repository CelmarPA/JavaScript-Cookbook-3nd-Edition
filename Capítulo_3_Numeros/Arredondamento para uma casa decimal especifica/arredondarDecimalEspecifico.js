"use strict";

/**
 *      Você quer arredondar um número para uma certa precisão (por 
 *      exemplo, 124,793 para 124,80 ou 120).
 * 
 *      Você pode usar o método Math.round() para arredondar um número 
 *      para o número inteiro mais próximo:
*/
const numeroFracionario = 19.48938;
let numeroArredondado = Math.round(numeroFracionario);

console.log(numeroArredondado); // 19

/**
 *      Estranhamente, o método round() não aceita um argumento que 
 *      permita que você especifique um número de casas decimais para 
 *      manter. Se você quiser um grau diferente de precisão, cabe a você 
 *      multiplicar seu número pela potência apropriada de 10, 
 *      arredondá-lo e, então, dividi-lo pela mesma potência de 10 após o 
 *      arredondamento. Aqui está a fórmula geral para esta operação:
*/
const numeroParaArredondar = numeroFracionario * (10**numCasasDecimais);
numeroArredondado = Math.round(numeroParaArredondar);
numeroArredondado = numeroArredondado / (10**numCasasDecimais);

// Por exemplo, se você quiser arredondar para duas casas decimais, o código se tornará este:
const numFrac = 19.48938;
const numParaArrend = numFrac * (10**2);
let numArr = Math.round(numParaArrend);
numArr = numArr / (10**2);

console.log(numArr); // 19.49

/**
 *      Se você quiser arredondar para a esquerda da casa decimal (por 
 *      exemplo, para as dezenas, centenas, etc), basta usar um número 
 *      negativo para "numCasasDecimais". Por exemplo, –1 arredonda para 
 *      a dezena mais próxima, –2 arredonda para a centena mais próxima, 
 *      e assim por diante.
*/
