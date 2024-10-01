"use strict";

/**
 *      Você quer definir seus métodos de classe de tal forma que vários 
 *      métodos possam ser chamados em rápida sucessão, em uma única 
 *      instrução.
 * 
 *      Certifique-se de retornar o objeto atual no final de cada método 
 *      que deve suportar encadeamento de métodos. Em uma classe 
 *      personalizada, isso geralmente é tão simples quanto adicionar uma 
 *      instrução return this.
 * 
 *      Aqui está um exemplo de um objeto Livro personalizado com dois 
 *      métodos, aumentarPreco() e lancarNovaEdicao(), ambos os quais 
 *      usam encadeamento de métodos:
*/
class Livro {
    constructor(titulo, autor, preco, dataPublicacao) {
        this.titulo = titulo;
        this.autor = autor;
        this.preco = preco;
        this.dataPublicacao = dataPublicacao;
    }

    // Método aumentarPreco
    aumentarPreco(porcentagem) {
        const aumento = this.preco * porcentagem;
        this.preco += Math.round(aumento) / 100;
        return this;
    }

    lancarNovaEdicao() {
        // Define dataPublicacao para hoje
        this.dataPublicacao = new Date();
        return this;
    }
}

const livro = new Livro("Eu Amo Matemática", "Adam Up", 15.99, new Date(2010, 2, 2));

// Aumenta o preço em 15% e muda a edição, usando encadeamento de métodos
console.log(livro.aumentarPreco(15).lancarNovaEdicao());

/**
 *      A capacidade de chamar diretamente um método no resultado de 
 *      outro método, em uma única declaração de código, é conhecida como 
 *      encadeamento de métodos. Aqui está um exemplo com uma string e o 
 *      método replaceAll(). Como replaceAll() retorna uma nova string, 
 *      você pode chamar replaceAll() novamente nessa string e obter uma 
 *      terceira string:
 * 
 *          const parteSeguraDeHtml = parteOriginalHtml.replaceAll("<", "&
 *          lt;").replaceAll(">", "&gt;");
 *
 *      O encadeamento de métodos não precisa ser com o mesmo método. Ele 
 *      funciona com qualquer método que retorne um objeto. Considere 
 *      como este código une dois arrays e então classifica o array 
 *      resultante encadeando uma chamada para concat() com uma para 
 *      sort():
*/
const pares = [2, 4, 6, 8];
const impares = [1, 3, 5, 7, 9];

const paresImpares = pares.concat(impares).sort();

console.log(paresImpares); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

/**
 *      O encadeamento é usado extensivamente em objetos JavaScript 
 *      incorporados e em muitas bibliotecas e frameworks JavaScript. 
 *      Para usar esse padrão em suas próprias classes, você simplesmente 
 *      retorna uma referência a this no final do seu método. O código de 
 *      chamada pode então ignorar essa referência ou usá-la para 
 *      executar o encadeamento de métodos.
 * 
 *      No exemplo atual, chamar um método em Livro altera o objeto e 
 *      retorna uma referência ao objeto alterado. O chamador pode 
 *      ignorar o valor de retorno, porque ele já tem uma referência ao 
 *      objeto Livro. No entanto, muitos puristas da programação 
 *      funcional fazem algo diferente. Eles escrevem métodos que 
 *      retornam uma cópia do objeto alterado, enquanto mantêm o objeto 
 *      original inalterado. Veja como você implementaria esse padrão:
*/
class Livro2 {
    constructor(isbn, titulo, autor, dataPublicacao) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.dataPublicacao = dataPublicacao;
    }

    static eIgual(livro, outroLivro) {
        if (livro instanceof Livro2 && outroLivro instanceof Livro2) {
            // Os livros são considerados iguais se seus ISBNs forem iguais, independentemente de travessões
            return (livro.isbn.replaceAll("-", "") === outroLivro.isbn.replaceAll("-", ""));
        } else {
            return false;
        }
    }
}

/**
 *      Você acessa um método estático através do nome da classe (como em 
 *      Livro2.eIgual()). Você não pode acessá-lo através de uma variável 
 *      de objeto.
*/
const primeiraImpressao = new Livro2("978-3-16-148410-0", "A.I. Não é Uma Ameaça", "Anne Droid", new Date(2019, 2, 2));

const segundaImpressao = new Livro2("978-3-16-148410-0", "A.I. Não é Uma Ameaça", "Anne Droid", new Date(2021, 2, 10));

// Compare os livros com o método estático
const mesmoLivro = Livro2.eIgual(primeiraImpressao, segundaImpressao);
console.log(mesmoLivro); // true

// Isso não funciona, porque eIgual não está disponível em instâncias de Livro2
// const mesmoLivro2 = primeiraImpressao.eIgual(primeiraImpressao, segundaImpressao);

/**
 *      Métodos estáticos têm funcionalidade que é logicamente 
 *      relacionada a uma classe, mas não vinculada a uma instância 
 *      específica. O método Array.isArray() é um bom exemplo — ele 
 *      permite que você teste se qualquer objeto é um array, sem forçar 
 *      você a criar um objeto array primeiro. Ocasionalmente, as classes 
 *      são compostas inteiramente de métodos estáticos. A classe Math do 
 *      JavaScript é um bom exemplo.
 * 
 *      Em um método estático, this se refere à classe atual, não a uma 
 *      instância de objeto. Isso pode levar a problemas, porque seu 
 *      código ainda poderá armazenar dados em this (ou recuperá-los). 
 *      Pode ser que não tenha o efeito que você espera. Essencialmente, 
 *      tudo em static this age como uma variável global com escopo de 
 *      classe, o que é melhor evitar.
 * 
 *      Se você quiser que um método estático chame outro método 
 *      estático, você pode usar a palavra-chave this. Por exemplo, se 
 *      você quiser chamar o eIgual() estático de outro método estático 
 *      na classe Livro, você pode se referir a ele como Livro.eIgual() 
 *      ou this.eIgual(), o que pode ser mais claro.
 * 
 *      Os métodos set e get de propriedades também podem ser estáticos, 
 *      embora seu uso às vezes seja controverso. Por exemplo, você pode 
 *      usar um getter estático para armazenar uma constante, como esta:
*/
class Livro3 {
    constructor(isbn, titulo, autor, dataPublicacao) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.dataPublicacao = dataPublicacao;
    }

    // Crie uma propriedade Livros.isbnPrefixo estática e de somente leitura
    static get isbnPrefixo() {
        return "978-1";
    }
}

/**
 *      Você pode escrever um setter estático, que atua como uma variável 
 *      global em seu aplicativo. No entanto, como não há um construtor 
 *      estático, você será forçado a executar código em algum lugar para 
 *      atribuir o valor inicial. Isso não está particularmente claro, 
 *      então uma nova sintaxe de propriedade estática está em 
 *      desenvolvimento e atualmente é suportada por versões mais 
 *      modernas de navegadores. Ela permite que você defina uma 
 *      propriedade estática pública usando uma sintaxe semelhante a uma 
 *      variável:
*/
class Livro4 {
    static isbnPrefixo = "978-1";

    constructor(isbn, titulo, autor, dataPublicacao) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.dataPublicacao = dataPublicacao;
    }
}

/**
 *      No entanto, é melhor evitar esse recurso de linguagem 
 *      completamente — ou pelo menos até alguns dados futuros, quando 
 *      seu uso em JavaScript for mais normativo.
*/
