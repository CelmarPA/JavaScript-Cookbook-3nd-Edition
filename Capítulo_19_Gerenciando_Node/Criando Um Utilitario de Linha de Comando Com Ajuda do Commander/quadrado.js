#!/usr/bin/env Node
const programa = require("commander");

programa
    .version('0.0.1')
    .option("-n, --number <value>", "Um número ao quadrado")
    .parse(process.argv);

const quadrado = Math.pow(programa.number, 2);

console.log(`O quadrado de ${programa.number} é ${quadrado}`);
