"use strict";

/**
 *      Você quer um forma clara e simples para realizar operações de 
 *      concatenação de strings longas.
 * 
 *      Uma tarefa comum em programação é a combinação de pedaços de 
 *      strings estáticas com variáveis para criar uma única string 
 *      longa. A forma tradicional é utilizando o operador de 
 *      concatenação "+", como mostrado a seguir:
*/
const detalhesEmpregado =  "Nosso time inclui " + primeiroNome + " " + sobreNome + " que trabalha no time de " + time + ". Ele tem sido um membro do time desde " + dataContrato + "!";

/**
 *      Uma abordagem diferente é usar templates literais, um tipo de 
 *      literal de string que permite expressões incorporadas. Para 
 *      criar um templates literais, basta substituir seus 
 *      delimitadores de string  padrão (apóstrofos ou aspas duplas) 
 *      pelo caractere crase (`):
*/
const cumprimento = `Olá mundo de um template literal`;

/**
 *      Agora você pode inserir suas variáveis ​​diretamente no seu 
 *      template literal. Tudo o que você precisa fazer é envolver 
 *      cada variável entre chaves, precedidas por um cifrão, como $
 *      {primeiroNome}. Isso é chamado de expressão.
 * 
 *      A vantagem da abordagem do template literal fica mais clara 
 *      quando você olha para um exemplo completo:
*/
const detalheEmpregado = `Nosso time inclui ${primeiroNome} ${sobreNome} que trabalha no time de ${time}. Ele tem sido um membro do time desde ${dataContrato}!`;

/**
 *      Quando você usa expressões em template literal, você não está 
 *      limitado a inserir variáveis como elas são. Na verdade, você 
 *      pode usar qualquer expressão de código que o JavaScript pode 
 *      avaliar. Por exemplo, considere este código:
*/
const calculo = `A soma de 5 + 3 é igual a ${5 + 3}`;

/**
 *      Se você quiser fazer algo mais complexo, como formatar strings 
 *      ou manipular objetos, você pode usar uma expressão que chama 
 *      uma função. Por exemplo, se você criou uma função getDiaDesde
 *      () para calcular a diferença entre datas, você pode usá-la em 
 *      um template literal como este:
*/
function getDiaDesde(data) {
    const hoje = new Date();
    const umDia = 24 * 60 * 60 * 1000; // horas * minutos * segundos * milisegundos
    return Math.round(Math.abs(hoje - data) / umDia);
}

detalheEmpregado = `Nosso time inclui ${primeiroNome} ${sobreNome} que trabalha no time de ${time}. Ele tem sido um membro do time desde ${dataContrato}! Isso são ${getDiaDesde(dataContrato)} dias`;
