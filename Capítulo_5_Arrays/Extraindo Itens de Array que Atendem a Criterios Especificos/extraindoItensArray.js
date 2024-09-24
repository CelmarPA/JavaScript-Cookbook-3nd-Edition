"use strict";

/**
 *      Você quer encontrar todos os itens em um array que correspondem 
 *      a uma determinada condição e copiá-los para um novo array.
 * 
 *      Use o método Array.filter() para executar um teste em cada item:
*/
function comecaComE(animal) {
    return animal[0].toLowerCase() === "e"
}

const animais = ["elefante", "tigre", "ema", "zebra", "gato", "cachorro", "enguia", "coelho", "ganso", "lacraia"];

const animaisE = animais.filter(comecaComE);

console.log(animaisE); // ['elefante', 'ema', 'enguia']

/**
 *      Este exemplo é intencionalmente longo para que você possa ver as 
 *      diferentes partes da solução. A função de filtro é chamada para 
 *      cada item no array. Neste caso, isso significa que comecaComE() 
 *      é chamada 10 vezes e passa uma string diferente a cada vez. Se a 
 *      função de filtro retornar true, esse item é adicionado ao novo 
 *      array.
 * 
 *      Aqui está o mesmo exemplo condensado com uma função de seta. 
 *      Agora a lógica do filtro é definida no mesmo lugar no código onde 
 *      você a usa:
*/
const animaisComE = animais.filter(animal => animal[0].toLocaleLowerCase() === "e");

console.log(animaisComE); // [ 'elefante', 'ema', 'enguia' ]

/**
 *      Neste exemplo, a função filter verifica se cada item começa com a 
 *      letra e. Mas você poderia facilmente pegar números que caem em um 
 *      certo intervalo, ou objetos que têm certos valores de 
 *      propriedade. O método filter() é um de um novo conjunto de 
 *      métodos de array modernos que substituem o antigo código 
 *      iterativo por uma abordagem funcional. Nada impede você de usar 
 *      um loop for para percorrer seu array, testar cada item e inserir 
 *      correspondências em um novo array com Array.push(). No entanto, 
 *      se você puder executar a mesma tarefa com o método filter(), 
 *      normalmente será recompensado com um código mais compacto e 
 *      testes mais fáceis.
 */
