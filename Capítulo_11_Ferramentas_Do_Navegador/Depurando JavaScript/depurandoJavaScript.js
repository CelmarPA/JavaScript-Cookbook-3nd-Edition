"use strict";

/**
 *      Você precisa saber o valor de uma variável em um ponto específico 
 *      na execução do seu código JavaScript.
 *       
 *      Use um ponto de interrupção para inspecionar valores e tipos de 
 *      código. Ao definir um ponto de interrupção, o depurador do 
 *      navegador parará no ponto de execução do código do ponto de 
 *      interrupção e exibirá cada um dos valores atuais no escopo. É 
 *      possível então percorrer o código ou permitir que o JavaScript 
 *      termine de executar. 
 * 
 *      Para definir um ponto de interrupção em uma linha específica de 
 *      código JavaScript nas Ferramentas do Desenvolvedor do Chrome:
 * 
 *          1. Abra as Ferramentas do Desenvolvedor do Chrome usando 
 *             Command-Option-C (Macintosh) ou Control+Shift+C (Windows 
 *             ou Linux) ou pressione F12.
 * 
 *          2. Clique na aba Sources do DevTools.
 * 
 *          3. Selecione o arquivo JavaScript na lista de arquivos.
 * 
 *          4. Clique no número da linha onde você gostaria de definir o 
 *             ponto de interrupção.
 * 
 *          5. Execute o código interagindo com a página ou atualizando a
 *             janela do navegador.
 *  
 *      Além de definir pontos de interrupção na interface do usuário do 
 *      navegador, também é possível defini-los com código adicionando 
 *      uma declaração de depuração. Fazer isso pausará a execução do 
 *      código no ponto da declaração de depuração.
*/  
function normalizar(string) {
    const normalizada = string.replace(/[^\w]/g, "").toLowerCase();
    debugger;
    return normalizada;
}

/**
 *      Uma vez que o ponto de interrupção foi atingido, você tem várias 
 *      opções sobre como o JavaScript deve ser executado:
 * 
 *          Resume script execution: Continue executando o código 
 *                                   completo.
 * 
 *          Step over: Executa uma função sem “entrar nela” para depurar.
 * 
 *          Step into: Entra em uma função para depurá-la ainda mais.
 * 
 *          Step out of: Execute o restante do código da função atual.
 * 
 *          Step: Passe para a próxima linha de código.
*/
