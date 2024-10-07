"use strict";

/**
 *      Você precisa verificar se um usuário marcou uma caixa de 
 *      seleção no seu aplicativo.
 * 
 *      Selecione o elemento checkbox e valide o status com a 
 *      propriedade checked. Neste exemplo, estou selecionando um 
 *      elemento checkbox de entrada HTML com um id de marcado e
 *      escutando um evento de clique. Quando o evento é disparado, a 
 *      função validate é executada, que olha para a propriedade 
 *      checked do elemento e registra seu status no console:
*/
const caixaSelecao = document.getElementById("marcar");
const botaoAceitar = document.getElementById("aceitar");

const validar = () => {
    if (caixaSelecao.checked) {
        botaoAceitar.disabled = false;
        console.log("Caixa de Seleção está marcada");
    } else {
        botaoAceitar.disabled = true;
        console.log("Caixa de Seleção não está marcada");
    }
}

caixaSelecao.addEventListener("click", validar);

/**
 *      Um padrão comum é que um usuário receba uma caixa de seleção 
 *      para fazer algum tipo de reconhecimento, como aceitar os 
 *      termos de serviço. Nesses casos, é comum desabilitar um botão, 
 *      a menos que o usuário tenha marcado a caixa de seleção. 
*/
