"use strict";

/**
 *      Você gostaria que seu aplicativo da web aproveitasse os 
 *      recursos nativos do aplicativo, como tempos de carregamento 
 *      rápidos, funcionalidade offline e ícones de inicialização de 
 *      aplicativos.
 * 
 *      Transforme seu aplicativo da web em um Progressive Web
 *      Application (PWA). A frase “Progressive Web Applications” foi 
 *      criada para descrever um conjunto de tecnologias que, quando 
 *      combinadas, permitem que aplicativos da web usem recursos 
 *      nativos, como funcionalidade offline e ícones de aplicativos 
 *      instalados pelo usuário, enquanto são construídos com 
 *      tecnologias da web padrão e implantados na web.
 * 
 *      Todos os PWAs são obrigados a incluir dois recursos que vão 
 *      além de uma página da web típica:
 * 
 *          Manifesto do aplicativo: Define recursos específicos do 
 *                                   aplicativo para o navegador
 * 
 *          Service worker: Habilita a funcionalidade offline do 
 *                          aplicativo.
 * 
 *      O primeiro passo na criação de um aplicativo da web progressivo 
 *      é adicionar o arquivo manifesto do aplicativo da web. Este 
 *      arquivo permite que os desenvolvedores controlem coisas como 
 *      ícones do aplicativo, telas de apresentação, estilo de exibição 
 *      do navegador e orientação da visualização. Em um arquivo 
 *      chamado manifest.json.
 * 
 *      O prompt de instalação do PWA é acionado automaticamente no 
 *      Chrome quando um site atende aos critérios do PWA. Uma vez 
 *      instalado, o ícone do PWA aparece no dispositivo do usuário, 
 *      muito parecido com um aplicativo nativo.
 * 
 *      O segundo passo é criar um service worker. Um service worker é 
 *      um script que roda separadamente da página, nos fornecendo uma 
 *      maneira de fazer nossos sites funcionarem offline, rodarem
 *      mais rápido e adicionarem recursos para recursos de segundo 
 *      plano. Com os limites da conectividade móvel, service workers 
 *      nos fornecem um meio de construir aplicativos com capacidade 
 *      offline-first, que carregarão conteúdo para nossos usuários 
 *      após uma visita inicial ao site, independentemente
 *      das condições de rede. O melhor de tudo é que os service 
 *      workers são realmente um aprimoramento progressivo, colocando 
 *      um recurso adicional para navegadores de suporte sem alterar a
 *      funcionalidade do nosso site para usuários de navegadores não 
 *      compatíveis.
 * 
 *      Ao introduzir um service worker, o passo inicial é registrar o 
 *      script que irá conter nosso código de service worker com o
 *      navegador do usuário. Para fazer isso, adicione o registro de 
 *      script ao final da página, logo antes da tag de fechamento 
 *      </body>.
 * 
 *      Este script verifica o suporte do service worker e, se o 
 *      suporte estiver disponível, aponta o navegador para um script 
 *      do service worker (neste caso, service-worker.js). Para fins de
 *      depuração, o script também captura erros e os registra no 
 *      console.
 * 
 *      Em service-worker.js, comece especificando uma versão de cache 
 *      e listando os arquivos que o navegador deve armazenar em cache.
 * 
 *      Agora, no arquivo service-worker.js, configure os ouvintes de 
 *      eventos install, fetch e activate. O evento install fornece ao 
 *      navegador instruções para instalar nossos arquivos em cache. O 
 *      evento fetch fornece ao navegador diretrizes para lidar com 
 *      eventos fetch, instruindo o navegador a carregar os arquivos em 
 *      cache ou aqueles recebidos pela rede. Finalmente, o evento 
 *      activate, que dispara quando o service worker é ativado, pode 
 *      ser usado para verificar se há itens existentes no cache e 
 *      removê-los se um cacheVersion atualizado estiver presente e o 
 *      arquivo não estiver mais na lista filestoCache.
 * 
 *      Um Progressive Web Application é um aplicativo web instalável 
 *      pelo usuário com alguma forma de funcionalidade offline. Esses 
 *      recursos permitem que os aplicativos web imitem de perto os 
 *      melhores recursos dos aplicativos nativos, ao mesmo tempo em que 
 *      fornecem os benefícios da web aberta.
 * 
 *      O manifesto do aplicativo da web é um arquivo JSON que fornece 
 *      informações sobre o aplicativo. A lista completa de valores-chave 
 *      que ele pode conter é a seguinte:
 * 
 *          background_color: Um código de cor para um plano de fundo de 
 *                            tela de inicialização de espaço reservado.
 * 
 *          categories: Um array de strings de categorias às quais o 
 *                      aplicativo pertence.
 * 
 *          description: Uma string de descrição do aplicativo.
 * 
 *          dir: A direção na qual os caracteres serão exibidos. Pode ser 
 *               auto, ltr (da esquerda para a direita) ou rtl (da 
 *               direita para a esquerda).
 * 
 *          display: O modo de exibição preferido. Pode ser navegador, 
 *                   para comportamento padrão do navegador ou tela 
 *                   cheia, o que reduzirá o cromo do navegador em alguns 
 *                   dispositivos.
 * 
 *          iarc_rating_id: Valor de Classificação Etária Internacional.
 * 
 *          icons: Um array de objetos vinculados a imagens e descrições 
 *                 de ícones.
 * 
 *          lang: Identifica o idioma principal do aplicativo.
 * 
 *          name: O nome do aplicativo.
 * 
 *          orientation: Permite que o desenvolvedor defina a orientação 
 *                       padrão do aplicativo.
 * 
 *          prefer_related_applications: Se definido como true, permite 
 *                                       que o desenvolvedor especifique 
 *                                       aplicativos relacionados que 
 *                                       devem ser instalados em vez do 
 *                                       aplicativo da web.
 *          
 *          related_applications: Um array de objetos contendo uma lista 
 *                                de aplicativos nativos relacionados
 *  
 *          scope: Uma string que contém o escopo de navegação do 
 *                 aplicativo. Especificar um escopo restringe a 
 *                 navegação no modo de aplicativo para esse diretório.
 *      
 *          screenshots: Um array de capturas de tela do aplicativo.
 * 
 *          short_name: Uma versão abreviada do nome do aplicativo a ser 
 *                      usada em contextos em que o nome completo é muito 
 *                      longo para ser exibido.
 * 
 *          start_url: A URL que deve abrir quando um usuário inicia o 
 *                      aplicativo.
 * 
 *          theme_color: Uma string que define a cor do tema padrão para 
 *                       o aplicativo.
 * 
 * 
 *      O W3C fornece um exemplo de um arquivo manifesto robusto para um 
 *      jogo baseado na web:
*/

