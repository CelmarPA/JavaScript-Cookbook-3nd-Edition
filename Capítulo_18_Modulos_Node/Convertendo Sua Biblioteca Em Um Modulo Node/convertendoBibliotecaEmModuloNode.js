"use strict";

/**
 *      Você quer usar uma de suas bibliotecas no Node.
 * 
 *      Converta a biblioteca em um módulo Node. No Node, cada arquivo é 
 *      tratado como um módulo. Por exemplo, se a biblioteca for um 
 *      arquivo contendo uma função armazenada em /lib/ola.js:
*/
const ola = val => {
    return console.log(`Olá ${val}`);
};

/**
 *      Você pode convertê-lo para funcionar como um módulo Node com a 
 *      palavra-chave exports:
*/
module.exports = ola;

/**
 *      Alternativamente, também é possível exportar a função diretamente:
*/
modulo.exports = val => {
    return console.log(`Olá ${val}`);
};

/**
 *      Você pode então usar o módulo em sua aplicação:
*/
var ola1 = require("./lib/ola.js");

ola1("mundo"); // "Olá mundo"

/**
 *      O sistema de módulo padrão do Node é baseado no CommonJS, que usa 
 *      três construções: exports para definir o que é exportado da 
 *      biblioteca, require() para incluir o módulo no aplicativo e 
 *      module, que inclui informações sobre o módulo, mas também
 *      pode ser usado para exportar uma função diretamente.
 * 
 *      Se sua biblioteca retornar um objeto com várias funções e objetos 
 *      de dados, você pode atribuir cada um à propriedade com nome 
 *      comparável em module.exports, ou você pode retornar um objeto:
*/
const saudacao = {
    ola: val => {
        return console.log(`Olá ${val}!`);
    },
    ciao: val => {
        return console.log(`Ciao ${val}!`);
    }
};

module.exports = saudacao;

/**
 * ou:
*/
const ola1 = val => {
    return console.log(`Olá ${val}!`);
}

const ciao1 = val => {
    return console.log(`Ciao ${val}!`);
}

module.exports = { ola1, ciao1 };

/**
 *      E então acesse as propriedades do objeto diretamente:
*/
const saudacoes = require("./lib./saudacao.js");

saudacoes.ola("mundo"); // "Olá mundo!"
saudacoes.ciao("mondo"); // "ciao mundo!"
