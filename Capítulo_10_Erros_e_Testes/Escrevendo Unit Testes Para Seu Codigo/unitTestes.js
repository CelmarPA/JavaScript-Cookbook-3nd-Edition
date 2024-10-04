"use strict";

/**
 *      Você quer usar testes automatizados para garantir que seu código
 *      corresponda aos seus critérios de design agora e no futuro.
 *
 *      Use uma ferramenta como o Jest para escrever testes de unidade
 *      para seu código o mais cedo possível.
 *
 *      Digamos que você tenha um arquivo chamado fatoracao.js, com a
 *      função fatorar() mostrada aqui:
 */
function fatorar(numero) {
    if (numero < 0) {
        throw new RangeError(
            `Fatoriais são definidos apenas para números positivos`
        );
    } else if (numero !== Math.trunc(numero)) {
        throw new RangeError(`Fatoriais são definidos apenas para inteiros`);
    } else {
        if (numero === 0 || numero === 1) {
            return 1;
        } else {
            let resultado = numero;
            while (numero > 1) {
                numero--;
                resultado *= numero;
            }
            return resultado;
        }
    }
}

/**
 *      Para tornar esta função acessível ao Jest, você precisa exportar
 *      a função fatorar() adicionando esta linha ao final do arquivo:
 */
export { fatorar };

/**
 *      Agora você precisa criar seu arquivo de teste. No Jest, os
 *      arquivos de teste têm a extensão .test.js. Neste caso, isso
 *      significa que você precisa criar um novo arquivo chamado
 *      fatoracao.test.js. Este arquivo então importa a função que você
 *      quer testar:
 */
import { fatorar } from "./fatoracao.js";

/**
 *      O restante do seu arquivo de teste define o teste que você deseja
 *      executar. A abordagem mais simples para testar é começar
 *      verificando se sua função funciona da maneira que você espera.
 *      Por exemplo, você pode escrever um teste Jest que verifica se
 *      fatorar() retorna as informações corretas para alguns casos
 *      representativos. Aqui está um exemplo que verifica se 10! é
 *      3.628.800:
 */
test("10! is 3628800", () => {
    expect(fatorar(10)).toBe(3628800);
});

/**
 *      A função test() do Jest cria um teste nomeado. O nome permite que
 *      você identifique testes no relatório de teste, para que você
 *      saiba exatamente quais testes foram bem-sucedidos e quais
 *      falharam. O teste neste exemplo usa a função expect() do Jest,
 *      que chama seu código (neste caso, a função fatorar()) e então
 *      avalia o resultado com toBe(). Tecnicamente, toBe() é uma das
 *      várias funções de correspondência do Jest. Ela determina se o
 *      código passa ou falha no teste.
 *
 *      Para executar este teste, você precisa usar o Jest. Você pode
 *      executá-lo a partir da linha de comando, com seu arquivo de teste
 *      e a ajuda do executor de pacotes do npm, npx. Neste exemplo, você
 *      usaria este comando no terminal:
 *
 *          $ npx jest fatoracao.test.js
 *
 *      que executa o teste único que você escreveu e gera um relatório
 *      como este:
 *
 *              PASS  ./fatoracao.test.js
 *              √ 10! is 3628800 (1 ms)
 *
 *              Test Suites: 1 passed, 1 total
 *              Tests:       1 passed, 1 total
 *              Snapshots:   0 total
 *              Time:        0.443 s
 *              Ran all test suites matching /fatoracao.test.js
 *
 *      Mais comumente, você adicionará Jest à seção scripts do seu
 *      arquivo package.json para que ele possa executar todos os seus
 *      testes automaticamente:
 *              {
 *                  "scripts": {
 *                      "test": "jest"
 *                  }
 *              }
 *
 *      Agora você pode pedir ao Jest para executar todos os testes (os
 *      arquivos .test.js) na pasta do seu projeto.
 */

