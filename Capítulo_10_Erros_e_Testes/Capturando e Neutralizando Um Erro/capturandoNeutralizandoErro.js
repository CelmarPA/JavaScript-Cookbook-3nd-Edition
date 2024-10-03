"use strict";

/**
 *      Você está executando uma tarefa que pode não ter sucesso e não 
 *      quer que um erro interrompa seu código ou apareça no console do 
 *      desenvolvedor.
 * 
 *      Envolva a seção do seu código em um bloco try...catch, como este:
*/
try {
    // Isso é garantido de falhar com URIError
    const uri = decodeURI("http%test");

    // Nos nunca chegaremos aqui
    console.log("Sucesso!");
} catch (erro) {
    console.log(erro);
} finally {
    console.log("A operação (e qualquer tratamento de erro) está completa");
}
/**
 *      Quando a função decodeURI() falha e ocorre um erro, a execução 
 *      salta para o bloco catch. O bloco catch recebe um objeto de erro 
 *      (também conhecido como exceção), que fornece as seguintes 
 *      propriedades:
 * 
 *          nome: Uma string que geralmente reflete o subtipo de erro 
 *                (como em “URIError”), mas pode ser apenas “Error”.
 * 
 *          mensagem: Uma sequência que fornece uma descrição do problema 
 *                    em linguagem humana, como “URI malformado”.
 * 
 *          stack: Uma string que lista as funções abertas atualmente na 
 *                 pilha, em ordem, das chamadas mais recentes para as 
 *                 mais antigas. Dependendo do navegador, a propriedade 
 *                 stack pode incluir informações sobre a localização da 
 *                 função (como número da linha e nome do arquivo) e os 
 *                 argumentos com os quais as funções foram chamadas.
*/
