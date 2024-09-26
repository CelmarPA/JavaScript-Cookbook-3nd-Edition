"use strict";

/**
 *      Você tem uma função que recebe vários argumentos. Você quer 
 *      encapsular essa função com uma ou mais versões especializadas que 
 *      exigem menos argumentos.
 * 
 *      A seguinte função fazerString() aceita três parâmetros (em outras 
 *      palavras, ela tem uma aridade de 3):
*/
function fazerString(prefixo, string, sufixo) {
    return prefixo + string + sufixo;
}

/**
 *      No entanto, o primeiro e o último argumentos são frequentemente 
 *      repetidos com base em um caso de uso específico. Você quer 
 *      eliminar a repetição de argumentos sempre que possível.
 * 
 *      Você pode resolver esse problema criando novas funções que 
 *      envolvam a função fazerString() criada anteriormente, mas com 
 *      valores de argumentos conhecidos bloqueados:
*/
function sitacaoString(string) {
    return fazerString('"', string, '"');
}

function barraString(string) {
    return fazerString("-", string, "-");
}

function nomearEntidade(string) {
    return fazerString("&#", string, ";");
}

/**
 *      Agora, apenas um argumento é necessário para chamar qualquer uma 
 *      dessas novas funções:
*/
console.log(sitacaoString("apple")); // "apple"
console.log(barraString("apple")); // -apple-
console.log(nomearEntidade(169)); // "&#169; (o simbolo de copyright em HTML)

/**
 *      A técnica de encapsular uma função em outra função para bloquear 
 *      um ou mais valores de argumento é chamada de aplicação parcial 
 *      (porque as novas funções aplicam parcialmente os valores de 
 *      argumento à função original). Claro, a desvantagem é que as 
 *      funções extras que você cria também podem desorganizar seu 
 *      código, então não crie encapsulamentos que você não pretende usar 
 *      e reutilizar.
*/

// Avançado: Uma Fábrica de Funções Parciais

/**
 *      Você pode reduzir a redundância dessa abordagem ainda mais 
 *      criando uma função que pode parcializar qualquer outra função. Na 
 *      verdade, essa abordagem é um padrão de design JavaScript bastante 
 *      comum. No passado, você precisava confiar nos objetos argument 
 *      JavaScript  e manipulação de array. No JavaScript moderno, os 
 *      operadores rest e spread tornam o trabalho muito mais simples. Na 
 *      implementação mostrada aqui, a função de parcialização é chamada 
 *      parcial(). Ela é capaz de reduzir qualquer número de argumentos 
 *      para qualquer função.
*/
function parcial(fn, ...argsParaAplicar) {
    return function (...restArgsParaAplicar) {
        return fn(...argsParaAplicar, ...restArgsParaAplicar);
    }
}

/**
 *      Aqui, a função parcial() é usada para criar uma nova função 
 *      cuboDe() que envolve a função elevarParaPotencia() mais geral. 
 *      Em outras palavras, cuboDe() usa aplicação parcial para bloquear 
 *      um dos argumentos elevarParaPotencia() (o expoente, que ele 
 *      define como 3).
*/

// A função que você quer paralizar
function elevarParaPotencia(expoente, numero) {
    return numero**expoente;
}

// Usando parcial, faz a função customizada
const cuboDe = parcial(elevarParaPotencia, 3);

// Calcula o cubo de 9 (9**3);
console.log(cuboDe(9)); // 729

/**
 *      Agora, quando você chama cuboDe(9), a chamada é mapeada para 
 *      elevarParaPotencia(3, 9).
 * 
 *      Então como funciona? A função parcial() aceita dois argumentos. O 
 *      primeiro é a função que você quer parcializar (fn). O segundo é 
 *      uma lista de todos os argumentos que você quer bloquear no lugar  
 *      argsParaAplicar), que é capturada em um array usando o operador 
 *      rest (...).
 *          function parcial(fn, ...argsParaAplicar)
 * 
 *      Agora as coisas ficam interessantes. A função parcial retorna uma 
 *      função interna aninhada. A função interna aninhada aceita todos 
 *      os argumentos que não estão travados no lugar. Mais uma vez, 
 *      esses argumentos são capturados em um array usando o operador 
 *      rest (...restArgsParaAplicar):
 * 
 *          // Isso retorna uma nova função anônima
 *          return function(...restArgsParaAplicar)
 * 
 *      Esta função recém-criada agora tem três informações principais: a 
 *      função subjacente (fn), os argumentos que são bloqueados no lugar 
 *      (argsParaAplicar) e os argumentos que são definidos cada vez que 
 *      a função é chamada (restArgsParaAplicar).
 * 
 *      Há apenas uma linha de código dentro desta função, mas ela contém 
 *      muita coisa. Ela expande os dois arrays em listas de argumentos 
 *      usando o operador spread (que, de forma um tanto confusa, parece 
 *      exatamente com o operador rest). Em outras palavras, 
 *      argsParaAplicar se torna uma lista ou argumentos seguidos por 
 *      restArgsParaAplicar:
 * 
 *          // Isso chama a função envolvida
 *          return fn(...argsParaAplicar, ...restArgsParaAplicar);
 * 
 *      Uma prática comum em programação funcional é escrever funções de 
 *      ordem superior (funções que operam em outras funções). A função 
 *      parcial() é uma função de nível superior que cria um wrapper para 
 *      outra função.
 * 
 *      Há uma limitação para esta implementação da função parcial(). 
 *      Como ela coloca argumentos fixos primeiro, você não pode bloquear 
 *      um argumento posterior sem bloquear todos os argumentos que 
 *      ocorrem primeiro. Se você quisesse usar parcial() para fazer um 
 *      wrapper para a função fazerString(), você precisa reorganizar 
 *      seus argumentos primeiro:
*/
function fazerString(prefixo, sufixo, string) {
    return prefixo + string + sufixo;
}

const entidadeNomeada2 = parcial(fazerString, "&#", ";");

console.log(entidadeNomeada2(169)); // &#169;

// Extra: Usando bind() para fornecer argumentos parcialmente

/**
 *      Você também pode criar aplicativos parciais com o método 
 *      Function.bind(). O método bind() retorna uma nova função, 
 *      definindo this para o que for fornecido como um primeiro 
 *      argumento. Todos os outros argumentos são prefixados à lista de 
 *      argumentos para a nova função.
 * 
 *      Em vez de ter que usar parcial() para criar a função de entidade 
 *      nomeada, agora podemos usar bind() para fornecer a mesma 
 *      funcionalidade, passando undefined como o primeiro argumento:
*/
const nomeado = fazerString.bind(undefined, "&#", ";");

console.log(nomeado(1690)); // &#169;
