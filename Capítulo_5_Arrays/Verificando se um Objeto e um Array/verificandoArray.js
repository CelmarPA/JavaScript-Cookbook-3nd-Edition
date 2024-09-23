"use strict";

/**
 *      Antes de executar uma operação de array, você precisa verificar 
 *      se seu objeto é realmente um array.
 * 
 *      Use o método estático Array.isArray():
*/
const nomeBrowsers = ["Firefox", "Edge", "Chrome", "IE", "Safari"];

if (Array.isArray(nomeBrowsers)) {
    // Acabamos aqui, porque nomeBrowsers é um array.
}

/**
 *      O método Array.isArray() é uma escolha óbvia. Problemas acontecem 
 *      quando desenvolvedores são tentados a usar o operador instanceOf 
 *      mais antigo. Por razões  históricas, o operador instanceOf tem 
 *      casos extremos estranhos com arrays (por exemplo, ele retorna 
 *      false quando você testa um array que foi criado em outro contexto
 *      de execução, como uma janela diferente). O método isArray() foi
 *      adicionado para corrigir essa lacuna.
 * 
 *      Também é importante entender que isArray() verifica
 *      especificamente instâncias do objeto Array. Se você chamá-lo em 
 *      um tipo diferente de coleção (como Map ou Set), ele retorna 
 *      falso. Isso é verdadeiro mesmo se essas coleções tiverem 
 *      semântica semelhante a array, e mesmo se elas tiverem array no
 *      nome, como TypedArray (um wrapper de baixo nível para um buffer 
 *      de dados binários). 
*/
