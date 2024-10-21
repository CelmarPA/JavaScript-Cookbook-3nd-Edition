#!\C:\Program Files\nodejs\node.exe
const programa = require("commander");
const puppeteer = require("puppeteer");

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