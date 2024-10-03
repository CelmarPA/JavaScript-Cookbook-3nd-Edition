"use strict";

/**
 *      Você quer que seu web worker relate o progresso enquanto executa 
 *      uma tarefa.
 * 
 *      Você pode usar o comportamento padrão de passagem de mensagens do 
 *      seu worker. Use uma propriedade do seu objeto de mensagem para 
 *      distinguir entre diferentes tipos de mensagens.
 * 
 *      Por exemplo, considere uma versão do exemplo do número primo que 
 *      envia dois tipos de mensagens: notificações de progresso 
 *      (enquanto o trabalho está em andamento) e a lista de números 
 *      primos (quando o trabalho é concluído).
 * 
 *      Para permitir que o aplicativo diga a diferença entre esses dois 
 *      tipos de mensagens, ele adiciona uma propriedade string 
 *      messageType, que define como "Progresso" ou "ListaPrimos". Aqui está 
 *      o código reescrito para retornar o resultado:
*/
onmessage = function (evento) {
    // Realiza a busca dos números primos
    const primos = encontrarPrimos(Number(evento.data.inicio), Number(evento.data.fim));

    // Envia de volta os resultados
    this.postMessage(
        {tipoMensagem: "ListaPrimos", data: primos}
    );
};

/**
 *      Agora, o código de cálculo de números primos também precisa usar 
 *      postMessage() para relatar seu progresso. Ele usa uma verificação 
 *      de limitação de taxa para arredondar o progresso para a 
 *      porcentagem mais próxima e para garantir que não notifique sobre 
 *      o mesmo progresso mais de uma vez:
*/
function encontrarPrimos(doNumero, paraNumero) {
    // Prepara o intervalo de pesquisa de números primos
    //  ...

    // Este é o loop que procura por primos
    for (let i = 0; i< lista.length; i++) {
        // Verifique se o número atual é primo
        // ...

        // Calculr e reporta o progresso
        var progresso = Math.round(i / lista.length * 100);

        // Envie uma atualização de progresso somente se o progresso tiver mudado pelo menos 1%
        if (progresso !== progressoAnterior) {
            postMessage(
                {tipoMensagem: "Progresso", data: progresso}
            );
            progressoAnterior = progresso;
        }
    }

    // Limpa e retorna a lista de números primos
    // ...
}

/**
 *      Quando a página recebe uma mensagem, ela verifica a propriedade 
 *      messageType para determinar o tipo de mensagem e então age de 
 *      acordo. Se for uma lista principal, ela mostra os resultados na 
 *      página. Se for uma notificação de progresso, ela atualiza o texto 
 *      de progresso.
*/
Worker.onmessage = evento => {
    const mensagem = evento.data;

    if (mensagem.tipoMensagem === "ListaPrimos") {
        const primos = mensagem.data;
        document.getElementById("primoContainer").textContent = primos.join(", ");
    } else if (mensagem.tipoMensagem === "Progresso") {
        mostrarStatus.textContent = `${mensagem.data} % feito...`;
    }
};
