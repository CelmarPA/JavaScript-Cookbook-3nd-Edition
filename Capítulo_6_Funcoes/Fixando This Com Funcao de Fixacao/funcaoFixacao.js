"use strict";

/**
 *      Sua função está tentando usar a palavra-chave this, mas não está 
 *      vinculada ao objeto correto.
 *      
 *      Use o método Function.bind() para alterar o contexto da sua 
 *      função e o significado da referência this:
*/
window.onload = function() {
    window.nome = "window";

    const novoObjeto = {
        nome: "objeto",

        digaCumprimento: function() {
            console.log(`Agora isso é fácil, ${this.nome}`);

            const nestedCumprimento = function(cumprimento) {
                console.log(`${cumprimento} ${this.nome}`);
            }.bind(this);

            nestedCumprimento("Olá");
        }
    };

    novoObjeto.digaCumprimento();
};

/**
 *      A palavra-chave this se refere ao proprietário ou pai de uma 
 *      função. O desafio associado a this em JavaScript é que nem sempre 
 *      podemos garantir qual objeto pai será aplicado a uma função.
 * 
 *      Na solução, o objeto tem um método, digaCumprimento(), que emite 
 *      uma mensagem e mapeia outra função aninhada para sua propriedade, 
 *      nestedCumprimento.
 * 
 *      Sem o método Function.bind(), a primeira mensagem diria “Agora 
 *      isso é fácil, objeto”, mas a segunda diria “olá window”. O motivo 
 *      da segunda mensagem ter um nome diferente é porque o aninhamento 
 *      da função desassocia a função interna do objeto circundante, e 
 *      todas as funções sem escopo se tornam automaticamente a 
 *      propriedade do objeto window.
 * 
 *      O método bind() resolve esse problema vinculando a função ao 
 *      objeto que você escolhe. No exemplo, o método bind() é invocado 
 *      na função aninhada e recebe uma referência ao objeto pai. Agora, 
 *      quando o código dentro de nestedCumprimento() usa this, ele 
 *      aponta para o objeto pai que você definiu.
 * 
 *      O método bind() é particularmente útil para as funções de tempo 
 *      setTimeout() e setInterval(). Normalmente, quando essas funções 
 *      disparam sua callback, a referência this é perdida (ela 
 *      se torna undefined). Mas com bind(), você pode garantir que a 
 *      função callback mantenha a referência que você deseja.
 */
