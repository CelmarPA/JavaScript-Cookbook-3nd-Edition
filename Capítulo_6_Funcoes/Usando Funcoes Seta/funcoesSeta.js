"use strict";

/**
 *      Você quer usar a sintaxe de seta do JavaScript para declarar uma 
 *      função inline da maneira mais compacta possível.
 * 
 *      Nos últimos anos, o JavaScript mudou para enfatizar padrões de 
 *      programação funcional — processamento de array e promessas 
 *      assíncronas são dois exemplos notáveis. Para ajudar, eles 
 *      adicionaram uma nova sintaxe de função simplificada para escrever 
 *      funções inline, chamada sintaxe de seta.
 * 
 *      Aqui está um exemplo de uso do método Array.map() para 
 *      transformar o conteúdo de um array usando uma função nomeada sem 
 *      usar a sintaxe de seta. O array inicial é uma lista de números, e 
 *      o array transformado tem o quadrado de cada número:
*/
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function quadradoNumero(numero) {
    return numero**2;
}

const quadrados = numeros.map(quadradoNumero);

console.log(quadrados); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

/**
 *      Aqui está o mesmo exemplo, mas com a função quadradoNumero() 
 *      declarada inline usando sintaxe de seta:
*/
const quadrados2 = numeros.map(numero => numero**2);

console.log(quadrados2); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

/**
 *      Este exemplo usa a forma mais compacta da sintaxe de seta. Isso 
 *      funciona para funções de parâmetro único, de instrução única. 
 *      Outras funções podem não conseguir usar todas as simplificações 
 *      da sintaxe de seta. Para entender o porquê, aqui está uma análise 
 *      passo a passo de como você converte uma função nomeada em uma 
 *      expressão de função que usa a sintaxe de seta:
 * 
 *          1. Coloque a lista de parâmetros primeiro, seguido do símbolo 
 *             =>. Se não houver parâmetros, use um conjunto vazio de 
 *             parênteses antes do símbolo =>.
 *                  (numero) =>
 * 
 *          2. Se houver exatamente um parâmetro (como neste exemplo), 
 *             você pode remover os parênteses ao redor da lista de 
 *             parâmetros.
 *                  numero =>
 * 
 *          3. Coloque as chaves e o corpo da função do outro lado da   
 *             seta.
 *                  numero => {
 *                     return numero**2;
 *                  }
 * 
 *          4. Se houver apenas uma instrução, você pode remover as 
 *             chaves e a palavra-chave return. Mas se você tiver mais de 
 *             uma instrução, você deve manter as chaves e a 
 *             palavra-chave return.
 *                  numero => numero**2;
 * 
 *      Lembre-se, a função de seta é usada para declarar funções inline, 
 *      então você sempre estará passando-a para um parâmetro ou 
 *      atribuindo-a a uma variável em uma expressão:
*/
const minhaFuncao = numero => numero**2;

const numeroQuadrado = minhaFuncao(10);
console.log(numeroQuadrado); // 100

/**
 *      Agora vamos ver como converter esta função um pouco mais complexa:
*/
function elevarPotencia(numero, potencia) {
    return numero**potencia;
}

/**
 *      Você pode executar os passos 1, 3 e 4, mas o passo 2 não se 
 *      aplica (porque esta função tem dois parâmetros):
*/
const minhaFuncao2 = (numero, potencia) => numero**potencia;

/**
 *      Ou considere esta função de processamento de string mais 
 *      detalhada:
*/
function aplicaTituloMaiusculo(string) {
    // Separa a string em um array de palavras
    const arrayPalavras = string.split(" "); 

    // Cria um novo array que ira manter as palavras processadas
    const arrayPalavrasProcessadas = [];

    for (const palavra of arrayPalavras) {
        // Transforma a primeira letra da palavra em maiúscula
        arrayPalavrasProcessadas.push(palavra[0].toUpperCase() + palavra.slice(1));
    }

    // Junta as palavras de volta em uma única string
    return arrayPalavrasProcessadas.join(" ");
}

/**
 *      Aqui, as etapas 1, 2 e 3 se aplicam, mas a etapa 4 não. Você deve 
 *      manter as chaves e a instrução return intactas.
*/
const minhaFuncao3 = string => {
    // Separa a string em um array de palavras
    const arrayPalavras = string.split(" ");

    // Cria um novo array que ira manter as palavras processadas
    const arrayPalavrasProcessadas = [];

    for (const palavra of arrayPalavras) {
        // Transforma a primeira letra da palavra em maiúscula
        arrayPalavrasProcessadas.push(palavra[0].toUpperCase() + palavra.slice(1));
    }

    // Junta as palavras de volta em uma única string
    return arrayPalavrasProcessadas.join(" ");
}

/**
 *      Agora, a diferença entre a abordagem tradicional e a sintaxe de 
 *      seta é muito menor. Apenas a declaração da função no início 
 *      mudou, e a economia geral de código é mínima.
 * 
 *      É aqui que as decisões sobre a sintaxe de seta se tornam mais 
 *      obscuras. Geralmente é possível compactar uma função com várias 
 *      instruções em uma única expressão. No exemplo de processamento de 
 *      string, você poderia usar o encadeamento de métodos e a função 
 *      Array.map() em vez de um loop for. Aplicadas agressivamente, 
 *      essas alterações podem encurtar applyTitleCase() para uma longa 
 *      instrução. Você poderia então usar todos os atalhos de sintaxe de 
 *      seta. No entanto, neste caso, o objetivo de um código mais 
 *      conciso não vale a pena troca de clareza. Como regra geral, a 
 *      sintaxe de seta é um benefício apenas quando ajuda você a 
 *      escrever um código mais legível.
 * 
 *      As funções de seta têm uma maneira diferente de vincular a 
 *      palavra-chave this. Em uma função declarada, this mapeia para o 
 *      objeto que chama a função, que pode ser a janela atual, um botão
 *      e assim por diante. Em uma função de seta, this simplesmente se 
 *      refere ao código onde a função de seta é definida. (Em outras 
 *      palavras, seja lá o que for this onde você cria sua função de 
 *      seta, permanece this quando a função é executada.) Esse 
 *      comportamento simplifica muitos problemas, mas a um custo. Isso 
 *      significa que a sintaxe de seta não é adequada para métodos e 
 *      construtores de objeto, porque as funções de seta não serão 
 *      vinculadas ao objeto no qual são chamadas. Mesmo usando 
 *      Function.bind() não mudará esse comportamento.
 * 
 *      Há algumas restrições menores também. Funções de seta não podem 
 *      ser usadas com yield para fazer uma função geradora, e não 
 *      suportam o objeto arguments.     
*/
