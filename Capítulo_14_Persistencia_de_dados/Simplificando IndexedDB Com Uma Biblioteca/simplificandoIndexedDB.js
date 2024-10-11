"use strict";

/**
 *      Você gostaria de trabalhar com IndexedDB asincronamente, usando 
 *      promessas JavaScript.
 * 
 *      Use a biblioteca IDB, que oferece melhorias de usabilidade para 
 *      a API IndexedDB, bem como um wrapper para usar promessas. O 
 *      código a seguir importa a biblioteca IDB, cria um armazenamento 
 *      de dados IndexedDB e adiciona dados a ele: 
*/
import { openDB, deleteDB } from 'https://unpkg.com/idb?module';

const dados = [
    { nome: 'Riley Harrison', idade: 57, experiencia: 1 },
    { nome: 'Harlow Everly', idade: 29, experiencia: 5 },
    { nome: 'Abigail McCullough', idade: 38, experiencia: 10 }
    ];

(async () => {
    // Para fins de demonstração, exclua o banco de dados existente no carregamento da página
    try {
        await deleteDB("CoobBookIDB");
    } catch (erro) {
        console.log("Erro delete", erro);
    }

    // Abre o banco de dados e crie o armazenamento de dados
    const database = await openDB("CookbookIDB", 1, {
        upgrade(db) {
            // Cria armazenamento de objetos
            const armazenamento = db.createObjectStore("reader", {
                keyPath: "id",
                autoIncrement: true
            });

            // Cria novas chaves no armazenamento de objetos
            armazenamento.createIndex("experiencia", "experiencia", { unique: false });
            armazenamento.createIndex("nome", "nome", { unique: true });
        }
    });

    // Adiciona todos os dados do leitor ao armazenamento
    dados.forEach(async valor => {
        await database.add("reader", value);
    });
})();

/**
 *      O IDB se autointitula como “uma pequena biblioteca que espelha 
 *      principalmente a API do IndexedDB, mas com pequenas melhorias 
 *      que fazem uma grande diferença na usabilidade”. Usar o IDB 
 *      simplifica parte da sintaxe do IndexedDB, além de habilitar o 
 *      suporte para execução assíncrona de código com promessas.
 *      
 *      No exemplo a seguir, um usuário pode adicionar dados ao banco 
 *      de dados e recuperar todos os dados a serem exibidos na página.
*/
