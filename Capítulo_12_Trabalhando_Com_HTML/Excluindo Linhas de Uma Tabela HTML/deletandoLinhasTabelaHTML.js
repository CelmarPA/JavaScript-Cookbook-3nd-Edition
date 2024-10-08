"use strict";

/**
 *      Você deseja remover uma ou mais linhas de uma tabela HTML.
 * 
 *      Use o método removeChild() em uma linha de tabela HTML, e todos 
 *      os elementos filhos, incluindo as células da linha, também 
 *      serão removidos:
*/
const pai = linha.parentNode;
const linhaVelha = pai.removeChild(pai);

/**
 *      Quando você remove um elemento do documento da web, você não 
 *      está apenas removendo o elemento, você está removendo todos os 
 *      seus elementos filhos. Nesta poda de DOM, você obtém uma 
 *      referência ao elemento removido se quiser processar seu 
 *      conteúdo antes que ele seja completamente descartado. O último 
 *      é útil se você quiser fornecer algum tipo de método de desfazer
 *      no caso de você acidentalmente selecionar a linha errada da 
 *      tabela.
 * 
 *      Para demonstrar a natureza da poda do DOM, no exemplo a seguir, 
 *      os métodos DOM createElement() e createTextNode() são usados ​​
 *      para criar linhas e células da tabela, bem como o texto 
 *      inserido nas células. Conforme cada linha da tabela é criada, 
 *      um manipulador de eventos é anexado ao evento de clique da 
 *      linha. Se qualquer uma das novas linhas da tabela for clicada, 
 *      uma função é chamada e remove a linha da tabela. O elemento 
 *      da linha da tabela removido é então percorrido, e os dados em 
 *      suas células são extraídos e concatenados em uma string, que é 
 *      impressa.
*/
