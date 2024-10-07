"use strict";

/**
 *      Você deseja adicionar ou substituir diretamente um estilo 
 *      embutido em um elemento específico.
 * 
 *      Para alterar uma propriedade CSS como um estilo inline, 
 *      modifique o valor da propriedade por meio da propriedade
 *      style do elemento:
*/
elemento.style.backgroundColor = "red";

/**
 *      Para modificar uma ou mais propriedades CSS para um único 
 *      elemento, você pode usar setAttribute() e criar uma regra de 
 *      estilo CSS inteira:
*/
elemento.setAttribute("style", "background-color: red; color: white; border: 1px solid black");

/**
 *      Essas técnicas definem um valor de estilo inline para o 
 *      elemento HTML, que aparecerá dentro do próprio HTML. Para 
 *      demonstrar melhor, o seguinte JavaScript define um atributo
 *      style em um elemento com um ID de cartao:
*/
const cartao = document.getElementById("cartao");
cartao.setAttribute(
    "style",
    "background-color: #ecf0f1; color: #2c3e50;"
);

/**
 *      A saída HTML resultante inclui o valor de estilo embutido:
 * 
 *              <div id="card" style="background-color: #ecf0f1; 
 *              color: #2c3e50;">
 *                  ...
 *              </div>
*/

/**
 *      As propriedades CSS de um elemento podem ser modificadas em 
 *      JavaScript usando uma das três abordagens. Como a solução 
 *      demonstra, a abordagem mais simples é definir o valor da 
 *      propriedade diretamente usando a propriedade style do elemento:
*/
elemento.style.width = "500px";

/**
 *      Se a propriedade CSS contiver um hífen, como font-family ou 
 *      background-color, use a notação CamelCase para a propriedade:
*/
elemento.style.fontFamily = "Courier";
elemento.backgroundColor = "rgb(255, 0, 0)";

/**
 *      A notação CamelCase remove o traço e coloca em maiúscula a 
 *      primeira letra após o traço.
 * 
 *      Você também pode usar setAttribute() ou cssText para definir a 
 *      propriedade style. Isso é útil ao adicionar vários estilos: 
*/

// Usando setAttribute()
elemento.setAttribute("style", "font-family: Courier; background-color: yellow");

// Alternativamente aplique um valor a style.cssText
elemento.style.cssText = "font-family: Courier; background-color: yellow";

/**
 *      O método setAttribute() é uma maneira de adicionar um atributo 
 *      ou substituir o valor de um atributo existente para um 
 *      elemento de página da web. O primeiro argumento para o método 
 *      é o nome do atributo (automaticamente em minúsculas se o 
 *      elemento for um elemento HTML) e o novo valor do atributo.
 * 
 *      Ao definir o atributo style, todas as propriedades CSS que são 
 *      alteradas devem ser especificadas ao mesmo tempo, pois definir 
 *      o atributo apaga quaisquer valores definidos anteriormente. No 
 *      entanto, definir o atributo style usando setAttribute() não 
 *      apaga nenhuma configuração feita em uma folha de estilo ou 
 *      definida por padrão pelo navegador.
*/
