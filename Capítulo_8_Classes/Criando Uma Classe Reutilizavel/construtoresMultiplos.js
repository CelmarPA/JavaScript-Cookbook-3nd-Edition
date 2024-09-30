"use strict";

/**
 *      Extra: Construtores Múltiplos
 * 
 *      Na maioria das linguagens orientadas a objetos, é possível criar 
 *      vários construtores, então o código que cria a classe tem uma 
 *      escolha de quais parâmetros especificar. Mas JavaScript não 
 *      suporta sobrecarga de construtor ou sobrecarga de método.
 * 
 *      Isso não é tão limitante quanto parece, porque JavaScript é 
 *      notoriamente frouxo com argumentos de função e nunca força você a 
 *      fornecê-los. Então, mesmo que Person tenha um único construtor de 
 *      três argumentos, essas são todas maneiras válidas de criar uma 
 *      instância sem fornecer todos os argumentos:
*/
class Pessoa {
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

const pessoaSemData = new Pessoa("Luke", "Takei"); 

const pessoaNome = new Pessoa("Luke");

const pessoaSemDados = new Pessoa();

/**
 *      Cada classe tem exatamente um constructor, e ele sempre roda. 
 *      Mesmo se você não especificar nenhum argumento quando criar um 
 *      objeto Pessoa, o constructor de três argumentos ainda roda e 
 *      define this.nome, this.sobrenome e this.dataNascimento (todos os 
 *      quais serão definidos como undefined). Se isso não for aceitável, 
 *      você pode definir valores de parâmetros padrão, assim como você 
 *      faz com funções comuns.
 * 
 *      Outra maneira de lidar com argumentos opcionais é usar um objeto 
 *      literal que é passado ao constructor. Dessa forma, o chamador 
 *      pode escolher definir apenas as propriedades nomeadas que deseja 
 *      usar:
*/
class Pessoa2 {
    constructor({nome, sobrenome, dataNascimento}) {
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


const infoParcialPessoa = new Pessoa2({
    nome: "Takei",
    dataNascimento: new Date(1990, 4, 23)
});

const infoParcialPessoa2 = new Pessoa2({nome: "Luke", sobrenome: "Takei"});

console.log(infoParcialPessoa);
console.log(infoParcialPessoa2);

/**
 *      Este é um padrão de design JavaScript comum. Uma vantagem que ele 
 *      fornece é que você não precisa se preocupar com a ordem das 
 *      propriedades no literal do objeto. Uma desvantagem é que não há 
 *      nada que o impeça decriar acidentalmente parâmetros com nomes 
 *      incorretos que serão ignorados silenciosamente:
*/
