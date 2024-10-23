"use strict";

/**
 *      Você deseja autenticar usuários em seu aplicativo por meio de 
 *      um serviço de terceiros.
 *
 *      Use a biblioteca Passport.js pareada com a estratégia 
 *      apropriada para o provedor de autenticação que você escolheu. 
 *      Neste exemplo, será usada a estratégia do GitHub, mas o
 *      fluxo de trabalho será idêntico para qualquer provedor OAuth 2, 
 *      incluindo Facebook, Google, e Twitter. 
 * 
 *      Você pode fazer uso da estratégia do GitHub, primeiro visitando 
 *      o site do GitHub e registrando um novo aplicativo OAuth. Depois 
 *      que o aplicativo for registrado, você pode integrar o código 
 *      OAuth do Passport.js ao aplicativo.
 * 
 *      Para começar, configure a estratégia do Passport, que incluirá 
 *      o ID do cliente e o segredo do cliente fornecidos pelo GitHub, 
 *      juntamente com a URL de retorno de chamada que você especificou:
*/
const express = require("express");
const passport = require("passport");
const { Strategy } = require("passport-github");

passport.use(
    new Strategy(
        {
            clientID: GITHUB_CLIENT_ID,
            clientSecret: GITHUB_CLIENT_SECRET,
            callbackURL: "login/github/callback"
        },
        (accessToken, refreshToken, profile, cb) => {
            return cb(null, profile);
        }
    )
);

/**
 *      Para restaurar o estado de autenticação em solicitações HTTP, o 
 *      Passport precisa serializar e desserializar usuários:
*/
passport.serializeUser((user, cb) => {
    cb(null, user);
});

passport.deserializeUser((obj, cb) => {
    cb(null, obj);
});

/**
 *      Para preservar os logins de usuários em todas as sessões do 
 *      navegador, use o middleware express-session:
*/
app.use(
    require("express-session")({
        secret: SESSION_SECRET,
        resave: true,
        saveUninitialized: true
    })
);

app.use(passport.session());

/**
 *      Você pode então autenticar solicitações usando passport.
 *      authenticate:
*/
app.use(passport.initialize());

app.get("/login/github", passport.authenticate("github"));

app.get(
    "/login/github/callback",
    passport.authenticate("github", { failureRedirect: "/login" }),
    (req, res) => {
        res.redirect("/")
    }
);

/**
 *      E referenciar o objeto do usuário nas solicitações:
*/
app.get("/", (req, res) => {
    res.render("home", { user: req.user });
});

/**
 *      OAuth é um padrão aberto para autenticação de usuário. Ele nos 
 *      permite autenticar usuários por meio de aplicativos de 
 *      terceiros. Isso pode ser útil ao permitir que os usuários criem 
 *      contas e façam login em seus aplicativos facilmente, bem como 
 *      para autenticação para usar dados de uma fonte de terceiros.
 * 
 *      As solicitações OAuth seguem um fluxo específico:
 * 
 *          1. Seu aplicativo faz uma solicitação de autorização para o 
 *             serviço de terceiros.
 * 
 *          2. O usuário aprova essa solicitação.
 *      
 *          3. O serviço redireciona o usuário de volta para seu 
 *             aplicativo, junto com um código de autorização.
 *  
 *          4. O aplicativo faz uma solicitação ao serviço de terceiros 
 *             com o código de autorização.
 * 
 *          5. O serviço responde com um token de acesso (e, 
 *             opcionalmente, um token de atualização).
 * 
 *          6. O aplicativo faz uma solicitação ao serviço com o token 
 *             de acesso.
 * 
 *          7. O serviço responde com o recurso protegido (no nosso 
 *             caso, as informações da conta do usuário).
 * 
 *      Usar Passport.js junto com uma estratégia Passport.js para o 
 *      provedor OAuth simplifica esse fluxo em um aplicativo 
 *      Express.js. Neste exemplo, construiremos um pequeno aplicativo 
 *      Express que se autentica com o GitHub e persiste logins de 
 *      usuários em todas as sessões.
 * 
 *      Depois de registrar nosso aplicativo com o provedor de 
 *      serviços, podemos começar o desenvolvimento instalando as 
 *      dependências apropriadas:
 * 
 *          # instalar dependências gerais do aplicativo
 *              npm install express pug dotenv
 * 
 *          # instalar dependências do passport
 *              npm install passport passport-github
 * 
 *          # instalar dependências persistentes da sessão do usuário
 *              npm install connect-ensure-login express-session
 * 
 *      Para armazenar nossos valores de ID de cliente OAuth, segredo 
 *      de cliente e segredo de sessão, usaremos um arquivo .env. Como 
 *      alternativa, você pode usar um arquivo JavaScript (como um 
 *      arquivo config.js). É essencial que não façamos check-in deste 
 *      arquivo no controle de fonte pública, e eu recomendo 
 *      adicioná-lo ao seu arquivo .gitignore. Em .env:
 * 
 *      Em seguida, configuraremos nosso aplicativo Express com 
 *      Passport.js. Em index.js:
*/
const express = require("express");
const passport = require("passport");
const { Strategy } = require("passport-github");

require("dotenv").config();

const port = process.env.PORT || "3000";

// Configura a estrategia do Passaport
passport.use(
    new Strategy(
        {
            clientID: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            callbackURL: `http://localhost:${port}/login/github/callback`
        },
        (accessToken, refreshToken, profile, cb) => {
            return cb(null, profile);
        }
    )
);

// Serializar e desserializar o usuário
passport.serializeUser((user, cb) => {
    cb(null, user);
});

passport.deserializeUser((obj, cb) => {
    cb(null, obj);
});

// Criaa o aplicativo Express
const app = express();
app.set("views", `${__dirname}/views`);
app.set("view engine", "pug");

// Usa o middleware de sessão Express para preservar a sessão do usuário
app.use(
    require("express-session")({
        secret: process.env.SESSION_SECRET,
        resave: true,
        saveUninitialized: true
    })
);

// Inicializa o passaporte e restaura o estado de autenticação da sessão
app.use(passport.initialize());
app.use(passport.session());

// Escuta na porta 3000 ou na PORTA definida como uma variável de ambiente
app.listen(port, () => console.log(`Ouvindo na porta ${port}`));

/**
 *      Você pode então criar seus modelos de visualização, que podem 
 *      acessar os dados do usuário.
 * 
 *      Em views/home.pug:    
*/

/*
if !user
    p Welcome! Please
        a(href='/login/github') Login with GitHub
else
    h1 Hello #{user.username}!
    p View your
        a(href='/profile') profile
*/

/**
 *      Em views/profile.pug:
*/

/*
h1 Profile
ul
    li ID: #{user.id}
    li Name: #{user.username}
    if user.emails
        li Email: #{user.emails[0].value}
*/

/**
 *      Por fim, podemos configurar nossas rotas no arquivo index.js:
*/
app.get("/", (req, res) => {
    res.render("home", { user: req.user });
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/login/github", passport.authenticate("github"));

app.get(
    "/login/github/callback",
    passport.authenticate("github", { failureRedirect: "/login" }),
    (req, res) => {
        res.redirect("/");
    }
);

app.get(
    "/profile",
    require("connect-ensure-login").ensureLoggedIn(),
    (req, res => {
        res.render("profile", { user: req.user });
    })
);
