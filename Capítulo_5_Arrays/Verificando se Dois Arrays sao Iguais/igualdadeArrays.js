"use strict";

/**
 *      Você quer uma maneira simples de testar se dois arrays são 
 *      equivalentes (têm exatamente o mesmo conteúdo).
 * 
 *      A abordagem mais direta é, na verdade, a abordagem antiga: use um
 *      loop for básico com um contador, passe por ambos os arrays ao 
 *      mesmo tempo e compare cada elemento. Claro, há algumas 
 *      verificações a serem feitas antes de começar o loop, como 
 *      verificar se cada objeto é um array, não é nulo e assim por 
 *      diante. Aqui está um pouco de código que empacota todos esses 
 *      critérios em uma única função útil:
*/
function arraysSaoIguais(arrayA, arrayB) {
    if (!Array.isArray(arrayA) || !Array.isArray(arrayB)) {
        // Esses objetos são nulos, não declarados ou objetos não array
        return false;
    } else if (arrayA === arrayB) {
        // Atalho: são duas referências apontando para o mesmo array
        return true;
    } else if (arrayA.length !== arrayB.length) {
        // Ele não podem ser iguais se possuem tamanhos diferentes
        return false;
    } else {
        // Faz um loop por cada elemento de cada array e compara
        for (let i = 0; i < arrayA.length; i++) {
            // Exigimos que os itens tenham o mesmo conteúdo e sejam do mesmo tipo, mas você pode usar igualdade de tipagem frouxa dependendo do seu trabalho
            if (arrayA[i] !== arrayB[i]) {
                return false;
            }
            return true;
        }
    }
}

// Agora você pode verificar se dois arrays são iguais, assim:
const nomesFrutasA = ["maçã", "kumquat", "toranja", "kiwi"];
const nomesFrutasB = ["maçã", "kumquat", "toranja", "kiwi"];
const nomesFrutasC = ["abacate", "abobora", "pimentão vermelha", "pepino"];

console.log(arraysSaoIguais(nomesFrutasA, nomesFrutasB)); // true
console.log(arraysSaoIguais(nomesFrutasA, nomesFrutasC)); // false

/**
 *      Nesta versão de arraysSaoIguais(), arrays com os mesmos itens em 
 *      uma ordem diferente são considerados não correspondentes. Você 
 *      pode facilmente classificar arrays de strings ou números usando o 
 *      método Array.sort(). No entanto, não faz sentido colocar este 
 *      código na função arraysSaoIguais(), porque ele pode não ser 
 *      apropriado para os tipos de dados que você deseja usar, ou pode 
 *      ser proibitivamente lento se você quiser comparar arrays enormes. 
 *      Em vez disso, classifique seus arrays antes de testá-los para 
 *      igualdade:
 */
const nomesFrutasD = ["kumquat", "kiwi", "toranja", "maçã"];

console.log(arraysSaoIguais(nomesFrutasA.sort(), nomesFrutasD.sort())); // true

/**
 *      Frequentemente, na programação, cabe a você decidir o que 
 *      igualdade significa. Neste exemplo, arraysSaoIguais() executa uma 
 *      comparação superficial. Se dois arrays têm os mesmos primitivos
 *      ou as mesmas referências de objeto, e seus elementos estão na 
 *      mesma ordem, eles correspondem. Mas se você começar a comparar 
 *      objetos mais complexos, ambiguidades aparecem.
 * 
 *      Por exemplo, considere esta comparação de dois arrays que 
 *      contêm um único objeto Date idêntico:
*/
const dataA = [new Date(2024, 8, 23)];
const dataB = [new Date(2024, 8, 23)];
let datac = new Date(2024, 8, 23)

console.log(arraysSaoIguais(dataA, dataB)); // false

/**
 *      Esses arrays não correspondem porque, embora o conteúdo da data 
 *      subjacente seja o mesmo, as instâncias de Date são diferentes.
 * 
 *      Claro, você pode comparar facilmente o conteúdo de dois objetos 
 *      Date (basta chamar get Time() para convertê-los para a 
 *      representação de tempo em milissegundos. Mas se você quiser fazer 
 *      isso em uma comparação de array, cabe a você escrever uma função 
 *      diferente. Na sua função, você pode usar instanceOf para 
 *      identificar objetos Date e então chamar getTime() neles:
*/
function arraysSaoIguais2(arrayA, arrayB) {
    if (!Array.isArray(arrayA) || !Array.isArray(arrayB)) {
        return false;
    } else if (arrayA === arrayB) {
        return true;
    } else if (arrayA.length !== arrayB.length) {
        return false;
    } else {
        for (let i = 0; i < arrayA.length; i++) {
            // Verifica por datas iguais
            if (arrayA[i] instanceof Date && arrayB[i] instanceof Date) {
                if (arrayA[i].getTime() !== arrayB[i].getTime()) {
                    return false;
                }
            } else {
                // Use a verificação de igualdade estrita normal
                if (arrayA[i] !== arrayB[i]) {
                    return false;
                }
            }
        }
        return true;
    }
}
console.log(arraysSaoIguais2(dataA, dataB)); // true
