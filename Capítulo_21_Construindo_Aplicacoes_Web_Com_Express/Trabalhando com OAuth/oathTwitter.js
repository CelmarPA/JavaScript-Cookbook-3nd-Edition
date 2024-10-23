"use strict";
const OAuth = require("oauth");
const fetch = require("node-fetch");
const { promisify } = require("util");

// Lê chaves do Twitter de um arquivo .env
require("dotenv").config();

// Ponto final da API de pesquisa do Twitter e a consulta que pesquisaremos
const endpointUrl = "https://api.twitter.com/2/tweets/search/recent";
const query = "javascript";

async function getTweets() {
    // Chave do consumidor e segredo passados ​​de variáveis ​​de ambiente
    const oauth2 = new OAuth.OAuth2(
        process.env.TWITTER_CONSUMER_KEY,
        process.env.TWITTER_CONSUMER_SECRET,
        "https://api.twitter.com/",
        null,
        "oauth2/token",
        null
    );

    // Recupera as credenciais do Twitter
    const getOAuthAccessToken = promisify(
        oauth2.getOAuthAccessToken.bind(oauth2)
    );
    const token = await getOAuthAccessToken("", {
        grant_type: "client_credentials"
    });

    // Faz a solicitação de dados com o token recuperado
    const res = await fetch(`${endpointUrl}?query=${query}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });

    const json = await res.json();
    return json;
}

(async () => {
    try {
        // Faz solicitação
        const response = await getTweets();
        console.log(response);
    } catch (e) {
        console.log(e);
        process.exit(-1);
    }
    process.exit();
})();