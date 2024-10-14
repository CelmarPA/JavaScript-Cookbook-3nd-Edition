"use strict";

/**
 *      Você deseja modificar o conteúdo de um elemento SVG do script 
 *      dentro da página da web.
 * 
 *      Se o SVG estiver incorporado diretamente na página da web, 
 *      acesse o elemento e seus atributos usando a mesma 
 *      funcionalidade que você usaria com qualquer outro elemento da 
 *      página da web:
*/
const quadrado = document.getElementById("quadrado");
quadrado.setAttribute("width", "500");

/**
 *      No entanto, se o SVG estiver em um arquivo SVG externo 
 *      incorporado na página por meio de um elemento objeto, você 
 *      precisa obter o documento para o arquivo SVG externo para 
 *      acessar os elementos. A técnica requer detecção de objetos 
 *      porque o processo difere por navegador:
*/
window.onload = function onLoad() {
    const objeto = document.getElementById("objeto");
    let svgdoc;

    try {
        svgdoc = objeto.contentDocument;
    } catch (e) {
        try {
            svgdoc = objeto.getSVGDocument();
        } catch (erro) {
            console.log(erro, "SVG no objeto não suportado neste ambiente");
        }
    }

    if (!svgdoc) return;

    const quadrado = svgdoc.getElementById("quadrado");
    quadrado.setAttribute("width", "900");
};

/**
 *      A primeira opção listada na solução acessa SVG incorporado em 
 *      um arquivo HTML. Você pode acessar elementos SVG usando os 
 *      mesmos métodos que usou para acessar elementos HTML.
 * 
 *      A segunda opção é um pouco mais envolvida e depende da 
 *      recuperação do objeto document para o documento SVG. A primeira 
 *      abordagem tenta acessar a propriedade contentDocument no 
 *      objeto. Se isso falhar, o aplicativo tenta acessar o documento 
 *      SVG usando getSVGDocument(). Depois de ter acesso ao objeto 
 *      document SVG, você pode usar os mesmos métodos DOM que usaria 
 *      com elementos nativos da página da web.
*/
