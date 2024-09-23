"use strict";

/**
 *      Você precisa ver se dois objetos Date representam a mesma data do 
 *      calendário ou determinar se uma data é anterior à outra.
 *      Você pode comparar objetos Date da mesma forma que compara 
 *      números, com os operadores < e >:
*/
const diaAntigo = new Date(1999, 10, 20);
const diaNovo = new Date(2024, 9, 23);

if (diaNovo > diaAntigo) {
    // Isso é verdade, porque diaNovo vem depois de diaAntigo
}

/**
 *      Internamente, as datas são armazenadas como números. Quando você 
 *      usa o operador < ou >, elas são automaticamente convertidas em 
 *      números e comparadas. Quando você executa este código, você está 
 *      comparando o valor de milissegundos para diaAntigo com o valor de 
 *      milissegundos para diaNovo.
 * 
 *      O operador de igualdade (=) funciona de forma diferente. Ele 
 *      testa a referência do objeto, não o conteúdo do objeto. (Em 
 *      outras palavras, dois objetos Date são iguais somente se você 
 *      estiver comparando duas variáveis ​​que apontam para a mesma 
 *      instância.)
 * 
 *      Se você quiser testar se dois objetos Date representam o mesmo 
 *      momento no tempo, você precisa convertê-los para números você 
 *      mesmo. A maneira mais clara de fazer isso é chamando 
 *      Date.getTime(), que retorna o número de milissegundos para uma 
 *      data:
*/
const data1 = new Date(2024, 9, 23);
const data2 = new Date(2024, 9, 23);

// Isso é falso porque são  objetos diferentes
console.log(data1 === data2);

// Isso é verdadeiro porque ele tem a mesma data
console.log(data1.getTime() === data2.getTime());

/**
 *      Apesar do nome, getTime() não retorna apenas a hora. Ele retorna 
 *      o número de milissegundos que é uma representação exata da data e 
 *      hora do objeto Date.
 * 
 *      Internamente, um objeto Date é apenas um inteiro.Especificamente, 
 *      é o número de milissegundos que se passaram desde 1º de janeiro 
 *      de 1970. O número de milissegundos pode ser negativo ou positivo, 
 *      o que significa que o objeto Date pode representar datas do 
 *      passado distante (aproximadamente 271.821 a.C.) até o futuro 
 *      distante (ano 275.760 d.C.). Você pode obter o número de 
 *      milissegundos chamando Date.getTime().
 * 
 *      Dois objetos Date são iguais somente se eles correspondem 
 *      exatamente, até o milissegundo. Dois objetos Date que representam 
 *      a mesma data, mas têm um componente de tempo diferente não 
 *      corresponderão. Isso pode ser um problema, porque você pode não 
 *      perceber que seu objeto Date contém informações de tempo. Este é 
 *      um problema comum ao criar um objeto Date para o dia atual. 
 * 
 *      Para evitar esse problema, você pode remover as informações de 
 *      tempo usando Date.setHours(). Apesar do nome, o método setHours() 
 *      aceita até quatro parâmetros, permitindo que você defina a hora, 
 *      minuto, segundo e milissegundo. Para criar um objeto Date somente 
 *      de data, defina todos esses componentes como 0:
*/
const hoje = new Date();

// Cria outra copia da data atual
// O dia não mudou, mas o tempo pode já ter passado para o próximo milissegundo
const hojeDiferente = new Date();

// Isso pode ser verdadeiro ou falso, dependendo de fatores temporais além do seu controle
console.log(hoje.getTime() === hojeDiferente.getTime());

// Remove todas as informações de tempo
hojeDiferente.setHours(0, 0, 0, 0);
hoje.setHours(0, 0, 0, 0);

// Isso sempre será verdade, porque o tempo foi removido de ambas as instâncias
