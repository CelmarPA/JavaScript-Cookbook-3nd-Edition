
const { fatorar } = require("./fatoracao.js");

// Testa fatorial de 10 se é igual 3628800
test("10! is 3628800", () => {
    expect(fatorar(10)).toBe(3628800)
});

describe ("Teste função fatorar()", () => {
    test("0! é 1", () => {
        expect(fatorar(0)).toBe(1);
    });
    
    test("1! é 1", () => {
        expect(fatorar(1)).toBe(1);
    });

    test("10! é 3628800", () => {
        expect(fatorar(10)).toBe(3628800);
    });

    test("'5'! é 120", () => {
        expect(fatorar(5)).toBe(120);
    });

    test("NaN causa erro", () => {
        expect(() => {
            fatorar(NaN);
        }).toThrow();
    });
});
