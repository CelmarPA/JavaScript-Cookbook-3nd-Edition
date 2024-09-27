// "use strict";

/**
 *      Você pode facilmente aplicar uma nova propriedade em um objeto. 
 *      Mas às vezes você precisa explicitamente personalizar sua 
 *      propriedade para ter mais controle sobre como ela é usada.
 * 
 *      Em vez de criar uma propriedade atribuindo a ela, use o método 
 *      Object.defineProperty() para defini-la. Por exemplo, considere o 
 *      seguinte objeto:
 *            const dado = {};
*/


/**
 *      Digamos que você queira adicionar as duas propriedades a seguir, 
 *      com as características fornecidas:
 *          tipo: Valor inicial definido e não pode ser alterado, não 
 *                pode ser excluído ou modificado, mas pode ser enumerado
 * 
 *          id: Valor inicial definido, mas pode ser alterado, não pode 
 *              ser excluído ou modificado e não pode ser enumerado
 * 
 *      Use o seguinte código JavaScript:
*/
const dado = {};

Object.defineProperty(dado, "tipo", {
    value: "primário",
    enumerable: true
});

// Tentativa de mudar a propriedade de apenas leitura
console.log(dado.tipo); // "primário"

dado.tipo = "secundário";
console.log(dado.tipo); // ainda "primário"

Object.defineProperty(dado, "id", {
    value: 1,
    writable: true
});

// Muda essa propriedade modificável
console.log(dado.id); // 1

dado.id = 300;
console.log(dado.id); // 300

// Veja quais propriedades aparecem durante a enumeração
for (const prop in dado) {
    console.log(prop); // Apenas exibe tipo
}

/**
 *      Neste exemplo, a tentativa de alterar a propriedade somente 
 *      leitura falha silenciosamente. Mais comumente, você estará no 
 *      "strict mode", seja porque seu código está em um módulo ou porque 
 *      você adicionou a diretiva 'use strict'; ao topo do seu arquivo 
 *      JavaScript. No "strict mode" o, tentar definir uma propriedade s
 *      omente leitura interrompe seu código com um TypeError.
 * 
 *      O defineProperty() é uma maneira de adicionar uma propriedade a 
 *      um objeto diferente da atribuição direta que lhe dá algum 
 *      controle sobre seu comportamento e estado. Mesmo que tudo o que 
 *      você faça com defineProperty() seja definir o nome e o valor da 
 *      propriedade, não é o mesmo que simplesmente definir a 
 *      propriedade. Isso ocorre porque as propriedades criadas com 
 *      defineProperty() são somente leitura e não enumeráveis ​​por 
 *      padrão.
 * 
 *      O método defineProperty() recebe três argumentos: o objeto no 
 *      qual você está definindo a propriedade, o nome da propriedade e 
 *      um objeto descritor que configura a propriedade. É aqui que as 
 *      coisas ficam um pouco mais interessantes. Na verdade, existem 
 *      dois tipos de descritores que você pode usar. O exemplo na 
 *      solução usa um descritor de dados, que tem quatro detalhes que 
 *      você pode definir:
 * 
 *          configurable: Controla se o descritor de propriedade pode ser 
 *                        alterado. É false por padrão.
 * 
 *          enumerable: Controla se a propriedade pode ser enumerada. É 
 *                      false por padrão.
 * 
 *          value: Define o valor inicial da propriedade.
 * 
 *          writable: Controla se o valor da propriedade pode ser 
 *                    alterado. É false por padrão.
 * 
 *      Em vez de usar um descritor de dados, você pode usar um descritor 
 *      de acesso, que suporta um conjunto ligeiramente diferente de 
 *      opções:
 * 
 *          configurable: O mesmo que para um descritor de dados.
 * 
 *          enumerable: O mesmo que para um descritor de dados.
 * 
 *          get: Define uma função a ser usada como uma propriedade 
 *               getter, que retorna o valor da propriedade.
 * 
 *          set: Define uma função a ser usada como uma propriedade 
 *               setter, que aplica o valor da propriedade.
 * 
 *      Aqui está um exemplo que usa defineProperty() com um descritor de 
 *      acessor:
*/
const pessoa = {
    nome: "Joe",
    sobrenome: "Khan",
    dataDeNascimento: new Date(1996, 6, 12)
};

Object.defineProperty(pessoa, "idade", {
    configurable: true,
    enumerable: true,
    get: function() {
        // Calcula a diferença em anos
        const hoje = new Date();
        let idade = hoje.getFullYear() - this.dataDeNascimento.getFullYear();

        // Ajuste se o aniversário ainda não aconteceu este ano
        const diferencaMes = hoje.getMonth() - this.dataDeNascimento.getMonth();
        
        if (diferencaMes < 0 || (diferencaMes === 0 && hoje.getDate() < this.dataDeNascimento.getDate())) {
            idade -= 1;
        }

        return idade;
    }
});

console.log(pessoa.idade);

/**
 *      Aqui defineProperty() cria uma propriedade computada (idade) que 
 *      realiza um cálculo usando uma propriedade diferente 
 *      (dataDeNascimento). (Você notará que pode se referir a outras 
 *      propriedades de instância em um setter ou getter usando this.) 
 *      Neste ponto, o design do objeto está se tornando um pouco 
 *      ambicioso demais para criação ad hoc com sintaxe de objeto 
 *      literal. Você se sairá melhor usando uma classe formal, que tem 
 *      uma maneira mais natural de expor o mesmo recurso getter e setter 
 *      de propriedade.
 * 
 *      Você pode usar defineProperty() para alterar uma propriedade 
 *      existente em vez de adicionar uma nova . Na verdade, a sintaxe é 
 *      exatamente a mesma — a única diferença é que o nome da propriedade
 *      que você especifica já existe no objeto. No entanto, há uma 
 *      restrição. Se a propriedade for definida como não configurável, 
 *      você obterá um TypeError ao chamar defineProperty() nela.
*/
