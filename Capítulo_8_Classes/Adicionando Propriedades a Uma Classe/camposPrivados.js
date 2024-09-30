"use strict";

/**
 *      Extra: Campos Privados
 * 
 *      Atualmente, o JavaScript não tem uma maneira de tornar variáveis 
 *      ​​de membro (aquelas criadas com isso) privadas. Muitas soluções 
 *      alternativas são usadas, e muitas delas são perigosamente 
 *      criativas. A implementação mais popular usa um WeakMap para 
 *      armazenar dados internos. Ele funciona, mas adiciona uma camada 
 *      perigosa de complexidade extra caseira.
 * 
 *      Uma abordagem melhor é usar a convenção de sublinhado (como 
 *      _nome) para nomear campos que não devem ser acessados ​​fora de 
 *      uma classe. No futuro, o JavaScript corrigirá essa lacuna e 
 *      adotará alguma versão da proposta de campos de classe privada. No 
 *      momento, a sintaxe de campo privado usa um # para identificar 
 *      campos privados, que podem ser declarados no início do seu bloco 
 *      de classe, tornando sua classe autodocumentada. Veja como isso
 *      parece:
*/

// Uma implementação provável da sintaxe de campo privado em um futuro próximo
class Pessoa {
    #nome;
    #sobrenome;

    constructor(nome, sobrenome) {
        this.#nome = nome;
        this.#sobrenome = sobrenome;
    }

    // Encapsual aos campos nas porpriedades
    get name() {
        return this.#nome;
    }

    set name(nome) {
        this.#nome = nome;
    }

    get sobrenome() {
        return this.#sobrenome;
    }

    set sobrenome(sobrenome) {
        this.#sobrenome = sobrenome;
    }
}

const pessoa = new Pessoa("Luke", "Takei");
console.log(pessoa.name);
console.log(pessoa.sobrenome);