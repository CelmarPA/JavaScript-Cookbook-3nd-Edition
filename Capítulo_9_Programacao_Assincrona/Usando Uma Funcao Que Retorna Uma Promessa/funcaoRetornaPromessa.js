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
    'https://upload.wikimedia.org/wikipedia/commons/b/b2/Eagle_nebula_pillars.jpg'
);

// Fornece uma função que registra solicitações bem-sucedidas
promise.then( function emSuccesso(resposta) {
    console.log(`HTTP status: ${resposta.status}`);
});

// Fornece uma função que registra erros
promise.catch( function emErro(erro) {
    console.error(`Erro: ${erro}`);
});

// Fornece uma função que seja executada em qualquer direção
promise.finally( function emTermino() {
    console.log("Tudo feito")
});
