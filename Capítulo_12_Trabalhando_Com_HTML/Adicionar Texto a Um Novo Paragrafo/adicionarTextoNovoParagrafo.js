"use strict";

/**
 *      Você deseja criar um novo parágrafo com texto e inseri-lo no 
 *      documento.
 *      
 *      Use o método createTextNode para adicionar texto a um elemento:
*/
const novoParagrafo = document.createElement("p");
const texto = document.createTextNode("Conteúdo do Novo Paragrafo");
novoParagrafo.appendChild(texto);

/**
 * 
 *      O texto dentro de um elemento é, ele próprio, um objeto dentro 
 *      do DOM. Seu tipo é um nó Text e é criado usando um método 
 *      especializado, createTextNode(). O método recebe um parâmetro: 
 *      a string que contém o texto.
 * 
 *      O exemplo mostra uma página da web com um elemento div 
 *      contendo quatro parágrafos. O JavaScript cria um novo 
 *      parágrafo a partir do texto fornecido pelo usuário por meio de 
 *      um prompt. O texto poderia facilmente ter vindo de uma 
 *      comunicação de servidor ou outro processo.
 * 
 *      O texto fornecido é usado para criar um nó de texto, que é 
 *      então anexado como um nó filho ao novo parágrafo. O elemento 
 *      de parágrafo é inserido na página da web antesdo primeiro 
 *      parágrafo.
 *      
 *      Inserir texto fornecido pelo usuário diretamente em uma página 
 *      da web sem verificar o texto primeiro não é uma boa ideia. 
 *      Quando você deixa uma porta aberta, todos os tipos de coisas 
 *      desagradáveis ​​podem entrar. O exemplo apresentado aqui é 
 *      apenas para fins de demonstração.
*/
