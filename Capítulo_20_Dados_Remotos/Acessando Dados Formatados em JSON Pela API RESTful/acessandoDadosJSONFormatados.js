"use strict";

/**
 *      Você deseja acessar dados formatados como JSON de um serviço 
 *      por meio de sua API.
 *      
 *      Em um aplicativo Node, a técnica mais simples para acessar 
 *      dados formatados em JSON de uma API é usar uma biblioteca de 
 *      requisição HTTP.
 * 
 *      No exemplo a seguir, usarei novamente node-fetch:
*/
import fetch from "node-fetch";

(async () => {
    try {
        const response = await fetch("https://swapi.dev/api/people/1/");
        const json = await response.json();
        console.log(json);
    } catch (erro) {
        console.log(erro);
    }
})();

/**
 *      O módulo npm é uma alternativa popular ao node-fetch:
*/
import got from "got";

(async () => {
    try {
        const response = await got("https://swapi.dev/api/people/2/");
        console.log(JSON.parse(response.body));
    } catch (erro) {
        console.log(erro);
    }
})();

/**
 *      Uma API RESTful é uma que é stateless, o que significa que cada 
 *      solicitação do cliente contém tudo o que é necessário para o 
 *      servidor responder (não implica nenhum estado armazenado
 *      entre as solicitações); ela usa métodos HTTP explicitamente. 
 *      Ela suporta uma estrutura URI semelhante a um diretório
 *      e transfere dados formatados de uma certa maneira (normalmente 
 *      XML ou JSON). Os métodos HTTP são:
 * 
 *          • GET: Para obter dados de recursos
 *          • PUT: Para atualizar um recurso
 *          • DELETE: Para excluir um recurso
 *          • POST: Para criar um recurso
 * 
 *      Como estamos focando em obter dados, o único método de 
 *      interesse neste momento é GET. E como estamos focados em JSON, 
 *      estamos usando métodos de cliente que podem acessar dados 
 *      formatados em JSON e converter os dados em objetos que podemos 
 *      manipular em nossos aplicativos JavaScript. Vamos dar uma 
 *      olhada em outro exemplo.
 * 
 *      O Open Exchange Rate fornece uma API que podemos usar para 
 *      obter taxas de câmbio atuais, nome para sigla para os 
 *      diferentes tipos de moedas e as taxas de câmbio para uma data 
 *      específica. Ele tem um plano Forever Free que fornece acesso 
 *      limitado à API sem custo.
 * 
 *      É possível fazer duas consultas do sistema (para taxa de moeda 
 *      atual e nome para siglas) e, quando ambas as consultas 
 *      terminarem, obter as siglas como chaves e usá-las para procurar 
 *      o nome longo e a taxa nos resultados, imprimindo os pares no
 *      console:
*/
import dotenv from "dotenv";
dotenv.config();

const id = process.env.APP_ID;

(async () => {
    try {
        const dinheiroAPI1 = await fetch(`https://openexchangerates.org/api/latest.json?app_id=${id}`);
        const dinheiroAPI2 = await fetch(`http://openexchangerates.org/api/currencies.json?app_id=${id}`);

        const atual = await dinheiroAPI1.json();
        const nomes = await dinheiroAPI2.json();
        const keys = Object.keys(atual.rates);

        keys.forEach((valor, index) => {
            const taxa = atual.rates[keys[index]];
            const nome = nomes[keys[index]];
            console.log(`${nome}(${valor}): ${taxa} `)
        })
    } catch (erro) {
        console.log(erro);
    }
})();
