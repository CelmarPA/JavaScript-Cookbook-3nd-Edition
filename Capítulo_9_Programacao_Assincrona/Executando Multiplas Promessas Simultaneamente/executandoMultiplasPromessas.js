"use strict";

/**
 *      Você quer executar várias promessas ao mesmo tempo e reagir 
 *      quando todas elas tiverem terminado seu trabalho.
 * 
 *      Use o método estático Promise.all() para combinar várias 
 *      promessas em uma única promessa e esperar que todas sejam 
 *      resolvidas com sucesso (ou que qualquer uma delas falhe).
 * 
 *      Para demonstrar como isso funciona, imagine que você tem uma 
 *      função que retorna uma promessa que resolve após uma espera de 
 *      aproximadamente 0 a 10 segundos. Aqui está uma função 
 *      esperaPromessaAleatoria() que faz exatamente isso usando 
 *      setTimeout(). Trate-a como um substituto para qualquer operação 
 *      assíncrona:
*/
function esperaPromessaAleatoria() {
    return new Promise((resolve, reject) => {
        // Decide quanto tempo esperar
        const esperarMilisegundos = Math.round(Math.random() * 10000);

        // Simula um tarefa assíncrona com setTimeOut()
        setTimeout(() => {
            console.log(`Resolvido depois de ${esperarMilisegundos}`);

            // Retorna o número de segundos esperados
            resolve(esperarMilisegundos);
        }, esperarMilisegundos);
    });
}

/**
 *      Agora você pode usar esperaPromessaAleatoria() para criar 
 *      rapidamente qualquer número de novas promessas. Para esperar que 
 *      várias promessas terminem, você precisa colocar todos os objetos 
 *      Promise em um array e passar esse array para o método 
 *      Promise.all(). Promise.all() retorna uma nova promessa que 
 *      representa a conclusão de todas as suas promessas. Usando isso, 
 *      você pode chamar then() e catch() para construir uma cadeia de 
 *      promessas, como de costume:
*/

// Cria três promessas
const promessa1 = esperaPromessaAleatoria();
const promessa2 = esperaPromessaAleatoria()
const promessa3 = esperaPromessaAleatoria();
const promessas = [promessa1, promessa2, promessa3];

// Aguarda todos eles e registra o resultado
Promise.all(promessas).then(valores => {
    console.log(`Tudo resolvido com: ${valores}`)
});

/**
 *      Existem outros métodos estáticos Promise além de all() que 
 *      aceitam múltiplas promises e retornam uma única promise 
 *      combinada. Todos eles têm comportamento ligeiramente diferente:
 * 
 *          Promise.allSettled(): Resolve quando cada promessa foi 
 *          resolvida ou rejeitada. (Isso é diferente de Promise.all(), 
 *          que só resolve se todas as promessas forem bem-sucedidas.) A 
 *          função que você anexa com Promise.then() recebe um array de 
 *          objetos de resultado, um para cada promessa. Cada objeto de 
 *          resultado tem duas propriedades: status indica se a promessa 
 *          foi cumprida ou rejeitada, e value tem o valor retornado ou 
 *          objeto de erro.
 *          
 *          Promise.any(): Resolve assim que uma promessa é resolvida com 
 *          sucesso. Ele fornece o valor somente para essa promessa.
 * 
 *          Promise.race(): Resolve assim que uma promessa é resolvida 
 *          com sucesso ou rejeitada. É o mais especializado de todos os 
 *          métodos Promise, mas pode ser usado para construir algum tipo 
 *          de sistema de agendamento personalizado que enfileira novas 
 *          tarefas assíncronas à medida que as existentes são concluídas.
*/
