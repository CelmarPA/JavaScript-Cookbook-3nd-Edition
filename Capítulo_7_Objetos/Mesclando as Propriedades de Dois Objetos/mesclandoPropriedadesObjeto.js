"use strict";

/**
 *      Você criou dois objetos simples com propriedades e deseja 
 *      combinar seus dados em um único objeto.
 * 
 *      Use o operador spread (...) para expandir ambos os objetos e 
 *      atribuí-los a um novo objeto:
*/
const endereco = {
    pais: "Austrália",
    cidade: "Sydney",
    numRua: "412",
    nomeRua: "Avenida Worcestire"
};

const cliente = {
    nome: "Lisa",
    sobrenome: "Stanecki"
};

const clienteComEndereco = {...cliente, ...endereco};

console.log(clienteComEndereco); // O clienteComEndereco agora tem todas as seis propriedades

/**
 *      Mesclar dois objetos é uma operação fácil, mas não sem problemas 
 *      potenciais. Se ambos os objetos tiverem propriedades com o mesmo 
 *      nome, as propriedades do segundo objeto (que é o endereco no 
 *      exemplo anterior) irão silenciosamente sobrescrever as 
 *      propriedades do primeiro objeto. Aqui está uma versão modificada 
 *      do exemplo que demonstra o problema:
*/
const endereco2 = {
    pais: "Austrália",
    cidade: "Sydney",
    numRua: "412",
    nomeRua: "Avenida Worcestire"
};

const cliente2 = {
    nome: "Lisa",
    sobrenome: "Stanecki",
    pais: "Corea do Sul"
};

const clienteComEndereco2 = {...cliente2, ...endereco2};

console.log(clienteComEndereco2.pais); // Mostra "Austrália"

/**
 *      Neste exemplo, há duas instâncias da propriedade pais. Quando os 
 *      dois objetos são mesclados, o objeto cliente2 é expandido 
 *      primeiro, seguido pelo objeto endereco2. Como resultado, a 
 *      propriedade endereco2.pais substitui a propriedade cliente2.pais.
*/
