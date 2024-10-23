"use strict";

/**
 *      Você precisa de acesso a uma API de terceiros (como GitHub, 
 *      Facebook ou Twitter) em seu aplicativo Node, mas isso requer 
 *      autorização. Especificamente, isso requer autorização OAuth.
 * 
 *      Você precisará incorporar um cliente OAuth em seu aplicativo. 
 *      Você também precisará atender aos requisitos OAuth exigidos 
 *      pelo provedor de recursos.
 * 
 *      OAuth é uma estrutura de autorização usada com a maioria dos 
 *      aplicativos de conteúdo de mídia social e nuvem mais populares. 
 *      Se você já foi a um site e ele pediu para você autorizar o 
 *      acesso a dados de um serviço de terceiros, como o GitHub, você 
 *      participou do fluxo de autorização OAuth.
 * 
 *      No exemplo a seguir, foi usado o módulo Node oauth para 
 *      implementar a autorização.É o mais básico dos módulos de 
 *      autorização e suporta fluxos de autorização OAuth 1.0 e 2.0:
*/
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

/**
 *      Para usar a API de autorização do Twitter, o aplicativo cliente 
 *      precisa registrar seu aplicativo com o Twitter. O Twitter 
 *      fornece uma chave do consumidor e um segredo do consumidor. 
 *      Usando o módulo oauth, um novo objeto OAuth2 é criado, passando:
 * 
 *          • Chave do consumidor
 *          • Segredo do consumidor
 *          • URI base da API (URI da API menos a sequência de consulta)
 *          • Um valor nulo sinaliza ao OAuth para usar o padrão 
 *            /oauth/authorize
 *          • O caminho do token de acesso
 *          • Nulo, porque não estamos usando nenhum cabeçalho 
 *            personalizado
*/

/**
 *      A autenticação somente de aplicativo é ótima para acessar dados 
 *      somente leitura, mas e se você quiser acessar dados específicos 
 *      de um usuário ou até mesmo fazer uma alteração em seus dados? 
 *      Então você precisará da autorização OAuth completa. Nesta 
 *      seção, usaremos novamente o Twitter para a demonstração por 
 *      causa do uso da autorização OAuth 1.0. Na próxima receita, 
 *      veremos o OAuth 2.0.
 * 
 *      O OAuth 1.0 requer uma assinatura digital, conforme descrito 
 *      pelo Twitter, são:
 * 
 *          1. Colete o método HTTP e o URI base, menos qualquer 
 *             sequência de consulta.
 * 
 *          2. Colete os parâmetros, incluindo a chave do consumidor, 
 *             dados de solicitação, nonce, método de assinatura e 
 *             assim por diante.
 * 
 *          3. Crie uma sequência de base de assinatura, que consiste 
 *             nos dados que coletamos, formados em uma sequência de 
 *             forma precisa e codificados corretamente.
 * 
 *          4. Crie uma chave de assinatura, que é uma combinação de 
 *             chave do consumidor e segredo do token OAuth, novamente 
 *             combinados de forma precisa.
 * 
 *          5. Passe a sequência de base de assinatura e a chave de 
 *             assinatura para um algoritmo de hash HMAC-SHA1, que 
 *             retorna uma sequência binária que precisa de codificação 
 *             adicional.
 * 
 *      Você tem que seguir esse processo para cada solicitação. 
 *      Felizmente, temos módulos e bibliotecas que fazem todo esse 
 *      trabalho entorpecente para nós. Não sei sobre você, mas se eu 
 *      tivesse que fazer isso, meu interesse em incorporar dados e 
 *      serviços do Twitter em meu aplicativo iria diminuir rapidamente.
 * 
 *      Nosso amigo oauth fornece o suporte OAuth 1.0 subjacente, mas 
 *      não precisamos codificar diretamente para ele dessa vez. Outro 
 *      módulo, node-twitter-api, envolveu todas as peças do OAuth. 
 *      Tudo o que precisamos fazer é criar um novo objeto
 *      node-twitter-api, passando nossa chave e segredo do consumidor, 
 *      bem como a URL de retorno/redirecionamento necessária pelos 
 *      serviços de recursos, como parte do processo de autorização. 
 *      Processar o objeto de solicitação nessa URL nos fornece o token 
 *      de acesso e o segredo de que precisamos para acesso à API. Toda 
 *      vez que fazemos uma solicitação, passamos o token de acesso e o 
 *      segredo.
 * 
 *      O módulo twitter-node-api é um wrapper fino em torno da REST 
 *      API: para fazer uma solicitação, extrapolamos qual é a função 
 *      da API. Se estivermos interessados ​​em postar uma atualização 
 *      de status, o endpoint da REST API é:
 * 
 *          https://api.twitter.com/1.1/statuses/update.json
 * 
 *      A função de instância do objeto twitter-node-api é statuses(), 
 *      e o primeiro parâmetro é o verbo, update:
*/
twitter.statuses("update", {
    "status": "Olá da Shelley's Toy Box. (Ignorar--desenvolvendo aplicativo Node)"}, atoken, atokensec, function (err, data, response) {"..."});

