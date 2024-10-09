"use strict";

/**
 *      Você deseja solicitar uma imagem do lado do servidor como dados 
 *      binários.
 * 
 *      Obter dados binários por meio de uma solicitação fetch é uma 
 *      questão de definir o tipo de resposta para blob e, em seguida, 
 *      manipular os dados quando retornados. Na solução, os dados são 
 *      então convertidos e carregados em um elemento img:
*/
async function fetchImagem() {
    // const url = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png";
    const url = "logo.png"
    const resposta = await fetch(url);
    const blob = await resposta.blob();
    
    // Adiciona url retornada ao elemento de imagem
    const img = document.getElementById("resultado");
    img.src = URL.createObjectURL(blob);
}

fetchImagem();

/**
 *      Um benefício da especificação CORS é o suporte para dados 
 *      binários (também conhecidos como arrays tipados) em 
 *      solicitações de busca. O principal requisito para uma 
 *      solicitação binária é definir o tipo de resposta para um dos 
 *      seguintes:
 * 
 *          arraybuffer: Buffer de dados binários brutos de comprimento 
 *                       fixo
 *      
 *          blob: Dados brutos imutáveis ​​semelhantes a arquivos
 * 
 *      Na solução, fui usado o método URL.createObjectURL() para 
 *      converter o blob em um DOMString (geralmente mapeado para 
 *      JavaScript String) com a URL do objeto passado. A URL é 
 *      atribuída à propriedade src do elemento img.
 */