"use strict";

/**
 *      Você quer armazenar facilmente informações para uma única 
 *      sessão, sem incorrer em problemas de tamanho e contaminação 
 *      entre páginas associados aos cookies.
 * 
 *      Use a funcionalidade sessionStorage do DOM Storage:
*/
sessionStorage.setItem("nome", "Franco");
sessionStorage.cidade = "Pittsburgh";

// Retorna 2
console.log(sessionStorage.length);

// Recupera valores individuais
const nome = sessionStorage.getItem("nome");
const cidade = sessionStorage.getItem("cidade");

console.log(`O nome armazenado é ${nome}`);
console.log(`A cidade armazenada é ${cidade}`);

// Remove um item individual do armazenamento
sessionStorage.removeItem("nome");

// Remove todos os itens do armazenamento
sessionStorage.clear();

// Retorna 0
console.log(sessionStorage.length);

/**
 *      sessionStorage nos permite armazenar facilmente informações no 
 *      navegador do usuário para uma única sessão. Uma sessão dura 
 *      enquanto uma única aba do navegador estiver aberta. Uma vez que 
 *      o usuário fecha o navegador ou aba, a sessão termina. Abrir uma 
 *      nova aba da mesma página irá iniciar uma nova sessão do 
 *      navegador.
 * 
 *      O próximo exemplo armazena informações de um formulário em um 
 *      cookie, localStorage e sessionStorage.
*/
