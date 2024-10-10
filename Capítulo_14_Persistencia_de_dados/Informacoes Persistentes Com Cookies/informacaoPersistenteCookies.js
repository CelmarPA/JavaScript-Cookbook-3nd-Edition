"use strict";

/**
 *      Você precisa ler ou definir o valor de um cookie do navegador.
 * 
 *      Use document.cookie para definir e recuperar valores de cookies:
*/
document.cookie = "autor=Adam";
console.log(document.cookie);

/**
 *      Para codificar strings, use encodeURIComponent, que removerá 
 *      quaisquer vírgulas, ponto e vírgula ou espaços em branco:
*/
const livro = encodeURIComponent("JavaScript Cookbook");
document.cookie = `titulo=${book}`;
console.log(document.cookie);

// Registros titulo=JavaScript%20Cookbook

/**
 *      As opções podem ser adicionadas ao final do valor do cookie e 
 *      devem ser separadas por um ponto e vírgula:
*/
document.cookie = "usuario=Abigail; max-age=86400; path=/";

/**
 *      Para excluir um cookie, defina uma data de expiração para o 
 *      cookie que já ocorreu:
*/
function apagarCookie(key) {
    const cookie = `${key}=;expires=Thu, 01 Jan 1970 00:00:00 UTC`;
    document.cookie = cookie;
}

/**
 *      Cookies são pequenos pedaços de dados que são armazenados no 
 *      navegador. Eles são frequentemente definidos a partir do 
 *      aplicação do servidor e enviados ao servidor com quase todas as 
 *      solicitações. Em um navegador eles são acessados ​​por meio do 
 *      objeto document.cookie.
 * 
 *      Os cookies aceitam as seguintes opções, cada uma separada por 
 *      ponto e vírgula:
 *          
 *          domain: O domínio onde o cookie é acessível. Se não for 
 *                  definido, o padrão é o atual local do host. 
 *                  Especificar um domínio permite que o cookie seja 
 *                  acessado em subdomínios.
 * 
 *          expires: Define um horário em que o cookie expira. Aceita 
 *                   uma data no formato GMTString.
 * 
 *          max-age: Define o período de tempo em que o cookie é 
 *                   válido. Aceita um valor em segundos.
 * 
 *          path: O caminho em que o cookie é acessível (como / ou /
 *                app). Se não for especificado, o cookie padrão é o 
 *                caminho atual.
 * 
 *          secure: Se definido como true, o cookie será transmitido 
 *                  apenas por https.
 * 
 *          samesite: O padrão é strict. Se definido como strict, o 
 *                    cookie não será enviado em cross-site browsing. 
 *                    Como alternativa, lax enviará cookies em 
 *                    solicitações GET de nível superior.    
 * 
 *      No exemplo a seguir, o usuário pode inserir um valor que é 
 *      armazenado como um cookie. Eles podem então recuperar o valor 
 *      de uma chave especificada e excluir o valor.
*/

// Define o cookie
function definirDado() {
    const chaveForm = document.getElementById("chave").value;
    const valorForm = document.getElementById("valor").value;

    const cookieVal = `${chaveForm}=${encodeURIComponent(valorForm)}`;
    document.cookie = cookieVal;
}

// Obtém o valor do cookie para uma chave específica
function obterDado() {
    const chave = document.getElementById("chave").value;
    const cookie = document.getElementById("cookieStr");
    
    cookie.innerHTML = "";

    const ChaveValor = chave.replace(/([.*+?^=!:${}()|[\]/\\])/g, '\\$1');
    const regex = new RegExp(`(?:^|;)\\s?${keyValue}=(.*?)(?:;|$)`, 'i');
    const correspondencia = document.cookie.match(regex);
    const valor = (correspondencia && decodeURIComponent(correspondencia[1])) || "";
    cookie.innerHTML = `<p>${valor}</p>`;
}

// Apaga o cookie para chave específica
function apagarDado() {
    const chave = document.getElementById("chave").value;
    document.getElementById("cookieStr").innerText = "";

    const cookie = `${chave}=; expires=Thu, 01 Jan 1970 00:00:00 UTC`
    document.cookie = cookie;
}

document.getElementById("definir").onclick = definirDado;
document.getElementById("obter").onclick = obterDado;
document.getElementById("apagar").onclick = apagarDado;
