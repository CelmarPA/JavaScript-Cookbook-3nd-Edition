"use strict";

/**
 *      Seu site ou aplicativo usa JavaScript, o que pode aumentar 
 *      consideravelmente o tempo de carregamento em dispositivos 
 *      móveis e conexões lentas.
 * 
 *      Para sites que usam uma pequena quantidade de JavaScript em um 
 *      único arquivo, use uma ferramenta como UglifyJS para minificar 
 *      seu JavaScript. A minificação reduzirá o tamanho de um arquivo 
 *      JavaScript removendo caracteres desnecessários (como espaços em 
 *      branco). Para usar o UglifyJS, primeiro instale-o com npm:
 * 
 *          $ npm install uglify-js
 * 
 *      Em seguida, adicione um script ao seu arquivo package.json, 
 *      especificando o arquivo JavaScript de entrada e um nome para o 
 *      arquivo minificado:
 * 
 *          "scripts": {
 *              "minify": "uglifyjs index.js --output index.min.js"
 *           }
 * 
 *      Para sites e aplicativos maiores com vários arquivos 
 *      JavaScript, use uma ferramenta de agrupamento, como o Webpack, 
 *      para executar uma combinação de minificação, divisão de código, 
 *      agitação de árvore e carregamento lento.
 * 
 *      O Webpack automaticamente minimiza sua saída no modo de 
 *      produção, o que significa que nenhuma ferramenta de 
 *      configuração ou minificação específica é necessária.
 * 
 *      A divisão de código é o processo de gerar vários pacotes, para que páginas HTML ou
modelos carreguem apenas o código de que precisam. O seguinte arquivo webpack.config.js produzirá
dois arquivos JavaScript (index.bundle.js e secondary.bundle.js) para o diretório dist:
*/
