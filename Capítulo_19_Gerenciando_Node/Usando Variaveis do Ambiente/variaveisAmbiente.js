"use strict";

/**
 *      Seu aplicativo Node requer valores diferentes em ambientes 
 *      diferentes, como em sua máquina local e em produção.
 * 
 *      Use variáveis ​​de ambiente para definir e ler valores em 
 *      diferentes ambientes. O processo do módulo Node principal 
 *      contém uma propriedade env, que fornecerá ao seu aplicativo
 *      acesso a quaisquer variáveis ​​de ambiente. No exemplo a 
 *      seguir, estou lendo uma variável de ambiente chamada NODE_ENV:
*/
process.env.NODE_ENV;

/**
 *      Para definir uma variável de ambiente, você pode especificar um 
 *      valor antes de executar o comando node para iniciar o 
 *      aplicativo. O seguinte definirá o valor NODE_ENV para 
 *      development e executará o script index.js:
 *      
 *          $ NODE_ENV=development node index.js
 * 
 *      Ao trabalhar com projetos com múltiplas variáveis ​​de 
 *      ambiente, é tipicamente preferível armazenar esses valores 
 *      localmente em um arquivo .env. Fazer isso no Node requer o
 *      pacote dotenv, que pode ser instalado a partir do npm:
 * 
 *          $ npm install dotenv --save
 * 
 *      Agora, no código do seu aplicativo, solicite o módulo e inicie 
 *      sua configuração:
*/
require("dotenv").config();

/**
 *      Com este módulo, variáveis ​​de ambiente podem ser lidas de um 
 *      arquivo .env, em vez deserem passadas como argumentos para a 
 *      linha de comando. O arquivo .env pode consistir em um número
 *      de valores de variáveis ​​de ambiente:
 * 
 *          PORT=8080
 *          DB_URI=mongodb://mongodb0.example.com:27017
 *          KEY=12345
*/

/**
 *      Ao ler uma variável de ambiente, geralmente é útil usar um 
 *      operador || para especificar um valor padrão como ressalva para 
 *      quando um valor não é fornecido no ambiente. O exemplo a seguir 
 *      definirá a variável de porta para um valor especificado por uma 
 *      variável de ambiente PORT, ou 8080 se nenhum valor de variável 
 *      de ambiente for fornecido:
*/
const port = process.env.PORT || 8080;

/**
 *      O pacote dotenv é um módulo npm que permite que você carregue 
 *      variáveis ​​de ambiente de um arquivo .env. O uso é tão simples 
 *      quanto instalar o pacote, combinar a declaração require e 
 *      iniciar a configuração:
*/
require("dotenv").config();

/**
 *      Uma vez iniciado e configurado, o módulo lerá automaticamente 
 *      os valores de um arquivo chamado .env na raiz do diretório do 
 *      projeto. Também é possível configurar o pacote para ler o 
 *      arquivo de um local alternativo:
*/
require("dotenv").config({ path: "/alternativo/arquivo/path/.env" });

/**
 *      Se você escolher usar módulos ECMAScript com seu projeto Node, 
 *      primeiro importe o pacote como módulo e então inicie a 
 *      configuração separadamente:
*/
import dotenv from "dotenv"

dotenv.config()

/** 
 *      Ao trabalhar em um ambiente de produção, é comum que o host 
 *      defina as variáveis ​​de ambiente. Nesse caso, você não vai 
 *      querer carregar os valores de um arquivo .env. Um padrão útil é 
 *      carregar apenas o módulo dotenv em ambientes de não produção:
*/
if (process.env.NODE_ENV !== "producao") {
    require("dotenv").config;
}

/**
 *      Nunca faça commit do arquivo .env e certifique-se de 
 *      adicioná-lo à sua lista de ignorados de controle de versão. 
 *      Esses arquivos são frequentemente usados ​​para armazenar 
 *      informações de ambiente seguro, como senhas ou chaves que não 
 *      devem ser compartilhadas. Uma prática recomendada é incluir um 
 *      arquivo chamado .env.example, que contém valores em branco ou 
 *      fictícios.
*/
