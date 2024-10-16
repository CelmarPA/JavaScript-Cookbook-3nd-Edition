"use strict";

/**
 *      Você precisa de uma maneira de notificar um usuário de que um 
 *      evento ocorreu ou que um processo de longa duração foi concluído, 
 *      mesmo que seu site não esteja aberto em uma aba ativa.
 * 
 *      Use a API de Notificações da Web.
 * 
 *      Esta API fornece uma técnica relativamente simples para abrir uma 
 *      janela de notificação fora do navegador, de modo que se uma 
 *      pessoa estiver olhando para uma página da web em outra aba, ela 
 *      ainda verá a notificação.
 * 
 *      Para usar uma Notificação da Web, você precisa obter permissão. 
 *      No código a seguir, a permissão de Notificação é solicitada 
 *      quando um usuário clica em um botão. Se a permissão for 
 *      concedida, uma notificação será exibida:
*/
const botaoNotificacao = document.getElementById("notificacao-botao");

const mostrarNotificacao = permissao => {
    // Se o usuário não concedeu permissão, saia da função
    if (permissao !== "concedida") return;

    // Conteúdo da notificação
    const notificacao = new Notification("Título", {
        body: "Dá uma olhada nessa coisa super legal"
    });

    // Opcional: ação a ser tomada quando um usuário clica na notificação
    notificacao.onclick = () => {
        window.open("https://exemplo.com");
    };
};

const verificarNotificacao = () => {
    // Se as notificações não forem suportadas, retorne
    // Alternativamente, você pode executar uma ação diferente como redirecionar o usuário para a inscrição de e-mail
    if (!window.Notification) return;

    // Solicita a permissão do usuário
    Notification.requestPermission().then(mostrarNotificacao);
}

// Ao clicar, chama a função verificarNotificacao
botaoNotificacao.addEventListener("click", verificarNotificacao);

/**
 *      A notificação recebe dois argumentos — uma string de título e um 
 *      objeto com opções:
 * 
 *          body: A mensagem de texto no corpo da notificação
 * 
 *          tag: Uma tag para ajudar a identificar notificações para 
 *               alterações globais
 * 
 *          icon: Um ícone personalizado
 * 
 *          lang: Idioma da notificação
 * 
 *          dir: Direção do idioma
 * 
 *      Você também pode codificar quatro manipuladores de eventos:
 * 
 *          • onerror
 *          • onclose
 *          • onshow
 *          • onclose
 */