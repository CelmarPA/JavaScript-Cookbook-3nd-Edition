"use strict";

/**
 *      Você quer pesquisar uma string para um padrão, em vez de uma 
 *      sequência exata de caracteres. Você então quer criar uma nova 
 *      string, com o padrão substituído.
 * 
 *      Você pode usar os métodos String.replace() ou String.replaceAll
 *      (), ambos suportam expressões regulares.
 * 
 *      Uma expressão regular é uma sequência de caracteres que define 
 *      um padrão de texto. Expressões regulares são um padrão 
 *      implementado em JavaScript e muitas outras linguagens de 
 *      programação.
 * 
 *      Por exemplo, considere o padrão de expressão regular t\w{2}e. 
 *      Isso se traduz em procurar qualquer sequência de caracteres 
 *      começando com t, terminando com e, e contendo dois outros 
 *      caracteres alfanuméricos. A solução corresponde a time, mas 
 *      também corresponde a tame. Aqui temos o código que usa essa 
 *      expressão regular:
*/
const stringOriginal = "Agora é o time, este é o tame.";

const regex = /t\w{2}e/g;

const novaString = stringOriginal.replaceAll(regex, "lugar");

console.log(novaString); // "Agora é o lugar, este é o lugar."

/**
 *      Observe que a expressão regular não é escrita como uma string. 
 *      Em vez disso, é um literal que começa e termina com uma barra 
 *      (/). O JavaScript reconhece essa sintaxe e cria um objeto 
 *      RegEx que usa sua expressão. 
 * 
 *      O g no final da expressão regular é um detalhe adicional 
 *      chamado sinalizador global. Ele indica que você está 
 *      pesquisando a string inteira em busca de correspondências. Se 
 *      você não incluir o sinalizador g, receberá um erro ao chamar 
 *      replaceAll(). No entanto, você pode usar uma expressão regular 
 *      sem o sinalizador global ao usar o método replace() para 
 *      alterar apenas uma ocorrência de um padrão.
 * 
 *      Se você preferir criar uma expressão regular sem usar o 
 *      delimitador /, há outra opção. Em vez de escrever um literal 
 *      de expressão regular, você pode criar explicitamente um objeto 
 *      RegEx, como este:
*/
const regEx = new RegExp("t\\w{2}e", "g");

/**
 *      Ao usar essa abordagem, você não inclui as barras ao redor da 
 *      expressão regular, mas precisa escapar de qualquer barra 
 *      invertida no padrão (substituindo / por //). Além disso, o 
 *      sinalizador global se torna um segundo argumento para o 
 *      construtor RegExp, em vez de ser adicionado ao final da 
 *      expressão regular.
 * 
 *      Você pode achar que escapar de barras invertidas é estranho ou 
 *      confuso em expressões regulares longas e complicadas. Se for o 
 *      caso, você pode contornar o requisito de escape com um 
 *      template literal. O truque é combinar seu template literal
 *      com o método String.raw(). Lembre-se de usar acentos graves 
 *      (`) ao redor da string de expressão em vez de apóstrofos ou 
 *      aspas:
*/
// Embora String.raw seja um método, ele não tem parênteses depois dele, e usa a sintaxe de crase especializada mostrada aqui.
const regeX = new RegExp(String.raw`t\w{2}e`, `g`);

/**
 *      Expressões regulares são compostas de caracteres regulares que 
 *      são usados ​​sozinhos ou em combinação com caracteres 
 *      especiais. Por exemplo, a seguir está uma expressão regular 
 *      para um padrão que corresponde a uma string que contém a 
 *      palavra "technology" e a palavra "book", nessa ordem, e 
 *      separados por um ou mais caracteres de espaço em branco
*/
const expressaRegular = /technology\s+book/;

/**
 *      O caractere de barra invertida (\) serve para dois propósitos: 
 *      ou é usado com um caractere regular, para designar que é um 
 *      caractere especial, ou é usado com um caractere especial, como 
 *      o sinal de mais (+), para designar que o caractere deve ser 
 *      tratado literalmente. Neste caso, a barra invertida é usada 
 *      com s, que transforma a letra s em um caractere especial que 
 *      designa um caractere de espaço em branco (espaço, tabulação, 
 *      avanço de linha ou avanço de formulário). O caractere especial 
 *      +\s+ é seguido pelo sinal de mais, \s, que é um sinal para 
 *      corresponder ao caractere anterior (neste exemplo, um 
 *      caractere de espaço em branco) uma ou mais vezes. Esta 
 *      expressão regular funcionaria com o seguinte:
*/
const string = "technology book";

// E também com:
string = "technology     book";

// Mas não funcionaria com a seguinte pela falta de espaço em branco entre as palavras
string = "technologybook";
