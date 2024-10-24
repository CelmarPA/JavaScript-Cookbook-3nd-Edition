"use strict";

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
    (req, res) => {
        res.render("profile", { user: req.user });
    }
);
