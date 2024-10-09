"use strict";

/**
 *      Seu aplicativo precisa solicitar dados remotos e, ao mesmo 
 *      tempo, oferecer suporte a navegadores mais antigos.
 * 
 *      Use XMLHttpRequest (XHR) no lugar de fetch. O seguinte é uma 
 *      solicitação XHR GET:
*/
const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

const solicitacao = new XMLHttpRequest();
solicitacao.open("GET", url);
solicitacao.send();

solicitacao.onload = () => {
    if (solicitacao.status >= 200 && solicitacao.status < 400) {
        // Solicitação bem-sucedida registra os dados JSON retornados
        const dados = JSON.parse(solicitacao.response);
        console.log(data);
    } else {
        // Errro servidor exemplo: INTERNAL SERVER ERROR: 500 error
        console.log(`${solicitacao.statusText}: erro ${solicitacao.status}`);
    }
};

// Erro solicitação
solicitacao.onerror = () => console.log(solicitacao.statusText);

/**
 *      XMLHttpRequest é a sintaxe original para fazer solicitações de 
 *      dados remotos. Embora XML esteja no nome, ele pode ser usado 
 *      para solicitar todos os tipos de dados. No exemplo anterior,
 *      foi realizado uma solicitação de dados JSON. Então, como 
 *      XMLHttpRequest difere de fetch?
 * 
 *          • fetch faz uso pesado de promessas JavaScript, enquanto 
 *            XMLHttpRequest é baseado em torno da função construtora 
 *            XMLHttpRequest().
 * 
 *          • XMLHttpRequest é suportado em todos os navegadores, 
 *            incluindo versões mais antigas do Internet Explorer. 
 *            fetch não funcionará sem um polyfill (que é baseado em 
 *            XMLHttpRequest) no Internet Explorer 11 ou mais antigo, 
 *            bem como algumas versões de navegadores modernos de
 *            atualização automática de 2017 ou anteriores.
 * 
 *          • XMLHttpRequest envia cookies para o servidor com cada 
 *            solicitação, enquanto fetch requer que a opção 
 *            credentials seja definida explicitamente.
 *      
 *          • XMLHttpRequest suporta o rastreamento do progresso do 
 *            upload, enquanto, no momento da escrita, fetch suporta 
 *            apenas o progresso do download.
 * 
 *          • fetch não suporta timeouts, deixando a duração da 
 *            solicitação a cargo do navegador do usuário.
*/