const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    }
};

/**
 *      Por fim, adicione um script ao package.json para executar a 
 *      compilação do Webpack:
 * 
 *              "scripts": {
 *                  ...
 *                  "build": "webpack"
 *              }
*/
