"use strict";

/**
 *      Você deseja agrupar diversas variáveis ​​para criar um pacote de 
 *      dados básico.
 * 
 *      Use a sintaxe de objeto literal para criar uma nova instância do 
 *      tipo Object. Você não usa a palavra-chave new ou mesmo nomeia o 
 *      tipo Object. Em vez disso, você simplesmente escreve um conjunto 
 *      de chaves {} que envolve uma lista de propriedades separadas por 
 *      vírgulas. Cada propriedade consiste em um nome de propriedade, 
 *      seguido por dois pontos, seguido pelo valor da propriedade:
*/
const funcionario = {
    idFuncionario: 402,
    nome: "Lisa",
    sobrenome: "Stanecki",
    dataNascimento: new Date(1995, 8, 15)
};

console.log(funcionario.nome); // "Lisa"

/**
 *      Claro, você pode adicionar propriedades adicionais após criar o 
 *      objeto, como com qualquer objeto JavaScript:
*/
funcionario.funcao = "Gerente";

/**
 *      Essa técnica funciona mesmo se você tiver declarado seu objeto 
 *      com const, porque objetos literais são tipos de referência, não 
 *      valores (ao contrário de structs em outras linguagens). Adicionar 
 *      uma propriedade altera o objeto, mas não altera a referência. 
 *      (Por outro lado, atribuir a variável funcionario a um novo objeto 
 *      não seria permitido neste exemplo, porque essa operação alteraria 
 *      a referência.)
 * 
 *      A sintaxe de objeto literal fornece a maneira mais limpa e 
 *      compacta de criar rapidamente um objeto simples. No entanto, é 
 *      apenas um atalho para criar explicitamente uma nova instância de 
 *      Object e atribuir propriedades, como esta:
*/
const funcionario = new Object();
funcionario.idFuncionario = 402;
funcionario.nome = "Lisa";
funcionario.sobrenome = "Stanecki";
funcionario.dataNascimento = new Date(1995, 8, 15);

/**
 *      ou você pode usar a sintaxe chave-valor:
*/
const funcionario = new Object();
funcionario["idFuncionario"] = 402;
funcionario["nome"]= "Lisa";
funcionario["sobrenome"] = "Stanecki";
funcionario["dataNascimento"] = new Date(1995, 8, 15);

/**
 *      Um dos recursos mais interessantes da sintaxe de objeto literal  
 *      é a maneira como ela lida com objetos aninhados, como   
 *      localNascimento neste exemplo:
*/
const funcionario = {
    idFuncionario: 402,
    nome: "Lisa",
    sobrenome: "Stanecki",
    localNascimento: { pais: "Canada", cidade: "Toronto" }
};
console.log(funcionario.localNascimento.cidade); // "Toronto"

/**
 *      Aos olhos do JavaScript, um literal de objeto é uma instância do 
 *      tipo base Object. Essa simplicidade torna fácil criar um objeto a 
 *      partir de qualquer agrupamento ad hoc de dados, mas também tem um 
 *      custo, seu objeto não tem identidade significativa.
 */