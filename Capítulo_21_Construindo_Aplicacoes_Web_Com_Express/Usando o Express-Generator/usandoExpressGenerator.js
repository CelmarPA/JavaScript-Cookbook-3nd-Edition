"use strict";

/**
 *      Você está interessado em usar o Express para gerenciar seu 
 *      aplicativo de dados do lado do servidor, mas você não quer 
 *      gerenciar toda a configuração sozinho.
 * 
 *      Para dar o kickstart no seu aplicativo Express, use o 
 *      Express-Generator. Esta é uma ferramenta de linha de comando 
 *      que gera a infraestrutura de esqueleto de um aplicativo Express 
 *      típico.
 * 
 *      Primeiro, crie um diretório de trabalho onde a ferramenta possa 
 *      instalar com segurança um novo subdiretório de aplicativo. Em 
 *      seguida, execute o comando express-generator com npx:
 * 
 *          $ express-generator --pug --git
 * 
 *      Passei duas opções com o comando: --pug resultará no uso do 
 *      mecanismo de modelagem Pug, enquanto --git gerará um arquivo .
 *      gitignore padrão no diretório do projeto. Para a lista completa 
 *      de opções, execute o gerador com a opção -h:
 * 
 *          $ npx express-generator -h
 * 
 *      O gerador cria um novo diretório com vários subdiretórios, 
 *      alguns arquivos básicos para  você começar e um arquivo package.
 *      json com todas as dependências. Para instalar as dependências, 
 *      mude para o diretório recém-criado e digite:
 * 
 *          $ npm install
 * 
 *      Depois que todas as dependências estiverem instaladas, execute 
 *      o aplicativo usando o seguinte:
 *  
 *          $ npm start
 * 
 *      Agora você pode acessar o aplicativo Express gerado, usando seu 
 *      endereço IP ou domínio e porta 3000, a porta Express padrão.
 * 
 *      O Express fornece uma estrutura de aplicativo da web baseada em 
 *      Node e com suporte para vários mecanismos de modelagem e 
 *      pré-processadores CSS. Na solução, as opções que eu escolhi 
 *      para o aplicativo de exemplo são Pug como mecanismo de modelo 
 *      (o padrão) e o padrão de CSS simples (sem pré-processador CSS). 
 *      Embora construir o aplicativo do zero permita uma seleção mais 
 *      ampla, o Express suporta apenas os seguintes mecanismos de 
 *      modelo:
 * 
 *          --ejs: Adiciona suporte para o mecanismo de template EJS
 * 
 *          --pug: Adiciona suporte para o mecanismo de modelo Pug
 * 
 *          --hbs: Adiciona suporte para o mecanismo de modelo Handlebar
 * 
 *          --hogan: Adiciona suporte para o mecanismo modelo Hogan.js
 * 
 *      O Express também oferece suporte para os seguintes 
 *      pré-processadores CSS:
 * 
 *          express --css sass: Suporte para Sass
 * 
 *          express --css less: Suporte para Less
 * 
 *          express --css stylus: Suporte para Stylus
 * 
 *          express --css compass: Suporte para Compass
 * 
 *      Não especificar nenhum pré-processador CSS padrão para CSS 
 *      simples.
 * 
 *      O Express também assume que o diretório do projeto está vazio. 
 *      Se não estiver, force o gerador Express a gerar o conteúdo 
 *      usando a opção -f ou --force. O subdiretório recém-gerado tem a 
 *      seguinte estrutura (desconsiderando node_modules):
*/

/*
app.js
package-lock.json
package.json
/bin
    www
/node_modules
/public
    /images
    /javascripts
    /stylesheets
        style.css
        style.styl
/routes
    index.js
    users.js
/views
    error.pug
    index.pug
    layout.pug
*/

/**
 *      O arquivo app.js é o núcleo do aplicativo Express. Ele inclui 
 *      as referências às bibliotecas necessárias:
*/
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

/**
 *      Ele também cria o aplicativo Express com a seguinte linha:
*/
var app = express();

/**
 *      Em seguida, ele estabelece Pug como o mecanismo de 
 *      visualização, definindo as visualizações e as variáveis ​​do 
 *      mecanismo de visualização:
*/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

/**
 *      As chamadas de middleware são carregadas em seguida com 
 *      app.use(). Middleware é uma funcionalidade que fica entre a 
 *      solicitação bruta e o roteamento, processando tipos específicos 
 *      de solicitações. A regra para o middleware é que se um caminho 
 *      não for fornecido como o primeiro parâmetro, ele assume como 
 *      padrão um caminho de /, o que significa que as funções de 
 *      middleware são carregadas com o caminho padrão. No código 
 *      gerado a seguir:
*/
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

