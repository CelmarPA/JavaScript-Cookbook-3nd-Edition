"use strict";

/**
 *      Você quer encontrar todos os elementos em um documento da web 
 *      que compartilham o mesmo atributo.
 * 
 *      Use o seletor universal (*) em combinação com o seletor de 
 *      atributos para encontrar todos os elementos que têm um 
 *      atributo, independentemente do seu valor:
*/
const elementos = document.querySelectorAll("*[class]");

/**
 *      O seletor universal também pode ser usado para encontrar todos 
 *      os elementos com um atributo que tenha o mesmo valor atribuído:
*/
const vermelhos = document.querySelectorAll('*[class="vermelho"]');

/**
 *      A solução demonstra um seletor de consulta bastante elegante, 
 *      o seletor universal (*). O seletor universal avalia todos os 
 *      elementos, então é o que você quer usar quando precisa 
 *      verificar algo sobre cada elemento. Na solução, queremos 
 *      encontrar todos os elementos com um determinado atributo.
 * 
 *      Para testar se um atributo existe, tudo o que você precisa 
 *      fazer é listar o nome do atributo entre colchetes 
 *      ([atribnome]). Na solução, estamos primeiro testando se o 
 *      elemento contém o atributo class. Se contiver, ele é retornado 
 *      com a coleção de elementos:
 * 
 *      Em seguida, estamos obtendo todos os elementos com um valor de 
 *      atributo de classe vermelho. Se você não tiver certeza do nome 
 *      da classe, você pode usar o seletor de consulta de 
 *      correspondência de substring.
 * 
 *      Você também pode modificar a sintaxe para encontrar todos os 
 *      elementos que não têm um determinado valor. Por exemplo, para 
 *      encontrar todos os elementos div que não têm o nome da classe 
 *      de destino, use o operador de negação :not:
*/
const naoVermelho = document.querySelectorAll("div:not(.red)");
