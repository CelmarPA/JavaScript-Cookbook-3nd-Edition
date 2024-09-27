"use strict";

/**
 *      Extra: Nomes de Propriedades Calculados
 * 
 *      Como você sabe, você pode adicionar uma nova propriedade a 
 *      qualquer objeto JavaScript de duas maneiras. Você pode usar 
 *      sintaxe de ponto com nomes de propriedade:
*/
funcionario.idFuncionario = 402;

// Ou sintaxe chave-valor:
funcionario["idFuncionario"] = 402;

/**
 *      Essas duas abordagens não são equivalentes. Quando você usa a 
 *      sintaxe de chave-valor, o nome da propriedade é armazenado como 
 *      uma string, o que significa que você tem a oportunidade de gerar 
 *      o nome da propriedade em tempo de execução. Isso é chamado de 
 *      nome de propriedade computado e é importante em certos cenários 
 *      de extensibilidade. (Por exemplo, imagine se você estiver 
 *      buscando alguns dados externos e usando isso para criar um objeto 
 *      correspondente.)
*/
const propriedadeDinamica = "apelido";
const valorPropriedadeDinamica = "O Izz";

funcionario[propriedadeDinamica] = valorPropriedadeDinamica; // Agora funcionario.apelido = "O Izz"

const i = 10;
funcionario["sequencia" + i] = 1; // Agora funcionario.sequencia10 = 1

/**
 *      Nomes de propriedades computados são sempre convertidos em 
 *      strings. Eles suportam caracteres que não seriam permitidos em 
 *      nomes de variáveis ​​comuns, como espaços. Por exemplo, isso é  
 *      possível (embora seja uma péssima ideia):
*/
const funcionario = {};
const hoje = new Date();

funcionario[hoje] = 42;

// Isso revela que 42 está armazenado em uma propriedade que tem um nome de string longo como // "Fri Sep 27 2024 14:13:31 GMT-0300 (Horário Padrão de Brasília)"
console.log(funcionario);

/**
 *      A sintaxe de objeto literal  também permite que você crie 
 *      propriedades computadas. Mas como ela não usa um formato com 
 *      nomes de chaves de string, você precisa colocar cada nome de 
 *      propriedade computada entre colchetes. Veja como fica:
*/
const propDinamica = "apelido";
const valorPropDinamica = "O Izz";
const j = 10;

const funcionario = {
    idFuncionario: 402,
    nome: "Lisa",
    sobrenome: "Stanecki",
    [propDinamica]: valorPropDinamica,
    ["sequencia" + j]: 1
}
