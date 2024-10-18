"use strict";

/**
 *      Você quer ter certeza de que seu módulo está funcionando 
 *      corretamente e pronto para ser usado por outros.
 * 
 *      Adicione testes unitários como parte do seu processo de 
 *      produção.
 * 
 *      Dado o seguinte módulo, chamado bbarray, e criado em um arquivo 
 *      chamado index.js:
*/
const bbarray = {
    concatArray: (str, array) => {
        if (!Array.isArray(array) || array.length === 0) {
            return -1;
        }

        if (typeof str !== "string") {
            return -1;
        }

        return array.map(elemento => {
            return `${str} ${elemento}`;
        });
    },
    splitArray: (srt, array) => {
        if (!Array.isArray(array) || array.length === 0) {
            return -1;
        }

        if (typeof str !== "string") {
            return -1;
        }

        return array.map(elemento => {
            return elemento.substring(str.length + 1);
        });
    }
};

module.exports = bbarray;

/**
 *      Usando Jest, um framework de testes JavaScript, o seguinte 
 *      teste unitário (criado como index.test.js e localizado no 
 *      subdiretório tests do projeto) deve resultar na aprovação 
 *      bem-sucedida de seis testes:
 * 
 *      Para instalar o jest use o seguinte:
 *          
 *          $ npm install jest --save-dev
 * 
 *      Usa-se as flags --save-dev, para instalar o Jest nas 
 *      dependências de desenvolvimento do módulo. Além disso, modifico 
 *      o arquivo package.json do módulo para adicionar a seguinte 
 *      seção:
 * 
 *          "scripts": {
 *              "test": "jest"
 *          },
 * 
 *      O script de teste é salvo como index.text.js no subdiretório 
 *      tests sob o projeto. O Jest  procura automaticamente por 
 *      arquivos em um diretório tests ou arquivos seguindo o padrão de 
 *      nomenclatura filename.test.js.
 *      
 *      O comando a seguir executa o teste:
 *          
 *          $ npm test
 * 
 *      Os testes unitários do Jest usam expect matchers para testar os 
 *      valores retornados.
*/
