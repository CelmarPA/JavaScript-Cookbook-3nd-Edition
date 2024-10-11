"use strict";

/**
 *      Você quer persistir entradas de elementos de formulário (ou 
 *      quaisquer dados) de tal forma que os usuários possam
 *      continuar de onde pararam se o navegador travar, o usuário 
 *      fechar acidentalmente o navegador ou se a conexão com a 
 *      internet for perdida.
 * 
 *      Você pode usar cookies se os dados forem pequenos o suficiente, 
 *      mas essa estratégia não funciona em uma situação offline. Outra 
 *      abordagem melhor, especialmente quando você está persistindo 
 *      quantidades maiores de dados ou se você tem que dar suporte à 
 *      funcionalidade quando nenhuma conexão de internet está 
 *      presente, é usar localStorage:
*/
const valorForm = document.getElementById("elementoForm").value;
if (valorForm) {
    localStorage.elemForm = valorForm
}

// Recupera 
const valorArmazenado = localStorage.elemForm;
if (valorArmazenado) {
    document.getElementById("elementoForm").value = valorArmazenado;
}

/**
 *      A interface do objeto localStorage é a mesma que 
 *      sessionStorage, com as mesmas abordagens para definir os dados:
*/

// Use o método item
sessionStorage.setItem("chave", "valor");
localStorage.setItem("chave", "valor");

// Use nome de propriedades diretamente
sessionStorage.chaveNome = "valor";
localStorage.chaveNome = "valor";

// Use o método key 
sessionStorage.key(0) = "valor";
localStorage.key(0) = "valor";

/**
 *      e para obter os dados:
*/

// Use método item
valor = sessionStorage.getItem("Chave");
valor = localStorage.getItem("Chave");

// Use nome propriedades diretamente
valor = sessionStorage.chaveNome;
valor = lorcalStorage.chaveNome;

// use método key
valor = sessionStorage.key(0);
valor = localStorage.key(0);

/**
 *      Ambos os objetos de armazenamento suportam a propriedade 
 *      length, que fornece uma contagem de pares de itens armazenados, 
 *      e o método clear (sem parâmetros), que limpa todo o 
 *      armazenamento. Além disso, ambos têm como escopo a origem 
 *      HTML5, o que significa que o armazenamento de dados
 *      é compartilhado entre todas as páginas em um domínio, mas não 
 *      entre protocolos (por exemplo, http não é o mesmo que https) ou 
 *      portas.
 * 
 *      A diferença entre os dois é por quanto tempo os dados são 
 *      armazenados. O objeto sessionStorage armazena apenas dados para 
 *      a sessão, mas o objeto localStorage armazena dados no
 *      cliente para sempre, ou até que sejam especificamente removidos.
 * 
 *      Os objetos sessionStorage e localStorage também suportam um 
 *      evento: o evento storage. Este é um evento interessante, pois 
 *      dispara em todas as páginas quando são feitas alterações em um 
 *      item localStorage. Também é uma área de baixa compatibilidade 
 *      entre navegadores: você pode capturar o evento nos elementos 
 *      body ou document para Firefox, no body para IE ou no document 
 *      para Safari.
 * 
 *      No exemplo, todos os elementos de um pequeno formulário têm seu 
 *      método manipulador de eventos onchange atribuído a uma função 
 *      que captura o nome e valor do elemento change e armazena os 
 *      valores no armazenamento local por meio do armazenamento local. 
 *      Quando o formulário é enviado, todos os dados armazenados do 
 *      formulário são limpos.
 * 
 *      Quando a página é carregada, o manipulador de eventos onchange 
 *      dos elementos do formulário é atribuído à função para armazenar 
 *      os valores e, se o valor já estiver armazenado, ele é 
 *      restaurado para o elemento do formulário. Para testar o 
 *      aplicativo, insira dados em alguns campos do formulário — mas,
 *      antes de clicar no botão Enviar, atualize a página. Sem o 
 *      localStorage, você perderia os dados. Agora, quando você 
 *      recarrega a página, o formulário é restaurado para o estado em 
 *      que estava antes da página ser recarregada.
 * 
 *      O tamanho alocado para localStorage varia de acordo com o 
 *      navegador, mas a maioria está na faixa de 5 mb a 10mb. Você 
 *      pode usar um bloco try/catch para testar e garantir que não 
 *      excedeu o limite no navegador do usuário:
*/
try {
    localStorage.setItem("chave", "valor");
} catch (domException) {
    if (
            ['QuotaExceededError', 'NS_ERROR_DOM_QUOTA_REACHED'].includes(domException.name)
        ) {
            // Manipula erro de tamanho de arquivo excedido
        } else {
            // trata qualquer outro erro
        }
}

/**
 *      O objeto localStorage pode ser usado para trabalho offline. 
 *      Para o exemplo de formulário, você pode armazenar os dados no 
 *      localStorage e fornecer um botão para clicar quando conectado à 
 *      internet, para sincronizar os dados do localStorage para o 
 *      armazenamento do lado do servidor.
 */