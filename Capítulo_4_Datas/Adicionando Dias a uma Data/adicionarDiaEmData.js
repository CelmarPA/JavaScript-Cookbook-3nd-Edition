"use strict";

/**
 *      Você quer encontrar uma data que seja um número específico de 
 *      dias antes ou depois de outra data.
 * 
 *      Encontre o número do dia atual com Date.getDate(), então altere-o 
 *      com Date.setDate(). O objeto Date é inteligente o suficiente 
 *      para rolar para o próximo mês ou ano conforme necessário.
*/
const hoje = new Date();
const diaAtual = hoje.getDate();

// Onde estarão três semanas no futuro?
hoje.setDate(diaAtual + 21);

console.log(`Três semanas no futuro apartir de hora será ${hoje.toLocaleDateString()}.`);

/**
 *      O método setDate() não se limita a números inteiros positivos. 
 *      Você pode usar um número negativo para deslocar uma data para 
 *      trás. Você pode querer usar os outros métodos setXxx() para 
 *      modificar uma data, como setMonths() para movê-la para frente ou 
 *      para trás um mês de cada vez, setHours() para movê-la por horas, 
 *      e assim por diante. Todos esses métodos são sobrepostos como 
 *      setDate(), então adicionar 48 horas moverá uma data exatamente 
 *      dois dias para frente.
 * 
 *      O objeto Date é mutável, o que faz seu comportamento parecer 
 *      distintamente antiquado. Em bibliotecas JavaScript mais modernas, 
 *      você esperaria que um método como setDate() retornasse um novo 
 *      objeto Date. Mas o que ele realmente faz é alterar o objeto Date 
 *      atual. Isso acontece mesmo se você declarar uma data com const. 
 *      (A const impede que você defina sua variável para apontar para um 
 *      objeto Date diferente, mas não impede que você altere o objeto 
 *      Date referenciado atualmente.) Para evitar problemas potenciais 
 *      com segurança, você pode clonar sua data antes de operar nela. 
 *      Basta usar Date.getTime() para obter a contagem subjacente de 
 *      milissegundos que representa sua data e usá-la para criar um novo 
 *      objeto:
*/
const dataOriginal = new Date();

// Clona a data
const dataFutura = new Date(dataOriginal.getTime());

// Muda a data clonada
dataFutura.setDate(dataOriginal.getDate() + 21);

console.log(`Três semanas apartir de ${dataOriginal.toLocaleDateString()} será ${dataFutura.toLocaleDateString()}.`);
