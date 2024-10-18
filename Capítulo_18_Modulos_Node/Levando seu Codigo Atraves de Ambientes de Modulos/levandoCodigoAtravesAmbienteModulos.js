"use strict";

/**
 *      You’ve written a library that you’d like to share with others, 
 *      but folks are using a variety of Node versions with both CommonJS 
 *      and ECMAScript modules. How can you ensure your library works in 
 *      all of the various environments?
 * 
 *      Use módulos CommonJS com um wrapper de módulo ECMAScript.
 * 
 *      Primeiro, escreva a biblioteca como um módulo CommonJS, salvo com 
 *      a extensão de arquivo .cjs:
*/ 
const bbarray = {
    concatArray: (str, array) => {
        return array.map(elemento => {
            return `${str} ${elemento}`
        });
    },
    splitArray: (str, array) => {
        return array.map(elemento => {
            return elemento.substring(str.length + 1);
        });
    }
};

module.exports = bbarray;
exports.concatArray = bbarray.concatArray;
exports.splitArray = bbarray.splitArray;

/**
 *      Seguido por um módulo wrapper ECMAScript, que usa a extensão de 
 *      arquivo .mjs:
*/
import bbarray from "./index.cjs";

export const { concatArray, splitArray } = bbarray;

export default bbarray;

/**
 *      E um arquivo package.json, que inclui os campos type, main e 
 *      exports:
 * 
 *          "type": "module",
 *          "main": "./index.cjs",
 *          "exports": {
 *              ".": "./index.cjs",
 *              "./module": "./wrapper.mjs"
 *          },
 * 
 *      Usuários do nosso módulo, usando a sintaxe CommonJS, podem usar a 
 *      sintaxe require para importar  o módulo:
*/
const bbarray1 = require("bbarray");

bbarray1.concatArray("é", ["teste", "três"]);
bbarray1.splitArray("é", ["é teste", "é três"]);

/**
 *      ou:
*/
const { concatArray,  splitArray } = require("bbarray");

concatArray("é", ["teste", "três"]);
splitArray("é", ["é teste", "é três"]);

/**
 *      Enquanto aqueles que usam módulos ECMAScript podem especificar a 
 *      versão do módulo da biblioteca para usar a sintaxe de importação 
 *      ES:
*/
import bbarray2 from "bbarray/module";

bbarray2.concatArray("é", ["teste", "três"]);
bbarray2.splitArray("é", ["é teste", "é três"]);

/**
 *      ou:
*/
import { concatArray, splitArray } from "bbarray/module";

concatArray("é", ["teste", "três"]);
splitArray("é", ["é teste", "é três"]);

/**
 *      Em package.json há três campos principais:
 * 
 *          "type": "module",
 *          "main": "./index.cjs",
 *          "exports": {
 *              ".": "./index.cjs",
 *              "./module": "./wrapper.mjs"
 *          },
 * 
 *          "type": Especifica que este é um módulo, o que significa 
 *                  que esta biblioteca está usando a sintaxe do módulo 
 *                  ECMAScript. Para bibliotecas que usam 
 *                  exclusivamente CommonJS, o "type" seria "commonjs"
 *          
 *          "main": Especifica o ponto de entrada principal do 
 *                  aplicativo, para o qual apontaremos para o
 *                  arquivo CommonJS.
 * 
 *          "exports": Define os caminhos exportados dos nossos 
 *                     módulos. Por meio disso, os consumidores do
 *                     pacote padrão receberão o módulo CommonJS 
 *                     diretamente, enquanto aqueles que usam
 *                     pacote/módulo importarão o arquivo do wrapper do 
 *                     módulo ECMAScript.
 * 
 *      Se quisermos evitar o uso das extensões de arquivo .cjs e .mjs, 
 *      podemos fazer isso:
 * 
 *          "type": "module",
 *          "main": "./index.js",
 *          "exports": {
 *              ".": "./index.js",
 *              "./module": "./wrapper.js"
 *          },
*/
