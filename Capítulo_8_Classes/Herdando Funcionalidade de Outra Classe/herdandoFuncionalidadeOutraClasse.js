"use strict";

/**
 *      Você deseja criar uma classe personalizada que herda a 
 *      funcionalidade de outra classe.
 * 
 *      Com herança, uma ou mais classes filhas derivam de uma classe 
 *      pai. Para modelar isso em código, você usa a palavra-chave 
 *      extends quando declara a classe filha:
 * 
 *          public class AlgumaCriança extends AlgumPai {
 *  
 *          }
 * 
 *      Aqui está um exemplo com uma classe Triangulo que herda de uma 
 *      classe pai mais básica chamada Forma:
*/

// Essa é a classe pai
class Forma {
    getArea() {
        return null;
    }
}

// Essa é a classe filha
class Triangulo extends Forma {
    constructor(base, altura) {
        // Chame o construtor da classe base
        super();
        this.base = base;
        this.altura = altura;
    }

    getArea() {
        return this.base * this.altura / 2;
    }
}

/**
 *      Neste exemplo, a classe pai (Forma) não tem nenhuma 
 *      funcionalidade útil. O método getArea() está lá apenas como um 
 *      espaço reservado. Mas em outros casos, as classes base podem ser 
 *      úteis por si só. Por exemplo, você pode usar herança com a classe 
 *      Livro para criar um filho EBook ou com a classe Pessoa para criar 
 *      um Cliente.
 * 
 *      Pode parecer que não há sentido em construir um Triangulo que 
 *      deriva de uma Forma se você planeja usar apenas o Triangulo. E 
 *      em uma linguagem fracamente tipada como JavaScript, isso é 
 *      frequentemente verdade! Mas o valor potencial aparece quando você 
 *      usa uma única classe pai para padronizar mais classes filhas:
 */
class Circulo extends Forma {
    constructor(raio) {
        super();
        this.raio = raio;
    }

    getArea() {
        return Math.PI * this.raio**2;
    }
}

class Quadrado extends Forma {
    constructor(comprimento) {
        super();
        this.comprimento = comprimento;
    }

    getArea() {
        return this.comprimento**2;
    }
}

/**
 *      Agora é possível escrever código como este:
*/

// Cria um array de diferentes formas
const formas = [new Triangulo(15, 8), new Circulo(8), new Quadrado(7)];

// Classifique-os por área, do menor para o maior
formas.sort( (a, b) => a.getArea() - b.getArea());

console.log(formas); // Nova Ordem: Quadrado, Triangulo, Circulo

/**
 *      Claro, JavaScript é uma linguagem fracamente tipada, e você 
 *      poderia chamar getArea() nos objetos Triangulo, Circulo e 
 *      Quadrado  mesmo se eles não compartilhassem uma classe pai que 
 *      definisse o método. Mas formalizar essa interface com herança 
 *      pode ajudar a tornar esses requisitos explícitos.
*/
const triangulo = new Triangulo(15, 8);

if (triangulo instanceof Forma) {
    // Terminamos aqui, porque triangulo é uma instância de Triangulo que é um instância de Forma
}

/**
 *      Se você não escrever um construtor para uma classe filha, o 
 *      JavaScript cria um automaticamente. Esse construtor chama o 
 *      construtor da classe base (mas não fornece argumentos).
 * 
 *      Se você escrever um construtor para sua classe filha, você deve 
 *      chamar o construtor da classe pai. Caso contrário, você receberá 
 *      um ReferenceError quando tentar criar uma instância. Para chamar 
 *      o construtor da classe pai, você usa a palavra-chave super():
 * 
 *          constructor(comprimento) {
 *              super();
 *          }
 * 
 *      Se o construtor da classe pai aceitar argumentos, você deve 
 *      passá-los para super() como faria ao criar o objeto. Aqui está um 
 *      exemplo com uma classe EBook que estende Livro:
*/
class Livro {
    constructor(titulo, autor, dataPublicacao) {
        this.titulo = titulo;
        this.autor = autor;
        this.dataPublicacao = dataPublicacao;
    }
}

class Ebook extends Livro {
    constructor(titulo, autor, dataPublicacao, formato) {
        super(titulo, autor, dataPublicacao);
        this.formato = formato;
    }
}


/**
 *      Você também pode usar super() para chamar outros métodos ou 
 *      propriedades na classe pai. Por exemplo, se uma classe filha 
 *      quiser chamar a implementação da classe pai de formato String(), 
 *      ela chamaria super.formatoString().
 * 
 *      As classes são uma introdução relativamente tardia ao JavaScript. 
 *      Embora suportem herança, muitas das outras ferramentas com as 
 *      quais você pode estar acostumado em linguagens tradicionais 
 *      orientadas a objetos, como classes base abstratas, métodos 
 *      virtuais e interfaces, não têm analogia em JavaScript. Alguns 
 *      desenvolvedores gostam da natureza leve do JavaScript e sua 
 *      ênfase em protótipos, enquanto outros sentem que estão perdendo 
 *      ferramentas vitais para construir aplicativos grandes e 
 *      complexos. (Se você está no último grupo, sua melhor opção é 
 *      considerar TypeScript, um superconjunto mais rigoroso do 
 *      JavaScript.)
 * 
 *      Mas a herança não está isenta de compensações. Ela pode 
 *      encorajá-lo a escrever classes fortemente acopladas que são 
 *      dependentes umas das outras e difíceis de se adaptar a futuras 
 *      mudanças. Pior ainda, geralmente é difícil identificar essas 
 *      dependências, e os desenvolvedores ficam relutantes em fazer 
 *      alterações na classe pai (uma situação chamada de problema da 
 *      classe base frágil). Por causa de problemas como esses, o 
 *      desenvolvimento moderno geralmente prefere agregar grupos de 
 *      objetos em vez de usar relacionamentos de herança. Por exemplo, 
 *      em vez de construir uma classe Empregado que estende Pessoa, você 
 *      pode criar um objeto Empregado que inclui uma propriedade Pessoa, 
 *      junto com todos os outros detalhes de que precisa. Esse padrão é 
 *      chamado de composição:
*/
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

class Empregado {
    constructor(pessoa, departamento, dataContratacao) {
        // pessoa é um objeto Pessoa completo
        this.pessoa = pessoa;

        // Essas propriedades contêm informações extras e não de pessoa
        this.departamento = departamento;
        this.dataContratacao = dataContratacao;
    }
}

// Crie um objeto Empregado que é composto de um objeto Pessoa e alguns detalhes extras
const empregado = new Empregado(new Pessoa("Mike", "Scott"), "Vendas", new Date());

console.log(empregado);
