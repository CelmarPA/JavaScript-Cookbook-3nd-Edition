"use strict";

const bbarray = require("../index.js");

describe("concatArray()", () => {
    test("deve retornar -1 quando não usado array", () => {
        expect(bbarray.concatArray(9, "str")).toBe(-1);
    });

    test("deve retornar -1 quando não usado string", () => {
        expect(bbarray.concatArray(9, ["teste", "dois"])).toBe(-1);
    });

    test("deve retornar um array com properiedade args", () => {
        expect(bbarray.concatArray("é", ["teste", "três"])).toStrictEqual(["é teste", "é três"]);
    });
});

describe("splitArray()", () => {
    test("deve retornar -1 quando não usado array", () => {
        expect(bbarray.splitArray(9, "str")).toBe(-1);
    });

    test("deve retornar -1 quando não usado string", () => {
        expect(bbarray.splitArray(9, ["teste", "dois"])).toBe(-1);
    });

    test("deve retornar um array com properiedade args", () => {
        expect(bbarray.splitArray("é", ["é teste", "é três"])).toStrictEqual(["teste", "três"]);
    });
});