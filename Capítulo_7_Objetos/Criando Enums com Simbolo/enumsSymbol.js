"use strict";

/**
 *      Você quer armazenar um pequeno grupo relacionado de constantes, 
 *      para que você possa se referir a elas pelo nome em seu código.
 * 
 *      Use o Symbol() para definir o valor de cada constante:
*/

// Cria três contantes para usar como enum
const LuzesTransito = {
    Verde: Symbol("verde"),
    Vermelho: Symbol("vermelho"),
    Amarelo: Symbol("amarelo")
}

// Esta função usa o enum claro
function trocarLuz(novaLuz) {
    if (novaLuz === LuzesTransito.Verde) {
        console.log("Ficando verde");
    } else if (novaLuz === LuzesTransito.Amarelo) {
        console.log("Prepare-se para parar");
    } else {
        console.log("Ficando vermelho");
    }
    return novaLuz;
}

let luz = LuzesTransito.Verde;

luz = trocarLuz(LuzesTransito.Amarelo);
luz = trocarLuz(LuzesTransito.Vermelho);

console.log(luz); // Symbol(vermelho);

/**
 *      Um enum (ou identificador enumerado) é um grupo de constantes 
 *      nomeadas. Enums são úteis sempre que você tem uma variável que só 
 *      pode ter um pequeno conjunto de valores permitidos. Ao usar os 
 *      valores enum, você torna seu código mais claro. Você também reduz 
 *      a chance de erros (em comparação ao uso de números mágicos), 
 *      porque você não vai esquecer o que cada número significa e você 
 *      não pode usar acidentalmente um número que não tenha uma 
 *      constante definida para ele.
 * 
 *      Há algum debate sobre a convenção adequada para capitalização de 
 *      constantes. A classe Math coloca propriedades somente leitura 
 *      como Math.PI e Math.E em letras maiúsculas. A solução neste 
 *      exemplo usa capitalização inicial para constantes enum e o objeto 
 *      que as envolve, como em TrafficLight.Red.
 * 
 *      Frequentemente, constantes são criadas com valores numéricos ou 
 *      valores de string. Essa é uma abordagem particularmente boa se a 
 *      constante mapeia para alguma outra informação útil, como os
 *      valores de conversão de unidade mostrados aqui:
*/
const Unidades = {
    Metros: 100,
    Centimetros: 1,
    Quilometros: 100000,
    Jardas: 91.44,
    Pes: 30.48,
    Milhas: 160934,
    Estádios: 20116.8,
    Elefantes: 625,
    Boeing747s: 7100
};

/**
 *      Se você não tem um valor único natural para usar para suas 
 *      constantes enum, considere usar um Symbol. Isso evita que você 
 *      precise escolher seus próprios números arbitrários, e a 
 *      exclusividade garantida de cada Symbol garante que você não pode 
 *      substituir nenhum outro valor. (Isso também remove a chance de 
 *      você usar acidentalmente um número codificado em alguns lugares e 
 *      uma variável const em outros lugares, o que pode levar a 
 *      inconsistências causadoras de bugs quando você faz alterações.)
 * 
 *      A desvantagem de usar Symbol é que o valor subjacente é 
 *      completamente opaco. É por isso que a solução neste exemplo dá a 
 *      cada Symbol um nome descritivo, como Symbol('vermelho'). Esse é o 
 *      texto que você verá quando registrar o Symbol no console ou 
 *      convertê-lo em uma string. Se você não fornecer um nome 
 *      descritivo ao criar seu Sym bol, verá apenas o texto genérico 
 *      "Symbol()".
*/
