"use strict";

/**
 *      Você quer criar um método que gere um objeto pré-configurado, 
 *      possivelmente para contornar a limitação de construtor único do 
 *      JavaScript.
 *      
 *      Adicione um método estático à sua classe que crie e retorne o 
 *      objeto que você deseja. Aqui está um exemplo com uma classe Livro 
 *      que você pode criar por meio do construtor ou por meio do método 
 *      estático Book.createSequel():
*/
class Livro1 {
    constructor(titulo, nome, sobrenome) {
        this.titulo = titulo;
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    static criarSequencia(livroAnterior, titulo) {
        return new Livro1(titulo, livroAnterior.nome, livroAnterior.sobrenome);
    }
}
/**
 *      Veja como usar o método estático:
*/

// Crie um livro com o construtor usual
const livro = new Livro1("Bom Design", "Polly", "Morfissim");

// Cria uma sequência com o método estático
const sequencia = Livro1.criarSequencia(livro, "Design Ainda Melhor");

console.log(sequencia);

/**
 *      Usando métodos estáticos, você pode implementar diferentes tipos 
 *      de padrões de criação — basicamente, padrões que ajudam você a 
 *      criar instâncias pré-configuradas de uma classe. Por exemplo, a 
 *      classe Date do JavaScript tem uma propriedade now() que retorna 
 *      um novo objeto Date que é automaticamente definido para a data e 
 *      hora atuais.
 * 
 *      Essa abordagem é particularmente adequada para criar combinações 
 *      mais complexas de objetos. Por exemplo, você pode estender o 
 *      exemplo anterior com um método Livro.criarTrilogia() para obter 
 *      um array de três objetos Livro. Neste exemplo, os objetos Livro
 *      compartilham um único objeto Autor, o que significa que se você 
 *      atualizar o objeto Autor , todas as instâncias Livro que se 
 *      vinculam a ele verão a alteração:
*/
class Autor {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

class Livro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }

    static criarSequencia(livroAnterior, titulo) {
        return new Livro(titulo, livroAnterior.autor);
    }

    static criarTrilogia(autor, titulo1, titulo2, titulo3) {
        return [new Livro(titulo1, autor), new Livro(titulo2, autor), new Livro(titulo3, autor)];
    }
}

// Crie uma trilogia de três livros com um método de fábrica
const autor = new Autor("Koh", "Der");

const livros = Livro.criarTrilogia(autor, "Um Oceano de Fogo", "um Oceano de Gelo", "Um Oceano de Água");

console.log(livros);

/**
 *      Ao contrário dos construtores, não há limite para quantos métodos 
 *      estáticos você pode adicionar para dar suporte a diferentes 
 *      cenários de criação de objetos.
*/
