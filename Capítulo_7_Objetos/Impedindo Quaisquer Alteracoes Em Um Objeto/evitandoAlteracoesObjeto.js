"use strict";

/**
 *      Você definiu seu objeto e agora quer ter certeza de que suas 
 *      propriedades não sejam redefinidas ou editadas por outro código.
 * 
 *      Use Object.freeze() para congelar o objeto contra todas e 
 *      quaisquer alterações:
*/
const cliente = {
    nome: "Josephine",
    sobrenome: "Stanecki"
};

// Congela o objeto
Object.freeze(cliente);

// Esta declaração gera um erro no modo estrito
cliente.nome = "Joe";

// Assim como uma tentativa de adicionar uma propriedade
cliente.InicialMeio = "P";

// Ou remover uma
delete cliente.sobrenome;

/**
 *      Quando você tenta alterar um objeto congelado, uma de duas coisas 
 *      acontecerá. Se o modo estrito estiver ativado, uma exceção      
 *      TypeError será lançada. Se o modo estrito estiver desativado, a 
 *      operação falhará silenciosamente — o objeto não será alterado, 
 *      mas seu código continuará a ser executado.
 * 
 *      O JavaScript também inclui alguns métodos estáticos na classe 
 *      Object que você pode usar para bloquear seu objeto. Você tem três 
 *      escolhas, listadas aqui da menos para mais restritiva:
 * 
 *          Object.preventExtensions(): Impede que você adicione novas 
 *              propriedades. No entanto, você ainda pode definir valores 
 *              de propriedade. Você também pode excluir propriedades e 
 *              configurar propriedades com 
 *              Object.getOwnPropertyDescriptor().
 * 
 *          Object.seal(): Impede que propriedades sejam adicionadas, 
 *              removidas ou configuradas. No entanto, você ainda pode 
 *              definir valores de propriedade. Isso às vezes é usado 
 *              para capturar atribuições a propriedades inexistentes, o 
 *              que é um erro silencioso.
 * 
 *          Object.freeze(): Não permite modificações de propriedade de 
 *              qualquer tipo. Você não pode configurar propriedades, 
 *              adicionar novas propriedades ou definir valores de 
 *              propriedade. O objeto se torna imutável.
 * 
 *      Você pode verificar se um objeto está congelado usando 
 *      Object.isFrozen(), o método complementar:
*/

if (Object.isFrozen(cliente)) {
    console.log(`Objeto é imutável`)
}
