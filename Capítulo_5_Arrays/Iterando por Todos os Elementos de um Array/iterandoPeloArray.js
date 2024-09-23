"use strict";

/**
 *      Você quer usar a melhor abordagem para fazer um loop em cada 
 *      elemento de uma array, em ordem.
 * 
 *      A abordagem tradicional é um loop for…of, que obtém 
 *      automaticamente cada item:
*/
const animais = ["elefante", "tigre", "leão", "zebra", "gato", "cachorro", "coelho"];

for (const animal of animais) {
    console.log(animal);
}

/**
 *      No JavaScript moderno, está se tornando cada vez mais comum 
 *      favorecer abordagens funcionais em código de processamento de 
 *      array. Você pode iterar sobre seu array de uma forma funcional 
 *      usando o método Array.forEach(). Você fornece uma função, e essa 
 *      função é chamada uma vez para cada elemento no array, e passa 
 *      três parâmetros potencialmente úteis (o elemento, o índice do 
 *      elemento e o array original). Aqui está um exemplo:
*/
animais.forEach(function (animal, index, array) {
    console.log(animal);
});

// É possível condensar isso ainda mais cusando a sintaxe de seta:
animais.forEach((animal, index, array) => {
    console.log(animal);
});

/**
 *      Em linguagens de longa duração como JavaScript, geralmente há 
 *      muitas maneiras de realizar a mesma coisa. O loop for…of oferece 
 *      uma sintaxe direta para iterar sobre um array. Ele não permite 
 *      que você modifique os elementos no array que está percorrendo, o 
 *      que é uma abordagem segura e sensata.
 * 
 *      No entanto, há casos em que você precisará usar algo diferente. 
 *      Uma das escolhas mais flexíveis é um loop for básico com um 
 *      contador:
*/
for (let i = 0; i < animais.length; i++) {
    console.log(animais[i]);
}
/**
 *      Essa abordagem pode permitir que erros off-by-one passem 
 *      despercebidos, o que ainda é uma fonte surpreendentemente comum 
 *      de erros na programação moderna. No entanto, você precisará usar 
 *      um loop for em algumas situações, como quando estiver se movendo 
 *      por mais de um array ao mesmo tempo.
 * 
 *      Você também pode iterar sobre um array passando uma função para o 
 *      método Array.forEach(). Esta função é então chamada uma vez para 
 *      cada elemento. Sua função pode receber três parâmetros: o 
 *      elemento atual do array, o índice atual do array e uma referência 
 *      ao array original. Normalmente, você só precisará do elemento. 
 *      (Você pode usar o índice para fazer alterações no elemento no 
 *      array original, mas isso é considerado uma forma ruim.)
 *      
 *      Em vez disso, se você quiser usar uma abordagem funcional para 
 *      alterar ou examinar sua matriz, considere usar um método mais 
 *      específico e direcionado.
*/

/**
 *      Métodos para processamento de funcional de arrays: * 
 *          • map(): Alterar cada elemento do array
 *          • every(): Verifica se todos os elementos atendem a uma     
 *            condição específica 
 *          • some(): Verifica se pelo menos um elemento atende a uma 
 *            condição específica
 *          • filter(): Encontra elementos de matriz que correspondam aos 
 *            seus critérios
 *          • sort(): Reordenar um array
 *          • reduce(): Usa todos os valores de um array em um cálculo
 * 
 *      A prática de codificação moderna favorece abordagens funcionais 
 *      para processamento de array em vez de abordagens iterativas. A 
 *      vantagem de uma abordagem funcional é que seu código pode ser 
 *      mais conciso, geralmente mais legível e menos propenso a erros. 
 *      Na maioria das vezes, a abordagem funcional também impõe 
 *      imutabilidade para seu array. Ela faz isso criando uma nova cópia 
 *      do array com as alterações que você deseja, em vez de fazer 
 *      modificações diretas no objeto array original. Essa abordagem 
 *      também torna certos tipos de erros menos prováveis.
*/
