"use strict";

/**
 *      Você precisa instalar e gerenciar várias versões do Node em sua 
 *      máquina de desenvolvimento.
 * 
 *      Use o Node Version Manager (NVM), que permite que você instale e 
 *      use qualquer versão distribuída do Node em uma base por shell. O 
 *      NVM é compatível com Linux, macOS, e Windows Subsystem for Linux.
 * 
 *      Para instalar o NVM, execute o script de instalação usando curl 
 *      ou wget no aplicativo de terminal do seu sistema:
 * 
 *      ## using curl:
        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash

 *      ## using wget:
        wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash       
*/

/**
 *      Depois de instalar o NVM, você precisará instalar uma versão do 
 *      Node. Para instalar a versão mais recente do Node, execute:
 * 
 *          $ nvm install node
 * 
 *      Você também pode instalar uma versão específica do Node:
 * 
 *          # instalar o últimO lançamento de uma versão principal
 *          $ nvm install 23
 * 
 *          # instalar uma versão principal/secundária/patch específica
 *          $ nvm install 22.9.0
 * 
 *      Após instalar o Node, você precisará definir uma versão padrão 
 *      para novas sessões de shell. Pode ser a versão mais recente do 
 *      Node que foi instalada ou um número de versão específico:
 *          
 *          # novas sessões de shell padrão versão mais recente node
 *          $ nvm alias default node
 * 
 *          # novas sessões de shell padrão para uma versão específica
 *          $ nvm alias default 22.9.0
 * 
 *      Para alternar a versão que está sendo usada em uma sessão de 
 *      shell, use o comando nvm use seguido por uma versão específica 
 *      instalada:
 * 
 *          $ nvm use 15
 * 
 *      Ao usar o NVM, é possível listar todas as versões instaladas na 
 *      sua máquina usando o comando nvm ls:
 *          
 *          $ nvm ls
 * 
 *      Para desinstalar e remover uma versão específica, você pode usar 
 *      o comando nvm uninstall:
 *  
 *          $ nvm uninstall 22.9.0
 *          
 *      Manter o controle de qual versão do Node um projeto foi 
 *      projetado para usar pode ser um desafio. Para tornar isso mais 
 *      fácil, você pode adicionar um arquivo .nvmrc ao diretório raiz 
 *      do seu projeto. O conteúdo do arquivo é a versão do Node que o 
 *      projeto foi projetado para usar. Por exemplo:
 * 
 *          # padrão para a versão LTS mais recente
 *          $ lts/*
 * 
 *          # para usar uma versão específica
 *          $ 23.0.0
*/