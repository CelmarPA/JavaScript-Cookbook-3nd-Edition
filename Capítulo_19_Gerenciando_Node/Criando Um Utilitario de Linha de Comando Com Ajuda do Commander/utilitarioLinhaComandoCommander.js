#!/usr/bin/env Node

/**
 *      Você quer transformar seu módulo Node em um utilitário de linha 
 *      de comando Linux, incluindo suporte para opções/argumentos de 
 *      linha de comando.
 * 
 *      Para converter seu módulo Node em um utilitário de linha de 
 *      comando Linux, adicione a seguinte linha como a primeira linha 
 *      do módulo:
 * 
 *          #!/usr/bin/env node
 * 
 *      Para fornecer argumentos/opções de linha de comando, incluindo 
 *      o sempre importante --help, use o módulo Commander:
 * 
 *          #!/usr/bin/env node    
*/
const programa = require("commander");

programa
    .version("0.0.1")
    .option("-n, --number <value>", "Um número ao quadrado")
    .parse(process.argv);

const quadrado = Math.pow(programa.number, 2);

console.log(`O quadrado de ${programa.number} é ${quadrado}`);

/**
 *      Para converter um módulo Node em um utilitário de linha de 
 *      comando, primeiro adicione a seguinte linha ao módulo:
 *      
 *          #!/usr/bin/env node
 * 
 *      Altere o modo do arquivo do módulo para um executável, usando 
 *      CHMOD:
 * 
 *          $ chmod a+x quadrado.js
 * 
 *      Para executar o exemplo acima, eu digitaria o seguinte no 
 *      terminal, da pasta do projeto:
 * 
 *          $ ./square.js -n 4
 * 
 *      O utilitário de linha de comando que criei simplesmente 
 *      registra o quadrado de um número. Vamos dar uma olhada em um
 *      exemplo mais completo, que criaria uma captura de imagem de um 
 *      site usando a biblioteca Puppeteer. Em um arquivo chamado 
 *      snapshot.js:
*/

// #!/usr/bin/env Node
const programa = require("commander");
const puppeteer = require("puppeter");

programa
    .version("0.0.1")
    .option("-s, --source [website", "Fonte website")
    .option("-f, --file [filename]", "Nome Arquivo")
    .parse(process.argv);

(async () => {
    console.log("capturando captura de tela...");
    const navegador = await puppeteer.launch();
    const pagina = await navegador.newPage();
    await pagina.goto(programa.source);
    await pagina.screenshot({ path: programa.file });
    await navegador.close();
    console.log(`capturou captura de tela em ${programa.file}`);
})();

/**
 *      Podemos então atualizar o arquivo package.json para que nosso 
 *      comando possa ser nomeado e usado diretamente (sem a 
 *      extensão .js):
 * 
 *          "main": "snapshot.js",
 *          "preferGlobal": true,
 *          "bin": {
 *              "snapshot": "snapshot.js"
 *          },
 * 
 *      Agora, se executarmos npm link, podemos usar o comando 
 *      diretamente em nossa máquina local, sem referenciar o arquivo 
 *      diretamente:
 * 
 *          $ snapshot -s http://oreilly.com -f test.png
 * 
 *      Ou você pode usar a opção longa, que consiste em um traço duplo 
 *      (--) seguido por uma palavra completa:
 * 
 *          $ snapshot --source http://oreilly.com --file test.png
 * 
 *      E quando você executa o utilitário com -h ou --help, você obtém:
 *          
 *          Usage: snapshot [options]
 *      
 *          Options:
 * 
 *              -h, --help output usage information
 *              -V, --version output the version number
 *              -s, --source [website] Source website
 *              -f, --file [filename] Filename
 * 
 *      A execução do seguinte retorna a versão:
 * 
 *          $ snapshot -V
 * 
 *      O Commander gera tudo isso automaticamente, para que possamos
 *      nos concentrar na funcionalidade primária do nosso utilitário.
 * 
 *      Publicar um utilitário de linha de comando no registro npm é o 
 *      mesmo que qualquer outro módulo:
 * 
 *          $ npm publish
*/
