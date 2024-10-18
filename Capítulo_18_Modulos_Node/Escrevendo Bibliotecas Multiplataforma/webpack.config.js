const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "my-library.js",
        library: "minhaBiblioteca",
        libraryTarget: "umd",
        globalObject: "this"
    },
};
