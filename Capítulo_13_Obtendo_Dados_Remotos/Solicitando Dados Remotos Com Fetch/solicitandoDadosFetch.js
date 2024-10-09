"use strict";

/**
 *      Você precisa solicitar dados remotos de um servidor.
 * 
 *      Use a API Fetch, que permite que você faça solicitações e 
 *      manipule a resposta. Para fazer uma solicitação simples, passe 
 *      uma URL como um parâmetro fetch, que retorna a resposta como 
 *      uma promessa. O exemplo a seguir solicita a URL, analisa a      
 *      resposta JSON e registra a resposta no console:
 * 
*/
const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
fetch(url)
    .then(resposta => resposta.json())
    .then(dados => console.log(dados));

/**
 *      Como alternativa, use a sintaxe async/await com fetch:
*/
async function fetchRequest() {
    const resposta = await fetch(url);
    const dados = await resposta.json();
    console.log(dados);
}

fetchRequest();

/**
 *      A Fetch API fornece um meio para enviar e recuperar dados de uma
 *      fonte remota. Ao trabalhar em um ambiente de navegador da web, 
 *      isso significa que os dados podem ser recuperados sem atualizar 
 *      a página. Como um usuário da web, você pode experimentar esses 
 *      tipos de solicitações com frequência. A Fetch API pode ser 
 *      usada para:
 * 
 *          • Carregar itens adicionais em um feed de mídia social
 *          • Sugestões de preenchimento automático de formulário
 *          • “Curtir” uma postagem de mídia social
 *          • Atualizar valores de campo de formulário com base em uma 
 *            resposta anterior
 *          • Enviar um formulário sem sair da página
 *          • Adicionar um item a um carrinho de compras
 * 
 *      Como você pode imaginar, a lista pode continuar indefinidamente.
 *      
 *      O método fetch() aceita dois parâmetros:
 *          url (obrigatório): O URL para a qual você está fazendo uma 
 *                             solicitação
 * 
 *      options: Um objeto de opções ao fazer a solicitação
 * 
 *      As opções possíveis incluem:
 *          body: O conteúdo do corpo de uma solicitação 
 * 
 *          cache: O modo de cache da solicitação (default, no-store, 
 *                 reload, no-cache, forcecache ou only-if-cached) 
 * 
 *          credentials: As credenciais da solicitação (omit, 
 *                       same-origin olu include)
 * 
 *          headers: Cabeçalhos incluídos com a solicitação
 *      
 *          integrity: Um valor de integridade de sub-recurso, usado 
 *                     para verificar recursos
 * 
 *          keepalive: Definido como true para que a solicitação 
 *                     sobreviva à página
 * 
 *          method: O método da solicitação (GET, POST, PUT ou DELETE)
 *     
 *          mode: O modo da solicitação (cors, no-cors ou same-origin)
 * 
 *          redirect: Define o comportamento para redirecionamentos 
 *                    (follow, error ou manual)
 *  
 *          referrer: Define o valor do cabeçalho do referenciador 
 *                    (sobre: client, a URL atual ou uma string vazia)
 * 
 *          referrerPolicy: Especifica a política do referenciador 
 *                          (no-referrer, no-referrer-when-downgrade, 
 *                          sameorigin, origin, strict-origin, 
 *                          origin-when-cross-origin, 
 *                          strict-originwhen-cross-origin ou 
 *                          unsafe-url)
 * 
 *          signal: Objeto AbortController para abortar a solicitação
 * 
 *      Conforme mostrado no exemplo anterior, apenas o parâmetro url é 
 *      necessário. Quando passado apenas uma URL, o método fetch 
 *      executará uma solicitação GET. O exemplo a seguir demonstra 
 *      como usar o objeto options:
*/
const resposta = await fetch(url, {
    method: "GET",
    mode: "cors",
    credentials: "omit",
    redirect: "follow",
    referrerPolicy: "no-referrer"
});

/**
 *      fetch faz uso de promessas JavaScript. A promessa inicial 
 *      retorna um objeto Response, que contém a resposta HTTP 
 *      completa, incluindo o corpo, cabeçalhos, código de status, 
 *      informações de redirecionamento, tipo cors e URL. Com a 
 *      resposta retornada, você pode então usar um método de análise 
 *      adicional para analisar o corpo da solicitação. No exemplo,
 *      estou usando o método json() para analisar o corpo como JSON. 
 *      Aqui estão os possíveis métodos de análise:
 * 
 *          arrayBuffer(): Analisar o corpo como um ArrayBuffer
 *          
 *          blob(): Analisar o corpo como um Blob
 * 
 *          json(): Analisar o corpo como JSON
 *          
 *          text(): Analisar o corpo como uma string UTF-8
 *          
 *          formData(): Analisar o corpo como um objeto FormData()
 * 
 *      Ao usar fetch, você pode manipular erros com base na resposta 
 *      de status do servidor. Em async/await:
*/
async function fetchRequestComErro() {
    const resposta = await fetch(url);
    if (resposta.status >= 200 && resposta.status < 400) {
        const dados = await resposta.json();
        console.log(dados);
    } else {
        // Lidar com erro do servidor
        // exemplo: ERRO INTERNO DO SERVIDOR: erro 500
        console.log(`${resposta.statusText}: erro ${resposta.status}`)
    }
}

/**
 *      Para um tratamento de erros mais robusto, você pode encapsular 
 *      toda a solicitação de busca em um bloco try/catch, o que 
 *      permitirá que você trate de quaisquer erros adicionais:
*/
async function fetchRequestComErro() {
    try {
        const response = await fetch(url);
        if (resposta.status >= 200 && resposta.status < 400) {
            const dados = await resposta.json();
            console.log(dados);
        } else {
            // Lidar com erro do servidor
            // exemplo: ERRO INTERNO DO SERVIDOR: erro 500
            console.log(`${resposta.statusText}: erro ${resposta.status}`)
        }
    } catch (erro) {
        // Manipulador de erro generico
        console.log(erro);
    }
}

/**
 *      Erros podem ser tratados de forma semelhante ao usar a sintaxe 
 *      then promise do JavaScript:
*/
fetch(url)
    .then((resposta) => {
        if (resposta.status >= 200 && resposta.status < 400) {
            return resposta.json();
        } else {
            // Lidar com erro do servidor
            // exemplo: ERRO INTERNO DO SERVIDOR: erro 500
            console.log(`${resposta.statusText}: erro ${resposta.status}`);
        }
    })
    .then((dados) => {
        console.log(dados);
    })
    .catch((erro) => {
        // Manipulador de erro genérico
        console.log(erro);
    });
