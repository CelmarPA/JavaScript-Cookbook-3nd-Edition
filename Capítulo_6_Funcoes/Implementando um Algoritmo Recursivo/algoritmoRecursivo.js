"use strict";

/**
 *      Você quer implementar uma função que chama a si mesma para 
 *      realizar uma tarefa, que é uma técnica chamada recursão. A 
 *      recursão é útil ao lidar com estruturas de dados hierárquicas 
 *      (por exemplo, árvores de nós ou matrizes aninhadas), certos tipos 
 *      de algoritmos (classificação) e alguns cálculos matemáticos (a 
 *      sequência de Fibonacci).]
 * 
 *      Recursão é um conceito bem conhecido no campo da matemática, 
 *      assim como na ciência da computação. Um exemplo de recursão em 
 *      matemática é a sequência de Fibonacci. Um número de Fibonacci é a 
 *      soma dos dois números de Fibonacci anteriores:
 * 
 *          f(n) = f(n-1) + f(n-2)
 *              para n = 2, 3, 4, ..., n e
 *              f(0) = 0 e f(1) = 1
 * 
 *      Outro exemplo de recursão matemática é um fatorial, geralmente 
 *      denotado com um ponto de exclamação (4!). Um fatorial é o produto 
 *      de todos os inteiros de 1 a um dado número n. Se n for 4, então o 
 *      fatorial (4!) seria:
 * 
 *          4! = 4 x 3 x 2 x 1 = 24
 * 
 *      Essas recursões podem ser codificadas em JavaScript usando uma 
 *      série de loops e condições, mas também podem ser codificadas 
 *      usando recursão funcional. Aqui está uma função recursiva que 
 *      encontra o enésimo número na sequência de Fibonacci:
*/
function fibonacci(n) {
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10)); // 55

/**
 *      E aqui está um que resolve um fatorial:
*/
function fatorial(n) {
    return n <= 1 ? 1 :  n * fatorial(n - 1);
}

console.log(fatorial(4)); // 24

/**
 *      Uma característica que distingue funções recursivas é uma 
 *      condição de término (também conhecida como caso base). Uma função 
 *      recursiva não pode continuar chamando a si mesma 
 *      indiscriminadamente, porque isso levaria a um loop infinito (até 
 *      que o espaço da pilha se esgote e o programa falhe). Em vez 
 *      disso, uma função recursiva examina uma condição e então decide 
 *      chamar a si mesma (avançando um nível mais a fundo na recursão) 
 *      ou retornar um valor (avançando um nível para trás, para a função 
 *      de chamada). Quando a função de nível superior retorna um valor, 
 *      esse se torna o resultado final e a operação recursiva é 
 *      concluída.
 * 
 *      No exemplo de Fibonacci, n é testado para ver se é menor que 2. 
 *      Se for, é retornado; caso contrário, a função Fibonacci é chamada 
 *      novamente com (n-1) e com (n-2), e a soma de ambos é retornada.
 * 
 *      No exemplo fatorial, quando a função é chamada pela primeira vez, 
 *      o valor passado como o argumento é comparado ao número 1. Se n 
 *      for menor ou igual a 1 (números negativos não são suportados 
 *      nesta implementação simples), a função termina, retornando 1. No 
 *      entanto, se n for maior que 1, o que é retornado é o valor de n 
 *      vezes uma chamada para a função fatorial() novamente, desta vez 
 *      passando um valor de n–1. O valor de n então diminui a cada 
 *      iteração da função, até que a condição de término seja atingida.
 * 
 *      À medida que um fatorial é computado, os valores intermediários 
 *      de cada chamada de função são empurrados para uma pilha na 
 *      memória e mantidos até que a condição de término seja atendida. 
 *      Então os valores são retirados da memória e retornados, em um 
 *      estado semelhante ao seguinte:
 * 
 *          return 1; // 0!
 *          return 1; // 1!
 *          return 1 * 2; // 2!
 *          return 1 * 2 * 3; // 3!
 *          return 1 * 2 * 3 * 4; // 4!
 * 
 *      A maioria das funções recursivas pode ser substituída por código 
 *      que executa a mesma função linearmente, por meio de algum tipo de 
 *      loop. E os loops podem ter um desempenho melhor, embora a 
 *      diferença seja geralmente insignificante. A vantagem da recursão 
 *      é que as funções recursivas podem ser muito concisas e mínimas. 
 *      Se elas são mais claras é uma questão de debate. (Elas são 
 *      claramente mais curtas, o que as torna mais fáceis de digerir, 
 *      mas sua natureza autorreferencial pode tornar sua lógica mais 
 *      difícil de entender à primeira vista, principalmente para 
 *      programadores que nunca usaram funções recursivas antes.)
 * 
 *      Se uma função recursiva se chama repetidamente, ela acabará 
 *      esgotando a pilha de chamadas. Essa condição leva a um erro com 
 *      uma mensagem como “Out of stack space,” “Too much recursion,” ou 
 *      “Maximum call stack size exceeded.”. A mensagem exata e o número 
 *      de chamadas de função abertas que são permitidas de uma vez 
 *      dependem da implementação do mecanismo JavaScript. No entanto, 
 *      essas mensagens de erro geralmente indicam uma função recursiva 
 *      incorretamente estruturada que está falhando em avaliar sua 
 *      condição de término e chamando a si mesma em um loop infinito.
*/
