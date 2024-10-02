"use strict";

/**
 *      Você quer executar código quando uma tarefa assíncrona for
 *      concluída (com ou sem sucesso). Você quer ser notificado sobre a
 *      conclusão da tarefa por meio de um objeto Promise.
 *
 *      Uma Promise é um objeto que ajuda você a gerenciar uma tarefa
 *      assíncrona. Ela rastreia o status da tarefa e — mais importante —
 *      manipula os retornos de chamada que notificam seu código
 *      quando a tarefa é bem-sucedida ou falha. Tecnicamente, as
 *      promessas não adicionam novas funcionalidades ao JavaScript, mas
 *      facilitam a coordenação limpa de uma sequência de operações
 *      assíncronas.
 *
 *      Para especificar o que deve acontecer depois que uma promessa
 *      termina, você chama Promise.then() e fornece uma função. Para
 *      especificar o que deve acontecer no caso de um erro, você chama
 *      Promise.catch() e fornece uma função diferente. Para adicionar
 *      algum código de limpeza que deve ser executado depois que a
 *      promessa for bem-sucedida ou falhar, você chama Promise.finally()
 *      com uma terceira função.
 *
 *      Aqui está uma implementação ingênua de promessas, usando a API
 *      Fetch:
 */

// Cria a promessa
const promise = fetch(
    "https://upload.wikimedia.org/wikipedia/commons/b/b2/Eagle_nebula_pillars.jpg"
);

// Fornece uma função que registra solicitações bem-sucedidas
promise.then(function emSuccesso(resposta) {
    console.log(`HTTP status: ${resposta.status}`);
});

// Fornece uma função que registra erros
promise.catch(function emErro(erro) {
    console.error(`Erro: ${erro}`);
});

// Fornece uma função que seja executada em qualquer direção
promise.finally(function emTermino() {
    console.log("Tudo ok");
});

/**
 *      Se a chamada for bem-sucedida, você verá o status HTTP aparecer
 *      na janela do console, seguido pela mensagem “Tudo ok”. Este
 *      exemplo mostra a estrutura de uma chamada de promessa básica, mas
 *      não é a maneira como normalmente escrevemos código baseado em
 *      promessa, por dois motivos. Primeiro, para um código mais
 *      compacto e legível, favorecemos funções com a sintaxe de função
 *      de seta. Segundo, os métodos then(), catch() e finally()
 *      geralmente são encadeados em uma instrução. Isso é possível
 *      porque todos esses métodos retornam o mesmo objeto Promise.
 *
 *      Aqui está a maneira mais compacta e típica de escrever este
 *      código:
 */
fetch(
    "https://upload.wikimedia.org/wikipedia/commons/b/b2/Eagle_nebula_pillars.jpg"
)
.then((resposta) => {
    console.log(`HTTP status: ${resposta.status}`);
})
.catch((erro) => {
    console.error(`Erro: ${erro}`);
})
.finally(() => {
    console.log("Tudo ok");
});

/**
 *      Um objeto Promise não é um resultado, mas um espaço reservado 
 *      para um resultado que estará disponível no futuro.
 * 
 *      Assim que você cria um objeto Promise, seu código começa a ser 
 *      executado. É até possível que a Promise termine seu trabalho 
 *      antes de você chamar then() ou catch(). Isso não mudará como seu 
 *      código funciona. Se você chamar then() em uma promise que já foi 
 *      resolvida (com sucesso), ou catch() em uma promise que já foi 
 *      rejeitada (com um erro), seu código será executado imediatamente.
 * 
 *      A solução simples mostrada aqui usa encadeamento para anexar uma 
 *      função de sucesso (com then()) e uma função de falha (com 
 *      catch()). No entanto, também é comum usar encadeamento para unir 
 *      várias tarefas assíncronas, para que elas sejam executadas uma 
 *      após a outra. A função fetch() fornece um bom exemplo. Ela 
 *      retorna uma promessa que é resolvida assim que o servidor 
 *      responde. No entanto, se você quiser ler o corpo desta mensagem, 
 *      você precisa iniciar uma segunda operação assíncrona. (Isso 
 *      parece desnecessariamente doloroso, mas faz todo o sentido, 
 *      porque a quantidade de dados enviados pode ser enorme, então você
 *      não quer correr o risco de bloquear seu código enquanto os 
 *      recupera. Em JavaScript, as operações de  I/O são sempre 
 *      assíncronas.)
 *      
 *      Aqui está um exemplo que executa uma solicitação de busca 
 *      assíncrona e, em seguida, lê os resultados como um fluxo binário 
 *      usando response.blob(), que retorna um segundo objeto Promise.
 *      Agora then() é chamado naquele objeto para adicionar uma terceira 
 *      etapa — transformar os dados binários em uma string codificada em 
 *      Base64 que pode ser mostrada em um elemento <img>:
*/
fetch(
    'https://upload.wikimedia.org/wikipedia/commons/b/b2/Eagle_nebula_pillars.jpg')
.then(resposta => resposta.blob())
.then(blob => {
    const img = document.getElementById("imgDownload");
    img.src = URL.createObjectURL(blob);
});

/**
 *      Uma boa formatação de código é importante, porque uma cadeia de 
 *      promessas pode se tornar bem longa. Mas se organizadas 
 *      consistentemente, suas chamadas assíncronas podem parecer 
 *      semelhantes a um bloco de código linear, o que é uma melhoria 
 *      significativa em relação ao passado.
 * 
 *      Ao encadear várias promessas, você chama catch() e finally() no 
 *      final da cadeia, se decidir usá-las. Isso lhe dá um lugar para 
 *      coletar erros não tratados que ocorrem durante qualquer estágio 
 *      da cadeia de promessas. Você pode até lançar suas próprias 
 *      exceções em uma função then() para significar falha e encerrar a 
 *      cadeia:
*/
fetch(
    'https://upload.wikimedia.org/wikipedia/commons/b/b2/Eagle_nebula_pillars.jpg')
.then(resposta => {
    if (!resposta.ok) {
        // Normalmente, não é um erro se o servidor responde à nossa solicitação. Agora, vamos tratar qualquer resposta diferente de HTTP 200 OK como um erro
        throw new Error(`HTTP código: ${resposta.status}`);
    }
    else{
        return resposta.blob();
    }
})
.then(blob => {
    const img = document.getElementById("imgDownload");
    img.src = URL.createObjectURL(blob);
})
.catch(erro => {
    console.log("Um erro ocorreu na primeira ou segunda promessa");
});

/**
 *      Assim que um erro não tratado ocorre, toda a cadeia de promessas 
 *      é descarrilada. Você pode reagir a esse erro para executar o 
 *      registro ou alguma outra tarefa de diagnóstico, mas não pode
 *      retomar as promessas que foram abandonadas mais abaixo na cadeia. 
 *      Se você não pegar um erro em uma promessa, ele eventualmente é 
 *      levantado como o evento window.unhandledrejection e, se não for 
 *      cancelado lá, ele é registrado no console.
*/
