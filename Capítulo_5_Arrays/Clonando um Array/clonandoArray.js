"use strict";

/**
 *      Você quer fazer uma copia de um array existente.
 * 
 *      Use o operador spread para expandir seu array em itens e    
 *      alimentar o novo array:
*/
const numeros = [2, 42, 5, 304, 1, 13];
const copiaNumeros = [...numeros];

/**
 *      Uma abordagem igualmente boa é usar o método Array.slice() sem 
 *      argumentos, que diz para ele pegar uma fatia de todo o array:
*/
const copiaNumeros2 = numeros.slice();

console.log(copiaNumeros); // [ 2, 42, 5, 304, 1, 13 ]
console.log(copiaNumeros2); // [ 2, 42, 5, 304, 1, 13 ]

/**
 *      Criar cópias de array é importante porque permite que você 
 *      execute alterações não destrutivas. Por exemplo, você pode manter 
 *      seu array original intacto enquanto faz alterações em uma nova 
 *      cópia. Dessa forma, você reduz o risco de efeitos colaterais não 
 *      previstos (por exemplo, 0se outras partes do seu código ainda 
 *      estiverem usando o array original).
 * 
 *      Assim como todos os objetos de referência, arrays não podem ser 
 *      copiados por atribuição. Este código, por exemplo, termina com 
 *      duas variáveis ​​apontando para o mesmo objeto Array na memória:
*/
const numeros2 = [2, 42, 5, 304, 1, 13];
const numeroscopia = numeros2;

console.log(numeros2 === numeroscopia); // true

/**
 *      Para copiar corretamente um array, você precisa duplicar todos os 
 *      seus elementos. A abordagem mais fácil é usar o operador spread, 
 *      embora o método Array.slice() funcione igualmente bem.
 * 
 *      Ambas as abordagens mostradas aqui criam cópias superficiais. Se 
 *      seu array consiste em primitivos (números, strings ou valores 
 *      booleanos), o array copiado corresponde exatamente. Mas se seu 
 *      array contém objetos, essas técnicas copiam a referência, não o 
 *      objeto inteiro. Como resultado, seu novo array terá referências 
 *      apontando para os mesmos objetos. Altere um dos objetos no array 
 *      copiado, e isso também afeta o array original:
*/
const objetosOriginais = [ {nome: "Silvia", idade: 12}, {nome: "Patrique", idade: 18} ];
const copiaObjetos = [...objetosOriginais];

// Altere um dos objetos de pessoas em copiaObjetos
copiaObjetos[0].idade = 14;

// Analize o mesmo objeto no array original
console.log(objetosOriginais[0].idade); // 14

/**
 *      Isso pode ou não ser um problema, dependendo de como você planeja 
 *      usar seus arrays. Se você quiser várias cópias de objetos que 
 *      você pode manipular separadamente, há várias soluções possíveis 
 *      que você pode usar:
 *          • Faça um loop pelo seu array com um loop for, crie os novos 
 *            objetos que você precisa explicitamente e então adicione-os 
 *            ao novo array.
 * 
 *          • Use a função Array.map(). Isso funciona bem para objetos 
 *            simples, mas não faz um clone profundo até o fim. (Por 
 *            exemplo, se você tem objetos referenciando outros objetos, 
 *            somente a primeira camada de objetos é realmente duplicada.)
 *          • Use uma função auxiliar de outra biblioteca JavaScript, 
 *            como cloneDeep() no Lodash ou clone() no Ramda.
 * 
 *      Aqui está um exemplo que demonstra Array.map(). Ele faz um pouco 
 *      de mágica ao primeiro expandir o elemento do array em suas 
 *      propriedades com o operador spread (…elementos), então os usa 
 *      para criar um novo objeto ({…elementos}), que é atribuído ao novo 
 *      array:
*/
const originalObjetos = [ {nome: "Silvia", idade: 12}, {nome: "Patrique", idade: 18} ];

// Cria um novo array com objetos copiados
const objetosCopia = originalObjetos.map(elementos => ({...elementos}));

// Mude um objeto de pessoa em objetosCopia
objetosCopia[0].idade = 14;

// Analiza o mesmo objeto no objetosOriginais
console.log(originalObjetos[0].idade); // 12
