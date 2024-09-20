"use strict";

/**
 *      Você quer criar um número aleatório que não possa ser facilmente 
 *      revertido (adivinhado).
 * 
 *      Use a propriedade window.crypto para obter uma instância do 
 *      objeto Crypto. Use o método Crypto.getRandomValues() para gerar 
 *      valores aleatórios que tenham mais entropia do que aqueles 
 *      produzidos por Math.random().
 * 
 *      O método Crypto.getRandomValues() funciona de forma diferente de 
 *      Math.random(). Em vez de fornecer um número de ponto flutuante 
 *      entre 0 e 1, getRandomValues() preenche uma matriz com inteiros 
 *      aleatórios. Você pode escolher se esses inteiros são de 8 bits, 
 *      16 bits ou 32 bits e se eles são assinados ou não. (Um tipo de 
 *      dado assinado pode ser negativo ou positivo, enquanto um número 
 *      não assinado é apenas positivo.)
 * 
 *      Há uma solução alternativa aceita para converter a saída de 
 *      getRandomValues() em um valor fracionário entre 0 e 1. O truque é 
 *      dividir o valor aleatório pelo número máximo possível que esse 
 *      tipo de dado pode conter:
*/
const bufferAleatorio = new Uint32Array(1);
window.crypto.getRandomValues(bufferAleatorio);
const fracaoAleatoria = bufferAleatorio[0] / (0xffffffff + 1);

/**
 *      Agora você pode trabalhar com randomFraction da mesma forma que 
 *      trabalha com o número retornado de Math.random(). Por exemplo, 
 *      você pode convertê-lo em um inteiro aleatório em um intervalo 
 *      específico.
*/
// Use a fração aleatória para fazer um inteiro aleatório de 1-6:
const numeroAleatorio = Math.floor(fracaoAleatoria * 6) + 1;
console.log(numeroAleatorio);

/**
 *      Se você estiver executando seu código no ambiente de execução 
 *      Node.js, você não terá acesso a um objeto window. No entanto, 
 *      você pode obter acesso a uma implementação muito semelhante da 
 *      Web Crypto API usando o seguinte código:
*/
const crypto = require("crypto").webcrypto;

/**
 *      Você precisa estar ciente de alguns detalhes importantes sobre a 
 *      implementação de Crypto.getRandomValues():
 * 
 *          • Tecnicamente, Crypto cria números pseudoaleatórios que são 
 *            gerados por uma fórmula matemática, como aquelas fornecidas 
 *            por Math.random(). A diferença é que esses números são 
 *            considerados criptograficamente fortes, porque o gerador de 
 *            números aleatórios é semeado com um valor verdadeiramente 
 *            aleatório. O benefício dessa troca é que getRandomValues() 
 *            tem desempenho semelhante ao Math.random().
 * 
 *          • Não há como saber como o objeto Crypto é semeado, porque 
 *            isso depende da implementação, que por sua vez depende da 
 *            funcionalidade do sistema operacional. Normalmente, a 
 *            semente é criada usando uma combinação de detalhes 
 *            registrados recentemente sobre tempos de teclado, 
 *            movimentos do mouse e leituras de hardware.
 * 
 *          • Não importa quão bons sejam seus números aleatórios, se seu 
 *            código JavaScript estiver sendo executado em um navegador, 
 *            ele estará exposto a um grande número de ataques. Afinal, 
 *            não há nada que impeça uma parte maliciosa de ver seu 
 *            código e criar uma cópia alterada que ignore toda a geração 
 *            de números aleatórios. Se seu código estiver sendo 
 *            executado em um servidor, a situação é diferente.
 * 
 *      Agora, vamos dar uma olhada mais de perto em como 
 *      getRandomValues() funciona. Antes de chamar getRandom Values(), 
 *      você deve criar um array tipado, que é um objeto semelhante a um 
 *      array que pode conter apenas valores de um tipo de dado 
 *      específico. JavaScript fornece vários objetos array fortemente 
 *      tipados que você pode usar: como Uint32Array (para um array de 
 *      inteiros de 32 bits não assinados), Uint16Array, Uint8Array e as 
 *      contrapartes assinadas Int32Array, Int16Array e Int8Array. Você 
 *      cria esse array para ser tão grande quanto quiser, e 
 *      getRandomValues() preencherá todo o buffer.
 * 
 *      O passo final é dividir esse valor aleatório pelo máximo inteiro 
 *      possível de 32 bits sem sinal, que é 4.294.967.295. Esse número é 
 *      mais limpo em sua representação hexadecimal, 0xffffffff:
 * 
 *      Você também precisa adicionar 1 ao valor máximo. Isso porque o 
 *      valor aleatório poderia teoricamente cair exatamente no valor 
 *      inteiro máximo. Se isso acontecer, o fração aleatótia se tornaria 
 *      1, o que difere de Math.random() e da maioria dos outros 
 *      geradores de números aleatórios.
*/
