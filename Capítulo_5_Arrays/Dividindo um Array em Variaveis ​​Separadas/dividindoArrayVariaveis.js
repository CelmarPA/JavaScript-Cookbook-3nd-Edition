"use strict";

/**
 *      Você precisa atribuir valores de elementos de array a diversas 
 *      variáveis, mas quer uma abordagem conveniente que não o force a 
 *      atribuir cada variável separadamente.
 * 
 *      Use a sintaxe de desestruturação de array para atribuir múltiplas 
 *      variáveis ​​de uma vez. Você escreve uma expressão que declara 
 *      diversas variáveis ​​(à esquerda) e pega os valores de um array 
 *      (à direita). Aqui está um exemplo:
*/
const valoresEstados = [459, 144, 96, 34, 0, 14];
[arizona, missouri, idaho, nebraska, texas, minnesota] = valoresEstados;

console.log(missouri); // 144

/**
 *      Quando você usa a desestruturação de array, os valores são 
 *      copiados por posição. Neste exemplo, isso significa que arizona 
 *      obtém o primeiro valor no array, missouri o segundo, e assim por 
 *      diante. Se você tiver mais variáveis ​​do que elementos do array, 
 *      as variáveis ​​extras obtêm o valor undefined.
 * 
 *      Quando você usa a desestruturação de array, não precisa copiar 
 *      todos os valores que estão no array. Você pode pular valores que 
 *      não quer adicionando vírgulas extras sem um nome de variável:
*/
[arizona, , , nebraska, texas] = valoresEstados;
console.log(nebraska); // 34
/**
 *      Você também pode usar o operador rest para colocar todos os 
 *      valores restantes (aqueles que você não atribuiu explicitamente 
 *      às variáveis) em um novo array. Aqui está um exemplo que copia os 
 *      três últimos elementos do array em um array chamado outros:
*/
[arizona, missouri, idaho, ...outros] = valoresEstados;
console.log(outros); // 34, 0, 14

/**
 *      O operador rest do JavaScript se parece com o operador spread 
 *      (são três pontos antes de uma variável). Eles até "parecem" 
 *      semelhantes no seu código, embora na verdade desempenhem papéis 
 *      complementares. O operador rest aspira valores extras e os 
 *      espreme em uma única matriz. O operador spread expande uma matriz 
 *      (ou outro tipo de objeto iterável) em valores separados.
 * 
 *      Até agora você viu a declaração e atribuição de variáveis ​​em 
 *      uma instrução, mas você pode dividi-las, assim como você pode 
 *      quando cria variáveis ​​comuns. Apenas certifique-se de manter os 
 *      colchetes, porque eles indicam que você está usando 
 *      desestruturação de array:
*/
let arizona, missouri, idaho, nebraska, texas, minnesota;
[arizona, missouri, idaho, nebraska, texas, minnesota] = stateValues;
