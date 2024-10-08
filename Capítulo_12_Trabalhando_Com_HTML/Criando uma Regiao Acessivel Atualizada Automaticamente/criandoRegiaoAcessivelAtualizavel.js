"use strict";

/**
 *      Você tem uma seção de uma página da web que é atualizada 
 *      periodicamente, como uma seção que lista atualizações recentes 
 *      de um arquivo ou uma que reflete a atividade recente do Twitter 
 *      sobre um assunto. Você quer garantir que, quando a página for 
 *      atualizada, aqueles que usam um leitor de tela sejam 
 *      notificados das novas informações.
 *      
 *      Use atributos de região WAI-ARIA no elemento que está sendo 
 *      atualizado:
*/
<div id="update" role="log" aria-live="polite" aria-atomic="false" aria-relevant="additions"></div>

/**
 *      Uma seção da página da web que pode ser atualizada após o 
 *      carregamento da página, e sem intervenção direta do usuário, 
 *      exige WAI-ARIA Live Regions. Essas são provavelmente as 
 *      funcionalidades ARIA mais simples de implementar, e elas 
 *      fornecem resultados positivos imediatos. E não há código 
 *      envolvido, além do JavaScript que você precisa para criar as
 *      atualizações da página.
 * 
 *      Da esquerda para a direita, a função é definida como log, que 
 *      seria usada ao pesquisar atualizações de log de um arquivo. 
 *      Outras opções incluem status, para uma atualização de status, e 
 *      um valor de região mais geral, para um propósito indeterminado.
 * 
 *      O atributo de região aria-live é definido como polite, porque a 
 *      atualização não é uma atualização crítica. A configuração 
 *      polite diz ao leitor de tela para dar voz à atualização, mas 
 *      não interromper uma tarefa atual para fazer isso. Se eu tivesse 
 *      usado um valor de assertive, o leitor de tela interromperia o 
 *      que quer que estivesse fazendo e daria voz ao conteúdo. Sempre 
 *      use polite, a menos que a informação seja crítica.
 * 
 *      O aria-atomic é definido como false, para que o leitor de tela 
 *      apenas expresse novas adições, com base no que estiver definido 
 *      com aria-relevant. Poderia ser muito irritante ter o leitor de 
 *      tela expressando o conjunto inteiro com cada nova adição, como 
 *      aconteceria se esse valor fosse definido como true.
 * 
 *      Por fim, o aria-relevant é definido como adições, pois não nos 
 *      importamos com as entradas sendo removidas do topo. Esta 
 *      configuração é, na verdade, a configuração padrão para este 
 *      atributo, então, tecnicamente, não é necessário. Além disso, 
 *      dispositivos de tecnologia assistiva não precisam suportar este 
 *      atributo. Ainda assim, preferível listá-lo do que não. Outros 
 *      valores removals, text e all (para todos os eventos). Você pode 
 *      especificar mais de um, separados por um espaço.
*/
