"use strict";

/**
 *      Você quer criar uma entidade reutilizável, semelhante a uma 
 *      classe, no seu código. Você quer usar o construtor  padrão 
 *      tradicional porque ele corresponde ao seu código existente.
 * 
 *      O construtor padrão é um padrão um pouco datado, mas ainda 
 *      aceitável para criação de objetos. Mesmo se você planeja usar 
 *      classes formais, vale a pena conhecer o padrão construtor, porque 
 *      você provavelmente o encontrará por aí. Ele também pode ajudar a 
 *      entender como as classes JavaScript funcionam.
 * 
 *      Aqui está um dos exemplos de classe Pessoa, mas escrito como uma 
 *      função com o construtor padrão:
*/
function Pessoa(nome, sobrenome) {
    // Armazena dados públicos utilizando "this"
    this.nome = nome;
    this.sobrenome = sobrenome;

    // Adicione uma função aninhada para representar um método
    this.trocarNomes = function () {
        [this.nome, this.sobrenome] = [this.sobrenome, this.nome];
    }
}

// Cria um objeto Pessoa
const novaPessoa= new Pessoa("Luke", "Takei");

console.log(novaPessoa.nome); // "Luke"

novaPessoa.trocarNomes();

console.log(novaPessoa.nome); // "Takei"

/**
 *      Observe que o código para usar um objeto baseado em função é o 
 *      mesmo que o código para usar um baseado em classe com um 
 *      construtor idêntico. Como resultado, você pode geralmente migrar 
 *      código do padrão construtor para classes formais sem interromper 
 *      o resto do seu aplicativo.
 * 
 *      As classes chegaram relativamente tarde à linguagem JavaScript. 
 *      Antes de existirem, os desenvolvedores usavam funções em seu 
 *      lugar. Isso funciona porque o JavaScript permite que você crie 
 *      novas instâncias de uma função (objetos de função) usando a 
 *      palavra-chave new. Cada função obtém seu próprio escopo, com seus 
 *      próprios dados locais.
 * 
 *      O construtor padrão existe em diversas variantes. A abordagem 
 *      mais comum é criar uma função com o nome da sua “classe” e 
 *      aceitar todos os parâmetros construtores que você precisa para 
 *      criar uma instância. Dentro da sua função, você usa isso para 
 *      criar campos públicos. Você também pode criar variáveis ​​comuns, 
 *      que não serão visíveis para código externo, e são utilizáveis ​​
 *      apenas pelo construtor e quaisquer funções aninhadas.
 * 
 *      Então como você adiciona uma função a um protótipo? Você pode 
 *      fazer isso diretamente, usando a propriedade prototype:
*/
function Pessoa2(nome,  sobrenome) {
    this.nome =  nome;
    this.sobrenome = sobrenome;
}

// Adicione uma função ao protótipo de Pessoa para representar um método
Pessoa2.prototype.trocarNomes = function () {
    [this.nome, this.sobrenome] = [this.sobrenome, this.nome];
}

const pessoaNova = new Pessoa2("Luke", "Takei");

pessoaNova.trocarNomes();

console.log(pessoaNova.nome); // "Takei"

/**
 *      Usando protótipos, você pode alterar o comportamento de objetos 
 *      JavaScript incorporados. Por exemplo, você pode adicionar 
 *      funcionalidade aos tipos Array ou String base. Isso parece um 
 *      recurso bacana, mas é cheio de complicações e é fortemente 
 *      desencorajado (exceto talvez para construir frameworks). Desfocar 
 *      a distinção entre código padrão e personalizado convida à 
 *      confusão e cria a possibilidade de padrões não padronizados, 
 *      código mal otimizado e erros ocultos. Também pode falhar 
 *      completamente se mais de uma pessoa tentar estender um objeto 
 *      integrado com o mesmo nome.
 * 
 *      É interessante comparar o padrão construtor com a palavra-chave 
 *      class. A maior parte do código é exatamente o mesmo em ambos os 
 *      exemplos:
 * 
 *          • Você escreve uma função construtora que aceita parâmetros 
 *            e inicializa seu objeto.
 *          • Use a palavra-chave this para criar campos acessíveis 
 *            publicamente.
 *          • Você usa a palavra-chave new ao criar o objeto (só que 
 *            agora é tecnicamente uma instância de uma função, não uma 
 *            classe).
 * 
 *      Mas também há algumas diferenças sutis, mais obviamente na 
 *      sintaxe. No padrão construtor não há propriedades dedicadas, e os 
 *      métodos são declarados separadamente, não aninhados no construtor 
 *      ou explicitamente anexados ao protótipo do construtor (embora 
 *      seja exatamente isso que acontece em tempo de execução).
*/
