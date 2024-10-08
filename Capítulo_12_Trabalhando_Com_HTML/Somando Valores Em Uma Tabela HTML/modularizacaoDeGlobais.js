"use strict";

/**
 *      Extra: Modularização de Globais
 * 
 *      Como parte de um esforço crescente para modularizar JavaScript, 
 *      os métodos parseFloat() e parseInt() agora estão anexados ao 
 *      objeto Number, como novos métodos estáticos, a partir do
 *      ECMAScript 2015:
*/

// Método Modular
const modular = Number.parseInt("123");

// Método Global
const global = Number.parseInt("123");

/**
 *      Esses módulos alcançaram ampla adoção em navegadores, mas podem 
 *      ser preenchidos com polyfill para suporte a navegadores mais 
 *      antigos, usando uma ferramenta como Babel ou por conta própria:
*/
if (Number.parseInt === undefined) {
    Number.parseInt = window.parseInt;
}
