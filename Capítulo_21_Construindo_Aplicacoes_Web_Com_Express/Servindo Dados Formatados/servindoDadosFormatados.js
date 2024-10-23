"use strict";

/**
 *      Em vez de exibir uma página da web ou enviar texto simples, 
 *      você deseja retornar dados formatados, como XML, para o 
 *      navegador.
 * 
 *      Use módulo(s) Node para ajudar a formatar os dados. Por 
 *      exemplo, se você quiser retornar XML, você pode usar um módulo 
 *      para criar os dados formatados:
*/
const express = require("express");
const construtor = require("xmlbuilder");

const app = express();
const port = process.env.PORT || "3000";

const xml = construtor
    .create("resources")
    .ele("resource")
    .ele("title", "ECMA-262 Edição 10")
    .up()
    .ele("url", "https://www.ecma-international.org/ecma-262/10.0/index.html")
    .up()
    .end({ pretty: true });

/**
 *      Em seguida, crie o cabeçalho apropriado para acompanhar os 
 *      dados e retorne os dados ao navegador:
*/
app.get("/", (req, res) => {
    res.setHeader("Content-Type", "application/xml");
    res.end(xml.toString(), "utf-8");
});

app.listen(port, () => console.log(`Ouvindo na porta ${port}!`))

/**
 *      Servidores da Web frequentemente fornecem recursos estáticos ou 
 *      gerados pelo lado do servidor, mas com a mesma frequência, o 
 *      que é ret  ornado ao navegador são dados formatados que são 
 *      então processados ​​na página da Web antes da exibição. 
 * 
 *      Existem dois elementos-chave para gerar e retornar dados 
 *      formatados. O primeiro é usar qualquer biblioteca do Node para 
 *      simplificar a geração dos dados, e o segundo é garantir que os 
 *      dados do cabeçalho enviados com os dados sejam apropriados para 
 *      os dados. 
 * 
 *      Na solução, o módulo xmlbuilder é usado para nos ajudar a criar 
 *      XML adequado. Este não é um dos módulos instalados com o Node 
 *      por padrão, então temos que instalá-lo usando o npm, o Node 
 *      Package Manager: 
 * 
 *          $ npm install xmlbuilder
 * 
 *      Então é uma questão de criar um novo documento XML, um elemento 
 *      raiz e, em seguida, cada elemento de recurso, conforme 
 *      demonstrado na solução. É verdade, poderíamos construir a 
 *      string XML nós mesmos, mas isso é um tédio. E é muito fácil 
 *      cometer erros que são difíceis de descobrir. Uma das melhores 
 *      coisas sobre o Node é o enorme número de módulos disponíveis 
 *      para fazer quase tudo que podemos pensar. Não só não precisamos 
 *      escrever o código nós mesmos, mas a maioria dos módulos foi 
 *      completamente testada e ativamente mantida.
 * 
 *      Assim que os dados formatados estiverem prontos para retornar, 
 *      crie o cabeçalho que os acompanha. Na solução, como o documento 
 *      é XML, o tipo de conteúdo do cabeçalho é definido como 
 *      applicationtion/xml antes que os dados sejam retornados como 
 *      uma string.
*/
