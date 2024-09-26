"use strict";

/**
 *      Você quer criar uma função que possa lembrar dados, mas sem ter 
 *      que usar variáveis ​​globais e sem enviar repetidamente os mesmos 
 *      dados com cada chamada de função.
 * 
 *      Envolva a função que precisa preservar seu estado em outra 
 *      função. A função externa retorna a função interna, seguindo esta 
 *      estrutura:
*/
function funcaoExterna() {
    function funcaoInterna() {
        
    }
    
    return funcaoInterna;
}

/**
 *      Ambas as funções podem aceitar parâmetros. Mas aqui está o 
 *      truque. Os parâmetros da função externa vivem enquanto você tiver 
 *      uma referência à função interna. Você pode chamar a função 
 *      interna quantas vezes quiser, e os dados da função externa 
 *      persistem. (Conceitualmente, é como se a função externa fosse um 
 *      método de criação de objetos, e a função interna fosse um objeto 
 *      com estado.)
 *      
 *      Aqui temos um exemplo completo:
*/
function fazerCumprimento(cumprimento) {
    function adicNome(nome) {
        return `${cumprimento} ${nome}`;
    }

    return adicNome;
}

// Use a função externa para criar duas copias da função interna, cada uma com um valor diferente para cumprimento
const cumprimentoDiurno = fazerCumprimento("Bom dia para você");
const cumprimentoNoturno = fazerCumprimento("Boa noite");

console.log(cumprimentoDiurno("Petter")); // "Bom dia para você Petter"
console.log(cumprimentoNoturno("Sally")); // "Boa noite Sally"

/**
 *      Frequentemente, você descobrirá que precisa de uma maneira de 
 *      armazenar dados que são usados ​​em várias chamadas de função. 
 *      Você pode usar variáveis ​​globais, mas essa é uma técnica de 
 *      último recurso. Variáveis ​​globais levam a colisões de 
 *      nomenclatura, complicam o código e frequentemente levam a 
 *      interdependências ocultas entre funções diferentes, limitando a 
 *      reutilização do seu código e dando cobertura para erros sutis de 
 *      codificação se esconderem.
 * 
 *      Você poderia pedir ao chamador da função para manter essas 
 *      informações e enviá-las com cada chamada de função, mas isso 
 *      também pode ser estranho. Este exemplo mostra uma solução 
 *      diferente, criando um pacote de função com estado chamado de 
 *      closure.
 * 
 *      Nesta solução, a função externa fazerCumprimento() recebe um 
 *      argumento, que é uma saudação específica. Ela também retorna uma 
 *      função interna, adicNome(), que por sua vez recebe o nome da 
 *      pessoa. A closure abrange a função adicNome() e seu contexto ao 
 *      redor, que inclui o parâmetro que foi passado para a função 
 *      fazerCumprimento(). Para demonstrar esse fato, duas cópias de 
 *      adicNome() são criadas, em dois contextos diferentes. Uma existe 
 *      em uma closure onde uma mensagem diurna foi passada para 
 *      fazerCumprimento(), e a outra existe em uma closure onde uma 
 *      mensagem noturna foi passada para fazerCumprimento(). De qualquer 
 *      forma, quando a função adicNome() é chamada, ela usa o contexto 
 *      atual para construir sua mensagem.
 * 
 *      Vale a pena notar que o estado não se limita a valores de 
 *      parâmetros. Quaisquer variáveis ​​que estejam na função externa 
 *      também permanecem ativas enquanto a referência da função existir. 
 *      Aqui está um exemplo que usa uma variável de contador simples 
 *      para manter o controle de quantas chamadas de função você fez:
*/
function criarContador() {
    // Essa variável persiste enquanto a função criarContador estiver referenciada
    let contador = 0;

    function contar() {
        contador += 1;
        console.log(contador);
    }

    return contar;
}

const funcaoContador = criarContador();
funcaoContador(); // 1
funcaoContador(); // 2
funcaoContador(); // 3
 