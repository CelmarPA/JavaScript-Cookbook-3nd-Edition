"use strict";

/**
 *      Dado o raio de um círculo e o ângulo de um arco em graus,  
 *      encontre o comprimento do arco.
 * 
 *      Use Math.PI para converter graus em radianos e use o resultado em 
 *      uma fórmula para encontrar o comprimento do arco:
*/
// Angulo do arco de 120 graus, raio do circulo é 2:
let graus = 120, raio = 2;

const radianos = graus * (Math.PI / 180);
const comprimentoArco = radianos * raio

console.log(comprimentoArco); // 4.1887902047863905

/**
 *      O comprimento de um arco circular é encontrado multiplicando o 
 *      raio do círculo pelo ângulo do arco, em radianos. 
 * 
 *      Se o ângulo for dado em graus, você precisará converter o grau 
 *      para radianos primeiro, antes de multiplicar o ângulo pelo raio.
*/