/**
 *      Os primeiros vários middlewares são carregados com cada 
 *      solicitação de aplicativo. Entre os middlewares inclui suporte 
 *      para registro de desenvolvimento, bem como analisadores para 
 *      JSON e corpos urlencoded. É somente quando chegamos à entrada 
 *      estática que vemos a atribuição a caminhos específicos: o 
 *      middleware de solicitação de arquivo estático é carregado 
 *      quando as solicitações são feitas para o diretório público.
 * 
 *      O roteamento é tratado a seguir:
*/
app.use("/", indexRouter);
app.use("/users", usersRouter);

/**
 *      A solicitação da web de nível superior (/) é direcionada ao 
 *      módulo de rotas, enquanto todas as solicitações de usuário
 *      (/users) são roteadas para o módulo de usuários.
 * 
 *      O que se segue é o tratamento de erros. Primeiro, o tratamento 
 *      de erros 404 quando uma solicitação é feita para um recurso da 
 *      web inexistente:
*/
app.use(function (req, res, next) {
    next(createError(404));
});

/**
 *      Em seguida, vem o tratamento de erros do servidor, tanto para 
 *      produção quanto para desenvolvimento:
*/
app.use(function (err, req, res, next) {
    // definir locals, apenas fornecendo erro no desenvolvimento
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // Renderiza a página de erro
    res.status(err.status || 500);
    res.render("error");
});

/**
 *      A última linha do arquivo gerado é o module.exports para o 
 *      app:
*/
module.exports = app;

/**
 *      No subdiretório routes, o roteamento padrão está incluído no 
 *      arquivo routes/index.js:
*/
var express = require("express");
var router = express.Router();

/* Obtém a página home.  */
router.get("/", function (req, res, next) {
    res.render("index", { title:  "Express" });
});

module.exports = router;

/**
 *      O que está acontecendo no arquivo é que o roteador Express é 
 *      usado para rotear quaisquer solicitações HTTP GET para / para 
 *      um retorno de chamada onde a resposta da solicitação recebe uma 
 *      visualização renderizada para a página de recurso específica. 
 *      Isso contrasta com o que acontece no arquivo routes/users.js, 
 *      onde a resposta recebe uma mensagem de texto em vez de uma 
 *      visualização:
*/
var express = require("express");
var router = express.Router();

/* Obtém listagem de usuários. */
router.get("/users", function (req, res, next) {
    res.send("responder com um recurso");
});

module.exports = router;

/**
 *      O que acontece com a renderização da visualização na primeira 
 *      solicitação? Há três arquivos Pug no subdiretório views: um 
 *      para tratamento de erros, um definindo o layout da página e
 *      um, index.pug, que renderiza a página. O arquivo index.pug 
 *      contém:
*/

/*
extends layout
block content
    h1= title
    p Welcome to #{title}
*/

/**
 *      Ele estende o arquivo layout.pug, que contém:
*/

/*
doctype html
html
    head
        title= title
        link(rel='stylesheet', href='/stylesheets/style.css')
    body
        block content
*/

/**
 *      O arquivo layout.pug define a estrutura geral da página, 
 *      independentemente do conteúdo, incluindo uma referência a um 
 *      arquivo CSS gerado automaticamente. A configuração de conteúdo 
 *      do bloco define onde o local do conteúdo é colocado. O formato 
 *      do conteúdo é definido em index.js, na configuração de conteúdo 
 *      do bloco de nome equivalente.
 * 
 *      Os dois arquivos Pug definem uma página web básica com um 
 *      elemento h1 atribuído a uma variável de título, e um parágrafo 
 *      com uma mensagem de boas-vindas.
 * 
 *      Se você fizer a seguinte solicitação da web:
 * 
 *          http://yourdomain.com:3000/users
 * 
 *      você verá a mensagem de texto simples, em vez da visualização 
 *      renderizada.
 * 
 *      Por padrão, o Express é configurado para ser executado no modo 
 *      de desenvolvimento. Para alterar o aplicativo para modo de 
 *      produção, você precisa definir uma variável de ambiente, 
 *      NODE-ENV, para “production”. Em um ambiente Linux ou Unix, o 
 *      seguinte pode ser usado:
 * 
 *          $ export NODE_ENV=production
*/
