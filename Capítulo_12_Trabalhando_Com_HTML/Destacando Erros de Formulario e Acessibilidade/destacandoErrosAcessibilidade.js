"use strict";

/**
 *      Você quer destacar entradas de campos de formulário que tenham 
 *      dados incorretos e quer garantir que o destaque seja eficaz 
 *      para todos os usuários da página da web.
 * 
 *      Use CSS para destacar o campo de formulário inserido 
 *      incorretamente e use a marcação WAI-ARIA (Web Accessibility 
 *      Initiative-Accessible Rich Internet Applications) para garantir 
 *      que o destaque seja aparente para todos os usuários:
 * 
 *          [aria-invalid] {
 *              background-color: #f5b2b2;
 *          }
 * 
 *      Para os campos que precisam ser validados, atribua uma função 
 *      ao manipulador de eventos oninput do campo do formulário que 
 *      verifica se o valor do campo é válido. Se o valor for inválido, 
 *      exiba informações ao usuário sobre o erro ao mesmo tempo em que 
 *      você destaca o campo:
*/
function validarCampo() {
    // Varifica por números
    if (typeof this.value !== "number") {
        this.setAttribute("aria-invalid", "true");
        gerarAlerta("Você inseriu um valor inválido. Somente valores numéricos são permitidos");
    }
}

document.getElementById("numero").oninput = validarCampo;

/**
 *      Para os campos que precisam de um valor obrigatório, atribua 
 *      uma função ao manipulador de eventos onblur do campo que 
 *      verifica se um valor foi inserido:
*/
function verificarObrigatoriedade() {
    // Verifica por dados
    if (this.value.length === 0) {
        this.setAttribute("aria-invalid", "true");
        gerarAlerta("É necessário um valor neste campo");
    }
}

document.getElementById("campo-obrigatorio").onblur = verificarObrigatoriedade;

/**
 *      Se alguma das verificações de validação for realizada como 
 *      parte do envio do formulário, certifique-se de cancelar o 
 *      evento de envio se a validação falhar.
 * 
 *      O exemplo a seguir demonstra como destacar uma entrada inválida 
 *      em um dos elementos do formulário, e destacar dados ausentes em 
 *      outro. O exemplo também captura o envio do formulário, e 
 *      verifica se algum sinalizador de campo de formulário inválido 
 *      ainda está definido. Somente se tudo estiver claro é que o 
 *      envio do formulário pode prosseguir.
*/
