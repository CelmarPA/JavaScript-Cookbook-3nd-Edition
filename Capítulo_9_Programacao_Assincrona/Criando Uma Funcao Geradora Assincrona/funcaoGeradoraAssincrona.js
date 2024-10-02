"use strict";

/**
 *      Você deseja criar um gerador para uma operação que retorna 
 *      valores de forma assíncrona.
 * 
 *      Use a palavra-chave async com a sintaxe da função geradora 
 *      especializada.
 * 
 *      Considere este gerador extremamente simples que produz uma 
 *      sequência infinita de números aleatórios:
*/
function* obterInteirosAleatorios(max) {
    while (true) {
        yield Math.floor(Math.random() * Math.floor(max) + 1);
    }
}

/**
 *      Que você chama assim:
*/
const geradorAleatorio = obterInteirosAleatorios(6);

// Obtém 10 valores aleátorios entre 1 e 6
for (let i = 0; i < 10; i++) {
    console.log(geradorAleatorio.next())
}

/**
 *      Para tornar o gerador assíncrono, você simplesmente adiciona a 
 *      palavra-chave async, exatamente como você faz com uma função 
 *      comum:
*/
async function* obterInteirosAleatorios2(max) {
    while (true) {
        yield Math.floor(Math.random() * Math.floor(max) + 1);
    }
}

/**
 *      E como qualquer outra função assíncrona, uma função geradora 
 *      assíncrona não irá produzir resultados diretos. Em vez disso, ela 
 *      irá produzir objetos Promise que encapsulam os resultados. Você 
 *      pode chamar Promise.then() para obter o resultado, quando estiver 
 *      pronto. Aqui está um exemplo que mostra o que está acontecendo:
*/
const geradorAleatorio2 = obterInteirosAleatorios2(6);

// Obtém 10 valores aleátorios entre 1 e 6
for (let i = 0; i < 10; i++) {
    const promessa = geradorAleatorio2.next();
    console.log(`Promessa recebida`);
    promessa.then(resultado => console.log(`Resultado recebido: ${resultado.value}`));
}

/**
 *      Frequentemente, geradores assíncronos são combinados com a 
 *      palavra-chave await. Um atalho comum é o loop for await, que 
 *      espera para solicitar novos valores do gerador até que a promessa 
 *      anterior seja resolvida. Aqui está um exemplo que usa essa 
 *      técnica para pesquisar números aleatórios, um número de cada vez:
*/

// Esta função usa um loop for await para executar awaits consecutivos
async function procurarNumerosAleatorios(buscarNumero, gerador) {
    for await (const valor of gerador) {
        console.log(valor);
        if (valor === buscarNumero) return;
    }
}

// Use a função procurarNumerosAleatorios() para gerar números aleatórios de 1 a 100, de forma assíncrona, até encontrarmos 42
const geradorAleatorio3 = obterInteirosAleatorios2(100);

procurarNumerosAleatorios(42, geradorAleatorio3).then(resultado => {
    console.log("Numero encontrado")
});

/**
 *      As funções do gerador fornecem uma maneira simplificada de 
 *      retornar valores sob demanda. Após cada instrução yield, o 
 *      JavaScript pausa a função do gerador. Mas o contexto em torno 
 *      dela (todas as variáveis ​​locais e argumentos passados) é 
 *      preservado até que o próximo valor seja solicitado pelo código de 
 *      chamada.
 * 
 *      Geradores assíncronos são mais úteis para tarefas que acessam um 
 *      recurso externo e têm alguma latência. Por exemplo, você pode 
 *      vê-los em APIs de solicitação da web ou de fluxo de arquivos.
 *      Aqui está um gerador que usa a API Fetch para recuperar sua lista 
 *      de números aleatórios de um serviço da web:
*/
async function* obterInteirosAleatoriosWeb(max) {
    // Constroe uma URL para obter um número aleatório no intervalo solicitado
    const url = 'https://www.random.org/integers/?num=1&min=1&max=' + max + '&col=1&base=10&format=plain&rnd=new';

    while (true) {
        // Inicia a solicitação (e aguarde assincronamente pela resposta)
        const resposta = await fetch(url);

        // Inicia a leitura do texto de forma assincrona
        const texto = await resposta.text();

        // Produz o resultado e aguarde a próxima solicitação 
        yield Number(texto);
    }
}

// Esta função usa um loop for await para executar awaits consecutivos
async function geradorNumerosAleatoriosWeb(max) {
    const gerador = obterInteirosAleatoriosWeb(max);

    for await (const valor of gerador) {
        console.log(valor);
        if (valor === max) return;
    }
}


// Chame a função passando o valor máximo desejado, por exemplo, 100
geradorNumerosAleatoriosWeb(100);
