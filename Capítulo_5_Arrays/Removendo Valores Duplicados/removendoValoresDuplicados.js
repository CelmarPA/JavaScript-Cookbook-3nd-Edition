"use strict";

/**
 *      Você quer garantir que cada valor em seu array seja único 
 *      removendo as duplicatas.
 * 
 *      Crie um novo objeto Set e preencha-o com seu array. O objeto Set 
 *      descartará duplicatas automaticamente. Então, converta o objeto 
 *      Set de volta para um array:
*/
const numerosComDuplicatas = [2, 42, 5, 42, 304, 1, 13, 2, 13];

// Cria um Set com valores únicos (as duplicatas 42, 2 e 13 são descartados)
const setNumerosUnicos = new Set(numerosComDuplicatas);

// Transforma o Set de volta para um array (agora com seis items)
const arrayNumerosUnicos = Array.from(setNumerosUnicos);

console.log(arrayNumerosUnicos); // [ 2, 42, 5, 304, 1, 13 ]

/**
 *      Depois de entender a ideia, você pode comprimir isso em uma única 
 *      declaração com o operador spread:
*/
const numerosUnicos = [...new Set(numerosComDuplicatas)];

console.log(numerosUnicos); // [ 2, 42, 5, 304, 1, 13 ]

/**
 *      O objeto Set é um tipo especial de coleção que ignora valores 
 *      duplicados. Ele também funciona como uma maneira rápida e 
 *      eficiente de remover duplicatas de um array. Esta técnica 
 *      (alternar para um Set e depois voltar para um array) é muito mais 
 *      eficiente do que iterar sobre o array e procurar por duplicatas 
 *      com findIndex(). 
 * 
 *      Ao procurar por duplicatas, o Set usa um teste que é semelhante à 
 *      comparação de igualdade estrita ===, o que significa que 3 e '3' 
 *      não são considerados duplicatas. Um comportamento especial que o 
 *      Set implementa é que ele trata valores NaN repetidos como 
 *      duplicatas, mesmo que NaN === NaN normalmente seja avaliado como 
 *      falso.
*/
