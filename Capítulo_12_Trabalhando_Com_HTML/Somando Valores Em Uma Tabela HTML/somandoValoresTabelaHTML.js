"use strict";

/**
 *      Você quer somar todos os números em uma coluna da tabela.
 * 
 *      Percorra a coluna da tabela que contém valores numéricos como 
 *      strings, converta os valores em números e some os números:
*/
let soma = 0;

// Usa querySelectorAll para encontrar todas as células da segunda tabela
const celulas = document.querySelectorAll("td:nth-of-type(2)");

// Itera por cada uma
celulas.forEach(celula => {
    soma += Number.parseFloat(celula.firstChild.data);
});

/**
 *      O seletor :nth-of-type(n) corresponde ao filho específico (n) 
 *      de um elemento. Ao usar td:nth-of-type(2) estamos selecionando 
 *      o segundo elemento filho td. No exemplo de marcação HTML, o 
 *      segundo elemento td na tabela é um valor numérico:
 * 
 *          <td>Washington</td><td>145</td>
 * 
 *      Os métodos parseInt() e parseFloat() convertem strings em 
 *      números, mas parseFloat() é mais adaptável quando se trata de 
 *      lidar com números em uma tabela HTML. A menos que você tenha 
 *      certeza absoluta de que todos os números serão inteiros, 
 *      parseFloat() pode funcionar tanto com números inteiros quanto 
 *      com números de ponto flutuante.
 * 
 *      O exemplo a seguir demonstra como converter e somar valores 
 *      numéricos em uma tabela HTML e, então, como inserir uma linha 
 *      de tabela com essa soma, no final. O código usa 
 *      document.querySelectorAll(), que usa uma variação diferente no 
 *      seletor CSS, td + td, para acessar os dados dessa vez. Este 
 *      seletor encontra todas as células da tabela que são precedidas
 *      por outra célula da tabela.
*/

/**
 *      Ser capaz de fornecer uma soma ou outra operação em dados de 
 *      tabela é útil se você estiver trabalhando com atualizações 
 *      dinâmicas, como acessar linhas de dados de um banco de dados. 
 *      Os dados buscados podem não ser capazes de fornecer valores de 
 *      resumo, ou você pode não querer fornecer dados de resumo até 
 *      que um leitor de página da web escolha fazê-lo. Os usuários 
 *      podem querer manipular os resultados da tabela e, em seguida, 
 *      apertar um botão para executar a operação de soma.
 * 
 *      Adicionar linhas a uma tabela é simples, desde que você se 
 *      lembre das etapas:
 * 
 *          1. Crie uma nova linha de tabela usando document.
 *             createElement("tr").
 * 
 *          2. Crie cada célula de linha de tabela usando document.
 *             createElement("td").
 * 
 *          3. Crie os dados de cada célula de linha de tabela usando 
 *             document.createTextNode(), passando o texto do nó 
 *             (incluindo números, que são automaticamente convertidos 
 *             em uma string).
 * 
 *          4. Anexe o nó de texto à célula da tabela.
 * 
 *          5. Anexe a célula da tabela à linha da tabela.
 * 
 *          6. Anexe a linha da tabela à tabela.
*/
