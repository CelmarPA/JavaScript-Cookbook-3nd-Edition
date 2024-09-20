'use strict'

// "use strict"

// Esta função adiciona uma lista de números consecutivos
function adicionarFaixa(inicio, fim) {
    let soma = 0;
    for (let i = inicio; i < fim + 1; i++) {
        soma += i;
    }
    return soma;
}

// Adiciona números de 10 a 15
let numInicial = 10;
let numFinal = 15;

console.log(adicionarFaixa(numInicial, numFinal)); // Exibe 75

// Agora adiciona números de 1 a 5
numInicial = 1;
numFinal = 5;

console.log(adicionarFaixa(numInicial, numFinal)); // Exibe 0, onde esperamos 15

/**
 *      Isso acontece porque JavaScript cria variáveis sempre que você  
 *      atribui um valor, mesmo que não defina explicitamente a variável.
 * 
 *      Para evitar esse problema adicione "use strict" no topo do 
 *      arquivo antes do código da função.
*/
