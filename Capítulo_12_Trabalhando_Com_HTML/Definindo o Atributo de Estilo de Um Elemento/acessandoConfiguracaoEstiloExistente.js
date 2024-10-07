"use strict";

/**
 *      Extra: Acessando uma configuração de estilo existente
 * 
 *      Na maior parte, acessar valores de atributos existentes é tão 
 *      fácil quanto defini-los. Em vez de usar setAttribute(), use 
 *      getAttribute(). Por exemplo, para obter o valor da classe:
*/
const nomeClasse = elemento.getAttribute("class");

/**
 *      Obter acesso a uma configuração de estilo, no entanto, é muito 
 *      mais complicado, porque as configurações de estilo de um 
 *      elemento específico a qualquer momento são um composto de 
 *      todas as configurações mescladas em um todo. Este estilo 
 *      computado para um elemento é o que você provavelmente está 
 *      mais interessado quando quer ver configurações de estilo 
 *      específicas para o elemento a qualquer momento. Felizmente, há 
 *      um método para isso, window.getComputedStyle(), que retornará 
 *      os estilos computados atuais aplicados ao elemento:
*/
const style = window.getComputedStyle(elemento);

/**
 *      Avançado:
 * 
 *      Em vez de usar setAttribute() para adicionar ou modificar o 
 *      atributo, você pode criar um atributo e anexá-lo ao elemento 
 *      usando createAttribute() para criar um nó Attr, definir seu 
 *      valor usando a propriedade nodeValue e, em seguida, usar
 *      setAttribute() para adicionar o atributo ao elemento:
*/
const estiloAtributo = document.createAttribute("style");
estiloAtributo.nodeValue = "background-color: red";
elemento.setAttribute(estiloAtributo);

/**
 *      Você pode adicionar qualquer número de atributos a um elemento 
 *      usando createAttribute() e setAttribute(), ou setAttribute() 
 *      diretamente. Ambas as abordagens são igualmente eficientes,
 *      então, a menos que haja uma necessidade real, você 
 *      provavelmente vai querer usar a abordagem mais simples
 *      de definir o nome e o valor do atributo diretamente usando 
 *      setAttribute().
 * 
 *      Quando você usaria createAttribute()? Se o valor do atributo 
 *      for outra referência de entidade, como é permitido com XML, 
 *      você precisará usar createAttribute() para criar um nó Attr, 
 *      pois setAttribute() suporta apenas strings simples.
 */