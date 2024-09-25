"use strict";

/**
 *      Você quer criar um objeto do tipo array que nunca contenha mais 
 *      de uma cópia do mesmo valor.
 * 
 *      Crie um objeto Set. Ele ignora silenciosamente as tentativas de 
 *      adicionar o mesmo item mais de uma vez, sem gerar um erro.
 * 
 *      O Set não é um array, mascomo um array é uma coleção iterável de 
 *      elementos. Você pode adicionar elementos a um Set um de cada vez 
 *      com o método add(), ou você pode passar um array no construtor 
 *      Set para adicionar vários itens de uma vez:
*/

// Começa com seix elementos
const animais = new Set(["elefante", "tigre", "leão", "zebra", "gato", "cachorro"]);

// Adiciona mais dois
animais.add("coelho");
animais.add("ganso");

// Nada acontece porque esse item já está no Set
animais.add("tigre");

// Itera por Set, da mesma forma como seria em um array
for (const animal of animais) {
    console.log(animal); 
}

/**
 *      O objeto Set não é um array. Ao contrário da classe Array, que é 
 *      abastecida com trinta e tantos métodos úteis, a classe Set 
 *      oferece muito menos. Você pode usar add() para inserir um item, 
 *      delete() para remover um, has() para verificar se um item está no 
 *      Set e clear() para remover todos os itens de uma vez. Não há 
 *      métodos para classificar, filtrar, transformar ou copiar.
 * 
 *      No entanto, se você precisar processar seu objeto Set como um 
 *      array, é fácil o suficiente para fazer a conversão passando seu 
 *      Set para o método estático Array.from():
*/

// Converte um array para um Set
const animalSet = new Set(["elefante", "tigre", "leão", "zebra", "gato", "cachorro"]);

// Converte um Set para um array
const animalArray = Array.from(animalSet);

console.log(animalArray); // ['elefante', 'tigre', 'leão', 'zebra', 'gato', 'cachorro']

/**
 *      Na verdade, você pode converter um Set em um objeto Array e 
 *      vice-versa quantas vezes quiser, sem nenhum custo além do 
 *      possível desempenho (se você tiver uma lista muito longa de 
 *      itens).
 * 
 *      Para contar o número de itens em uma coleção Set ou Map, você usa 
 *      a propriedade size. Isso é diferente de arrays, que têm uma 
 *      propriedade length.
*/
