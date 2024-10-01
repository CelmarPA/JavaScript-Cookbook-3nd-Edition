"use strict";

/**
 *      Extra: Cadeias de Protótipos
 * 
 *      Você pode se lembrar que o recurso de classe JavaScript cria um 
 *      protótipo para um objeto. Este protótipo contém a implementação 
 *      de todos os seus métodos e propriedades, e é compartilhado entre 
 *      todas as instâncias dessa classe. Protótipos também são o segredo 
 *      da herança. Quando uma classe estende outra, elas são vinculadas 
 *      em uma cadeia de protótipos.
 * 
 *      Por exemplo, considere o relacionamento de Forma e Triangulo. A 
 *      classe Triangulo tem um protótipo que contém o que você definiu 
 *      para a classe filha. No entanto, esse protótipo tem seu próprio 
 *      protótipo, que é o protótipo para a classe Forma, com todos os 
 *      seus membros. O protótipo Forma também tem seu próprio protótipo: 
 *      o tipo base Object.prototype, que encerra a cadeia de protótipos.
 * 
 *      A herança pode ir a tantos níveis de profundidade quanto você 
 *      quiser, então uma cadeia de protótipos pode se tornar
 *      muito mais longa. Quando você chama um método como 
 *      Triangulo.getArea(), o JavaScript pesquisa a cadeia de 
 *      protótipos. Ele procura um método no protótipo Triangulo, depois 
 *      no protótipo Forma e então no protótipo Object (nesse ponto ele 
 *      falha com um erro se não conseguir encontrar um método 
 *      correspondente).
 * 
 *      Claro, classes JavaScript são relativamente novas, e protótipos 
 *      existem desde a primeira versão da linguagem. Então não é nenhuma 
 *      surpresa que você possa criar relacionamentos semelhantes a 
 *      herança usando protótipos mesmo se você não estiver usando 
 *      classes JavaScript. Às vezes isso é pareado com o padrão de 
 *      construtor antiquado, o que resulta em algum código decididamente 
 *      deselegante:
*/

// Esta será a classe pai
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

// Adicione os métodos que você deseja à classe Pessoa
Pessoa.prototype.saudacao = function () {
    console.log("Eu sou " + this.nome + " " + this.sobrenome);
}

// Essa será a classe filha
function Empregado(nome, sobrenome, departamento) {
    // O método Object.call() permite que você encadeie funções construtoras
    // Ele vincula o construtor Pessoa ao contexto deste objeto
    Pessoa.call(this, nome, sobrenome);

    // Adiciona detalhes extras
    this.departamento = departamento;
}

// Vincula o protótipo Pessoa à função Empregado
// Isso estabelece o relacionamento de herança
Empregado.prototype = Object.create(Pessoa.prototype);
Empregado.prototype.constructor = Empregado;

// Agora adiciona os métodos que você deseja à classe Empregado
Empregado.prototype.introducaoTrabalho = function () {
    console.log("Eu trabalho no " + this.departamento);
}

// Quando você cria uma instância da função Empregado, seu protótipo é encadeado de volta ao protótipo Pessoa

const novoEmpregado = new Empregado("Luke", "Takei",  "Suporte Técnico");

// Você pode chamar métodos de Pessoa e métodos de Empregado
novoEmpregado.saudacao(); // "Eu sou Luke Takei"
novoEmpregado.introducaoTrabalho(); // "Eu trabalho no Suporte Técnico"

/**
 *      Este padrão deve estar obsoleto agora, porque as classes oferecem 
 *      um método mais limpo para criar relacionamentos de herança. Mas 
 *      ele ainda permanece em muitas bases de código de longa duração.
*/
