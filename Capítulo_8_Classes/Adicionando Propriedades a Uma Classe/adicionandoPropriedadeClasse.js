"use strict";

/**
 *      Você deseja adicionar propriedades getters e setters para 
 *      encapsular seus dados de classe.
 * 
 *      Primeiro, considere se as propriedades são a melhor solução para 
 *      seu caso de uso. (Elas têm limitações bem conhecidas e são um 
 *      pouco controversas.) Se você decidir usar propriedades, você pode 
 *      criar métodos get e set para cada uma. Aqui está um exemplo com 
 *      uma propriedade computada, chamada idade, que é calculada a 
 *      partir da data armazenada em this.dataNascimento:
*/
class Pessoa {
    constructor(nome, sobrenome, dataNascimento) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.dataNascimento = dataNascimento;
    }

    // Esse é um getter para propriedade idade
    get idade() {
        if (this.dataNascimento instanceof Date) {
            // Calcula a diferença em anos
            const hoje = new Date();
            let idade = hoje.getFullYear() - this.dataNascimento.getFullYear();

            // Ajusta se o aniversário ainda não aconteceu esse ano
            const diferencaMes = hoje.getMonth() - this.dataNascimento.getMonth();
            if (diferencaMes < 0 || diferencaMes === 0 && hoje.getDate() < this.dataNascimento.getDate()) {
                idade -= 1;
            }

            return idade;
        }
    }
}

// Testa a classe Pessoa
const novaPessoa = new Pessoa("Luke", "Takei", new Date(1990, 5, 22));

console.log(novaPessoa.idade); 

/**
 *      Depende de você incluir apenas um getter, apenas um setter ou 
 *      ambos. Aqui está um exemplo que usa o padrão de propriedade para 
 *      aplicar validação básica à data de nascimento:
*/
class Pessoa2 {
    constructor(nome, sobrenome, data) {
        this.nome = nome;
        this.sobrenome = sobrenome;

        // Defina a data usando o setter de propriedade para que uma Pessoa não possa ser criada em um estado inválido
        this.dataNascimento = data;
    }

    // Apenas retorne a data sem processamento extra
    get dataNascimento() {
        return this._dataNascimento;
    }

    // Não permitir datas no futuro
    set dataNascimento(valor) {
        if (valor instanceof Date && valor < Date.now()) {
            // Está é uma data válida
            this._dataNascimento = valor;
        } else {
            throw new TypeError("Data de nascimento precisa ser uma data válida no passado");
        }
    }
}

// Testa as restriçoes de datas
const pessoaNova = new Pessoa2("Luke", "Takei", new Date(1990, 5, 22));
console.log(pessoaNova.dataNascimento); // 1990-06-22T03:00:00.000Z

// Essa mudança é permitida
pessoaNova.dataNascimento = new Date(2010, 10, 10);
console.log(pessoaNova.dataNascimento); // 2010-11-10T02:00:00.000Z

// Essa mudança causa um erro
pessoaNova.dataNascimento = new Date(2035, 10, 10);

