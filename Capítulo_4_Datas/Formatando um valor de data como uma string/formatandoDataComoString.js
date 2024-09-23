"use strict";

/**
 *      Você deseja criar uma string formatada com base em um objeto Date.
 *      
 *      Se você imprimir uma data com console.log(), você obterá a 
 *      representação de string bem formatada da data, como “Qua Out 21 
 *      2020 22:17:03 GMT-0400 (Eastern Daylight Time).” Esta 
 *      representação é criada pelo método DateTime.toString(). É uma 
 *      string de data padronizada, não específica de localidade que é 
 *      definida no padrão JavaScript.
 * 
 *      Internamente, o objeto Date armazena suas informações de tempo 
 *      como um horário UTC, sem informações adicionais de fuso horário. 
 *      Quando você converte um Date em uma string, esse horário UTC é 
 *      convertido em um horário específico de localidade para o fuso 
 *      horário atual, conforme definido no computador ou dispositivo 
 *      onde seu código está sendo executado.
 * 
 *      Se você quiser que sua string de data seja formatada de forma 
 *      diferente, você pode chamar um dos outros métodos de data 
 *      pré-construídos demonstrados aqui:
*/
const data = new Date(2024, 0, 1, 10, 30);

let stringData;

stringData = data.toString();
console.log(stringData); // "Mon Jan 01 2024 10:30:00 GMT-0300 (Horário Padrão de Brasília)"

stringData = data.toTimeString();
console.log(stringData); // "10:30:00 GMT-0300 (Horário Padrão de Brasília)"

stringData = data.toUTCString();
console.log(stringData); // "Mon, 01 Jan 2024 13:30:00 GMT"

stringData = data.toISOString();
console.log(stringData); // "2024-01-01T13:30:00.000Z"

stringData = data.toLocaleDateString();
console.log(stringData); // "01/01/2024"

stringData = data.toLocaleTimeString();
console.log(stringData); // "10:30:00"

/**
 *      Tenha em mente que se você usar toLocaleString() ou 
 *      toLocaleTime(), sua representação de string será baseada na 
 *      implementação do navegador e nas configurações do computador 
 *      atual. Não assuma consistência!
 * 
 *      Se você quiser ir além dos métodos de formatação padrão, há duas 
 *      abordagens que você pode adotar. Você pode usar os métodos 
 *      getXxx() para extrair componentes de tempo individuais de uma 
 *      data e, em seguida, concatená-los na string exata que você 
 *      precisa. Aqui está um exemplo:
*/
const dataDefinida = new Date(2024, 8, 23);

// Garanta que números de data menores que 10 sejam preenchidos com um 0 inicial.
const dia = dataDefinida.getDate().toString().padStart(2, "0");

// Garanta que os meses sejam preenchidos com 0 e adicione 1 para converter o mês de sua representação JavaScript baseada em 0
const mes = (dataDefinida.getMonth() + 1).toString().padStart(2, "0");

// O ano é sempre quadro digitos
const ano = dataDefinida.getFullYear();

const stringDataCustomizada = `${dia}.${mes}.${ano}`;

console.log(stringDataCustomizada); // "23.09.2024"

/**
 *      Essa abordagem é extremamente flexível, mas força você a escrever 
 *      seu próprio padrão de data, o que não é o ideal porque adiciona 
 *      complexidade e cria espaço para novos bugs.
 * 
 *      Se você quiser usar um formato padrão para uma localidade 
 *      específica, a vida é um pouco mais fácil. Você pode usar o objeto 
 *      Intl.DateTimeFormat para executar a conversão. Aqui estão três 
 *      exemplos que usam strings de localidade para os EUA, Reino Unido 
 *      e Japão:
*/
const novaData = new Date(2024, 8, 23, 3, 0, 0);

// Usa o formatado padrão de data US
console.log(new Intl.DateTimeFormat("en-US").format(novaData)); // "12/20/2024"

// Usa o formatado padrão de data UK
console.log(new Intl.DateTimeFormat("en-GB").format(novaData)); // "23/09/2024"

// Usa o formatado padrão de data Japonês
console.log(new Intl.DateTimeFormat("ja-JP").format(novaData)); // "2024/9/23"

/**
 *      Todas essas são strings somente de data, mas há muitas outras 
 *      opções que você pode definir quando criar o objeto 
 *      Intl.DateTimeFormat(). Aqui está apenas um exemplo que adiciona o 
 *      dia da semana e o mês à string, em alemão:
*/
const dataGer = new Date(2024, 8, 23);
const formatador = new Intl.DateTimeFormat("de-DE", { weekday: "long", year: "numeric", month: "long", day: "numeric" });

const dataString = formatador.format(dataGer);
console.log(dataString); // "Montag, 23. September 2024"

/**
 *      Essas opções também oferecem a capacidade de adicionar 
 *      informações de tempo à sua sequência com as propriedades de hora, 
 *      minuto e segundo, que podem ser definidas como:
*/
const dataModificada = new Date(2024, 8, 23, 9, 30);

const formatador2 = new Intl.DateTimeFormat("en-Us", { 
    year: "numeric", month: "numeric", day: "numeric", 
    hour: "numeric", minute: "numeric" });

const dataString2 = formatador2.format(dataModificada);
console.log(dataString2); // "9/23/2024, 9:30 AM"
