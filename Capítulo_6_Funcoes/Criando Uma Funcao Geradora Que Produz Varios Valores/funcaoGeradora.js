"use strict";

/**
 *      Você quer criar um gerador, uma função que pode fornecer 
 *      múltiplos valores sob demanda. Cada vez que um gerador retorna um 
 *      valor, ele pausa sua execução até que o chamador solicite o 
 *      próximo valor.
 * 
 *      Para declarar uma função geradora, comece substituindo a 
 *      palavra-chave function por function*:
*/
function* gerarValores() {

}

/**
 *      Dentro da função geradora, use a palavra-chave yield sempre que 
 *      quiser retornar um resultado. Lembre-se, a execução para depois 
 *      que você yield (muito parecido com quando você usa a 
 *      palavra-chave return). No entanto, a execução continua quando o c
 *      hamador pede o próximo valor da função. Esse processo continua 
 *      até que o código da função termine, ou você retorne um valor 
 *      final com a palavra-chave return.
*/
function* gerarValores() {
    yield 895498;
    yield "Este é o segundo valor";
    yield 5;
    return "Este é o fim";
}

/**
 *      Quando você chama uma função geradora, você recebe um objeto 
 *      Generator como um valor de retorno. Isso acontece imediatamente, 
 *      antes que o código da função geradora comece a ser executado. 
 *      Você usa o objeto Generator para executar a função e recuperar os 
 *      valores que são produzidos. Você também pode usá-lo para 
 *      determinar quando a função geradora é concluída.
 * 
 *      Cada vez que você chama Generator.next(), a função geradora é 
 *      executada até atingir o próximo yield (ou o retorno final). O 
 *      método next() retorna um objeto com dois valores. A propriedade 
 *      value encapsula o valor yielded ou retornado da função geradora. 
 *      A propriedade done é um Boolean que permanece false até que a 
 *      função geradora tenha terminado.
*/
const gerador = gerarValores();

// Começa o gerador (Executa do começo até o primeiro yield)
console.log(gerador.next().value); // 895498

// Continua o gerador (atpe o próximo yield)
console.log(gerador.next().value); // "Este é o segundo valor"

// Obtém os dois valores finais
console.log(gerador.next().value); // 5
console.log(gerador.next().value); // "Este é o fim"


/**
 *      Os geradores permitem que você crie funções que podem ser 
 *      pausadas e retomadas. O melhor de tudo é que o JavaScript 
 *      gerencia seu estado automaticamente, o que significa que você não 
 *      precisa escrever nenhum código para preservar valores entre 
 *      chamadas para next(). (Isso é diferente de construir um iterador 
 *      personalizado, por exemplo.)
 * 
 *      Como os geradores têm um modelo de execução lenta, eles são uma 
 *      boa escolha para operações de criação ou recuperação de dados que 
 *      consomem tempo. Por exemplo, você pode usar um gerador para 
 *      calcular números em uma sequência complexa, para recuperar 
 *      pedaços de informação de um fluxo de dados. Normalmente, você não 
 *      sabe quantos valores um gerador retornará. Você pode escrever um 
 *      while loop que verifica a propriedade Generator.done e continua 
 *      chamando next() até que termine. Mas como o objeto gerador é 
 *      iterável, um for…of loop funciona ainda melhor:
*/

// Obtém todos os valores do gerador
for (const valor of gerarValores()) {
    console.log(valor);
}

// Com a sintaxe de spread, você pode despejar tudo em um array em uma etapa
const valores = [...gerarValores()];
console.log(valores); // [ 895498, 'Este é o segundo valor', 5 ]

/**
 *      De qualquer forma, essa abordagem só obtém os resultados yield. 
 *      Se seu gerador tiver um valor de retorno final, ele será ignorado.
 * 
 *      Algumas funções geradoras são projetadas para serem infinitas. 
 *      Enquanto você continuar chamando next(), elas continuarão 
 *      produzindo valores. Se você estiver chamando um gerador infinito, 
 *      não poderá despejar todos os seus valores em um array (seu 
 *      programa travará). Em vez disso, você provavelmente usará um loop 
 *      while com uma condição que se torna false quando você tiver todos 
 *      os valores que precisa.
*/

// Extra: Construindo um gerador de números pseudoaleatórios repetível