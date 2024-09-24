"use strict";

/**
 *      Você quer pesquisar um array por um valor específico. Você pode 
 *      querer saber se o array contém uma correspondência, ou a posição 
 *      onde essa correspondência ocorreu.
 * 
 *      Use um dos métodos de pesquisa de matriz: indexOf(), 
 *      lastIndexOf() ou includes():
*/
const animais = ["cachorro", "gato", "foca", "elefante", "morsa", "leão"];

console.log(animais.indexOf("elefante")); // 3
console.log(animais.lastIndexOf("morsa")); // 4
console.log(animais.includes("cachorro")); // true

/**
 *      Esta técnica só funciona para valores primitivos (tipicamente 
 *      números, strings e valores booleanos). Se você quiser procurar 
 *      por objetos, você precisa usar o método Array.find() em vez disso.
 * 
 *      Tanto indexOf() quanto lastIndexOf() pegam um valor de pesquisa 
 *      que é então comparado a cada elemento no array. Se o valor for 
 *      encontrado, eles retornam a posição de índice do elemento do 
 *      array. Se o valor não for encontrado, eles retornam –1.
 * 
 *      O método indexOf() retorna a primeira correspondência encontrada 
 *      pesquisando do menor para o maior índice (em outras palavras, 
 *      começando no início do array e indo para frente).
 * 
 *      O método lastIndexOf() vai ao contrário, começando no final do 
 *      array. A diferença aparece se o mesmo item aparecer mais de uma 
 *      vez no array:
 *      
*/
const animais2 = ["cachorro", "gato", "foca", "morsa", "leão", "gato"];
console.log(animais2.indexOf("gato")); // 1
console.log(animais2.lastIndexOf("gato")); // 5

/**
 *      Tanto indexOf() quanto lastIndexOf() recebem um argumento de 
 *      índice inicial opcional. Isso define a posição onde a busca 
 *      começará:
*/
console.log(animais2.indexOf("gato", 2)); // 5
console.log(animais2.lastIndexOf("gato", 4)); // 1

/**
 *      Pode ocorrer a você que você pode usar um loop para percorrer 
 *      índices cada vez mais altos com indexOf() até encontrar todas as 
 *      correspondências. Mas antes de escrever esse tipo de código 
 *      padrão, considere usar o método filter(), que cria de forma 
 *      rápida e indolor uma matriz com todas as correspondências para 
 *      uma condição que você especificar.
 * 
 *      Por fim, é importante entender que indexOf(), lastIndexOf() e 
 *      includes() todos usam o operador === para testar 
 *      correspondências. Isso significa que nenhuma conversão de tipo é 
 *      realizada (então 3 não será igual a '3'). Além disso, se seu
 *      array contiver objetos, as referências serão comparadas, não o 
 *      conteúdo. Se você precisar alterar o significado de igualdade ou 
 *      quiser usar um teste de pesquisa diferente, use o método 
 *      findIndex().
*/