/*
        {
            "lang": "en",
            "dir": "ltr",
            "name": "Super Racer 3000",
            "description": "The ultimate futuristic racing game from the future!",
            "short_name": "Racer3K",
            "icons": [{
            "src": "icon/lowres.webp",
            "sizes": "64x64",
            "type": "image/webp"
            },{
            "src": "icon/lowres.png",
            "sizes": "64x64"
            }, {
            "src": "icon/hd_hi",
            "sizes": "128x128"
            }],
            "scope": "/racer/",
            "start_url": "/racer/start.html",
            "display": "fullscreen",
            "orientation": "landscape",
            "theme_color": "aliceblue",
            "background_color": "red",
            "screenshots": [{
            "src": "screenshots/in-game-1x.jpg",
            "sizes": "640x480",
            "type": "image/jpeg"
            },{
            "src": "screenshots/in-game-2x.jpg",
            "sizes": "1280x920",
            "type": "image/jpeg"
            }]
        }
*/

/**
 *      Além do arquivo de manifesto do aplicativo da web, algumas 
 *      plataformas, como iOS e Windows, requerem informações adicionais 
 *      que podem ser fornecidas na forma de metatags HTML.
 * 
 *      Um service worker é um script que o navegador executa em segundo 
 *      plano, paralelamente à renderização e execução da página. Como é 
 *      um “worker”, o service worker não pode acessar o DOM diretamente, 
 *      no entanto, esse script paralelo permite todos os tipos de novos
 *      casos de uso. Um dos mais interessantes desses casos de uso é a 
 *      capacidade de armazenar em cache bits do nosso aplicativo para 
 *      uso offline.
 * 
 *      Ao utilizar service workers, há algumas limitações a serem 
 *      observadas: 
 * 
 *          • Sites que usam um service worker devem ser servidos por 
 *            HTTPS.
 * 
 *          • Service workers não funcionam quando um usuário está no 
 *            modo de navegação privada.
 * 
 *          • Como service workers são executados como um thread separado 
 *            no navegador, eles não têm acesso ao DOM.
 * 
 *          • Service workers são escopo, o que significa que eles devem 
 *            ser colocados na raiz do seu aplicativo.
 * 
 *          • Os tamanhos de armazenamento em cache podem variar de 
 *            acordo com o navegador e o espaço disponível no disco rígido
 *            de um usuário.
 * 
 *      Embora eu tenha criado um service worker manualmente no exemplo 
 *      acima, isso pode rapidamente se tornar incontrolável para 
 *      aplicativos maiores. A biblioteca Workbox, criada pelo Google, é 
 *      um pacote para gerenciar service workers e funcionalidade offline 
 *      em aplicativos da web. O Workbox tira muito da dor do 
 *      versionamento e gerenciamento do cache, bem como recursos 
 *      avançados como sincronização em segundo plano e pré-cache.
*/

