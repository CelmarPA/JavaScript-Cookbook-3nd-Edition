"use strict";

/**
 *      Você quer verificar em tempo de execução se um objeto tem uma 
 *      determinada propriedade.
 *      
 *      Use o operador in para procurar uma propriedade pelo nome:
*/
const endereco = {
    pais: "Austrália",
    cidade: "Sydney",
    numeroRua: "412",
    nomeRua: "Avenida Worcestire"
};

if ("pais" in endereco) {
    // Esse código executa, porque tem uma propriedade endereco.pais
}

if ("cep" in endereco) {
    // Esse código não executa,proque não há uma propriedade endereco.cep
}

/**
 *      Se você tentar ler uma propriedade que não existe, você obtém o 
 *      valor undefined. Você poderia testar para undefined, mas isso por 
 *      si só não é uma garantia inabalável de que a propriedade não 
 *      existe. (É tecnicamente possível ter uma propriedade e defini-la 
 *      como undefined, em qual caso a propriedade ainda existe, mas seu 
 *      teste não a encontraria.) Uma abordagem melhor para encontrar 
 *      propriedades é usar o operador in.
 *      
 *      O operador in pesquisa um objeto e sua cadeia de protótipos. Isso 
 *      significa que se você criar um objeto Cachorro que deriva de 
 *      outro objeto Animal, um teste in retornará true se uma 
 *      propriedade for definida em Cachorro ou Animal. Como alternativa, 
 *      você pode usar o método hasOwnPropererty(), que pesquisa apenas o 
 *      objeto atual e ignora as propriedades herdadas.
*/
console.log(endereco.hasOwnProperty("pais")); // true
console.log(endereco.hasOwnProperty("cep")); // false
