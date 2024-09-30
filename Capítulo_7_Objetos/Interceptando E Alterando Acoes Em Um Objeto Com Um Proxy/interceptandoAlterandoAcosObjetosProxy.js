"use strict";

/**
 *      Você quer executar código quando certas ações ocorrem com um 
 *      objeto, mas não quer colocar seu código dentro do objeto.
 * 
 *      A classe Proxy permite que você intercepte uma variedade de ações 
 *      diferentes em qualquer objeto. O exemplo a seguir usa um proxy 
 *      para executar a validação em um objeto chamado produto. O proxy 
 *      garante que o código pode usar uma propriedade que não existe ou 
 *      usar um tipo de dado não numérico para definir um número:
*/

// Este é o objeto que observaremos com o proxy
const produto = { nome: "banana" };

// Este é o manipulador que o proxy usa para interceptar armadilhas

const verificadorPropriedade = {
    set: function (alvo, propriedade, valor) {
        if (propriedade === "preco") {
            if (typeof valor !== "number") {
                throw new TypeError("valor não é um número");
            } else if ( valor <= 0) {

                throw new RangeError("valor precisa ser maior que zero");
            }
        } else if (propriedade !== "nome") {
            throw new ReferenceError(`propriedade '${propriedade}' não é válida`);
        }
        alvo[propriedade] = valor;
        
        return true; // Retorna true para garantir sucesso na operação

    }
};

// Cria o Proxy
const proxy = new Proxy(produto, verificadorPropriedade);

// Agora, modifica o objeto produto através do objeto proxy
proxy.nome = "maçã";

// Isso gera um ReferenceError
proxy.tipo = "delicia vermelha";

// Isso gera um TypeError
proxy.preco = "3 dolares";

// Isso gera um RangeError
proxy.preco = -1.00;

// Isso ignora o proxy e é bem-sucedido
produto.preco = -1.00;

/**
 *      O objeto Proxy envolve um objeto e pode ser usado para capturar 
 *      ações específicas e, em seguida, fornecer comportamentos 
 *      adicionais ou alternativos com base na ação e nos dados do objeto 
 *      no momento da ação.
 * 
 *      Ao criar um Proxy, você fornece dois parâmetros: o objeto que 
 *      deseja observar, e o manipulador que pode interceptar as 
 *      operações que você escolher. Na solução mostrada aqui, o 
 *      manipulador intercepta apenas operações de conjunto de 
 *      propriedades. Cada vez que ele intercepta uma ação de conjunto de 
 *      propriedades, ele recebe o objeto de destino, a propriedade que 
 *      está sendo definida e o novo valor da propriedade. A função então 
 *      testa para ver se a propriedade que está sendo definida é preco. 
 *      Se sim, ele verifica se é um número. Se não for, um TypeError é 
 *      lançado. Se for, então o valor é verificado para garantir que 
 *      seja maior que zero. Se não for, então um RangeError é lançado. 
 *      Finalmente, o manipulador verifica se a propriedade é nome. Se 
 *      não for, a exceção final, um ReferenceError, é lançada. Se 
 *      nenhuma das condições de erro for acionada, então a propriedade 
 *      recebe o valor, como de costume.
 * 
 *      Proxies também podem encapsular objetos internos, como o objeto 
 *      Array ou Date. No código a seguir , um proxy é usado para 
 *      redefinir a semântica do que acontece quando o código acessa um 
 *      array. Quando uma operação get ocorre, o manipulador verifica o 
 *      valor do array no índice fornecido. Se for um valor zero (0), um 
 *      valor false é retornado; caso contrário, um valor true é 
 *      retornado:
*/
const manipulador = {
    get: function (array, indice) {
        if (array[indice] === 0) {
            return false;
        } else {
            return true;
        }
    }
};

const numeros = [1, 0, 6, 1, 1, 0];

const proxy2 = new Proxy(numeros, manipulador);

console.log(proxy2[2]); // true
console.log(proxy2[0]); // true
console.log(proxy2[1]); // false
