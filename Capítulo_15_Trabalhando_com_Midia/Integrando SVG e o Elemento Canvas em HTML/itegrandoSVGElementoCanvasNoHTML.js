"use strict";

/**
 *      Você quer usar o elemento canvas e SVG juntos em uma página da 
 *      web. Uma opção é incorporar o SVG e o elemento canvas 
 *      diretamente na página HTML e, em seguida, acessar o elemento 
 *      canvas do script dentro do SVG.
 * 
 *      Quando o elemento SVG é incorporado na página da web atual, 
 *      você pode acessar elementos HTML de dentro do SVG. No entanto, 
 *      você também pode incorporar elementos diretamente no SVG, 
 *      usando o elemento foreignObject SVG. Este elemento nos permite 
 *      incorporar XHTML, MathML, RDF ou qualquer outra sintaxe baseada 
 *      em XML.
 * 
 *      Extra: Canvas? Ou SVG?
 * 
 *      Por que você usaria Canvas em vez de SVG, ou SVG em vez de 
 *      Canvas? O elemento canvas é mais rápido em animações do tipo 
 *      frame. Com cada animação, o navegador só precisa redesenhar os 
 *      pixels alterados, não recriar a cena inteira. No entanto, a 
 *      vantagem que você obtém com a animação do elemento canvas 
 *      diminui quando você tem que suportar uma variedade de tamanhos 
 *      de tela, de smartphone a monitor grande. O SVG escala 
 *      lindamente.
 * 
 *      Outra vantagem do SVG é que ele figura em visualizações de 
 *      dados ricas com a assistência de bibliotecas poderosas. Mas 
 *      então, o Canvas é usado com sistemas 3D, como WebGL.
 * 
 *      Um uso de SVG e Canvas juntos é fornecer uma reserva para o 
 *      elemento canvas: o SVG grava no DOM e persiste mesmo se o 
 *      JavaScript estiver desativado, enquanto o elemento canvas não.
*/