"use strict";

/**
 *      Você precisa obter a data ou hora atual.
 *
 *      O JavaScript inclui um objeto Date que fornece um bom suporte
 *      para manipular informações de data. Quando você cria um novo
 *      objeto Date, ele é automaticamente preenchido com o dia e a hora
 *      atuais, até o milissegundo mais próximo:
 */
const hoje = new Date();

/**
 *      Agora é simplesmente uma questão de extrair as informações que
 *      você quer do seu objeto Date. O objeto Date tem uma longa lista
 *      de métodos que podem ajudar você nessa tarefa.
 *
 *      Aqui está um exemplo que exibe algumas informações básicas sobre
 *      a data atual:
 */
console.log(hoje.getFullYear()); // Exemplo: 2024
console.log(hoje.getMonth()); // Exemplo: 8 (Setembro)
console.log(hoje.getDay()); // Exemplo: 5 (Sexta)

// Faça um pequeno processamento extra de string para garantir que os minutos sejam preenchidos com um 0 inicial, se necessário, para criar um valor de dois dígitos (como '05' no tempo 4:05)
const horas = hoje.getHours();
const minutos = hoje.getMinutes().toString().padStart(2, "0");

console.log(`Agora são ${horas}:${minutos}`); // Exemplo: Agora são 14:08

/**
 *      Se você precisar comparar datas de diferentes fusos horários (ou
 *      aqueles que têm convenções diferentes para seguir o horário de
 *      verão), você deve usar os métodos UTC. Internamente, o objeto
 *      Date sempre usa UTC.
 */

/**
 *      O objeto Date() tem vários construtores. O construtor vazio cria
 *      um objeto Date para a data e hora atuais. Mas você também pode
 *      criar um objeto Date para uma data diferente especificando o ano,
 *      mês e dia, como a seguir:
 */
// 28 Maio de 2024:
let outroDia = new Date(2024, 4, 28);

/**
 *      Opcionalmente, você pode adicionar até quatro parâmetros ao
 *      construtor Date para horas, minutos, segundos e milissegundos:
 */
// 28 Maio de 2024, as 14:14:
outroDia = new Date(2024, 4, 28, 14, 14);
1;
console.log(
    outroDia.toLocaleString("pt-br", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    })
); // terça-feira, 28 de maio de 2024 às 14:14

console.log(
    outroDia.toLocaleString("pt-BR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    })
); // 28/05/2024, 14:14
