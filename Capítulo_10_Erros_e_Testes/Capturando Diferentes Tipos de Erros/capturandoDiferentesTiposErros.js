"use strict";

/**
 *      Você quer distinguir entre diferentes tipos de erros e lidar com 
 *      eles de forma diferente, ou lidar apenas com tipos específicos.
 * 
 *      Ao contrário de muitas linguagens, JavaScript não permite que 
 *      você capture erros por tipo. Em vez disso, você deve capturar 
 *      todos os erros (como de costume) e, em seguida, investigar o erro 
 *      com o operador instanceof:
*/
try {
    // Algum código que irá gerar erro
} catch (erro) {
    if (erro instanceof RangeError) {
        // Faça alguma coisa sobre o valor estar fora de intervelo
    } else if (erro instanceof TypeError) {
        // Faça algo sobre o valor ser do tipo errado
    } else {
        // Relançe o erro
        throw erro;
    }
}

/**
 *      Por fim, se o erro não for do tipo que você pode manipular, você 
 *      deve relatá-lo.
 * 
 *      JavaScript tem oito tipos de erro, que são representados por 
 *      diferentes objetos de erro:
 * 
 *          RangeError: Ocorre quando um valor numérico está fora do 
 *                      intervalo permitido.
 * 
 *          ReferenceError: Ocorre ao tentar atribuir um objeto    
 *                          inexistente a uma variável.
 * 
 *          SyntaxError: Ocorre quando o código tem um erro sintático 
 *                       claro, como um ( extra ou } ausente.
 * 
 *          TypeError: Ocorre quando um valor não é o tipo de dado 
 *                     correto para uma determinada operação.
 * 
 *          URIError: Surgido por problemas de escape de URLs com 
 *                    decodeURI() e outras funções relacionadas.
 * 
 *          AggregateError: É um wrapper para múltiplos erros, o que é 
 *                          útil para erros que ocorrem de forma 
 *                          assíncrona. Um array de objetos de erro é 
 *                          fornecida na propriedade errors.
 * 
 *          EvalError: Pretendido para representar problemas que ocorrem 
 *                     com o eval() integrado, mas não é mais usado. 
 *                     Agora, usar eval() em código sintaticamente 
 *                     inválido fará com que um SyntaxError seja lançado.
 * 
 *          InternalError: Ocorre em uma variedade de casos não 
 *                         padronizados e é específico do navegador. Por 
 *                         exemplo, no Firefox, um InternalError ocorre 
 *                         se você exceder o limite de recursão (por
 *                         ter uma função chamando a si mesma 
 *                         repetidamente), enquanto no Chrome a mesma
 *                         condição é representada por um RangeError.
 * 
 *      O JavaScript permite apenas um bloco catch para cada bloco try, o 
 *      que impede que você capture erros por tipo. No entanto, você pode 
 *      capturar o objeto Error padrão, examinar seu tipo com instanceof 
 *      e escrever código condicional para lidar com ele adequadamente.
 *      Ao usar essa abordagem, você deve ter cuidado para não suprimir 
 *      acidentalmente erros com os quais você não pode lidar.
*/
