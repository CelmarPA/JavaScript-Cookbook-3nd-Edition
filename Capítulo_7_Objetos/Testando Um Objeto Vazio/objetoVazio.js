"use strict";

/**
 *      Você quer determinar se um objeto está vazio (não tem 
 *      propriedades).
 * 
 *      Obtenha uma matriz de propriedades usando Object.keys() e   
 *      verifique se o length é 0:
*/
const objetoVazio = {};

if (Object.keys(objetoVazio).length === 0) {
    // Esse código irá executar porque não há propriedades no objeto
}

const objetoComPropriedade = { preco: 47.99 };

if (Object.keys(objetoComPropriedade).length === 0) {
    // Esse código não irá executar porque o objeto não está vazio
}

/**
 *      É possível criar um objeto vazio com sintaxe de objeto literal:
*/
const objetoVazio2 = {};

/**
 *      ou criando uma instância de Object com new:
*/
const objetoVazio3 = new Object();

/**
 *      Objetos vazios também podem surgir de outros métodos menos 
 *      comuns, como pegar um objeto existente e remover propriedades com 
 *      o operador delete:
*/
delete objetoComPropriedade.preco;

if (Object.keys(objetoComPropriedade).length === 0) {
    // Esse código executa, porque o objeto teve sua propriedade removida
}

/**
 *      Como os objetos são tipos de referência, você não pode 
 *      simplesmente comparar um objeto vazio com outro. Por exemplo, 
 *      este teste não reconhecerá que seu objeto desconhecido está vazio:
*/
const objetoDesconhecido = {};

if (objetoDesconhecido === objetoVazio) {
    // Nós nunca chegaremos aqui
    // Mesmo que objetoDesconhecido sejá vazio, como objetoVazio, ele tem uma referência diferente ao um local diferente na memória
}
