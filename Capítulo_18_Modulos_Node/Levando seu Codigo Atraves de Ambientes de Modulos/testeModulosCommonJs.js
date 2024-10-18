"use strict";

const bbarray = require("./index.cjs");

console.log(bbarray.concatArray("é", ["teste", "três"]));
console.log(bbarray.splitArray("é", ["é teste", "é três"]));