"use strict";

/**
 *      Extra: Notificações da Web e a API de Visibilidade da Página
 * 
 *      Você pode combinar Notificações da Web com a API de Visibilidade 
 *      de Página para exibir a Notificação somente quando o visitante da 
 *      página da web não estiver olhando ativamente para a página web. 
 * 
 *      A API de Visibilidade de Página tem amplo suporte em navegadores 
 *      modernos. Ela adiciona suporte para um evento, visibilitychange, 
 *      que é disparado quando a visibilidade da página da guia muda. Ela 
 *      também suporta algumas novas propriedades — document.hidden 
 *      retorna true se a página da guia não estiver visível, e 
 *      document.visibilityState, que tem um dos seguintes quatro valores:
 * 
 *          • visible: quando a página da guia está visível
 * 
 *          • hidden: quando a página da tag está oculta
 * 
 *          • prerender: a página está sendo renderizada, mas ainda não 
 *                       está visível (o suporte do navegador é opcional)
 *      
 *          • descarregado: a página está sendo descarregada da memória 
 *                          (o suporte do navegador é opcional)
 * 
 *      Para modificar a solução para que a notificação só dispare quando 
 *      a página com guias estiver oculta, modifique o código para 
 *      verificar visbilityState:
*/
if (window.Notification) {
    Notification.requestPermission(() => {
        setTimeout(() => {
            if (document.visibilityState === "hidden") {
                const notificacao = new Notification("Ei acorde", {
                    body: "Seu processo está terminado",
                    icon: "favicon.ico"
                });
                notificacao();
            } else {
                document.getElementById("result").innerHTML = "Seu processo está terminado";
            }
        }, 5000);
    });
}
