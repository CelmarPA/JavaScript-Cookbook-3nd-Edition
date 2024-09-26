"use strict";

/**
 *      Você quer uma maneira mais fácil de escolher os parâmetros 
 *      opcionais que você envia para uma função.
 * 
 *      Agrupe todos os parâmetros opcionais em um únicoobjeto literal. O 
 *      chamador pode então decidir quais parâmetros opcionais incluir 
 *      quando criar o objeto literal. Aqui está um exemplo de como você 
 *      chama uma função que usa este padrão:
*/
function algumaFuncao(arg1, arg2, {opicionalArg1: val1, opicionalArg2: val2}) {};

/**
 *      Na sua função, você pode usar a atribuição de desestruturação 
 *      para copiar rapidamente os valores do objeto literal para 
 *      variáveis ​​separadas. Aqui está um exemplo de uma função que 
 *      aceita três argumentos. Os dois primeiros (dataNova e dataAntiga) 
 *      são obrigatórios, mas o terceiro parâmetro é um objeto literal 
 *      que pode conter três valores opcionais (descartarTempo, 
 *      descartarAnos e precisao):
*/
function dataDiferencaEmSegundos(dataNova, dataAntiga, {descartarTempo, descartarAnos, precisao} = {}) {
    if (descartarTempo) {
        dataNova = dataNova.setHours(0, 0, 0, 0);
        dataAntiga = dataAntiga.setHours(0, 0, 0, 0);
    }
    if (descartarAnos) {
        dataNova.setYear(0);
        dataAntiga.setYear(0);
    }

    const diferencaEmSegundos = (dataNova.getTime() - dataAntiga.getTime()) / 1000;
    return diferencaEmSegundos.toFixed(precisao);
}

/**
 *      Você pode chamar dataDiferencaEmSegundos() com ou sem o objeto 
 *      literal:
*/

// Compara a data atual com a data antiga
const novaData = new Date();
const antigaData =  new Date(2010, 1, 10);

// Chama a função sem o objeto literal
let diferenca = dataDiferencaEmSegundos(novaData, antigaData);
console.log(diferenca); // 461593327

// Chama a função com o objeto literal, e especifica duas propriedades
diferenca = dataDiferencaEmSegundos(novaData, antigaData, {descartarAnos: true, precisao: 2});
console.log(diferenca); // 19740211.03

/**
 *      Um padrão comum em JavaScript é usar um objeto literal para 
 *      transmitir valores opcionais. Isso permite que você defina apenas 
 *      as propriedades que precisa, sem se preocupar com a ordem.
*/

// Isso funciona 
dataDiferencaEmSegundos(novaData, antigaData, { precisao: 2 });

// Isso também funciona
dataDiferencaEmSegundos(novaData, antigaData, { descartarAnos: true, precisao: 2 });

// Isso também
dataDiferencaEmSegundos(novaData, antigaData, { precisao: 2, descartarAnos: true });

/**
 *      Na função, você pode recuperar propriedades do ojeto literal
 *      individualmente, como isso:
*/
function diferencaEmSegundos(dataNova, dataAntiga, opicoes) {
    const precisao = opicoes.precisao;
}

/**
 *      Mas esta solução neste código usa um atalho melhor. Ela 
 *      descompacta o objeto literal em variáveis ​​nomeadas usando 
 *      desestruturação, que mapeia as propriedades de um objeto para 
 *      variáveis nomeadas individuais. Você pode usar atribuição de 
 *      desestruturação em uma declaração:
*/
function diferencaEmSegundos(dataNova, dataAntiga, opicoes) {
    const {descartarTempo, descartarAnos, precisao} = opicoes;
}

/**
 *      ou diretamente na declaração da função:
*/
function diferencaEmSegundos(dataNova, dataAntiga, {descartarTempo, descartarAnos,precisao}) {
    
}

/**
 *      É uma boa prática definir um objeto literal vazio como um valor 
 *      padrão. Este objeto vazio é usado se o chamador não fornecer o 
 *      objeto literal:
*/
function diferencaEmSegundos(dataNova, dataAntiga, {descartarTempo, descartarAnos,precisao} = {}) {

}

/**
 *      Cabe ao chamador decidir se ele define algumas, todas ou nenhuma 
 *      das propriedades no objeto literal. Quaisquer valores que não 
 *      forem definidos serão avaliados para o valor especial 
 *      undedefined, que você pode testar em seu código. Aqui está um 
 *      exemplo menos otimizado:
*/
if (descartarTempo != undefined || descartarTempo === true) {

}

/**
 *      Frequentemente, você não precisará verificar explicitamente 
 *      valores indefinidos. Por exemplo, undedefined avalia como false 
 *      na lógica condicional. A função diferencaEmSegundos() usa o 
 *      comportamento quando avalia as propriedades descartarAnos e 
 *      descartarTempo, permitindo-nos encurtar o código:
*/
if (descartarTempo) {

}

/**
 *      Há um atalho semelhante com a propriedade precisao. É seguro 
 *      chamar Number.toPrecision(undefined), porque é o mesmo que chamar 
 *      toPrecision() sem argumento. De qualquer forma, o número é 
 *      arredondado para o inteiro mais próximo.
 * 
 *      A única desvantagem do padrão objeto literal é que não há como 
 *      evitar erros de nomenclatura de propriedades, como este:
*/

// Nos queremos descartarAnos, mais acidentalmente definimos descartarAno
function diferencaEmSegundos(novaData, antigaData, { descartarAno: true }) {

}
