"use strict";

/**
 *      Você tem informações de data em uma string, mas deseja 
 *      convertê-las em um objeto Date para que possa manipulá-las em seu 
 *      código ou executar cálculos de data.
 * 
 *      Se você tiver sorte, terá sua sequência de data no formato de 
 *      carimbo padrão de data/hora ISO 8601 (“2021-12-17T03:24:00Z”), 
 *      que você pode passar diretamente para o construtor Date:
*/
const dataEvento = new Date("2024-11-25T20:24:00Z");

/**
 *      O T nesta string separa a data da hora, e o Z no final da string 
 *      indica que é um horário universal usando o fuso horário UTC, que 
 *      é a melhor maneira de garantir consistência em computadores 
 *      diferentes.
 * 
 *      Existem outros formatos que o construtor Date (e o método Date.
 *      parse()) podem reconhecer. No entanto, eles agora são fortemente 
 *      desencorajados, porque suas implementações não são consistentes 
 *      em diferentes navegadores.
 * 
 *      Se sua data não estiver no formato ISO 8601, você precisará 
 *      adotar uma abordagem manual. Extraia os diferentes componentes de 
 *      data da sua string e use-os com o construtor Date. Você pode 
 *      fazer bom uso de métodos String como split(), slice() e indexOf().
 * 
 *      Por exemplo, se você tiver uma sequência de data no formato 
 *      mm/dd/aaaa, você pode usar um código como este:
*/
const dataString = "12/30/2024";
// Dividir nas barras
const arrayData = dataString.split("/");

// Encontre os ingredientes individuais da data
const ano = arrayData[2];
const mes = arrayData[0];
const dia = arrayData[1];

// Aplicar a correção para numeração de meses baseada em 0
const eventoData = new Date(ano, mes - 1, dia).toLocaleDateString();

console.log(eventoData) // 30/12/2024

/**
 *      O construtor do objeto Date não realiza muita validação. 
 *      Verifique sua entrada antes de criar um objeto Date, porque o 
 *      objeto Date pode aceitar valores que você não aceitaria. Por 
 *      exemplo, ele permitirá que os números dos dias sejam transferidos 
 *      (em outras palavras, se você definir 40 como seu número do dia, o 
 *      JavaScript apenas moverá sua data para o próximo mês). O 
 *      construtor Date também aceitará strings que podem ser analisadas 
 *      de forma inconsistente em diferentes computadores.
 * 
 *      Se você tentar criar um objeto Date com uma string não numérica, 
 *      você receberá um objeto “Invalid Date”. Você pode testar essa 
 *      condição usando isNaN():
*/
const diaRuim = "12 bananas";
const dataConvertida = new Date(diaRuim);

if (Number.isNaN(dataConvertida)) {
    // Terminamos aqui, porque o objeto de data não foi criado com sucesso
} else {
    // Para uma instância de objeto Date válida, terminamos aqui
}
