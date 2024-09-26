"use strict";

/**
 *      Você quer criar uma função que aceite tantos argumentos quantos o 
 *      chamador quiser fornecer, sem exigir a criação de uma matriz.
 *      
 *      Use um parâmetro rest quando declarar sua função. O parâmetro 
 *      rest é definido com três pontos antes do seu nome:
*/
function somaArredondada(...numeros) {
    let soma = 0;

    for (let i = 0; i < numeros.length; i++) {
        soma += Math.round(numeros[i]);
    }

    return soma;
}

console.log(somaArredondada(2.3, 4, 5, 16, 18.1)); // 45

/**
 *      O parâmetro rest não precisa ser o único parâmetro, mas deve ser 
 *      o último parâmetro. Ele coleta todos os argumentos extras que são 
 *      passados ​​para a função e os adiciona a um novo array.
 * 
 *      No passado, os desenvolvedores JavaScript usavam o objeto 
 *      arguments para funcionalidade semelhante. O objeto arguments está 
 *      disponível em todas as funções (tecnicamente, é a propriedade 
 *      Function.arguments) e fornece acesso semelhante a um array a 
 *      todos os parâmetros. No entanto, arguments não é um array 
 *      verdadeira, e os desenvolvedores geralmente usavam código padrão 
 *      para transformá-lo em um. Você ainda pode ver essa abordagem por 
 *      aí, mas hoje os parâmetros rest evitam esse incômodo.
 * 
 *      O parâmetro rest parece o mesmo que o operador spread, mas os 
 *      dois desempenham papéis complementares. O operador spread expande 
 *      um array ou as propriedades de um objeto em valores separados, 
 *      enquanto o operador rest coleta valores separados e os insere
 *      em um único objeto de array.
*/
