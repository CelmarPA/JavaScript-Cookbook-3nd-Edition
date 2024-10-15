const path = require("path");

module.exports = {
    entry: {
        index: "./src/index.js",
        secondary: "./src/secondary.js",
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
};

module.exports = {
    mode: "development",
    entry: {
        index: "./src/index.js",
        secondary: "./src/secondary.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    optimization: {
        usedExports: true
    }
};

/**
 *      A etapa final para a divisão de código é adicionar um campo 
 *      sideEffects ao arquivo package. json do projeto. De acordo com 
 *      a documentação do Webpack, “um efeito colateral é definido como 
 *      código que executa um comportamento especial quando importado, 
 *      diferente de expor uma ou mais exportações”. Um exemplo de 
 *      efeito colateral seria um polyfill global, que não expõe 
 *      nenhuma declaração de exportação.
 * 
 *      Se nenhum arquivo desse tipo estiver presente, podemos definir 
 *      o seguinte em package.json:
 * 
 *          "sideEffects": false
 * 
 *      Se o seu projeto tiver arquivos JavaScript que se enquadram na 
 *      categoria “efeito colateral”, podemos fornecê-los como uma 
 *      matriz: 
 * 
 *          "sideEffects": [
 *               "./src/file-with-side-effect.js"
 *           ]
 * 
 *      Finalmente, podemos utilizar o Webpack para habilitar o 
 *      carregamento lento de módulos JavaScript, apenas carregando-os 
 *      quando forem necessários para uma interação do navegador. O 
 *      Webpack torna isso simples com instruções de importação 
 *      dinâmicas. Com um arquivo chamado button.js no diretório src, o 
 *      conteúdo do arquivo pode ser carregado quando um usuário clica
 *      em um botão. Em index.js:
*/
const elementoBotao = document.getElementById("botao");
elementoBotao.onclick = e =>
    import(/* webpackChunkName: "buttton" */ "./botao").then(module => {
        const botao = module.default;
        botao();
    });

/**
 *      O JavaScript mais rápido é nenhum JavaScript; no entanto, as 
 *      demandas interativas de aplicativos da web modernos geralmente 
 *      dependem do JavaScript do lado do cliente. Com isso em mente, 
 *      nosso objetivo é limitar a quantidade e o tamanho do arquivo do 
 *      JavaScript que está sendo baixado pelo navegador de um usuário. 
 *      Utilizar estratégias como minificação, divisão de código, tree 
 *      shake e lazy loading permite um controle mais preciso sobre o 
 *      tamanho e a quantidade de JavaScript que está sendo carregado 
 *      no navegador de um usuário.
*/
