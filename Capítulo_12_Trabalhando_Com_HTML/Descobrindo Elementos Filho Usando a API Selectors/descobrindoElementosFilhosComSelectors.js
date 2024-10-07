"use strict";

/**
 *      Você quer obter uma lista de todas as instâncias de um 
 *      elemento filho, como elementos img, que são descendentes de um 
 *      elemento pai, como elementos article, sem ter que percorrer
 *      uma coleção inteira de elementos.
 * 
 *      Use a API Selectors e acesse os elementos img contidos nos 
 *      elementos article usando strings seletoras no estilo CSS:
*/
const imagens = document.querySelectorAll("article img");

/**
 *      Existem dois métodos de API de consulta de seletor. O 
 *      primeiro, querySelectorAll(), é demonstrado na solução; o 
 *      segundo é querySelector(). A diferença entre os dois é que 
 *      querySelectorAll() retorna todos os elementos que correspondem 
 *      aos critérios do seletor, enquanto querySelector() retorna 
 *      apenas o primeiro resultado encontrado.
 * 
 *      A sintaxe do seletor é derivada da sintaxe do seletor CSS, 
 *      exceto que em vez de estilizar os elementos selecionados, eles 
 *      são retornados ao aplicativo. No exemplo, todos os elementos 
 *      img que são descendentes de elementos article são retornados. 
 *      Para acessar todos os elementos img independentemente do 
 *      elemento pai, use:
*/
const imgs = document.querySelectorAll("img");

/**
 *      Na solução, você obterá todos os elementos img que são 
 *      descendentes diretos ou indiretos de um elemento article. Isso 
 *      significa que se o elemento img estiver contido em um div que 
 *      está dentro de um article, o elemento img estará entre aqueles 
 *      retornados:
 * 
 *      <article>
 *          <div>
 *              <img src="..." />
 *          </div>
 *      </article>
 * 
 *      Se você quiser apenas os elementos img que são filhos diretos 
 *      de um elemento article, use o seguinte:
*/
const imagens1 = document.querySelectorAll("article > img");

/**
 *      Se você estiver interessado em acessar todos os elementos img 
 *      que são imediatamente seguidos por um parágrafo, use:
*/
const imgs1 = document.querySelectorAll("img + p")

/**
 *      Se você estiver interessado em um elemento img que tenha um 
 *      atributo alt vazio, use o seguinte:
*/
const imagens2 = document.querySelectorAll('img[alt=""]');

/**
 *      Se você estiver interessado apenas em elementos img que não 
 *      tenham um atributo alt vazio, use:
*/
const imgs2 = document.querySelectorAll('img:not([alt="])');

/**
 *      O pseudoseletor de negação (:not) é usado para encontrar todos 
 *      os elementos img com atributos alt que não estejam vazios.
 *      Ao contrário da coleção retornada com getElementsByTagName(), a
 *      coleção de elementos retornados de querySelectorAll() não é 
 *      uma coleção “ativa”. As atualizações na página não são      
 *      refletidas na coleção se as atualizações ocorrerem após a
 *      coleção ser recuperada.
 * 
 *      Embora a API Selectors seja uma criação maravilhosa, ela não 
 *      deve ser usada para todas as consultas de documentos. Para 
 *      manter o desempenho dos seus aplicativos, recomendo sempre 
 *      usar a consulta mais restritiva possível ao acessar elementos. 
 *      Por exemplo, é mais eficiente (significando mais rápido para o 
 *      navegador) usar getElementById() para obter um elemento
 *      específico dado um identificador do que usar querySelector
 *      All() para o mesmo elemento.
*/
