"use strict";

/**
 *      Você precisa de um armazenamento de dados mais sofisticado no
 *      cliente do que o fornecido com outros métodos de armazenamento
 *      persistente, como localStorage.
 *
 *      Em navegadores modernos, use IndexedDB. O arquivo JavaScript do
 *      exemplo a seguir usa IndexedDB para criar um banco de dados e
 *      um objeto de dados. Uma vez criado, ele adiciona dados e então
 *      recupera o primeiro objeto.
 */
const dados = [
    { nome: "Joe Brown", idade: 53, experiencia: 5 },
    { nome: "Cindy Johnson", idade: 44, experiencia: 5 },
    { nome: "Algum Leitor", idade: 30, experiencia: 3 },
];

// Exclue o banco de dados 'Cookbook', para que o exemplo possa ser executado mais de uma vez
const delReq = indexedDB.deleteDatabase("Cookbook");
delReq.onerror = (evento) => {
    console.log("Delete erro", evento);
};

// Abre o banco de dados 'Cookbook' com uma versão de '1' ou crie-o se ele não existir
const requisicao = indexedDB.open("Cookbook", 1);

// o evento upgradeneeded é disparado quando um banco de dados é aberto com um número de versão maior que a versão armazenada atualmente (neste caso, nenhuma)
requisicao.onupgradeneeded = (evento) => {
    const db = evento.target.result;
    const { transaction } = evento.target;

    // Cria um novo armazenamento de objetos chamado 'reader' no banco de dados
    const objetoArmazenamento = db.createObjectStore("reader", {
        keyPath: "id",
        autoIncrement: true,
    });

    // Cria novas chaves no armazenamento de objetos
    objetoArmazenamento.createIndex("experiencia", "experiencia", {
        unique: false,
    });
    objetoArmazenamento.createIndex("nome", "nome", { unique: true });

    // Quando todos os dados forem carregados, registrar no console
    transaction.oncomplete = () => {
        console.log("Dados carregados");
    };

    const objetoLeitorArmazenamento = transaction.objectStore("reader");

    // Adiciona cada valor do objeto de dados ao banco de dados indexedDB
    dados.forEach((valor) => {
        const req = objetoLeitorArmazenamento.add(valor);
        // console.log a mensagem quando adicionado com sucesso
        req.onsuccess = () => {
            console.log("Dados adicionados");
        };
    });

    // Se a solicitação gerar um erro, registre-o no console
    requisicao.onerror = () => {
        console.log(evento.target.errorCode);
    };

    // Quando o armazenamento de dados for criado com sucesso, faça registro no console
    requisicao.onsuccess = () => {
        console.log("Armazenamento criado");
    };

    // Ao clicar na página, obtenha um valor aleatório do banco de dados e registre-o no console
    document.onclick = () => {
        const numAleatorio = Math.floor(Math.random() * 3) + 1;
        const dadosRequesitados = db
            .transaction(["reader"])
            .objectStore("reader")
            .get(numAleatorio);

        dadosRequesitados.onsuccess = () => {
            console.log(
                `Nome: ${dadosRequesitados.result.nome}, Idade: ${dadosRequesitados.result.idade}`
            );
        };
    };
};
