"use strict";

/**
 *      Você deseja atualizar as regras CSS aplicadas a um elemento 
 *      alterando seu valor de classe.
 * 
 *      Use a propriedade classList de um elemento para adicionar, 
 *      remover e alternar valores de classe:
*/
const elemento = document.getElementById("elemento-exemplo");

// Adiciona uma nova classe
elemento.classList.add("nova-classe");

// Remove uma classe existente
elemento.classList.remove("classe-existente");

// if me-alterar estiver presente é removido, se não é adicionado
elemento.classList.toggle("me-alterar");

/**
 *      Usar classList permite que você manipule facilmente as 
 *      propriedades de classe de um elemento selecionado. Isso pode 
 *      ser útil para atualizar ou trocar estilos sem usar CSS em 
 *      linha. Às vezes, pode ser útil verificar se um elemento já tem 
 *      um valor de classe aplicado, o que pode ser feito com o método 
 *      contains:
*/
if (elemento.classList.contains("classe-nova")) {
    elemento.classList.remove("classe-nova")
}

/**
 *      Também é possível adicionar, remover ou alternar várias 
 *      classes, passando-as cada uma como propriedades individuais ou 
 *      usando um operador de propagação:
*/

// Adiciona multiplas classes
elemento.classList.add("minha-classe", "outra-classe");

// Remove multiplas classes com operador de propagração
const classes = ["minha-classe", "outra-classe"];
div.classList.remove(...classes);