twitter.statuses(
    "update",
    {
        status: "Ignore o aprendizado do OAuth com o Node"
    },
    tokenValues.atoken,
    tokenValues.atokensec,
    (err, data) => {"..."});

/**
 *      Os argumentos da função de retorno de chamada incluem qualquer 
 *      erro possível, dados solicitados (se houver) e a resposta bruta.
 * 
 *      Um exemplo completo é mostraado a seguir. Ele usa o Express 
 *      como um servidor e fornece uma página da web primitiva para o 
 *      usuário, e então usa outro módulo.
*/
const express = require("express");
const TwitterAPI = require("node-twitter-api");

require("dotenv").config();

const port = process.env.PORT || "8080";

// Keys e URL de retorno são configuradas no Twitter Dev Center
const twitter = new TwitterAPI({
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    callback: "http://127.0.0.1:8080/oauth/callback"
});

// Objeto para armazenar valores de token recuperados
const tokenValues = {};

// twitter OAuth API URL
const TwitterAPI = "https://api.twitter.com/oauth/authenticate";

// Template HTML simples
const menu = 
    '<a href="/post/status/">Diga Olá</a><br/>' + 
    '<a href="/get/account/">Configurações da Conta<br/>';

// Cria uma nova aplicação Express
const app = express();

// Solicita permissões do Twitter quando a rota / é visitada
app.get("/", (req, res) => {
    twitter.getRequestToken((erro, requestToken, requestTokenSecret) => {
        if (erro) {
            console.log(`Erro ao obter o token de solicitação OAuth: ${erro}`);
            res.writeHead(200);
            res.end(`Erro ao obter autorização: ${erro}`);
        } else {
            tokenValues.token = requestToken;
            tokenValues.tokensec = requestTokenSecret;
            res.writeHead(302, {
                Location: `${TwitterAPI}?ouath_token=${requestToken}`
            });
            res.end();
        }
    });
});

// URL de retorno de chamada conforme especificado no Twitter Developer Center
app.get("/oauth/callback", (req, res) => {
    twitter.getAccessToken(
        tokenValues.token,
        tokenValues.tokensec,
        req.query.oauth_verifier,
        (err, accessToken, accessTokenSecret) => {
            res.writeHead(200);
            if (err) {
                res.end(`problemas para obter autorização com o Twitter${err}`);
            } else {
                tokenValues.atoken = accessToken;
                tokenValues,atokensec = accessTokenSecret;
                res.end(menu);
            }
        }
    );
});

// Publica uma atualização de status de usuários autenticados e autorizados
app.get("/post/status/", (req, res) => {
    twitter.statuses(
        "update",
        {
            status: "Ignorar o ensino de OAuth com Node"
        },
        tokenValues.atoken,
        tokenValues.atokensec,
        (err, data) => {
            res.writeHead(200);
            if (err) {
                res.end(`problemas ao postar ${JSON.stringify(err)}`);
            } else {
                res.end(`status da postagem: ${JSON.stringify(data)}<br />${menu}`);
            }
        }
    );
});

// Obtém os detalhes da conta de um usuário autenticado e autorizado
app.get("/get/account/", (req, res) => {
    twitter.account(
        "settings",
        {},
        tokenValues.atoken,
        tokenValues.atokensec,
        (err, data) => {
            res.writeHead(200);
            if (err) {
                res.end(`problemas para obter a conta ${JSON.stringify(err)}`);
            } else {
                res.end(`<p>${JSON.stringify(data)}</p>${menu}`);
            }
        }
    );
});

app.listen(port, () => console.log(`Ouvindo a porta ${port}!`));

/**
 *      As rotas de interesse no aplicativo são:
 * 
 *          • /: Página que aciona um redirecionamento para o Twitter 
 *               para autorização
 * 
 *          • /auth: O URL de retorno ou redirecionamento registrado no 
 *                   aplicativo e passado na solicitação
 * 
 *          • /post/status/: Publica um status na conta do Twitter
 * 
 *          • /get/account/: Obtém informações da conta para o indivíduo
 * 
 *      Em cada caso, a função node-twitter-api apropriada é usada:
 * 
 *          • /: Obtém um token de solicitação e um segredo de token de 
 *               solicitação, usando getRequestToken()
 * 
 *          • /auth/: Obtém o token de acesso da API e o segredo do 
 *                    token, armazenando-os em cache localmente, exibe 
 *                    menu
 * 
 *          • /post/status/: status() com atualização como primeiro 
 *                           parâmetro, status, token de acesso e
 *                           segredo e função de retorno
 * 
 *          • /get/account/: account() com configurações como o 
 *                           primeiro parâmetro, um objeto vazio,
 *                           já que nenhum dado é necessário para a 
 *                           solicitação, e o token de acesso, segredo 
 *                           e retorno
*/
