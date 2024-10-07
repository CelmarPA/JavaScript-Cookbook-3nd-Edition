"use strict";

/**
 *      Você deseja fazer um loop no nodeList retornado de uma chamada 
 *      para querySelectorAll().
 * 
 *      Em navegadores modernos, você pode usar forEach() ao trabalhar 
 *      com um NodeList (a coleção retornada por querySelectorAll()):
*/

// Usa querySelectorAll para encontrar todos os itens listados na página
const items = document.querySelectorAll("li");

items.forEach(item => {
    console.log(item.firstChild.data);
});

/**
 *      forEach() é um método de array, mas querySelectorAll() produz um 
 *      NodeList que é um tipo diferente de objeto do que um array. 
 *      Felizmente, navegadores modernos têm suporte incorporado para 
 *      forEach, permitindo-nos iterar sobre um NodeList como se fosse um 
 *      array.
 * 
 *      Infelizmente, o Internet Explorer (IE) não suporta o uso do 
 *      forEach dessa forma. Se você gostaria de ter suporte no IE, a 
 *      abordagem recomendada é incluir um polyfill que usa um loop for 
 *      padrão sob o capô:
*/
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

/**
 *      No polyfill, verificamos a existência de 
 *      NodeList.prototype.forEach. Se ele não existir, um método forEach 
 *      é adicionado ao protótipo NodeList que usa um loop for para 
 *      iterar sobre os resultados de uma consulta DOM. Ao fazer isso, 
 *      você pode usar a sintaxe forEach livremente em sua base de código.
*/
