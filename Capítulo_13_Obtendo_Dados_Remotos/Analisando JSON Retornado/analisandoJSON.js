"use strict";

/**
 *      Você quer criar com segurança um objeto JavaScript a partir de 
 *      JSON. Você também quer substituir a representação numérica de 
 *      true e false (1 e 0, respectivamente) com suas contrapartes 
 *      booleanas (true e false).
 * 
 *      Analise o objeto com a capacidade JSON.parse. Para transformar 
 *      os valores numéricos em suas contrapartes booleanas, crie uma 
 *      função reviver:
*/
const objJson = '{"teste": "valor1", "teste2": "3.44", "teste3": 0}';
const objeto = JSON.parse(objJson, (key, value) => {
    if (typeof value === "number") {
        if (value === 0) {
            value = false;
        } else if (value === 1) {
            value = true;
        }        
    }
    return value;
});

console.log(objeto.teste3); // false

/**
 *      Para descobrir como criar JSON, pense em como você cria um 
 *      literal de objeto e apenas o traduz em uma string (com algumas 
 *      ressalvas). Se o objeto for um array:
*/
const array = new Array("um", "dois", "três");

/**
 *      A notação JSON seria equivalente à notação literal para o array:
*/
["um", "dois", "três"];

/**
 *      Observe o uso de aspas duplas ("") em vez de simples, que não 
 *      são permitidas em JSON. Se você estiver trabalhando com um 
 *      objeto:
*/
const objeto3 = {
    prop1: "teste",
    resultado: true,
    num: 5.44,
    nome: "Joe",
    cts: [45, 62, 13]
};

/**
 *      A notação JSON seria:
*/
'{"pro1": "teste", "resultado": true, "num": "5.44", "nome"; "Joe", "cts": [45, 62, 13]}'

/**
 *      Observe em JSON como os nomes de propriedade estão entre aspas, 
 *      mas os valores são apenas entre aspas quando são strings. Além 
 *      disso, se o objeto contiver outros objetos, como uma matriz, 
 *      ele também será transformado em seu equivalente JSON. No 
 *      entanto, o objeto não pode conter métodos. Se contiver, um erro 
 *      será lançado. JSON funciona apenas com dados.
 * 
 *      O objeto estático JSON não é complexo, pois ele fornece apenas 
 *      dois métodos: stringify() e parse(). O método parse() recebe 
 *      dois argumentos: uma string formatada em JSON e uma função 
 *      reviver opcional. Esta função recebe um par chave/valor como 
 *      parâmetros, e retorna o valor original ou um resultado 
 *      modificado.
 * 
 *      Na solução, a string formatada em JSON é um objeto com três 
 *      propriedades: uma string, um numérico e uma terceira 
 *      propriedade, que tem um valor numérico, mas é realmente um 
 *      Booleano com uma representação numérica — 0 é falso, 1 é 
 *      verdadeiro.
 * 
 *      Para transformar todos os valores 0, 1 em falso, verdadeiro, 
 *      uma função é fornecida como o segundo argumento para 
 *      JSON.parse(). Ela verifica cada propriedade do objeto para ver 
 *      se é um numérico. Se for, a função verifica se o valor é 0 ou 
 *      1. Se o valor for 0, o valor de retorno é definido como false; 
 *      se for 1, o valor de retorno é definido como true; caso 
 *      contrário, o valor original é retornado.
*/
