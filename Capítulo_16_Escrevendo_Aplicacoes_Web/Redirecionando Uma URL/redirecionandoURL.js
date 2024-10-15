"use strict";

/**
 *      Você precisa usar JavaScript para direcionar um usuário para uma 
 *      página diferente.
 * 
 *      Use o método assign ou replace window.location, dependendo do 
 *      objetivo do redirecionamento:
*/

// Encaminha o usuário para uma nova página e preservar o histórico do navegador
window.location.assign("https://www.exemplo.com");

// Encaminha o usuário para uma nova página, mas não preservar a página atual no histórico
window.location.replace("https://www.exemplo.com");

/**
 *      O método window.location.assign encaminhará um usuário para uma 
 *      nova URL, mas preservará a página de roteamento no histórico do 
 *      navegador. Isso significa que um usuário poderá usar o botão 
 *      Voltar do navegador para navegar de volta para a página. Por 
 *      outro lado, window.location tion.replace substituirá a URL atual 
 *      no histórico, desabilitando a capacidade de retornar para a 
 *      página atual.
 * 
 *      Ao usar métodos window.location, você pode rotear um usuário para 
 *      uma nova URL usando JavaScript. Isso permite que você redirecione 
 *      um usuário ou redirecione um usuário com base em uma interação de 
 *      página. assign e replace não são os únicos métodos 
 *      window.location à sua disposição. A lista completa de métodos é a 
 *      seguinte:
 * 
 *          .assign(): Navega o navegador do usuário para uma URL 
 *                     fornecida
 * 
 *          .reload(): Recarrega a página
 * 
 *          .replace(): Navega o navegador do usuário para uma URL 
 *                      fornecida e remove o documento atual do histórico 
 *                      do navegador
 * 
 *          toString(): Retorna a URL atual como uma string
 * 
 *      Ao aproveitar esses métodos, você poderá usar JavaScript para 
 *      manipular a  rota da página, o que pode fornecer funcionalidade 
 *      útil para UIs de aplicativos e roteamento interativo. Embora 
 *      esses recursos possam ser muito úteis ao desenvolver aplicativos, 
 *      redirecionamentos de página inteira devem sempre ser feitos com 
 *      um redirecionamento HTTP com o código de status apropriado de 301 
 *      para redirecionamentos permanentes ou 302 para redirecionamentos
 *      temporários.
*/
