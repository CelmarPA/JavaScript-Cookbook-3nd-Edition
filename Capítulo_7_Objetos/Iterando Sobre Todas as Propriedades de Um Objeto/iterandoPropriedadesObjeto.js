"use strict";

/**
 *      Você quer examinar todas as propriedades de um objeto.
 * 
 *      Use o método estático Object.keys() para obter um array com os 
 *      nomes de propriedades para seu objeto. Por exemplo, este código:
*/
const endereco = {
    pais: "Austrália",
    cidade: "Sydney",
    numeroRua: "412",
    nomeRua: "Avenida Worcestire"
};

const propriedades = Object.keys(endereco);

// Mostra cada propriedade e seu valor
for (const propriedade of propriedades) {
    console.log(`Propriedade: ${propriedade}, Valor: ${endereco[propriedade]}`);
}

/**
 *      cria a seguinte saída no console:
 * 
 *          Propriedade: pais, Valor: Austrália
 *          Propriedade: cidade, Valor: Sydney
 *          Propriedade: numeroRua, Valor: 412
 *          Propriedade: nomeRua, Valor: Avenida Worcestire
 * 
 *      Essa técnica examina um objeto, encontra todas as suas 
 *      propriedades e as exibi, ela é semelhante ao que o método 
 *      console.log() faz quando você passa um objeto para ele.
 * 
 *      Ao usar Object.keys(), você recupera todos os nomes de 
 *      propriedades (também conhecidos como chaves). Mas você ainda 
 *      precisa procurar o valor correspondente no objeto. Você não pode 
 *      usar a sintaxe de ponto para fazer isso (objeto.propriedadeNome) 
 *      porque você tem a propriedade  como uma string. Em vez disso, 
 *      você usa a sintaxe de indexador semelhante a um array 
 *      objeto['propriedadeNome']). As propriedades normalmente 
 *      aparecerão na ordem em que foram definidas, mas o JavaScript não 
 *      garante a ordem.
 * 
 *      O método Object.keys() também é comumente usado para contar o 
 *      número de propriedades (ou tamanho) de um objeto:
*/
console.log(`O objeto endereco tem tamanho ${propriedades.length}`); // "O objeto endereco tem tamanho 4"

/**
 *      O método Object.keys() é apenas uma das muitas soluções possíveis 
 *      para refletir sobre objetos JavaScript. No entanto, é um bom 
 *      ponto de partida padrão porque ignora propriedades herdadas e 
 *      propriedades não enumeráveis, que é o comportamento que você 
 *      deseja na maioria dos cenários.
 * 
 *      Outra opção é usar um loop for...in, como este:
*/
for (const propriedade in endereco) {
    console.log(`Propriedade: ${propriedade}, Valor: ${endereco[propriedade]}`);
}

/**
 *      O loop for...in viaja pela cadeia de protótipos para encontrar 
 *      propriedades que seu objeto herdou. Neste exemplo, com o objeto 
 *      literal chamado endereco, não há diferença. No entanto, se você 
 *      precisa refletir sobre objetos com frequência, usar 
 *      inadvertidamente loops for...in quando Object.keys() seria
 *      suficiente pode afetar negativamente o desempenho.
 * 
 *      Ao contrário do que você pode esperar, o loop for...in tem uma 
 *      cobertura ligeiramente diferente do que o operador in. O operador 
 *      in examina todas as propriedades, incluindo propriedades não 
 *      enumeráveis, propriedades de símbolos e propriedades herdadas. O 
 *      loop for...in encontra propriedades herdadas mas ignora 
 *      propriedades não enumeráveis ​​e propriedades de símbolos.
 * 
 *      JavaScript também tem outras funções mais especializadas que 
 *      encontram diferentes subconjuntos de propriedades. Por exemplo, a 
 *      função getOwnPropertyNames() ignora propriedades herdadas, e a 
 *      função getOwnPropertyDescriptors() ignora propriedades herdadas, 
 *      mas também encontra propriedades não enumeráveis ​​e propriedades 
 *      de símbolos, que são frequentemente usadas para extensibilidade.
*/
