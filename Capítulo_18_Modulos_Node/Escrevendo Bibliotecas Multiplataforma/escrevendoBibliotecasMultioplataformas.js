"use strict";

/**
 *      Você criou uma biblioteca que é útil tanto no navegador quanto 
 *      no Node.js e gostaria de torná-la disponível em ambos os 
 *      ambientes.
 * 
 *      Use uma ferramenta de agrupamento, como o Webpack, para agrupar 
 *      sua biblioteca para que ela funcione como um módulo ES2015, 
 *      módulo CommonJS e módulo AMD, e possa ser carregada como uma
 *      tag de script no navegador.
 * 
 *      No arquivo webpack.config.js do Webpack, inclua os campos 
 *      library e libraryTarget, que significam que o módulo deve ser 
 *      agrupado como uma biblioteca e ter como alvo vários ambientes:
*/
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "minha-bibliote.js",
        library: "minhaBiblioteca",
        libraryTarget: "umd",
        globalObject: "this"
    },
};

/**
 *      O campo library especifica um nome para a biblioteca que será 
 *      usada em ambientes de módulo ECMAScript, CommonJS e AMD. O 
 *      campo libraryTarget permite que você especifique como o módulo 
 *      será exposto. O padrão é var, que exporá uma variável.
 *      Especificar umd utilizará a Definição Universal de Módulo 
 *      JavaScript (UMD), permitindo que vários estilos de módulo 
 *      consumam a biblioteca. Para tornar a construção UMD disponível 
 *      em ambientes de navegador e Node.js, você precisará definir a 
 *      opção output.globalObject para isso.
 * 
 *      No exemplo, foi criado uma biblioteca matemática simples. 
 *      Atualmente, a única função é uma chamada duplicar, que aceita 
 *      um número como parâmetro e retorna o valor desse número 
 *      multiplicado por ele mesmo. Isso está em src/index.js:
 */
export function duplicar(num) {
    return num * num;
};

/**
 *      O arquivo package.json contém o Webpack e a interface de linha 
 *      de comando do Webpack (CLI) como dependências de 
 *      desenvolvimento. Ele também aponta a distribuição principal 
 *      para a versão empacotada da biblioteca, que o Webpack enviará 
 *      para a pasta dist. Eu também adicionei um script de compilação 
 *      que executará o empacotador do Webpack, apropriadamente chamado 
 *      de build. Isso me permitirá gerar o pacote digitando npm run 
 *      build (ou yarn run build se usar Yarn).
*/

/*
{
    "name": "my-library",
    "version": "1.0.0",
    "description": "An example library bundled by Webpack",
    "main": "dist/my-library.js",
    "scripts": {
        "build": "webpack"
    },
    "keywords": ["example"],
    "author": "Adam Scott <adam@jseverywhere.io>",
    "license": "MIT",
    "devDependencies": {
        "webpack": "4.44.1",
        "webpack-cli": "3.3.12"
    }
}
*/

/**
 *      Por fim, meu projeto contém um webpack.config.js, conforme 
 *      descrito na receita:
*/
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "minha-biblioteca",
        library: "minhaBiblioteca",
        libraryTarget: "umd",
        globalObject: "this"
    },
};

/**
 *      Com essa configuração, o comando npm run build irá empacotar a 
 *      biblioteca e colocá-la dentro do diretório dist do projeto. 
 *      Esse arquivo empacotado é o que os consumidores da biblioteca 
 *      usarão.
 * 
 *      A biblioteca pode ser consumida em vários formatos de 
 *      biblioteca JavaScript.
 * 
 *      Como um módulo ES 2015:
*/
import * as myLibrary from 'my-library';

myLibrary.squareIt(4);

/**
 *      Como um módulo CommonJS:
*/
const myLibrary = require('my-library');

myLibrary.squareIt(4);

/**
 *      Como um módulo AMD:
*/
require(['myLibrary'], function (myLibrary) {
    myLibrary.squareIt(4);
});

/**
 *      E usando uma tag de script em uma página da web:
*/
<html>
    <script src="https://unpkg.com/my-library"></script>
    <script>
        myLibrary.squareIt(4);
    </script>
</html>

/**
 *      Muitas vezes, uma biblioteca pode conter subdependências. Com 
 *      nossa configuração atual, todas as dependências serão 
 *      empacotadas e agrupadas com a própria biblioteca. Para limitar o
 *      pacote de saída e garantir que os consumidores da biblioteca 
 *      não estejam instalando várias instâncias de uma subdependência, 
 *      pode ser melhor tratá-las como uma “dependência de pares”, que
 *      também deve ser instalada ou referenciada por conta própria. 
 *      Para fazer isso, adicione uma propriedade externals ao seu 
 *      webpack.config.js. Na instância abaixo, moment está sendo usado 
 *      como uma dependência de pares:
*/
const path = require("path");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-library.js',
        library: 'myLibrary',
        libraryTarget: 'umd',
        globalObject: 'this'
    },
    externals: {
        moment: {
            commonjs: 'moment',
            commonjs2: 'moment',
            amd: 'moment',
            root: 'moment',
        }
    }
};

/**
 *      Com essa configuração, o moment será tratado como uma variável 
 *      global pela nossa biblioteca.
*/