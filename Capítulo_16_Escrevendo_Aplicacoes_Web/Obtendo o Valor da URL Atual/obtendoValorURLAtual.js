"use strict";

/**
 *      Seu aplicativo precisa ler o valor da URL atual.
 * 
 *      Use a propriedade href de window.location para ler o valor atual 
 *      do URL completo:
*/
const URL = window.location.href;

/**
 *      window.location fornece informações somente leitura sobre a URL 
 *      atual ou localização do documento. A propriedade href fornece a 
 *      URL completa, que inclui o protocolo (como HTTPS), nome do host, 
 *      o caminho para o documento atual e quaisquer strings de consulta. 
 *      Tudo junto, isso corresponderá ao que é exibido na barra de URL 
 *      do usuário:
*/

// Registra a URL
console.log(`A URL atual é ${URL}`);

/**
 *      A propriedade href não é a única útil. Se você já sabe que o 
 *      usuário está em seu site, pode ser mais útil acessar o pathname e 
 *      as propriedades de pesquisa:
*/

// user is at https://www.jseverywhere.io/example?page=2

const PATH = window.location.pathname;

console.log(`O caminho atual é ${PATH}`); // Registra /example/

const QUERY = window.location.search;

console.log(`O pesquisa atual é ${QUERY}`); // Registra ?page=2

/**
 *      A lista completa de propriedades somente leitura de window.
 *      location são:
 * 
 *          hash: Um valor de hash na URL, como #id
 * 
 *          host: O domínio mais a porta
 * 
 *          hostname: O domínio
 * 
 *          href: A URL completa
 * 
 *          origin: O protocolo, o nome do host e a porta
 *      
 *          pathname: O caminho do documento atual
 * 
 *          port: O valor do número da porta do servidor
 * 
 *          protocol: O protocolo (HTTP ou HTTPS)
 *          
 *          search: Valores da string de consulta
*/
