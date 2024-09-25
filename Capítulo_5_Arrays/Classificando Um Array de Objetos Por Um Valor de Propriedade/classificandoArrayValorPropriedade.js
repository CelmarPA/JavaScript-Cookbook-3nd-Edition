"use strict";

/**
 *      Você deseja classificar um array que contém objetos, com base em 
 *      uma de suas propriedades.
 * 
 *      O método Array.sort() reordena um array. Por exemplo, ele 
 *      organiza um array de números do menor para o maior, ou coloca um 
 *      array de strings em ordem alfabética. Mas você não precisa se 
 *      ater ao sistema de classificação padrão do array. Em vez disso, 
 *      você pode passar uma função de comparação para o método sort(), e 
 *      o array a usará para ordenar seus itens.
 * 
 *      A função de comparação obtém dois itens (correspondentes a dois 
 *      elementos diferentes do array), os compara e retorna um número 
 *      que indica o resultado. Você retorna 0 se os valores devem ser 
 *      considerados iguais, –1 se o primeiro valor for menor que o 
 *      segundo, ou 1 se o primeiro valor for maior que o segundo.
 * 
 *      Aqui está uma implementação simples que classifica um array de 
 *      objetos com informações de pessoas:
*/
const pessoas = [
    { nome: "Joe", sobrenome: "Khan", idade: 21 },
    { nome: "Dorian", sobrenome: "Khan", idade: 15 },
    { nome: "Tammy", sobrenome: "Smith", idade: 41 },
    { nome: "Noor", sobrenome: "Biles", idade: 33 },
    { nome: "Sumatva", sobrenome: "Chen", idade: 19 }
];

// Classifica as pessoas do mais jovem ao mais velho
pessoas.sort(function (a, b) {
    if (a.idade < b.idade) {
        return -1;
    } else if (a.idade > b.idade) {
        return 1;
    } else {
        return 0;
    }
});

console.log(pessoas); // Agora a ordem é Dorian, Sumatva, Joe, Noor, Tammy

/**
 *      Alguns atalhos são possíveis aqui. Tecnicamente, você pode 
 *      retornar qualquer número negativo em vez de –1, e qualquer número 
 *      positivo em vez de 1. Isso permite que você escreva uma função de 
 *      comparação muito mais curta:
*/
pessoas.sort(function (a, b) {
    // Subtrai as idades para classificar do mais novo ao mais velho
    return a.idade - b.idade;
});

/**
 *      Combine isso com a sintaxe de seta compacta e ficará ainda mais 
 *      curto:
*/
pessoas.sort((a, b) => a.idade - b.idade);

/**
 *      Às vezes, quando você realiza a classificação, você pode fazer 
 *      uso de métodos de comparação existentes. Por exemplo, se você 
 *      quiser que este exemplo classifique por sobrenome, não há 
 *      necessidade de reinventar a roda. Em vez disso, faça bom uso do 
 *      método String.localeCompare(), assim:
*/
pessoas.sort((a, b) => a.sobrenome.localeCompare(b.sobrenome));

console.log(pessoas); // Agora a ordem é Noor, Sumatva, Joe, Dorian, Tammy

/**
 *      O método sort() altera seu array no lugar. Isso é diferente da 
 *      maioria dos outros métodos de array que você usará, que retornam 
 *      cópias alteradas, mas deixam seu array original inalterado. Se 
 *      esse não for o comportamento que você quer, você pode clonar seu 
 *      array antes de classificá-lo.
*/
