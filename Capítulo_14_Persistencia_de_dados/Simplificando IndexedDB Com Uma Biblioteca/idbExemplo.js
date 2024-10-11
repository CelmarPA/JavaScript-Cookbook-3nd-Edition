/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */

import { openDB, deleteDB } from "https://unpkg.com/idb?module";

(async () => {
    // Abre o banco de dados e cria o armazenamento de dados
    const database = await openDB("ReaderNames", 1, {
        upgrade(db) {
            // Crie um armazenamento de objetos
            const armazenamento = db.createObjectStore('reader', {
                keyPath: 'id',
                autoIncrement: true
                });

            // Cria novas chaves no objeto armazenamento
            armazenamento.createIndex("idade", "idade", { unique: false });
            armazenamento.createIndex("nome", "nome", { unique: true });
        }
    });

    async function definirDados() {
        const nome = document.getElementById("nome").value;
        const idade = document.getElementById("idade").value;
        console.log(nome, idade)
        try {
            document.querySelector("form").reset();
            await database.add("reader", {
                nome,
                idade
            });
        } catch (erro) {
            alert("Erro tente novamente!");
            return;
        }
    }

    async function obterDados() {
        // Obtém os dados do leitor do banco de dados 
        const leitores = await database.getAll("reader");

        const dadosExibicao =  document.getElementById("listaDados");
        dadosExibicao.innerHTML = "";
        // Adiciona o nome e a idade de cada leitor no banco de dados para a página
        leitores.forEach(leitor => {
            const valor = `${leitor.nome}: ${leitor.idade}`;
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(valor));
            dadosExibicao.appendChild(li);
        });
    }

    async function deletarDados() {
        // Delete o banco de dados
        try {
            const confirmar = confirm("Tem certeza de que deseja continuar?");
            if (confirmar) {
                alert("Banco de dados deletado com sucesso.");
                document.getElementById("listaDados").innerHTML = "";
                await deleteDB("ReaderNames");                
            } else {
                return;
            }
        } catch (erro) {
            console.log("Delete erro", erro);
        }
    }

    document.getElementById("definir").onclick = definirDados;
    document.getElementById("obter").onclick = obterDados;
    document.getElementById("deletar").onclick = deletarDados;
}) ();