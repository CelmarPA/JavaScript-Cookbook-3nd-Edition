"use strict";

/**
 *      Você quer fazer algo com operações assíncronas, como ler o 
 *      conteúdo de um arquivo e anexá-lo a um novo arquivo. O Node 
 *      fornece essa funcionalidade usando funções de retorno de 
 *      chamada, mas para usá-lo de forma assíncrona, você acaba com 
 *      código aninhado (observado por recuos) que torna o aplicativo 
 *      ilegível e difícil de manter.
 * 
 *      Desde a versão 8.0 do Node, podemos usar a sintaxe async/await 
 *      junto com o utilitário promisfy:
*/
const fs = require ("fs");
const { promisify } = require("util");

const lerArquivo =  promisify(fs.readFile);
const anexarArquivo = promisify(fs.appendFile);

const lerAnexo = async (arquivoOriginal, arquivoSecundario) => {
    const arquivoDados = await lerArquivo(arquivoOriginal);
    await anexarArquivo(arquivoSecundario, arquivoDados);
    console.log(
        `Os dados de ${arquivoOriginal} foram anexados a ${arquivoSecundario}!`
    );
};

lerAnexo("./file/main.txt", "./file/secundario.txt");

/**
 *      O utilitário promisify integrado do Node é incrivelmente útil, 
 *      pois permite que qualquer função que siga o erro comum, 
 *      valores, estilo de callback, retorne uma promessa. No 
 *      Node 10+, operações do sistema de arquivos podem ser usadas 
 *      como promessas nativamente usando a API fs.promises:
*/
const fsp = require("fs").promises;

const lerAnexo1 = async (arquivoOriginal, arquivoSecundario) => {
    const arquivoDados = await fsp.readFile(arquivoOriginal);
    await fsp.appendFile(arquivoSecundario, arquivoDados);
    console.log(
        `Os dados de ${arquivoOriginal} foram anexados a ${arquivoSecundario}!`
    );
};

lerAnexo1("./file/main.txt", "./file/terceiro.txt");

/**
 *      Por design, o código do Node é assíncrono, ou não bloqueante, o 
 *      que significa que enquanto o código está esperando por uma 
 *      operação, ele pode fazer outra coisa. Muitas vezes, no entanto, 
 *      exigimos que essas operações aconteçam em uma ordem específica. 
 *      Tradicionalmente no Node, isso era realizado usando funções de 
 *      retorno de chamada (callback). Uma callback é uma função que é 
 *      chamada após a execução de uma tarefa. No exemplo a seguir, o 
 *      código lê um arquivo e então executa uma operação dentro da 
 *      função de callback:
*/
// fs.readFile(arquivo, (erro, dados) => {
//     if (erro) {
//         // Trata o erro
//     } else {
//         // Executa uma operação depois de ler o arquivo
//     }
// });

/**
 *      A sintaxe async/await permite que você escreva código 
 *      assíncrono de forma síncrona:
*/
const esperaUm = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Já faz um segundo");
            resolve();
        }, 1000);
    });
};

const chamarEspera = async () => {
    await esperaUm();
};

chamarEspera();

/**
 *      Ao trabalhar com uma função que segue o erro comum, valores, 
 *      estilo de retorno de chamada, podemos usar o utilitário 
 *      promisify integrado do Node para retornar uma promessa:
*/

const fs = require("fs");
const { promisify } = require("util");

const escreverArquivo = promisify(fs.writeFile);

/**
 *      Ao usar async/await, os erros são manipulados dentro de blocos 
 *      try/catch:
*/
try {
    await escreverArquivo(arquivo, buff);
} catch (erro) {
    console.log(erro);
    throw erro;
}

/**
 *      Como exemplo de como você pode refatorar o código existente, o 
 *      exemplo a seguir usa callbacks para escrever duas linhas em um 
 *      arquivo, lê-las novamente e enviar o conteúdo para o console:
*/
const callbackHell = arquivo => {
    const buff = Buffer.from("Callback hell primeira string\n");
    const buff2 = Buffer.from("Callback hell segunda string\n");

    // Escreve ou anexa os conteúdos do primeiro buffer
    fs.writeFile(arquivo, buff, erro => {
        if (erro) {
            console.log(erro);
            throw erro;
        }
        // Anexa os conteúdos do segundo buffer
        fs.appendFile(arquivo, buff2, erro2 => {
            if (erro2) {
                console.log(erro2);
                throw erro2;
            }
            // Regista os conteúdos dos arquivo
            fs.readFile(arquivo, "utf-8", (erro3, dados) => {
                if (erro3) {
                    console.log(erro3);
                    throw erro3;
                }
                console.log(dados);
            });
        });
    });
};

callbackHell("./file/callback.txt");

/**
 *      Esta é uma operação relativamente direta, mas observe quão 
 *      rápido o recuo aumenta para os callbacks aninhados. Podemos 
 *      limpá-lo usando async/await:
*/
const fs = require("fs");
const { promisify } = require("util");

const escreveArquivo = promisify(fs.writeFile);
const anexaArquivo = promisify(fs.appendFile);
const leArquivo =  promisify(fs.readFile);

const arquivoEscreverLer = async arquivo => {
    const buff = Buffer.from("A primeira string\n");
    const buff2 = Buffer.from("A segunda string\n");

    // Escreve ou anexa os conteúdos do primeiro buffer
    try {
        await escreveArquivo(arquivo, buff);
    } catch (erro) {
        console.log(erro);
        throw erro;
    }

    // Anexa os conteídos do segundo buffer
    try {
        await anexaArquivo(arquivo, buff2);
    } catch (erro) {
        console.log(erro);
        throw erro;
    }

    // Registra os conteúdos do arquivo
    console.log(await leArquivo(arquivo, "utf-8"));
};

arquivoEscreverLer("./file/async.txt");

/**
 *      Isso é muito mais fácil de entender sem sacrificar a execução 
 *      assíncrona do código. Em cada um dos exemplos, usei operações 
 *      do sistema de arquivos, mas a sintaxe async/await é 
 *      incrivelmente útil para uma ampla gama de casos de uso no Node, 
 *      incluindo interações de banco de dados, busca de recursos 
 *      remotos, strings de hash e muito mais.
*/
