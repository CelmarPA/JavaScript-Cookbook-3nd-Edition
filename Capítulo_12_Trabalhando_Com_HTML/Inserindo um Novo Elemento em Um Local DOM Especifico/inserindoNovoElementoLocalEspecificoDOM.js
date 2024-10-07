"use strict";

/**
 *      Você deseja inserir um novo parágrafo logo antes do terceiro 
 *      parágrafo dentro de um elemento div.
 * 
 *      Use algum método para acessar o terceiro parágrafo, como 
 *      getElementsByTagName(), para obter todos os parágrafos para um 
 *      elemento div. Em seguida, use os métodos DOM createElement() e
 *      insertBefore() para adicionar o novo parágrafo logo antes do
 *      terceiro parágrafo existente:
*/

// Obtém a div alvo
const div = document.getElementById("alvo");

// Recupera uma colção de parágrafos
const paragrafos = document.getElementsByTagName("p");

// Cria o elemeno e adiciona o texto a ele
const novoParagrafo = document.createElement("p");
const texto = document.createTextNode("Conteúdo Novo Parágrafo");
novoParagrafo.appendChild(texto);

// Se o terceiro parágrafo existir, inseri o novo elemento antes, caso contrário adiciona o parágrafo ao final da div
if (paragrafos[2]) {
    div.insertBefore(novoParagrafo, paragrafos[2]);
} else {
    div.appendChild(novoParagrafo);
}

/**
 *      O método document.createElement() cria qualquer elemento HTML, 
 *      que então pode ser inserido ou anexado na página. Na solução, 
 *      o novo elemento de parágrafo é inserido antes de um parágrafo 
 *      existente usando insertBefore().
 * 
 *      Como estamos interessados ​​em inserir o novo parágrafo antes 
 *      do terceiro parágrafo existente, precisamos recuperar uma 
 *      coleção de parágrafos do elemento div, verificar para ter 
 *      certeza de que um terceiro parágrafo existe e, em seguida, 
 *      usar insertBefore() para inserir o novo parágrafo antes do 
 *      existente. Se o terceiro parágrafo não existir, podemos anexar 
 *      o elemento ao final do elemento div usando appendChild().
*/
