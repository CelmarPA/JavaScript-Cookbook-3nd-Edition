"use strict";

/**
 *      Você quer criar um copia exata de um objeto personalizado.
 * 
 *      Use o operador spread (...) para descompactar seu objeto em uma 
 *      coleção de propriedades e coloque essa lista de propriedades 
 *      entre colchetes {} para construir um novo objeto:
*/
const animal =  {
    nome: "Raposa Vermelha", class: "Mammalia", order: "Carnivora",
    familia: "Caninos", genero: "Vulpes", especie: "Vulpes vulpes"
};

const copiaAnimal = {...animal};

console.log(copiaAnimal.especie); // "Vulpes vulpes"

/**
 *      Normalmente, você não quer copiar propriedades não enumeráveis, 
 *      então faz sentido que o operador spread as ignore. No entanto, 
 *      outras abordagens são possíveis. Objetos JavaScript têm built-in  
 *      especial, como o método Object.getOwnPropertyDescriptors(), que 
 *      permite que você encontre propriedades não enumeráveis.
 * 
 *      Você também pode ver uma abordagem de clonagem um pouco mais 
 *      antiga que usa o método Object.assign(). Isso é equivalente a 
 *      usar o operador spread:
*/
const novaCopiaAnimal = Object.assign({}, animal);

/**
 *      De qualquer forma, essas operações realizam uma cópia 
 *      superficial. Se seu objeto incluir arrays ou outros objetos como 
 *      propriedades, esses detalhes não serão copiados. Em vez disso, 
 *      eles serão compartilhados entre o objeto original e o novo 
 *      objeto. Aqui está uma demonstração do problema:
*/
const aluno = {
    nome: "Tazie",
    sobrenome: "Yang",
    pontosTestes: [78, 88, 94, 91, 88, 96]
}

const copiaAluno = {...aluno};

// Agora há dois objetos compartilhando o mesmo array pontosTestes
// Podemos ver isso se mudarmos alguns detalhes.
// Isso afeta apenas a cópia:
copiaAluno.nome = "Dori";
copiaAluno.pontosTestes[0] = 56;

console.log(aluno); // {nome: 'Tazie', sobrenome: 'Yang',    pontosTestes: [ 56, 88, 94, 91, 88, 96 ]}

console.log(copiaAluno); // {nome: 'Dori', sobrenome: 'Yang',    pontosTestes: [ 56, 88, 94, 91, 88, 96 ]}
