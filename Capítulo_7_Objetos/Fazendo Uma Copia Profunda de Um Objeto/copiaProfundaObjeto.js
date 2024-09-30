"use strict";

/**
 *      Você quer criar uma cópia exata de um objeto personalizado. Você
 *      quer copiar não apenas o objeto de nível superior, mas também
 *      todos os objetos que ele referencia.
 *
 *      Não há uma solução única para cópia profunda de um objeto. Em vez
 *      disso, há uma variedade de técnicas que os desenvolvedores usam,
 *      cada uma com suas próprias compensações.
 *
 *      A abordagem mais segura é escrever sua própria lógica de clonagem
 *      que seja específica para o tipo de objeto que você deseja clonar.
 *      Aqui está um exemplo que faz uma cópia profunda do objeto
 *      aluno.
 */
const aluno = {
    nome: "Tazie",
    sobrenome: "Yang",
    pontosTestes: [78, 88, 94, 91, 88, 96],
};

function clonaAluno(aluno) {
    // Começa com um copia superficial
    const copiaAluno = { ...aluno };

    // Agora suplica o array (pela expansão com o operador spread)
    copiaAluno.pontosTestes = [...copiaAluno.pontosTestes];

    return copiaAluno;
}

// Cria um verdadeira copia independente de aluno
const copiaAluno = clonaAluno(aluno);

// Verifique se os arrays estão separadas
copiaAluno.pontosTestes[0] = 56;

console.log(aluno.pontosTestes[0]); // 78
console.log(copiaAluno.pontosTestes[0]); // 56

/**
 *      A beleza dessa abordagem é que você conhece o objeto, então você
 *      sabe o quão fundo você deve ir. Neste exemplo, sabemos que o
 *      array pontosTestes contém números. Portanto, você sabe que a
 *      clonagem simples com o operador spread é boa o suficiente para
 *      duplicá-lo. Mas se o array contivesse objetos, você precisaria
 *      decidir se duplicaria todos esses objetos. Ou, se pontosTestes
 *      fosse algum outro tipo de objeto de coleção (como um Set ou Map),
 *      você poderia criar e preencher adequadamente uma nova coleção do
 *      tipo correspondente.
 *
 *      Houve discussão sobre serialização interna e suporte a cópia
 *      profunda em versões futuras do JavaScript. Mas agora, a clonagem
 *      profunda é uma lacuna que você precisará corrigir você mesmo.
 *
 *      Se você estiver criando uma classe completa, considere tornar sua
 *      função de clonagem personalizada em um método da própria classe:
*/
class Aluno {
    constructor(nome, sobrenome, pontosTestes) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.pontosTestes = pontosTestes;
    }

    clonar() {
        return new Aluno(this.nome, this.sobrenome, [...this.pontosTestes]);
    }
}

const novoAluno = new Aluno("Tazie", "Yang", [78, 88, 94, 91, 88, 96]);
const novaCopiaAluno = novoAluno.clonar();

// Verifique se os arrays estão separadas
novaCopiaAluno.pontosTestes[0] = 56;

console.log(novoAluno.pontosTestes[0]); // 78
console.log(novaCopiaAluno.pontosTestes[0]); // 56

/**
 *      Este exemplo não usa o operador spread. Em vez disso, ele cria um 
 *      novo objeto Aluno usando o construtor. Se você usar o operador 
 *      spread, sua cópia será uma instância da classe Object base, não 
 *      uma instância de Aluno. Sua cópia ainda terá as mesmas 
 *      propriedades que o original, mas não parecerá ser um Aluno se 
 *      você testá-lo com instanceof. Ele também não poderá usar nenhum 
 *      método que você adicionar à classe Aluno. Para evitar esses 
 *      problemas, você deve sempre criar o tipo de objeto correto para
 *      suas cópias.
*/
