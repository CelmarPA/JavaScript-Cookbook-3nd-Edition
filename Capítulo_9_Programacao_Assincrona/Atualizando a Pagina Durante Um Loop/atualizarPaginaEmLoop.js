"use strict";

/**
 *      Você quer atualizar a página durante uma operação longa e 
 *      intensiva de CPU, mas o navegador não repintará a janela enquanto 
 *      estiver ocupado.
 * 
 *      Use a função setTimeout() periodicamente para enfileirar seu 
 *      trabalho. Ao contrário do nome, você não precisa definir um 
 *      atraso com setTimeout(). Em vez disso, use um valor de tempo 
 *      limite de 0 para agendar a próxima etapa em sua operação para 
 *      executar imediatamente, assim que o thread da IU estiver ocioso.
 * 
 *      Por exemplo, considere este loop, que incrementa um contador por 
 *      10 segundos (10.000 milissegundos). Após cada passagem pelo loop, 
 *      ele tenta alterar o texto em um elemento <p> chamado status:
*/
window.addEventListener("onload", facaTrabalho());

function facaTrabalho() {
    // Faz com que o elemento <p> mude
    const elementoStatus = document.getElementById("status");

    // Rastreie o tempo e o número de passagens pelo loop
    const tempoInicio =  Date.now();
    let contador = 0;

    elementoStatus.innerText = "Processamento iniciado";

    while ((Date.now() - tempoInicio < 10000)) {
        contador += 1;
        elementoStatus.innerText = `Número recém gerado ${contador}`;
    }

    elementoStatus.innerText = "Processamento concluído";
}

/**
 *      Se você executar este código, não verá nenhuma das mensagens 
 *      “Número recém-gerado”. Em vez disso, a página ficará sem resposta 
 *      por 10 segundos e exibirá “Processamento concluído”.
 * 
 *      Para corrigir o problema, você move o trabalho (nesse caso, 
 *      incrementando o contador e mostrando uma mensagem) para uma 
 *      função separada. Então, em vez de chamar essa função 
 *      repetidamente em um loop, você a chama com setTimeout(). Cada 
 *      vez, a função incrementa o contador, atualiza a página e então 
 *      chama setTimeout() para outra passagem, até que o limite de tempo 
 *      de 10 segundos tenha terminado:
*/
window.addEventListener("onload", facaTrabalhoEmBlocos());

function facaTrabalhoEmBlocos() {
    // Faz com que o elemento <p> mude
    const elementoStatus = document.getElementById("status");
    
    // Rastreie o tempo e o número de passagens pelo loop
    const tempoInicio = Date.now();
    let contador = 0;

    elementoStatus.innerText = "Processamento iniciado";

    // Cria uma função anônima que faz um pedaço de trabalho
    const fazerBlocoTarefa = () => {
        if (Date.now() - tempoInicio < 10000) {
            contador += 1;
            elementoStatus.innerText = `Número recém gerado ${contador}`;

            // Chama a função novamente, para o próximo bloco
            setTimeout(fazerBlocoTarefa, 0); 
        } else {
            elementoStatus.innerText = "Processamento concluído";
        }
    };

    // Inicie o processo chamando a função pela primeira vez
    fazerBlocoTarefa();
}

/**
 *      O JavaScript tem uma solução madura para trabalho assíncrono com 
 *      o recurso web workers. No entanto, você nem sempre precisa desse 
 *      nível de sofisticação. Web workers são ótimos se você tem uma 
 *      tarefa de longa duração, uma operação assíncrona que precisa 
 *      aceitar pedaços de dados enquanto funciona, ou uma operação 
 *      assíncrona que precisa de suporte para cancelamento. Mas se você 
 *      está lidando com uma tarefa relativamente curta e você
 *      tem requisitos mais modestos — por exemplo, você só quer 
 *      atualizar a página durante uma breve explosão de trabalho 
 *      intensivo de CPU — a abordagem setTimeout() funciona perfeitamente
 *      bem.
 * 
 *      No exemplo apresentado aqui, o método setTimeout() é chamado 
 *      repetidamente. Cada vez, a página abre mão do controle e espera 
 *      que o navegador agende a função solicitada, o que ele faz assim 
 *      que o thread principal do aplicativo fica ocioso (nesse caso, 
 *      quase instantaneamente). Para entender como isso funciona, é 
 *      importante perceber que setTimeout() não define exatamente quando 
 *      uma função será executada. Em vez disso, ele define um intervalo 
 *      de tempo mínimo. Quando o timer setTimeout() termina, ele pede ao 
 *      navegador para executar a função, mas cabe ao navegador agendar 
 *      essa solicitação. Se o navegador estiver ocupado, a solicitação 
 *      será atrasada. (Na verdade, mesmo que o navegador não esteja 
 *      ocupado, os navegadores modernos limitam uma sequência de 
 *      solicitações para que ela nunca seja acionada com mais frequência 
 *      do que uma vez a cada 4 milissegundos.) Mas, na prática, esses 
 *      atrasos são muito pequenos, e chamar setTimeout() com um valor de 
 *      0 milissegundos faz com que seu código seja acionado quase 
 *      imediatamente.
 * 
 *      O método setTimeout() não é o único método que o JavaScript tem 
 *      para agendar trabalho com um timer. Há também o método 
 *      window.setInterval(), que chama uma função repetidamente, com um 
 *      tempo de espera fixo antes de cada chamada subsequente. E se você 
 *      quiser usar um timer para criar uma animação (por exemplo, 
 *      redesenhando objetos em um <canvas>), é melhor usar 
 *      requestAnimationFrame(), que se sincroniza com as operações de
 *      repintura do navegador para garantir que você não desperdice 
 *      recursos calculando uma animação com mais frequência do que ela 
 *      pode ser exibida.
*/
