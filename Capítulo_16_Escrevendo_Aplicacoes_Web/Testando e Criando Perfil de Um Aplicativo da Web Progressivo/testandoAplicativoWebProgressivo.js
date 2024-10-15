"use strict";

/**
 *      Você gostaria de testar se cumpriu com sucesso os requisitos de
 *      um Progressive Web Application.
 *
 *      Use o Lighthouse para auditar desempenho, acessibilidade,
 *      melhores práticas, SEO e critérios de Progressive Web
 *      Application. A maneira mais fácil de acessar o Lighthouse é na
 *      aba “Lighthouse” do Google Chrome Developer Tools.
 *
 *      O Lighthouse irá então gerar um relatório, fazendo melhorias
 *      recomendadas para quaisquer reduções de pontuação.
 *
 *      O Lighthouse é uma ferramenta para medir as melhores práticas da
 *      web, incluindo desempenho e compatibilidade progressiva de
 *      aplicativos da web. Ele vem integrado ao Chrome Developer Tools,
 *      mas também pode ser instalado como uma extensão do Firefox.
 *
 *      Além de ser uma ferramenta de navegador, o Lighthouse pode ser
 *      instalado por meio do npm e usado na linha de comando ou como um
 *      módulo Node. Você instalaria o Lighthouse da mesma forma que
 *      qualquer outro módulo Node:
 *
 *          $ npm install -g lighthouse
 *
 *      que pode então ser executado passando uma URL como argumento:
 *
 *          $ lighthouse https://www.google.com/
 *
 *      Passar um argumento --view abrirá os resultados no seu navegador
 *
 *          $ lighthouse https://www.google.com/ --view
 *
 *      Você também pode especificar um tipo de arquivo de saída e um
 *      local para armazenar os resultados do relatório:
 *
 *          $ lighthouse https://www.google.com/ --view --output html
 *            --output-path ./report.html
 *
 *      E um arquivo budget.json pode ser usado para definir e testar as
 *      limitações de orçamento de desempenho. Em um arquivo budget.json,
 *      defina as limitações para testar:
 */

/*
[
    {
        "path": "/*",
        "timings": [
            {
                "metric": "interactive",
                "budget": 3000,
            },
            {
                "metric": "first-meaningful-paint",
                "budget": 1000,
            },
        ],
        "resourceSizes": [
            {
                "resourceType": "script",
                "budget": 125,
            },
            {
                "resourceType": "total",
                "budget": 300,
            },
        ],
        "resourceCounts": [
            {
                "resourceType": "third-party",
                "budget": 10,
            },
        ],
    },
];
*/

/**
 *      Testar localmente a partir da linha de comando pode ser útil para 
 *      o desenvolvimento local, mas o poder real do Lighthouse como um 
 *      módulo de código é percebido quando usado com ferramentas de 
 *      integração contínua, como GitHub Actions, Circle CI, Jenkins e 
 *      Travis CI. O módulo Lighthouse CI permite que você execute testes 
 *      do Lighthouse em um pipeline de integração contínuo, como em cada 
 *      solicitação de pull do GitHub.
 * 
 *      Aqui está um exemplo de configuração para CircleCI:
 *          
 */

/*
version: 2.1
    jobs:
        build:
            docker:
                - image: circleci/node:10.16-browsers
            working_directory: ~/your-project
            steps:
                - checkout
                - run: npm install
                - run: npm run build
                - run: sudo npm install -g @lhci/cli@0.3.x
                - run: lhci autorun
*/
