"use strict";

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
const twitterAPI = "https://api.twitter.com/oauth/authenticate";

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
                Location: `${twitterAPI}?ouath_token=${requestToken}`
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