/**
 *      Há muitas razões pelas quais você pode considerar criar 
 *      procedimentos de propriedade. Alguns exemplos incluem:
 * 
 *          • Para calcular um valor (como Pessoa.idade)
 *          • Para transformar um campo em outra representação
 *          • Para executar a validação antes de atualizar um campo]
 *          • Para adicionar ganchos para algum outro serviço (como 
 *            registro ou teste) que deve acontecer toda vez que um campo 
 *            é lido ou definido
 *          • Para usar algum tipo de inicialização preguiçosa, que só 
 *            cria ou calcula um valor de propriedade quando necessário
 *          • Para expor uma única propriedade de um objeto que está
 *            armazenado em um campo
 * 
 *      Ao usar propriedades, você deve ter cuidado para evitar colisões 
 *      de nomes. O campo que armazena o valor não pode ter o mesmo nome 
 *      que a propriedade ou o parâmetro do construtor. Para entender o 
 *      porquê, vamos olhar mais de perto no exemplo dataNascimento.
 *      O construtor aceita um parâmetro de data, que ele define assim:
 *          this.dataNascimento = data;
 * 
 *      À primeira vista, você pode assumir que esta declaração armazena 
 *      a data em um campo público chamado this.dataNascimento (que é o 
 *      padrão usual). Mas neste caso, this.dataNascimento se refere à 
 *      propriedade dataNascimento. Seu setter assume:
 * 
 *          set dataNascimento(valor) {
 *              if (valor instanceof Date && valor < Date.now()) {
 *              // Está é uma data válida
 *              this._dataNascimento = valor;
 *          } else {
 *              throw new TypeError("Data de nascimento precisa ser uma 
 *              data válida no passado");
 *          }
 *      }
 * 
 *      Se o novo valor passar no teste, ele será armazenado em um campo 
 *      público chamado this._dataNascimento. A nomenclatura estranha é  
 *      necessária, porque tanto this.dataNascimento (a propriedade) 
 *      quanto this._dataNascimento (o campo) têm o mesmo escopo. Se você 
 *      usar o mesmo nome para ambos, acabará chamando o errado (e 
 *      disparando uma sequência infinita de chamadas que eventualmente 
 *      transbordarão a pilha).
 * 
 *      O sublinhado inicial em um nome de variável como _dataNascimento 
 *      tem outro propósito. Atualmente, o JavaScript não tem nenhuma 
 *      maneira de criar campos privados. Mas o sublinhado sinaliza que 
 *      um campo deve ser privado para a classe. Então, você confia que o 
 *      código de chamada evitará usar este campo. Se você não seguir 
 *      esta convenção, você está quase certo de encontrar um problema 
 *      onde o código de chamada acidentalmente usa o campo em vez da 
 *      propriedade. E mesmo se você observar este padrão, não há 
 *      garantia de que o código de chamada o seguirá.
 * 
 *      Muitos desenvolvedores de JavaScript argumentam que um padrão 
 *      mais natural em JavaScript é usar os métodos setXxx() e getXxx():
*/
class Pessoa3 {
    constructor(nome, sobrenome, data) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.setDataNascimento(data);
    }

    getDataNascimento() {
        return this._dataNascimento;
    }

    setDataNascimento(valor) {
        if (valor instanceof Date && valor < Date.now()) {
            // Essa é uma data válida
            this._dataNascimento = valor;
        } else {
            throw new TypeError("Data de nascimento precisa ser uma data válida no passado");
        }
    }
}

const novaPessoa3 = new Pessoa3('Luke', 'Takei', new Date(1990, 5, 22)); // 5 representa junho
console.log(novaPessoa3.getDataNascimento()); // 1990-06-22T03:00:00.000Z

// Essa mudança é permitida
novaPessoa3.setDataNascimento(new Date(2010, 10, 10));
console.log(novaPessoa3.getDataNascimento()); // 2010-11-10T02:00:00.000Z

// Essa mudaça causa um erro
novaPessoa3.setDataNascimento(new Date(2035, 10, 10));

/**
 *      Essa abordagem é um pouco mais trabalhosa, mas tem algumas 
 *      vantagens. Ela torna óbvio que você está chamando um método e 
 *      executando código, não simplesmente definindo uma variável. Como 
 *      resultado, o código de chamada pode esperar exceções de 
 *      verificação de tipo ou outros efeitos colaterais. Os métodos 
 *      também previnem problemas como este:
 * 
 *      Esta não é a propriedade que você quer (é dataNascimento), mas o 
 *      JavaScript a cria de qualquer maneira, e você não notará o erro
 *          person.DataNascimento = new Date(2035, 10, 10);
 *      Você não pode chamar uma função que não existe, então esse erro 
 *      de digitação
*/
