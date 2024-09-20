"use strict";
//  Caso você queira criar um representação de um número em string

/**
 *      Para converter um número em uma string basta concatenar um valor 
 *      com uma string vazia usando o operador + como a seguir:
 */
const algumNumero = 42;
const algumaString = algumNumero + "";

console.log(algumaString);

// Contudo praticas modernas favorecem conversões explícitas, todo objeto JavaScript tem um método imbutido toString(), incluindo o objeto Number, logo:
const algumOutroNumero = 42;
const algumaOutraString = algumOutroNumero.toString();

console.log(algumaOutraString);

/**
 *      Geralmente, você precisara customizar a representação da string 
 *      do seu número. Por exemplo, fixar número de casas decimais (como 
 *      30.00 em vez de 30). Ou talvez arredodando (por exemplo, de 
 *      30.009 para 30.01)
 * 
 *      JavaScript tem três métodos uteis dentro do tipo de dados 
 *      "numeros" que podem te ajudar. Todos eles criam representações de 
 *      string de um número:
 * 
 *      Number.toFixed(): Deixa você especificar o número de digitos 
 *                        depois da vírgula.
 * 
 *      Number.toExponential(): Usa notação cientifica, e deixa você 
 *                              especificar o número de digitos para 
 *                              mostra depois da vírgula.
 * 
 *      Number.toPrecision(): Deixa você especificar o número de digitos 
 *                            significativos para manter, sem considerar 
 *                            quão grande ou pequeno seu número é.
*/

// A seguir temos um exemplos dos três métodos de conversão de string:
const numero = 1242.0055;

// Especifica exatamente dois pontos decimais, números serão arredondados caso necessário.
const stringFixada = numero.toFixed(2);
console.log(stringFixada); // "1242.01"

// Especifica 5 digitos significativos, notação cientifica é usada caso necessário.
const stringPrecisa = numero.toPrecision(5);
console.log(stringPrecisa); // "1242.0"

// Especifica notação cientifica com 2 casas decimais.
const stringCientifica = numero.toExponential(2);
console.log(stringCientifica); // "1.24e+3"

/**
 *      Caso queira aplicar formatação com vírgulas, um símbolo de 
 *      moeda ou algum outro detalhe específico de localidade, você 
 *      precisa usar o objeto Intl.NumberFormat. Após criar um instância 
 *      e configurá-la apropriadamente você pode usar o Intl.NumberFormat 
 *      para executar sua conversão de número para string.
*/
// Por exemplo, para formatar um número para moeda americana use:
const formatador = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"});

const umNumero = 1242.005;
const stringMoeda = formatador.format(umNumero);

console.log(stringMoeda); // "$1,242.01"

// Caso crie um objeto Intl.NumberFormat sem qualquer argumentos de construtor, você obtém as configurações a localização atual do computador.
const format = new Intl.NumberFormat();
console.log(format.format(umNumero)); // "1.242,005"

// Você também pode criar um objeto Intl.NumberFormat para uma localidade específica, sem opções extras:
const formato = new Intl.NumberFormat("pt-BR");
console.log(formato.format(umNumero)); // "1.242,005"

/**
 *      O Intl.NumberFormat suporta várias opções. Você pode mudar como 
 *      números negativos são mostrados, definir quantidade máxima e 
 *      mínima de digitos, mostrar porcentagem, escolher diferentes 
 *      sistemas numéricos em algumas línguas.
*/

// Você pode ver uma versão antiga desta tecnita que usa o método Number.toLocaleString(). Aqui temos um exemplo:
const valor = 1242.0005;
const stringMonetaria = valor.toLocaleString("pt-br", { style: "currency", currency: "BRL"});

console.log(stringMonetaria); // "R$1.242,00"

// Essa abordabgem é perfeitamente válida, mais caso  planeje formatar longas series de números, criar um único objeto Intl.NumberFormat será uma melhor opção.

