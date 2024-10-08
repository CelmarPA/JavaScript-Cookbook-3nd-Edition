"use strict";

/**
 *      Você deseja ocultar um elemento de página existente e seus 
 *      filhos até que sejam necessários.
 * 
 *      Você pode definir a propriedade visibility do CSS para 
 *      ocultar e mostrar o elemento:
*/
mensagem.style.hidden = "visible"; // Para mostrar
mensagem.style.hidden = "hidden"; // Para ocultar

/**
 *      Ou você pode usar a propriedade display do CSS:
*/
mensagem.style.display = "block"; // Para mostrar
mensagem.style.display = "none"; // Para remover da exibição

/**
 *      Tanto as propriedades visibility and display do CSS podem ser 
 *      usadas para ocultar e mostrar elementos. Há uma grande 
 *      diferença entre os dois que impacta qual você irá usar.
 * 
 *      A propriedade visibility controla a renderização visual do 
 *      elemento, mas sua presença também afeta outros elementos. 
 *      Quando um elemento está oculto, ele ainda ocupa espaço na 
 *      página. A propriedade display, por outro lado, remove o 
 *      elemento completamente do layout da página.
 * 
 *      A propriedade display pode ser definida para vários valores 
 *      diferentes, mas quatro são de particular interesse para nós:
 * 
 *          none: Quando display é definido como none, o elemento é 
 *                removido completamente da exibição.
 * 
 *          block: Quando display é definido como block, o elemento é 
 *                 tratado como um elemento block, com uma quebra de 
 *                 linha antes e depois.
 * 
 *          inline-block: Quando display é definido como inline-block, 
 *                        o conteúdo é formatado como um elemento block,
 *                        que é então fluído como conteúdo inline.
 * 
 *          inherit: Esta é a exibição padrão e especifica que a 
 *                   propriedade display é herdada do pai do elemento.
 * 
 *      A menos que você esteja usando posicionamento absoluto com o 
 *      elemento oculto, você vai querer usar a propriedade CSS 
 *      display. Caso contrário, o elemento afetará o layout da página, 
 *      empurrando quaisquer elementos que seguem para baixo e para a 
 *      direita, dependendo do tipo de elemento oculto.
*/
