"use strict";

/**
 *      Em vez de criar uma cadeia de promessas, você quer escrever uma 
 *      lógica linear que seja mais fácil de ler e pareça mais com um 
 *      código síncrono.
 * 
 *      Não chame Promise.then(). Em vez disso, use a palavra-chave await 
 *      na sua promessa:
*/
console.log("tarefaPromessa está trabalhando assíncronamente");
await tarefaPromessa;
console.log("tarefaPromessa terminou");

/**
 *      O código após await não é executado até que a promessa aguardada ]
 *      tenha sido resolvida ou rejeitada. A execução do seu código 
 *      pausa, mas sem bloquear o thread, travar a UI ou impedir que 
 *      outros temporizadores e eventos sejam acionados.
 * 
 *      Mas há um porém. A palavra-chave await só pode ser usada dentro 
 *      de uma função async. Isso significa que você pode precisar de 
 *      alguma reorganização para usar await. Considere o exemplo fetch().
 *      Com promessas, fica assim:
*/
const url = "https://upload.wikimedia.org/wikipedia/commons/b/b2/Eagle_nebula_pillars.jpg";

fetch(url)
.then(resposta => {
    // A operação fetch foi concluída
    console.log(`HTTP status: ${resposta.status}`);
    console.log(`Todas as etapas assíncronas foram concluídas`);
})

/**
 *      Com as palavras-chave async e await, você pode estruturá-lo assim:
*/
async function obterImagem() {
    const url = "https://upload.wikimedia.org/wikipedia/commons/b/b2/Eagle_nebula_pillars.jpg";

    const resposta = await fetch(url);

    // A operação fetch foi concluída e a promessa foi resolvida ou rejeitada
    console.log(`HTTP status: ${resposta.status}`);
}

obterImagem().then(() => {
    console.log(`Todas as etapas assíncronas foram concluídas`);
})

/**
 *      Você também pode usar blocos tradicionais de captura de exceções 
 *      em operações aguardadas, em vez do método Promise.catch():
*/
async function obterImagem() {
    const url = "https://upload.wikimedia.org/wikipedia/commons/b/b2/Eagle_nebula_pillars.jpg";

    try {
        const resposta = await fetch(url);
        console.log(`HTTP status: ${resposta.status}`);
    } catch (erro) {
        console.error(`Erro: ${erro}`);
    } finally {
        console.log("Todo ok");
    }
}

/**
 *      A vantagem de usar await para apenas uma chamada é relativamente 
 *      pequena. No entanto, await pode tornar seu código 
 *      consideravelmente mais limpo se você tiver uma sequência inteira 
 *      de operações assíncronas que precisam ocorrer uma após a outra. 
 *      Normalmente, você lidaria com isso com uma cadeia de promessas 
 *      que chama Promise.then() várias vezes. Mas com await, o código 
 *      parece um código síncrono comum. Aqui está um exemplo que duplica 
 *      o exemplo de leitura de imagem para enviar uma solicitação da web 
 *      assíncrona e então ler de forma assíncrona os dados da imagem que 
 *      são retornados:
*/
async function obterImagem() {
    url = "https://upload.wikimedia.org/wikipedia/commons/b/b2/Eagle_nebula_pillars.jpg";

    // Aguarda (de forma assíncrona) a resposta
    const resposta = await fetch(url);

    if (resposta.ok) {
        // Aguarda (de forma assíncrona) que o blob seja lido
        const blob = await resposta.blob();

        // Agora mostra a imagem
        const img = document.getElementById("imgDownload");
        img.src = URL.createObjectURL(blob);
    }
}

/**
 *      A palavra-chave await manipula promessas de uma forma que parece 
 *      código síncrono, mas não bloqueia sua aplicação. Considere uma 
 *      declaração como esta:
*/
const resposta = await fetch(url);

/**
 *      Do ponto de vista do seu código, é como se a execução parasse e a 
 *      função fetch() se tornasse síncrona. Mas, na realidade, o 
 *      JavaScript pega o restante da sua função e a anexa à promessa 
 *      retornada por fetch(), como se você a tivesse passado para 
 *      Promise.then(). Como resultado, o restante do seu código é 
 *      agendado e o thread da IU não é bloqueado. Sua aplicação está 
 *      livre para manipular outros eventos e temporizadores enquanto 
 *      aguarda a operação fetch terminar.
 * 
 *      A palavra-chave await só funciona em uma função async. Você não 
 *      pode usar await no nível superior do código da página da web. Em 
 *      vez disso, você precisa criar uma nova função async para mantê-la,
 *      como a função obterImagem() neste exemplo:
*/
async function obterImagem() {

}

/**
 *      Agora que obterImagem() é uma função assíncrona, ela retornará 
 *      automaticamente um objeto Promise. Você anexa o código que é 
 *      executado quando obterImagem() termina usando Promise.then(), 
 *      como faria com qualquer cadeia de promessas.
 * 
 *      A palavra-chave await se torna mais útil quando você precisa 
 *      executar várias operações assíncronas e tomar decisões ao longo 
 *      do caminho. Por exemplo, imagine que você precisa escrever um 
 *      código que espera uma tarefa assíncrona terminar, avalia seu 
 *      resultado e então decide qual tarefa iniciar em seguida. Você 
 *      pode implementar esse padrão com promises, mas a lógica é mais 
 *      difícil de seguir. Com await, ele é organizado como um código 
 *      síncrono tradicional:
*/
const passo1 = await algumaTarefaAssinc();

if (passo1 === algumResultado) {
    const passo2 = await diferenteTarefaAssinc();
    // ...
} else {
    const passo3 = await outraTarefaAssinc();
    // ...
}

/**
 *      Dado que esse código parece tão limpo e direto, você pode se 
 *      perguntar por que você não usaria await. Como todas as 
 *      abstrações, await esconde alguns detalhes do objeto Promise 
 *      subjacente e torna certas situações mais difíceis. Por exemplo, é 
 *      um erro comum com await esperar que uma série de ações sejam 
 *      concluídas uma após a outra com instruções await separadas, 
 *      quando o que você realmente quer é iniciar todas elas de uma vez. 
 *      Aqui está uma demonstração do problema:
*/
const resposta01 =  await funcaoLenta(objetoDado1);
const resposta02 =  await funcaoLenta(objetoDado2);
const resposta03 =  await funcaoLenta(objetoDado3);

/**
 *      Você poderia resolver essa situação com Promise.all. Mas isso não 
 *      é necessário. Você ainda pode usar await, desde que tenha certeza 
 *      de que todas as promessas sejam iniciadas primeiro. Aqui vai uma 
 *      correção:
*/
const promessa1 = funcaoLenta(objetoDado1);
const promessa2 = funcaoLenta(objetoDado2);
const promessa3 = funcaoLenta(objetoDado3);

const resposta1 = await promessa1;
const resposta2 = await promessa2;
const resposta3 = await promessa3;

/**
 *      Isso funciona porque uma promessa começa a executar o código 
 *      assim que é criada. No momento em que o código atribuiu a 
 *      promessa1, promessa2 e promessa3, todos os três processos 
 *      assíncronos estão em andamento. E embora await seja 
 *      frequentemente usado com uma função que retorna uma promessa, ele 
 *      funciona em qualquer objeto Promise.
*/
