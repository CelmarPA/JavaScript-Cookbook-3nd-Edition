"use strict";

/**
 *      Você deseja criar um modelo reutilizável para objetos 
 *      personalizados.
 * 
 *      Use a palavra-chave class e dê um nome à sua classe. Dentro, 
 *      adicione uma função construtora que inicializa seu objeto. Aqui 
 *      está um exemplo completo da classe Pessoa:
*/
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

// Teste a classe Pessoa criando um objeto
// O construtor é invocado quando você usa a palavra-chave new com a classe
const novaPessoa = new Pessoa("Luke", "Takei");

console.log(novaPessoa.nome); // "Luke"

/**
 *      Neste exemplo, a classe Pessoa é um pacote simples que agrupa 
 *      dois campos públicos (nome e sobrenome). Mas é fácil o suficiente 
 *      adicionar métodos à sua classe, que funcionam como funções, mas 
 *      não incluem a palavra-chave function. Veja como você codificaria 
 *      um método Person.trocarNomes():
*/
class Pessoa2 {
    constructor(nome, sobrenome, dataNascimento) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.dataNascimento = dataNascimento;
 
    }

    // Esse é um método
    trocarNomes() {
        // Use um atalho prático (atribuição de desestruturação) para atribuir ambas propriedades de uma vez
        [this.nome, this.sobrenome] = [this.sobrenome, this.nome];
    }
}

// Testando a classe Pessoa
const pessoa = new Pessoa2("Luke", "Takei", new Date(1990, 5, 22));

pessoa.trocarNomes();

console.log(pessoa.nome); // "Takei"

/**
 *      As classes têm seus próprios requisitos de sintaxe que você deve 
 *      seguir:
 * 
 *          • Funções construtoras são sempre nomeadas construtor.
 *          • Nem construtores nem métodos usam a palavra-chave function, 
 *            embora sejam declarados como funções em todos os outros 
 *            aspectos.
 * 
 *      Quando você escreve um constructor, você usa this para criar 
 *      novos campos públicos no objeto atual. Você pode então se referir 
 *      a esses campos onde quer que precise deles em seus métodos de 
 *      classe, desde que você se lembre de sempre prefixar o nome da 
 *      variável com this. Você pode também acessar esses campos fora do 
 *      código da classe, usando a sintaxe de ponto familiar.
 * 
 *      Assim como com funções, JavaScript permite que você crie classes 
 *      em uma expressão. Aqui está um exemplo:
*/
const pessoaExpressao = class Pessoa3 {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

// Isso não funcionará, porque não há nenhuma classe Pessoa3 a ser encontrada no escopo
const pessoaNova = new Pessoa3("Luke", "Takei");

// Isso funciona porque você pode criar uma nova instância da variável que contém a expressão de classe
const pessoa2 = new pessoaExpressao("Luke", "Takei");