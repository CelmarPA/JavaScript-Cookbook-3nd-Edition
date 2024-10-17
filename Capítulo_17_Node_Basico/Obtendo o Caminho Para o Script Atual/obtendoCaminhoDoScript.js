"use strict";

/**
 *      Seu aplicativo precisa ler o caminho do script que está sendo
 *      executado.
 * 
 *      Use as variáveis ​​__dirname ou __filename, que estão no escopo 
 *      do módulo executando-o:
*/

// Registra o diretório do arquivo atualmente em execução ex: /Users/XxX/Projects/js-cookbook/node
console.log(__dirname);

// Registra o diretório e o nome do arquivo atualmente em execução ex: /Users/XxX/Projects/js-cookbook/node/example.js
console.log(__filename);

/**
 *      As variáveis ​​__dirname ou __filename parecem estar no escopo 
 *      global, mas elas na verdade existem no escopo do próprio módulo. 
 *      Vamos supor que você tenha um projeto com a seguinte estrutura 
 *      de diretório:
 * 
 *          exemplo-app
 *          | index.js
 *          ├───dir1
 *          |   | exemplo.js
 *          |   └───dir3
 *          |       | nested.js
 * 
 *      Se você lesse o __dirname no arquivo index.js, ele seria o 
 *      caminho para o diretório raiz do projeto. No entanto, ler o 
 *      __dirname de um script no arquivo nested.js leria o caminho para 
 *      o diretório dir3. Isso permite que você leia o caminho de um 
 *      módulo conforme ele é executado, em vez de ficar limitado ao 
 *      próprio diretório pai.
 * 
 *      Um exemplo útil de __dirname em ação é ao criar um novo arquivo 
 *      ou diretório dentro do diretório atual. No exemplo a seguir, o 
 *      script cria um novo subdiretório chamado cache dentro do 
 *      diretório do arquivo atual:
*/
const fs = require("fs");
const path = require("path");
const novoCaminhoDiretorio = path.join(__dirname, "/cache");

fs.mkdirSync(novoCaminhoDiretorio);
