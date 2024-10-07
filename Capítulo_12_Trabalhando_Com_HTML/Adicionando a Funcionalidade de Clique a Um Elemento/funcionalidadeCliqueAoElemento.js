"use strict";

/**
 *      Você precisa adicionar a funcionalidade JavaScript quando um 
 *      usuário clica em um botão, link ou elemento na página.
 * 
 *      Adicione um ouvinte de evento de clique para o elemento:
 */

// Define uma função manipuladora de evento
const manipuladorClique = (evento) => {
    window.alert(`O elemento ${evento.currentTarget.nodeName} foi clicado!`);
};

// Seleciona o elemento
const botao = document.getElementById("btn-clique");

// Adiciona o ouvinte de evento para o elemento e chama a função manipuladorClique
botao.addEventListener("click", manipuladorClique);

/**
 *      Por padrão, você deve usar um elemento de botão para 
 *      manipuladores de eventos clicáveis, pois é a solução mais 
 *      acessível para manipular eventos de clique. O elemento de 
 *      botão pode ser estilizado para aparecer como um link, se 
 *      necessário para o design do aplicativo. No entanto, é 
 *      apropriado usar um elemento quando o comportamento de fallback 
 *      de vincular a uma página, caso o JavaScript falhe ao carregar, 
 *      esse é o comportamento desejado. Ao fazer isso, o método de 
 *      evento preventDefault permite que você substitua o 
 *      comportamento de link padrão:
*/
const manipuladorCliques = (evento) => {
    evento.preventDefault();
    window.alert(`O elemento ${evento.currentTarget.nodeName} foi clicado!`);
};

const href = document.getElementById("link-clique");
href.addEventListener("click", manipuladorCliques);

/**
 *      Em casos raros, pode ser desejável tornar um elemento de 
 *      bloco, como um div clicável. Eu recomendaria fazer isso com 
 *      moderação, em favor do elemento de botão sempre que possível.
 * 
 *      No entanto, para essas ocasiões, você precisará garantir que a 
 *      funcionalidade seja acessível para aqueles que usam leitores 
 *      de tela e navegação por teclado. Primeiro, em sua marcação, 
 *      aplique uma função de botão e um valor tabindex. A propriedade 
 *      role informará usuários de leitores de tela que este é um 
 *      elemento clicável, enquanto o tabindex tornará o elemento 
 *      navegável pelo teclado:
 * 
 *      <div tabindex="0" role="button" id="div-clique">Clique!</div>
 * 
 *      Neste caso, usamos um manipulador de eventos keydown. Isso 
 *      permitirá que usuários de teclado interajam com o elemento:
*/
const manipuladorCliqueDiv = (evento) => {
    window.alert(`O elemento ${evento.currentTarget.nodeName} foi clicado!`);
};

const divClicavel = document.getElementById("div-clique");
divClicavel.addEventListener("click", manipuladorCliqueDiv);

// ao usar um div adicione um ouvinte de evento keydown para usuários de teclado
divClicavel.addEventListener("keydown", (event) => {
    if (event.code === "Space" || event.code === "Enter") {
        divClicavel.click();
    }
});
