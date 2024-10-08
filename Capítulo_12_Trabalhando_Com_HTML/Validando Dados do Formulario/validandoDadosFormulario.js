

/**
 *      Seu aplicativo da web coleta dados dos usuários usando 
 *      formulários HTML. Antes de enviar esses dados para o servidor, 
 *      no entanto, você quer ter certeza de que eles estão bem 
 *      formados, completos e válidos ao fornecer feedback ao usuário.
 * 
 *      Use os atributos de validação de formulário integrados do 
 *      HTML5, que podem ser estendidos com uma biblioteca externa para 
 *      validação de string:
*/
function validadorDados(id, valor) {
    // Verifica se o email é válido
    if (id === "email") {
        return validator.isEmail(valor);
    }

    // Verifca se o cep é válido
    if (id === "cep") {
        return validator.isPostalCode(valor, "BR")
    }

    return false;
}

const entradas = document.querySelectorAll("#exemplo input");

entradas.forEach(entrada => {
    // Dispara evento cada vez que o valor da entrada muda
    entrada.addEventListener("input", () => {
        // Passa o valor da entrada para a função de validação
        const valido = validadorDados(entrada.id, entrada.value);

        // Se não for válido define "aria-invalid" como true
        if (!valido && entrada.value.length > 0) {
            entrada.setAttribute("aria-invalid", true);
        } else {
            entrada.removeAttribute("aria-invalid");
        }
    });
});

document.getElementById("exemplo").addEventListener("submit", (evento) => {
    let formValido = true;

    entradas.forEach(entrada => {
        const valido = validadorDados(entrada.id, entrada.value);

        if (!valido) {
            formValido = false;
            entrada.setAttribute("aria-invalid", true);
        } else {
            entrada.removeAttribute("aria-invalid");
        }
    });

    // Se formulário não for válido, previne o envio
    if (!formValido) {
        evento.preventDefault();
        alert("Por favor, corrija os campos inválidos.");
    }
});

/**
 *      Além das outras bibliotecas de validação, você também pode  
 *      incorporar uma biblioteca de validação de cartão de crédito, 
 *      como Payment, que fornece uma API de validação direta.
 *      Como exemplo, especifique que um campo é um número de cartão de 
 *      crédito após o carregamento do formulário:
*/
const entradaCartao = document.querySelector("entrada.cc-num");

PaymentAddress.formatCardNumber(entradaCartao);

/**
 *      E então, quando o formulário for enviado, valide o número do 
 *      cartão de crédito:
*/
var valido = PaymentAddress.fns.validateCardNumber(entradaCartao.value);

if (!valido) {
    message.innerHTML = "Você digitou um número de cartão inválido";
    return false;
}
