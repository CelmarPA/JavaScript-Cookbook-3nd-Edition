"use strict";

/**
 *      Você deseja acessar conteúdo específico de um recurso da web de 
 *      dentro do seu aplicativo Node.
 * 
 *      Use os módulos node-fetch e Cheerio para fazer screen scraping 
 *      de um site.
 * 
 *      Primeiro instale os módulos necessários:
 * 
 *          $ npm install node-fetch cheerio
 * 
 *      Para raspar a página, use node-fetch para recuperar o conteúdo 
 *      e então consulte o conteúdo recuperado com Cheerio:
*/
const fetch = require("node-fetch");
const cheerio = require("cheerio");

fetch("https://google.com")
    .then(res => res.text())
    .then(body => {
        const $ = cheerio.load(body);
        $("h1").each((i,  elemento) => {
            console.log(elemento.children[0].data);
        });
    });

/**
 *      Um uso interessante do Node é raspar um site ou recurso e então 
 *      usar outra funcionalidade para consultar informações 
 *      específicas dentro do material retornado. Um módulo popular 
 *      para usar para consulta é o Cheerio, que é uma pequena 
 *      implementação do núcleo jQuery destinado ao uso no servidor. No 
 *      exemplo a seguir, um aplicativo simples é criado para extrair 
 *      todos os títulos de postagens na página do blog O’Reilly Radar. 
 *      Para selecionar esses títulos, usamos o Cheerio para encontrar 
 *      links (a) contidos em elementos h2 que estão dentro do conteúdo 
 *      principal. Em seguida, listamos o texto do link em uma saída 
 *      separada:
*/
fetch("https://www.oreilly.com/radar/posts/")
    .then(res => res.text())
    .then(body => {
        const $ = cheerio.load(body);
        $("main h2 a").each((i, elemento) => {
            console.log(elemento.children[0].data);
        });
    });

/**
 *      Após a solicitação bem-sucedida ser feita, o HTML retornado é   
 *      passado para o Cheerio por meio do método load(), e o resultado 
 *      é atribuído a uma variável de cifrão ($), para que possamos
 *      selecionar elementos no resultado de maneira semelhante à 
 *      biblioteca jQuery. 
 * 
 *      O padrão de elemento de main h2 a é então usado para consultar 
 *      todas as correspondências, e o resultado é processado usando o 
 *      método each, acessando o texto de cada título. A saída para o 
 *      console deve ser os títulos de todos os artigos na página 
 *      principal do blog. 
 * 
 *      Um caso de uso comum é baixar dados quando uma API não é 
 *      fornecida. No exemplo a seguir, estamos localizando links 
 *      específicos na página e canalizando o recurso vinculado para um 
 *      arquivo local. Também estou usando a sintaxe async/await para 
 *      demonstrar como ela pode ser usada:
*/
const fs = require("fs");
const path = "data-research/mortgage-performance-trends/mortgages-30-89-days-delinquent/";
const url = `https://www.consumerfinance.gov/${path}`;

(async () => {
    try {
        const response = await fetch(url);
        const body = await response.text();
        const $ = cheerio.load(body);
        $("a:contains('state')").each(async (i, elemento) => {
            const fetchFile = await fetch(elemento.attribs.href);
            const dest = fs.createWriteStream(`data-${i}.csv`);
            await fetchFile.body.pipe(dest);
        });
    } catch (erro) {
        console.log(erro);
    }
})();

/**
 *      Primeiro buscamos a página na URL específica, que neste caso é 
 *      um site do governo dos Estados Unidos contendo vários arquivos 
 *      CSV vinculados. Então usamos o Cheerio para localizar todos os 
 *      links na página que contêm a palavra “state”. Finalmente, 
 *      buscamos o arquivo linkedto e o canalizamos para um arquivo 
 *      local.
*/
