"use strict";

const saudacao = {
    ola: val => {
        return console.log(`Olá ${val}!`);
    },
    ciao: val => {
        return console.log(`Ciao ${val}!`);
    }
};

module.exports = saudacao;