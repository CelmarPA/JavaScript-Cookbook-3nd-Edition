"use strict";

/**
 *      Você criou um módulo Node do zero ou converteu uma biblioteca 
 *      existente para uma que funcione no navegador ou no Node. Agora, 
 *      você quer saber como modificá-la em um módulo que pode ser 
 *      instalado usando npm.
 * 
 *      Depois de criar seu módulo Node e qualquer funcionalidade de 
 *      suporte (incluindo testes de módulo), você pode empacotar o 
 *      diretório inteiro. A chave para empacotar e publicar o módulo 
 *      Node é criar um arquivo package.json que descreve o módulo, 
 *      quaisquer dependências, a estrutura do diretório, o que ignorar 
 *      e assim por diante. Você pode gerar um arquivo package.json 
 *      executando o comando npm init na raiz do diretório do projeto e 
 *      seguindo os prompts.
 * 
 *      O seguinte é um arquivo package.json relativamente básico:
*/

/*

{
    "name": "bbArray",
    "version": "0.1.0",
    "description": "A description of what my module is about",
    "main": "./lib/bbArray",
    "author": {
    "name": "Shelley Powers"
    },
    "keywords": [
        "array",
        "utility"
    ],
    "repository": {
        "type": "git",
        "url": "https://github.com/accountname/bbarray.git"
    },
    "engines" : {
        "node" : ">=0.10.0"
    },
    "bugs": {
        "url": "https://github.com/accountname/bbarray/issues"
    },
    "licenses": [
        {
            "type": "MIT",
            "url": "https://github.com/accountname/bbarray/raw/master/LICENSE"
        }
    ],
    "dependencies": {
        "some-module": "~0.1.0"
    },
    "directories":{
        "doc":"./doc",
        "man":"./man",
        "lib":"./lib",
        "bin":"./bin"
    },
    "scripts": {
        "test": "nodeunit test/test-bbarray.js"
    }
}

*/

/**
 *      Depois de criar o package.json, empacote todos os diretórios de 
 *      origem e o arquivo package.json como um tarball compactado com 
 *      gzip. Em seguida, instale o pacote localmente ou instale-o no 
 *      npm para acesso público.
 * 
 *      O arquivo package.json é essencial para empacotar um módulo 
 *      Node para instalação local ou carregar no npm para 
 *      gerenciamento. No mínimo, ele requer um nome e uma versão.
 *      Os outros campos fornecidos na solução são:
 * 
 *          description: Uma descrição do que o módulo é e faz
 * 
 *          main: Arquivo de entrada para o módulo
 * 
 *          author: Autor(es) do módulo
 * 
 *          keywords: Lista de palavras-chave que podem ajudar outros a 
 *                    encontrar o módulo
 *          
 *          repository: Local onde o código reside, normalmente GitHub
 *      
 *          engines: Versões de nó com as quais você sabe que seu 
 *                   módulo funciona
 * 
 *          bugs: Onde registrar bugs
 * 
 *          licenses: Licença para seu módulo
 * 
 *          dependencies: Uma lista de dependências exigidas pelo módulo
 *          
 *          directories: Um hash descrevendo a estrutura de diretórios 
 *                       para seu módulo
 * 
 *          scripts: Um hash de comandos de objeto que são executados 
 *                   durante o ciclo de vida do módulo
 * 
 *      Há uma série de outras opções descritas no site do npm. Você 
 *      também pode usar uma ferramenta para ajudar a preencher muitos 
 *      desses campos. Digitar o seguinte na linha de comando executa a 
 *      ferramenta que faz perguntas e então gera um arquivo package.
 *      json básico:
 *          
 *          $ npm init
 * 
 *      Depois de configurar sua fonte e seu arquivo package.json, você 
 *      pode testar se tudo funciona executando o seguinte comando no 
 *      diretório de nível superior do seu módulo:
 * 
 *          $ npm install . -g
 * 
 *      Se não tiver erros, você pode empacotar o arquivo como um 
 *      tarball compactado com gzip. Neste ponto, se quiser publicar o 
 *      módulo, primeiro você precisará se adicionar como um usuário no
 *      registro npm:
 * 
 *          $ npm add-user
 * 
 *      Para publicar o módulo Node no registro npm, use o seguinte no 
 *      diretório raiz do módulo, especificando uma URL para o tarball, 
 *      um nome de arquivo para o tarball ou um caminho:
 * 
 *          $ npm publish ./
 * 
 *      Se você tiver dependências de desenvolvimento para seu módulo, 
 *      como usar um framework de teste como Jest, um atalho excelente 
 *      para garantir que elas sejam adicionadas ao seu arquivo package.
 *      json é usar o seguinte, no mesmo diretório do arquivo package.
 *      json, quando estiver instalando o módulo dependente:
 * 
 *          $ npm install jest --save-dev
 * 
 *      Isso não apenas instala o Jest, mas também atualiza seu arquivo 
 *      package.json com o seguinte comando:
 * 
 *          "devDependencies": {
 *              "jest": "^24.9.0"
 *          }
 * 
 *      Você também pode usar esse mesmo tipo de opção para adicionar 
 *      um módulo às dependências em package.json. O seguinte:
 * 
 *          $ npm install express --save
 * 
 *      adiciona o seguinte ao arquivo package.json:
 * 
 *          "dependencies": {
 *              "express": "^3.4.11"
 *              }
 * 
 *      Se o módulo não for mais necessário e não deve ser listado em 
 *      package.json, remova-o de devDependencies com:
 * 
 *          $ npm remove jest
 * 
 *      E remova um módulo para dependências com:
 * 
 *          $ npm remove expresso
 * 
 *      Se o módulo for o último em dependencies ou devDependencies, a 
 *      propriedade não será removida. Ela será apenas definida como um 
 *      valor vazio:
 * 
 *          "dependencies": {}
 * 
 *      Os editores de texto mais populares incluem recursos de 
 *      destaque e visualização de sintaxe Markdown. Também há editores 
 *      Markdown para desktop disponíveis para todas as plataformas. Eu 
 *      também posso usar uma ferramenta CLI, como o Pandoc, para
 *      converter o arquivo README.md em HTML legível:
 * 
 *          $ pandoc README.md -o readme.html
*/
