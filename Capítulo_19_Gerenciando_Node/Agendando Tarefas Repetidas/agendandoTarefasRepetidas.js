"use strict";

/**
 *      Você tem uma tarefa que precisa ser executada repetidamente em 
 *      intervalos específicos.
 * 
 *      Use node-cron, que permite agendar tarefas no Node usando a 
 *      sintaxe GNU crontab.
 * 
 *      O seguinte será registrado no console a cada minuto:
*/
const cron = require("node-cron");

cron.schedule("* * * * *", () => {
    console.log("Registra no console a cada minuto");
});

/**
 *      Para usar o módulo node-cron, primeiro instale-o com npm:
 * 
 *          $ npm install node-cron
 * 
 *      Você pode então usar o método schedule junto com a sintaxe 
 *      crontab para criar umatarefa agendada.
 * 
 *      A sintaxe crontab pode ser um pouco confusa se você nunca a 
 *      encontrou antes. No exemplo acima, usei um asterisco para cada 
 *      campo, que significa "primeiro-último". Podemos substituir os 
 *      asteriscos pelos seguintes valores (em ordem):
 * 
 *          • second (optional): 0–59
 *          • minute: 0–59
 *          • hour: 0–23
 *          • day of month: 0–31
 *          • month: 0–12 (or three-letter names)
 *          • day of week: 0–7 (or three-letter names, 0 or 7 is 
 *            Sunday )
 * 
 *      O seguinte será executado cinco minutos depois da meia-noite no 
 *      primeiro dia de cada mês:
*/
cron.schedule("5 0 1 * *", () => {
    console.log("É o primeiro do mês!")
});

/**
 *      Também podemos incluir intervalos. O seguinte executará um 
 *      trabalho à meia-noite, em cada dia da semana de junho a 
 *      setembro:
*/
cron.schedule("0 0 * 6-9 1-5", () => {
    console.log("Dias úteis de verão");
});

/**
 *      node-cron aceita duas opções: scheduled e timezone. O seguinte 
 *      executará um trabalho à meia-noite no mesmo fuso horário da 
 *      cidade de Nova York:
*/
cron.schedule("0 0 * * *", () => {
    console.log("Executando trabalho a meia noite");
}, {
    scheduled: true,
    timezone: "America/New_York"
});

/**
 *      scheduled é um valor booleano que tem como padrão true. Os 
 *      trabalhos do Cron não serão executados se o valor for definido 
 *      como false. timezone permite que você defina um fuso hrário 
 *      específico para o agendamento. Para todos os nomes de fuso 
 *      horário, consulte a página de fuso horário do Moment.js.
*/
