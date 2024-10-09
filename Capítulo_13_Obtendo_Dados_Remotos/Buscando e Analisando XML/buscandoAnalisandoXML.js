"use strict";

/**
 *      Você precisa recuperar um arquivo XML remoto e analisar seu 
 *      conteúdo.
 * 
 *      Use fetch junto com a API DomParser, que fornece a capacidade 
 *      de analisar XML de uma string. 
 * 
 *      Primeiro, você precisará usar fetch para solicitar o arquivo 
 *      XML. Neste exemplo, estou solicitando o feed XML da home page 
 *      do New York Times:
*/

// const { DOMParser } = require("xmldom");

const url = "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml";

async function fetchEParse() {
    const resposta = await fetch(url);
    const dados = await resposta.text();
    console.log(dados);
}

// fetchEParse();

/**
 *      Em seguida, use DOMParser para analisar a string XML retornada 
 *      e, em seguida, use os métodos DOM para consultar o documento em 
 *      busca de dados:
*/
async function fetchParse() {
    const resposta = await fetch(url);
    const dados = await resposta.text();
    const parser = new DOMParser();
    const XMLDocumento = parser.parseFromString(dados, "text/xml");
    console.log(XMLDocumento);
}

// fetchParse();

/**
 *      Ao usar fetch para recuperar XML, o documento é retornado como 
 *      texto simples. Você pode então usar a API DOMParser para 
 *      habilitar métodos DOM para consultar o documento e processar os 
 *      resultados.
 * 
 *      DOMParser permite que você interaja com o conteúdo XML usando 
 *      métodos de consulta DOM como getElementsByTagName. DOMParser 
 *      requer dois argumentos. O primeiro  argumento é a string a ser 
 *      analisada. O segundo argumento é um mimeType, que especifica o 
 *      tipo de documento. As opções mimeType são:
 * 
 *          • text/html
 *          • text/xml
 *          • application/xml
 *          • applicatiom/xhtml+html
 *          • image/svg+xml
 * 
 *      O exemplo a seguir estende o analisador XML para usar seletores 
 *      de consulta DOM para gerar os nomes dos artigos mais recentes 
 *      em uma página da web:
*/
(async () => {
    const url = "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml";

    // Busca e analisa o documento XML
    async function fetch_Parse() {
        const resposta = await fetch(url);
        const dados = await resposta.text();
        const parser = new DOMParser();
        const documentXML = parser.parseFromString(dados, "text/xml");
        
        return documentXML;
    }

    function mostrarTitulos(xml) {
        // Elemento HTML onde os resultados serão exibidos a marcação contém uma ul com um id de "resultados"
        const listaElemento = document.getElementById("resultados");
        
        // Obtém os títulos dos artigos cada um é encapsulado em uma tag <title> dentro de uma tag <item>
        const titulos = xml.querySelectorAll("item title");

        // Faz um loop em cada título no XML; anexa seu conteúdo de texto à lista HTML
        titulos.forEach(titulo => {
            const listaItems = document.createElement("li");
            listaItems.innerText = titulo.textContent;
            listaElemento.appendChild(listaItems);
        });
    }

    const xml = await fetch_Parse();

    mostrarTitulos(xml);
})();
