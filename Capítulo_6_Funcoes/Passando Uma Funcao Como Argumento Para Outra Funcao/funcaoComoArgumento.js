"use strict";

/**
 *      Você está chamando uma função que espera que você forneça sua 
 *      própria função. Qual é a melhor maneira de passá-la?
 * 
 *      Muitas funções em JavaScript aceitam, ou até mesmo exigem, uma 
 *      função que é passada como um argumento. Algumas operações pedem 
 *      uma função de retorno de chamada que será acionada quando uma 
 *      tarefa for concluída. Outras precisam usar sua função para 
 *      concluir uma tarefa mais ampla. Por exemplo, muitos métodos do 
 *      objeto Array pedem que você forneça uma função para classificar, 
 *      converter, combinar ou selecionar dados. O array então usa sua 
 *      função várias vezes, até que tenha processado todos os elementos.
 * 
 *      Existem várias abordagens diferentes que você pode usar ao 
 *      fornecer uma função como um argumento. Aqui estão três padrões 
 *      comuns:
 *          • Forneça uma referência a uma função que já esteja declarada 
 *            em outro lugar no seu código. Essa abordagem faz sentido se 
 *            você quiser usar a função em outras partes do seu 
 *            aplicativo, ou se a função for particularmente longa ou 
 *            complexa.
 *          • Declare a função em uma expressão de função, então passe-a 
 *            como um argumento. Esta abordagem funciona bem para tarefas 
 *            diretas, e se você não planeja usar a função em nenhum 
 *            outro lugar.
 *          • Declare a função inline, no exato momento em que for 
 *            necessária — quando você a passar como um argumento para 
 *            outra função. Isso é semelhante à segunda abordagem, mas 
 *            torna seu código ainda mais compacto. Funciona melhor para 
 *            funções muito curtas e diretas (especialmente as de uma 
 *            linha).
 * 
 *      Vamos começar com uma página simples que tem este botã
 *          <button id="executarTeste">Executar Teste</button>
 * 
 *      Anexamos um manipulador de eventos da seguinte forma: 
*/

// Anexar manipulador de eventos de botão.
document.getElementById("executarTeste").addEventListener("click", botaoClicado);

/**
 *      Agora considere a função interna setTimeout(), que agenda uma 
 *      função para ser executada após um certo atraso (você fornece a 
 *      função). Aqui está a primeira abordagem para a passagem de 
 *      função, com uma função separada chamada mostrarMessagem():
*/
// Executa quando o botão for clicado
function botaoClicado() {
    // Dispara a função depois de 200 milisegundos (2 segundos)
    setTimeout(mostrarMessagem, 2000);
}

// Executa quando setTimeOut() a dispara
function mostrarMessagem() {
    alert(`Você clicou no botão há 2 segundos.`);
}

/**
 *      Ao passar uma referência de função por nome, certifique-se de não 
 *      adicionar um conjunto de parênteses vazios. Este exemplo passa 
 *      mostrarMessagem para a função setTimeout(). Se você 
 *      acidentalmente escrever mostrarMessagem(), o JavaScript executará 
 *      a função mostrarMessagem() imediatamente, e passará seu valor de 
 *      retorno para setTimeout() em vez de passar uma referência de 
 *      função. 
 * 
 *      Aqui está a segunda abordagem, que declara a função mais perto de 
 *      onde ela é necessária usando uma expressão de função:
*/
function botaoClicado() {
    // Declara a expressão de função para usar com setTimeOut()
    const timeoutCallback = function mostrarMessagem() {
        alert(`Você clicou no botão há 2 segundos.`);
    }

    // Dispara a função após 2000 milisegundos (2 segundos)
    setTimeout(timeoutCallback, 2000);
}

/**
 *      Neste caso, o escopo de mostrarMessagem() é limitado à função 
 *      botaoClicado(). Ela não pode ser chamada de outra função em outro 
 *      lugar no seu código. Opcionalmente, você pode omitir o nome da 
 *      função (mostrarMessagem), tornando-a uma função anônima. De 
 *      qualquer maneira, timeoutCallback funciona da mesma forma, mas um 
 *      nome de função pode ser útil na depuração, porque ele aparecerá 
 *      em um rastreamento de pilha se ocorrer um erro.
 * 
 *      E aqui está a terceira abordagem, que declara a função inline ao 
 *      chamar setTimeout():
*/
function botaoClicado() {
    // Dispara a função após 2000 milisegundos (2 segundos)
    setTimeout(function mostrarMessagem() {
        alert(`Você clicou no botão há 2 segundos.`);
    }, 2000);
}

/**
 *      Agora a função mostrarMessagem() é declarada e passada para 
 *      setTimeout() em uma declaração. Não há como nenhuma outra parte 
 *      do código interagir com mostrarMessagem(), mesmo dentro da função 
 *      botaoClicado(). Opcionalmente, você pode deixar de fora o nome
 *      mostrarMessagem() para que ele se torne uma função anônima:
*/
setTimeout(function () {
    alert(`Você clicou no botão há 2 segundos.`);
}, 2000);

/**
 *      Se você tiver alguma dúvida sobre como uma função usa uma 
 *      referência de função, aqui está um exemplo simples com uma função 
 *      personalizada chamada callYouBack() que aceita um parâmetro de 
 *      função e então o chama. Dentro da função callYouBack(), você 
 *      trata a referência de função exatamente como uma função comum, 
 *      chamando-a pelo nome e fornecendo quaisquer parâmetros que ela 
 *      precisa:
*/
function botaoClicado() {
    // Crie uma função que irá manipular a callback
    function logTempo(tempo) {
        console.log("Efetuando login em: " + tempo.toLocaleTimeString());
    }

    console.log("Prestes a chamar callYouBack()");
    callYouBack(logTempo);
    console.log("Tudo terminado")
}

function callYouBack(callbackFunction) {
    console.log("Iniciando callYouBack()");

    // Chama a função fornecida e fornece um argumento
    callbackFunction(new Date());

    console.log("Finalizando callYouBack()");
}

/**
 *      Se você executar este código e clicar no botão, ele produzirá uma 
 *      saída como esta:
 * 
 *          Prestes a chamar callYouBack()
 *          Iniciando callYouBack()
 *          Efetuando login em: 16:11:46
 *          Finalizando callYouBack()
 *          Tudo terminado
*/
