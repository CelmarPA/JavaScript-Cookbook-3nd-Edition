"use strict";

/**
 *      Você tem um ângulo em graus. Para usar o valor nas funções 
 *      trigonométricas do objeto Math, você precisa converter os graus 
 *      para radianos.
 * 
 *      Para converter graus em radianos, multiplique o valor do grau por 
 *      (Math.PI/180):
*/

const radianos = graus * (Math.PI / 180);

// Então, se você tem um ângulo de 90 graus, o cálculo se tranforma em:
const rad = 90 * (Math.PI / 180);

console.log(rad); // 1.5707963267948966

// E para converter radianos em graus, multiplique o valor em radianos por (180/Math.PI):
const graus = radianos * (180 / Math.PI);

/**
 *      Todos os métodos trigonométricos do objeto Math (sin(), cos(), 
 *      tan(), asin(), acos(), atan() e atan2()) recebem valores em 
 *      radianos e retornam radianos como resultado. No entanto, não é 
 *      incomum que as pessoas forneçam valores em graus em vez de 
 *      radianos, pois graus são a unidade de medida mais conhecida.
*/
