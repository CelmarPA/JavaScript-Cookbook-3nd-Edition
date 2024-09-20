"use strict";

/**
 *      Você quer encontrar todas as instâncias de um padrão dentro de 
 *      uma string e iterar sobre elas.
 * 
 *      Use uma expressão regular com o método String.matchAll(). O 
 *      método matchAll() retorna um iterador que permite que você 
 *      faça um loop sobre todas as correspondências.
 * 
 *      O próximo exemplo usa uma expressão regular para encontrar 
 *      qualquer palavra que comece com "t" e termine com "o", com 
 *      qualquer número de caracteres entre eles.
*/
const buscarString = "Agora é o tempo e este é o tempo e esse é o tempo";

const regex = /t\w*o/g;

const correspondencias = buscarString.matchAll(regex);

for (const correspondencia of correspondencias) {
    console.log(`Em ${correspondencia.index} nós encontramos ${correspondencia[0]}`);
}

/**
 *      Quando você pesquisa com matchAll(), cada correspondência é um 
 *      objeto. Conforme você itera sobre suas correspondências, você 
 *      pode examinar o texto correspondido (correspondencia[0]) e o 
 *      índice onde a correspondência foi encontrada (correspondencia.
 *      index).
 * 
 *      E se você não quiser iterar sobre os resultados imediatamente, 
 *      você pode despejar tudo em um array usando o operador spread:
*/
// Coloca as 3 correspondências em um array
const correspondencia = [...buscarString.matchAll(regex)];
console.log(correspondencia);
