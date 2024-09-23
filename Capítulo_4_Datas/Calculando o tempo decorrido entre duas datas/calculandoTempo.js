"use strict";

/**
 *      Você precisa calcular quantos dias, horas ou minutos separam duas 
 *      datas.
 * 
 *      Como as datas são números (em milissegundos), os cálculos com 
 *      elas são relativamente diretos. Se você subtrair uma data da 
 *      outra, você obtém o número de milissegundos entre:
*/
const dataAntiga = new Date(2024, 1, 1);
const dataNova =  new Date(2024, 10, 1);

const diferencaEmMilisegundos = dataNova - dataAntiga;

/**
 *      A menos que você esteja cronometrando operações curtas para 
 *      testes de desempenho, o número de milissegundos não é uma unidade 
 *      particularmente útil. Cabe a você dividir esse número para 
 *      convertê-lo em um número mais significativo de minutos, horas ou 
 *      dias:
*/
const milisegundosPorDia = 1000 * 60 * 60 * 24;
let diferençaEmDias = diferencaEmMilisegundos / milisegundosPorDia;

// Apenas conta dias inteiros
diferençaEmDias = Math.trunc(diferençaEmDias);

console.log(diferençaEmDias);

/**
 *      Há duas armadilhas que você deve estar ciente ao realizar 
 *      cálculos de data:
 *          • As datas podem conter informações de tempo. (Por exemplo, 
 *            um novo objeto Date criado para o dia atual é preciso até o 
 *            milissegundo em que foi criado.) Antes de contar dias, use 
 *            setHours() para remover o componente de tempo.
 *          • Cálculos com duas datas só fazem sentido se as datas 
 *            estiverem no mesmo fuso horário. Idealmente, isso significa 
 *            que você está comparando duas datas locais ou duas datas no 
 *            padrão UTC. Pode parecer bastante simples converter datas 
 *            de um fuso horário para outro, mas frequentemente há casos 
 *            extremos inesperados com o horário de verão.
 * 
 *      E se você quiser usar pequenos cálculos de tempo para criar 
 *      perfis de desempenho, o objeto Date não é a melhor escolha. Em 
 *      vez disso, use o objeto Performance, que está disponível em um 
 *      ambiente de navegador por meio da propriedade window.performance 
 *      interna. Ele permite que você capture um registro de data e hora 
 *      de alta resolução com precisão de frações de milissegundo, se 
 *      suportado pelo sistema. Aqui está um exemplo:
*/

// Obtenha um objeto DOMHighResTimeStamp que representa a hora de início
const horaInicial = window.performance.now();

// (Faça um tarefa que consome tempo aqui)

// Obtenha um objeto DOMHighResTimeStamp que representa a hora do fim
const horaFim = window.performance.now();

// Encontre o tempo decorrido em milissegundos
const tempoDecorridoMiliseg =  horaFim = horaInicial;

/**
 *      O resultado (tempoDecorridoMiliseg) não é o milissegundo inteiro 
 *      mais próximo, mas a contagem de frações de milissegundos mais 
 *      precisa que é suportada no hardware atual.
 * 
 *      Embora o Node não forneça o objeto Performance, ele tem seu 
 *      mecanismo próprio para recuperar informações de tempo de alta 
 *      resolução. Você usa seu objeto de processo global, que fornece o 
 *      método process.hrtime.bigint(). Ele retorna uma leitura de tempo 
 *      em nanossegundos, ou bilionésimos de segundo. Basta subtrair uma 
 *      leitura process.hrtime.bigint() de outra para encontrar a 
 *      diferença de tempo em nanossegundos. (Cada milissegundo é 
 *      1.000.000 nanossegundos.) Como a contagem de nanossegundos 
 *      obviamente será um número muito grande, você precisa usar o tipo 
 *      de dados BigInt para mantê-la.
*/