/**
 *      Embora existam muitas estruturas de teste possíveis (Jest, Mocha,
 *      Jasmine, Karma, e mais), a maioria delas usa uma sintaxe
 *      semelhante. No Jest, tudo gira em torno de uma função test() que
 *      recebe dois argumentos. O primeiro argumento é um rótulo para o
 *      teste, que aparece no relatório de teste. O segundo argumento é
 *      uma função que inclui uma ou mais asserções de teste — alegações
 *      que serão provadas com sucesso como true (uma aprovação) ou
 *      false (uma falha):
 */
test("Algum Nome teste", () => {
    // As afirmações de teste vão aqui
});

/**
 *      Para criar asserções de teste, você usa a função expect(), que é
 *      o eixo central do Jest. Ela funciona em conjunto com uma função
 *      correspondente como toBe() que avalia os resultados da sua
 *      chamada de teste:
 */
test("10! é 3628800", () => {
    expect(fatorar(10)).toBe(3628800);
});

/**
 *      Este exemplo demonstra um único teste da função fatorar().
 *      Mas o objetivo do escritor do teste é mais amplo. Você precisa
 *      escolher um grupo representativo de testes — aqueles que
 *      verificam vários valores e capturam condições de contorno
 *      sempre que possível. Por exemplo, com o teste da função
 *      fatorar(), faz sentido testar como a função lida com entrada
 *      não numérica, valores negativos, 0, valores muito grandes e assim
 *      por diante.
 *
 *      O código a seguir mostra um conjunto de testes mais completo. Ele
 *      verifica os resultados de cinco chamadas diferentes para
 *      fatorar(). Essas chamadas são todas agrupadas em um conjunto de
 *      testes usando describe(). A função describe() simplesmente
 *      permite que você rotule uma coleção de chamadas de teste
 *      relacionadas. Neste exemplo, describe() está agrupando chamadas
 *      para a mesma função, mas você também pode usá-lo para agrupar
 *      chamadas que usam o mesmo conjunto de dados de amostra:
 */
describe("Teste função fatorar()", () => {
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

    test("NaN é 0", () => {
        expect(fatorar(NaN)).toBe(0);
    });
});

/**
 *      Ao executar este teste, você verá que o teste final falha. Ele 
 *      espera que a chamada fatorar(NaN) retorne 0, mas na verdade gera 
 *      um erro, como o log de teste deixa claro:
 * 
 *          FAIL ./factorialize.test.js
 *              factorialize() function tests
 *                  √ 0! is 1 (3 ms)
 *                  √ 1! is 1
 *                  √ 10! is 3628800
 *                  √ "5"! is 120
 *                  × NaN is 0 (3 ms)
 *              ● factorialize() function tests › NaN is 0
 * 
 *                RangeError: Factorials are only defined for integers
 * 
 *                  4 | }
 *                  5 | if (number != Math.trunc(number)) {
 *                > 6 | throw new RangeError('Factorials are only defined for integers');
 *                    |        ^
 *                  7 | }
 *                  8 | else {
 *                  9 | if (number == 0 || number == 1) {
 * 
 *                  at factorialize (factorialize.js:6:11)
 *                  at Object.<anonymous> (factorialize.test.js:17:12)
 *          Test Suites: 1 failed, 1 total
 *          Tests: 1 failed, 4 passed, 5 total
 *          Snapshots: 0 total
 *          Time: 2.833 s
 *          Ran all test suites.
*/

/**
 *      No momento, todos os testes que você viu usam a função de 
 *      correspondência toBe() para verificar um valor exato. Mas o Jest, 
 *      como todas as estruturas de teste, permite que você use 
 *      diferentes tipos de regras. Por exemplo, você pode verificar se 
 *      um número cai em um intervalo específico, se o texto
 *      corresponde a um certo padrão ou se um valor não é nulo.
 * 
 *      Some of the most useful matching functions you can use with 
 *      expect() are:
 * 
 *          
 */
