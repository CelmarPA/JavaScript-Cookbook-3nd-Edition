"use strict";

/**
 *      Todos os números em JavaScript são valores de ponto flutuante, 
 *      que sofrem erros de arredondamento em certas operações. 
 *      Em algumas aplicações (por exemplo, ao lidar com quantidades de 
 *      dinheiro), esses erros podem não ser aceitáveis.
 * 
 *      Erros de arredondamento de ponto flutuante são um fenômeno bem 
 *      compreendido que existe em quase todas as linguagens de 
 *      programação. Para vê-lo em JavaScript, execute o seguinte código:
*/

const soma = 0.1 + 0.2;

console.log(soma); // 0.30000000000000004

/**
 *      Você não pode evitar o erro de arredondamento, mas pode 
 *      minimizá-lo. Se estiver trabalhando com um tipo de moeda que 
 *      tenha duas casas decimais de precisão (como real), considere 
 *      multiplicar todos os valores por 100 para evitar lidar com 
 *      decimais. Em vez de escrever código como este:
*/
const saldoAtual = 5382.23;
const valorTransacao = 14.02;

const atualizarSaldo = saldoAtual - valorTransacao;

console.log(atualizarSaldo); // 5368.209999999999

// Use variáveis ​​de moeda como a seguir:
const saldoAtualEmCentavos = 538223;
const transacaoEmCentavos = 1402;

const atualizarSaldoEmCentavos = saldoAtualEmCentavos - transacaoEmCentavos;

console.log(atualizarSaldoEmCentavos); // 536821

/**
 *      Isso resolve o problema para operações que resultam em números 
 *      inteiros exatos, como adicionar e subtrair números de centavos. 
 *      Mas o que acontece quando você precisa calcular impostos ou 
 *      juros? Nessas situações, você acabará com valores fracionários 
 *      não importa o que aconteça, e você precisa fazer o que empresas e 
 *      bancos fazem — arredondar seus valores imediatamente após sua 
 *      transação:
*/
const custoEmCentavos = 4899;

// Calcula taxa de 11%, e arredondda o resultado para o centavo mais próximo
const custoComTaxa = Math.round(custoEmCentavos * 1.11);

console.log(custoComTaxa); // 5438
