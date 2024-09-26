"use strict";

/** 
 *      Aqui está um exemplo realmente prático que mostra como uma função 
 *      geradora infinita pode fornecer uma sequência útil de valores.
 * 
 *      O método Math.random() permite que você gere números 
 *      pseudoaleatórios, mas você não pode controlar o valor da semente. 
 *      (Em vez disso, Math.random() semeia seu gerador de números 
 *      pseudoaleatórios usando um método opaco, não criptograficamente 
 *      seguro que pode variar de uma implementação JavaScript para 
 *      outra.) Isso é bom para a maioria dos aplicativos. Mas em alguns 
 *      cenários você precisa de uma maneira de gerar uma sequência 
 *      repetível de números aparentemente aleatórios. Os números ainda 
 *      precisam ser estatisticamente aleatórios em sua distribuição; a 
 *      única diferença é que você precisa ser capaz de pedir ao seu
 *      gerador de números pseudoaleatórios para lhe dar a mesma 
 *      sequência mais de uma vez. Exemplos onde números pseudoaleatórios 
 *      repetíveis são importantes incluem certos tipos de simulações ou 
 *      testes que precisam ser precisamente reproduzíveis.
 * 
 *      Existem várias bibliotecas JavaScript de terceiros que fornecem 
 *      geradores de números pseudoaleatórios semeáveis ​​(e, portanto,
 *      repetíveis). Uma das mais simples é a Mulberry32. Sua
 *      implementação JavaScript se encaixa em um único bloco denso de 
 *      código:    
*/
function mulberry32_1(seed) {
    return function random() {
        let t = seed += 0x6D2B79F5;
        t = Math.imul(t ^ t >>> 15, t | 1);
        t ^= t + Math.imul(t ^ t >>> 7, t | 61);
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
}

// Escolhe uma semente
const seed = 98345;

// Obtém um versão do mulberry32() que usa essa semente
const funcaoAleatoria = mulberry32_1(seed);

// Gera alguns números aleatórios
console.log(funcaoAleatoria()); // 0.9057375795673579
console.log(funcaoAleatoria()); // 0.7620641703251749
console.log(funcaoAleatoria()); // 0.02114417916163802

/**
 *      A função mulberry32() usar a técnica de closure, ela aceita um 
 *      valor de semente que é então bloqueado no contexto 
 *      da função random() interna. Isso significa que sempre que você 
 *      chamar random(), o valor de semente original estará disponível na 
 *      função externa. Isso é importante, porque uma semente diferente 
 *      significa uma sequência diferente de variáveis ​​aleatórias. Se 
 *      você chamar mulberry32() com o mesmo valor de semente, você tem a 
 *      garantia de obter a mesma sequência de números pseudoaleatórios 
 *      de random().
 * 
 *      Closures fazem parte da linguagem JavaScript desde tempos 
 *      imemoriais, mas generators são uma inovação muito mais recente. 
 *      Você pode reescrever este exemplo usando uma função generator, 
 *      que expressa mais claramente seu propósito:
*/
function* mulberry32(seed) {
    let t = seed += 0x6D2B79F5;

    // Gera números indefinidamente
    while (true) {
        t = Math.imul(t ^ t >>> 15, t | 1);
        t ^= t + Math.imul(t ^ t >>> 7, t | 61);
        yield ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
}

// Usa a messa semenente e obtém a mesma sequência

const gerador = mulberry32(seed);
console.log(gerador.next().value); // 0.9057375795673579
console.log(gerador.next().value); // 0.44091642647981644
console.log(gerador.next().value); // 0.7662326360587031

/**
 *      Como a função mulberry32() é declarada com function*, é 
 *      imediatamente óbvio que ela retornará vários valores. No 
 *      interior, um loop infinito garante que o gerador sempre estará 
 *      pronto para criar um novo número. Após cada passagem pelo loop, 
 *      random() produz um novo valor aleatório e então pausa até que um 
 *      novo valor seja solicitado com next(). A operação geral desta 
 *      solução é semelhante à sua versão original, mas agora segue um 
 *      padrão familiar que pode tornar seu uso mais fácil de descobrir.
 *      (Mas como sempre o valor de uma refatoração como esta depende das 
 *      convenções da sua organização, das expectativas das pessoas que 
 *      leem seu código e do seu gosto pessoal.)
 * 
 *      Não há perigo em construir um loop infinito em um gerador, desde 
 *      que ele ceda. A cessão pausa o código, garantindo que ele não 
 *      amarre o loop de eventos do JavaScript. Ao contrário das funções 
 *      normais, não há expectativa de que uma função geradora seja 
 *      executada até sua chave de fechamento final. Assim que um objeto 
 *      Generator sai do escopo, essa função e seu contexto são 
 *      disponibilizados para coleta de lixo.
*/
