"use strict";

/**
 *      Você quer inserir marcação em uma página da web e escapar da 
 *      marcação (para que o navegador exiba os colchetes angulares em 
 *      vez de interpretá-los como tags HTML). Isso pode ser porque 
 *      você quer mostrar algum exemplo de marcação HTML, por exemplo, 
 *      em um artigo de tutorial. Ou pode ser porque você precisa 
 *      higienizar com segurança dados externos, como texto enviado 
 *      por um usuário ou retirado de um banco de dados.
 * 
 *      Use o método String.replaceAll() para converter colchetes 
 *      angulares (< >) nas entidades HTML nomeadas &lt; e &gt;. Você 
 *      precisará executar duas etapas, uma para cada substituição:
*/
const trechoHTMLOriginal = "<p>Este é um <span>parágrafo</span></p>";

// Obtém uma nova string sem os caracteres "<"
let trechoSeguroHTML = trechoHTMLOriginal.replaceAll("<", "&lt;");

// Obtém uma nova string sem os caracteres ">"
trechoSeguroHTML = trechoSeguroHTML.replaceAll(">", "&gt;");

// Mostre na página
document.getElementById("placeholder").innerHTML = trechoSeguroHTML;


/**
 *      Se você examinar a string agora, verá que ela contém o texto 
 *      “<p>Este é um <span>parágrafo</span></p>”, que aparecerá como 
 *      você espera (com colchetes angulares mostrados) na página da 
 *      web.
 * 
 *      Você pode executar ambas as substituições de strings em uma 
 *      etapa, desde que consiga manter o código legível:
*/
trechoSeguroHTML = trechoHTMLOriginal.replaceAll("<", "&lt;").replaceAll(">", "&gt;");

/**
 *      O primeiro replaceAll() retorna uma nova string, e o código 
 *      chama replaceAll() naquela segunda string para obter uma 
 *      terceira string neste caso. Essa técnica de chamar um método 
 *      em um valor que é retornado de um método é chamada de 
 *      encadeamento de métodos.
*/
