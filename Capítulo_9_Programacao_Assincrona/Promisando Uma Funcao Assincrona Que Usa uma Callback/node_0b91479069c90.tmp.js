"use strict";

/**
 *      Você deseja alterar uma função assíncrona baseada em callback 
 *      para usar uma promessa.
 * 
 *      Crie outra função para encapsular sua função assíncrona. Esta 
 *      função cria e retorna um novo objeto Promise. Quando a tarefa 
 *      assíncrona termina, a função chama Promise.resolve() se tiver 
 *      sucesso ou Promise.reject() se tiver falhado.
 * 
 *      Aqui está um exemplo de uma função que age como uma função 
 *      assíncrona tradicional, baseada em retorno de chamada.
 *      Ela usa um timer para executar seu trabalho assíncrono:
*/
function fatorizacaoNumero(numero, sucessoCallback, falhaCallback) {
    if (numero < 0) {
        falhaCallback(
            new Error("Fatoriais são apenas definidos para números positivos"));
    } else if (numero != Math.trunc(numero)) {
        falhaCallback(
            new Error("Fatoriais sao apenas definidos para inteiros"));
    } else {
        setTimeout( () => {
            if (numero === 0 || numero === 1) {
                sucessoCallback(1);
            } else {
                let resultado = numero;
                while (numero > 1) {
                    numero -= 1;
                    resultado *= numero;
                }
                sucessoCallback(resultado);
            }
        }, 5000); // Este atraso de 5 segundos codificado simula um longo processo assíncrono
    }
}

/**
 *      Não há benefício em calcular fatoriais assincronamente ou usar um 
 *      timer. Este exemplo é apenas um substituto para qualquer API mais
 *      antiga que use callbacks.
 * 
 *      Agora, você pode usar a função factorializeNumber() assim:
*/
function logResultado(resultado) {
    console.log(`5! = ${resultado}`);
}

function logErro(erro) {
    console.log(`Erro: ${erro}`);
}

fatorizacaoNumero(5, logResultado, logErro);

/**
 *      A maneira mais fácil de promisificar a função fatorizacaoNumero() 
 *      é criar uma nova função que a envolva:
*/
function fatorizacaoNumeroPromessa(numero) {
    return new Promise((resolve, reject) => {
        fatorizacaoNumero(numero,
            resultado => {
                resolve(resultado);
            },
            erro => {
                reject(erro);
            });
    });
}

/**
 *      Agora você pode chamar fatorizacaoNumeroPromessa(), receber um 
 *      objeto Promise e manipular o resultado com Promise.then():
*/
fatorizacaoNumeroPromessa(5)
.then( resutaldo => {
    console.log(`5! = ${resutaldo}`);
});

/**
 *      Você também pode detectar erros potenciais e até mesmo criar uma 
 *      cadeia inteira de operações assíncronas.
*/
fatorizacaoNumeroPromessa("Valor ruim")
.then( resultado => {
    console.log(`6! = ${resultado}`);
})
.catch( erro => {
    console.log(erro);
});

/**
 *      Em JavaScript, você usará promessas com frequência, mas as criará raramente. O motivo 
 *      mais comum para criar um objeto Promise é porque você está encapsulando um código 
 *      antigo baseado em callback, como neste exemplo.
*/
