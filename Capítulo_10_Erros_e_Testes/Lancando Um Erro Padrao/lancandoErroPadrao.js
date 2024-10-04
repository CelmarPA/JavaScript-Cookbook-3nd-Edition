"use strict";

/**
 *      Você quer indicar uma condição de erro lançando um objeto de erro.
 * 
 *      Crie uma instância do objeto Error, passando uma breve descrição 
 *      do problema para o construtor, que é usado para a propriedade 
 *      message. Lance o objeto Error com a instrução throw. Seu código 
 *      pode então capturar esse objeto Error assim como captura
 *      qualquer outro tipo de erro em JavaScript:
*/
function divisaoRestrita(numero, divisor) {
    if (divisor === 0) {
        throw new Error("Dividir por zero não é permitido!")
    } else {
        return numero / divisor;
    }
}

// Captura o erro
try {
    const result = divisaoRestrita(42 ,0);
} catch (erro) {
    console.log(`Erro: ${erro.message}`);
}

/**
 *      Há duas maneiras de criar um objeto Error. Você pode usar a 
 *      palavra-chave new para criá-lo. Ou (menos comumente), você pode 
 *      chamar Error() como uma função, que tem o mesmo resultado:
*/

// Lançando erro padrão
throw new Error(`Dividir por zero não é permitido!`);

// Um abordagem equivalente
throw Error(`Dividir por zero não é permitido!`);

/**
 *      Às vezes, você pode ser capaz de redirecionar um subtipo de erro 
 *      mais específico. A maioria dos tipos de erro internos do 
 *      JavaScript são para casos especializados e não são adequados para 
 *      código personalizado. Mas alguns são potencialmente úteis. Você 
 *      pode usar RangeError se uma função receber um valor que esteja 
 *      fora do intervalo numérico aceitável. Certifique-se de incluir 
 *      uma mensagem de erro informativa que inclua o valor fornecido e o 
 *      intervalo esperado:
*/
function setIdade(idade) {
    const maior = 125;
    const menor = 18;
    
    if (idade > 125 || idade <  18) {
        throw new RangeError(`Idade [${idade}] está fora do intervalo aceito de ${menor} até ${maior}`);
    }
}

try {
    let idade = setIdade(130);
} catch (e) {
    console.log(e.message);
}

/**
 *      RangeError é especificamente destinado a valores numéricos. No 
 *      entanto, você pode usar TypeError para indicar erros em que o 
 *      valor fornecido era do tipo errado. Cabe a você  decidir o que 
 *      constitui um tipo "errado"; talvez uma string quando você espera 
 *      um número (teste isso com typeof), ou o tipo errado de objeto 
 *      (teste isso com instanceof).
*/
function calcularValor(numero) {
    if (typeof numero !== "number") {
        throw new Error(`O valor ${numero} não é um número.`)
    }
}
