"use strict";

/**
 *      Você quer adicionar uma propriedade com nome exclusivo a um 
 *      objeto e quer ter a garantia de que ela não entrará em conflito 
 *      com nenhum outro nome de propriedade.
 * 
 *      Crie um novo nome de propriedade usando o tipo Symbol. Então, use 
 *      esse nome para definir a propriedade, usando a sintaxe 
 *      chave-valor:
*/
const novoObjeto = {};

// Define uma propriedade única que nunca irá colidir com qualquer outra
const idUnico = Symbol();
novoObjeto[idUnico] = "Não há dois iguais";

// Definie outra propriedade
const outroIdUnico = Symbol();
novoObjeto[outroIdUnico] = "Este também não irá colidir";

console.log(novoObjeto);

/**
 *      Curiosamente, você nunca vê realmente o identificador exclusivo 
 *      que o tipo Symbol usa. Neste exemplo,  a saída que você obterá no 
 *      console será:
 * 
 *          {
 *              [Symbol()]: 'Não há dois iguais',
 *              [Symbol()]: 'Este também não irá colidir'
 *          }
 * 
 *         Para acessar uma propriedade criada com Symbol, você precisa 
 *         manter o controle da variável que tem o nome da propriedade. 
 *          Você usa isso para recuperar seu valor à vontade:
*/
console.log(novoObjeto[idUnico]); // "Não há dois iguais"

/**
 *      Colisões de nomes de propriedades não são um evento comum, mas 
 *      são mais comuns em JavaScript do que em muitas outras linguagens. 
 *      Parte do problema é que as propriedades são sempre públicas. Isso 
 *      significa que se você estiver herdando de outra classe, você 
 *      precisa estar ciente de cada propriedade herdada e certificar-se 
 *      de não usar o mesmo nome você mesmo. Mas a causa mais comum de 
 *      conflitos de nomenclatura é se você estiver criando algum tipo de 
 *      sistema ou serviço de extensibilidade que precisa que você 
 *      adicione propriedades a objetos de outras pessoas. Nessa 
 *      situação, você não saberá se suas propriedades entrarão em 
 *      conflito com as propriedades já naquele objeto, porque você não 
 *      possui o design daquele objeto.
 * 
 *      Existem várias soluções alternativas que você pode usar para 
 *      verificar propriedades e gerar nomes aleatórios. Mas o tipo 
 *      Symbol oferece uma solução rápida e eficaz. Cada Symbol tem 
 *      garantia de ser único. Você o cria chamando o método Symbol(). 
 *      (Você não chama um construtor com new, porque Symbol é um tipo 
 *      primitivo, não um objeto.)
 * 
 *      Opcionalmente, você pode dar uma descrição ao seu símbolo, o que 
 *      é útil para depuração:
*/
const nomePropriedade = Symbol("Status Log");
novoObjeto[nomePropriedade] = "Logado";

/**
 *      No entanto, a descrição não é usada para criar o Symbol. Se você 
 *      criar duas instâncias de Symbol com a mesma descrição, haverá 
 *      dois identificadores exclusivos completamente separados, que o 
 *      JavaScript armazena internamente em um registro global de valores 
 *      de Symbol.
*/
