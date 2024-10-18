"use strict";
const ola = require("./lib/ola.js");

ola("mundo"); // "Olá mundo!"

const saudacao = require("./lib/saudacao.js")

saudacao.ola("mundo"); // "Olá mundo!"
saudacao.ciao("mondo"); // "Ciao mondo!"

const saudacoes = require("./lib/saudacoes.js")

saudacoes.ola("mundo"); // "Olá mundo!"
saudacoes.ciao("mondo"); // "Ciao mondo!"
