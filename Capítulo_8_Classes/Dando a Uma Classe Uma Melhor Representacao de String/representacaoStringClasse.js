"use strict";

/**
 *      Você quer escolher uma representação de texto adequada que será 
 *      usada para seu objeto quando ele for convertido em uma string.
 * 
 *      Adicione um método chamado toString() à sua classe e retorne a 
 *      string que você deseja usar:
*/
class Pessoa {
    constructor(nome,  sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    toString() {
        return `${this.nome}, ${this.sobrenome}`;
    }
}

const novaPessoa = new Pessoa("Luke", "Takei");

console.log(novaPessoa.toString()); // "Luke, Takei"

/**
 *      A implementação padrão de toString() para todos os objetos exibe 
 *      o texto inútil [object Object]. Você pode definir seu próprio 
 *      texto adicionando um método toString().
 * 
 *      O método toString() pode ser chamado explicitamente (como neste 
 *      exemplo), ou pode ser chamado implicitamente quando seu objeto é 
 *      convertido em uma string. Por exemplo, se você concatenar seu 
 *      objeto com uma string, toString() é chamado automaticamente:
*/
const messagem = "O nome é " + novaPessoa;

console.log(messagem); // "O nome é Luke, Takei"

/**
 *      No entanto, chamar console.log() em um objeto, por si só, não 
 *      aciona seu toString(). Isso ocorre porque console.log() tem um 
 *      pouco mais de lógica que itera sobre as propriedades do seu 
 *      objeto e usa isso para construir sua própria string 
 *      personalizada. Você pode contornar isso chamando toString() você 
 *      mesmo ou usando um literal de modelo.
*/
console.log(novaPessoa); // "Pessoa { nome: 'Luke', sobrenome: 'Takei' }"
console.log(`${novaPessoa}`); // "Luke, Takei"
console.log(novaPessoa + ""); // "Luke, Takei"
